import React, { useState, useEffect, useRef } from 'react'
import {
  DiscographyContainer,
  DiscographyTitle,
  Filters,
  FilterButton,
  AlbumGrid,
  AlbumCard,
  AlbumCover,
  AlbumDetails,
  AlbumTitle,
  TrackList,
  TrackItem,
  TrackIndex,
  MusicLink,
  CarouselWrapper,
  CarouselTrack,
  CarouselSlide,
  CarouselDots,
  CarouselDot,
  SeeMoreButton
} from './styles'

interface Track {
  id: string
  name: string
  preview_url: string | null
  external_urls: { spotify: string }
}

interface Album {
  id: string
  name: string
  images: { url: string }[]
  release_date: string
  popularity: number
  tracks: Track[]
}

interface SpotifyAlbum {
  id: string
  name: string
  images: { url: string }[]
  release_date: string
  popularity: number
}

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
const artistId = import.meta.env.VITE_SPOTIFY_ARTIST_ID

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return isMobile
}

export const Discography: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([])
  const [singles, setSingles] = useState<Album[]>([])
  const [filter, setFilter] = useState<'newest' | 'oldest' | 'popular'>('newest')
  const [current, setCurrent] = useState(0)
  const [showAllAlbums, setShowAllAlbums] = useState(false)
  const [exitingIndexes, setExitingIndexes] = useState<number[]>([])
  const isMobile = useIsMobile()
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const fetchMusic = async () => {
      const creds = btoa(`${clientId}:${clientSecret}`)
      const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${creds}`
        },
        body: 'grant_type=client_credentials'
      })
      if (!tokenRes.ok) return
      const { access_token } = await tokenRes.json()

      // Buscar álbuns
      const albumsRes = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=20`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      if (!albumsRes.ok) return
      const { items: albumItems } = await albumsRes.json()

      // Buscar singles
      const singlesRes = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=single&limit=20`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      if (!singlesRes.ok) return
      const { items: singleItems } = await singlesRes.json()

      const fetchTracks = async (items: SpotifyAlbum[]) => {
        return await Promise.all(
          items.map(async (item) => {
            const tracksRes = await fetch(
              `https://api.spotify.com/v1/albums/${item.id}/tracks?limit=5`,
              { headers: { Authorization: `Bearer ${access_token}` } }
            )
            const { items: tracks } = await tracksRes.json()
            return { ...item, tracks }
          })
        )
      }

      const [albumsWithTracks, singlesWithTracks] = await Promise.all([
        fetchTracks(albumItems),
        fetchTracks(singleItems)
      ])

      setAlbums(albumsWithTracks)
      setSingles(singlesWithTracks)
    }
    fetchMusic()
  }, [])

  const sortedAlbums = React.useMemo(() => {
    return [...albums, ...singles].sort((a, b) => {
      if (filter === 'oldest')
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
      if (filter === 'newest')
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      return b.popularity - a.popularity
    })
  }, [albums, singles, filter])

  const goPrev = () => setCurrent(c => (c - 1 + sortedAlbums.length) % sortedAlbums.length)
  const goNext = () => setCurrent(c => (c + 1) % sortedAlbums.length)
  const goTo = (idx: number) => setCurrent(idx)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current
      if (diff > 50) goNext()
      else if (diff < -50) goPrev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  const handleShowMore = () => {
    if (showAllAlbums) {
      const allIndexes = sortedAlbums.map((_, index) => index)
      const firstRowIndexes = allIndexes.slice(5)
      const reversedIndexes = [...firstRowIndexes].reverse()
      
      const targetPosition = titleRef.current?.getBoundingClientRect().top + window.scrollY || 0
      const currentScroll = window.scrollY
      const scrollAmount = currentScroll - targetPosition 
      const totalDuration = 1000 
      const scrollInterval = 16 
      const totalSteps = totalDuration / scrollInterval
      let currentStep = 0

      // Inicia o scroll suave
      const scrollIntervalId = setInterval(() => {
        currentStep++
        const progress = currentStep / totalSteps
        const smoothProgress = Math.pow(progress, 1.5) // Curva de progressão suave
        
        window.scrollTo({
          top: currentScroll - (scrollAmount * smoothProgress),
          behavior: 'auto' // Usando 'auto' para ter mais controle sobre o scroll
        })

        if (currentStep >= totalSteps) {
          clearInterval(scrollIntervalId)
        }
      }, scrollInterval)

      // Anima os álbuns
      reversedIndexes.forEach((index, i) => {
        setTimeout(() => {
          setExitingIndexes(prev => [...prev, index])
        }, (i * totalDuration) / reversedIndexes.length)
      })

      // Limpa tudo após a animação
      setTimeout(() => {
        setShowAllAlbums(false)
        setExitingIndexes([])
        clearInterval(scrollIntervalId)
      }, totalDuration)
    } else {
      setShowAllAlbums(true)
    }
  }

  return (
    <DiscographyContainer ref={containerRef}>
      <DiscographyTitle ref={titleRef}>Discografia</DiscographyTitle>
      {!isMobile && (
        <>
          <Filters>
            <FilterButton $active={filter === 'newest'} onClick={() => setFilter('newest')}>
              Lançamentos
            </FilterButton>
            <FilterButton $active={filter === 'oldest'} onClick={() => setFilter('oldest')}>
              Mais Antigos
            </FilterButton>
            <FilterButton $active={filter === 'popular'} onClick={() => setFilter('popular')}>
              Mais Escutados
            </FilterButton>
          </Filters>
          
          <AlbumGrid>
            {sortedAlbums.slice(0, showAllAlbums ? undefined : 5).map((album, index) => (
              <AlbumCard 
                key={album.id}
                $isExiting={exitingIndexes.includes(index)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                <AlbumCover src={album.images[0]?.url} alt={album.name} />
                <AlbumDetails>
                  <AlbumTitle>{album.name}</AlbumTitle>
                  <TrackList>
                    {album.tracks.map((track, idx) => (
                      <TrackItem key={track.id}>
                        <TrackIndex className="track-index">{idx + 1}</TrackIndex>
                        <MusicLink
                          href={track.external_urls.spotify}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {track.name}
                        </MusicLink>
                      </TrackItem>
                    ))}
                  </TrackList>
                </AlbumDetails>
              </AlbumCard>
            ))}
          </AlbumGrid>
          
          {sortedAlbums.length > 5 && (
            <SeeMoreButton onClick={handleShowMore}>
              {showAllAlbums ? 'Ver Menos' : 'Ver Mais'}
            </SeeMoreButton>
          )}
        </>
      )}

      {isMobile && (
        <CarouselWrapper>
          <Filters>
            <FilterButton $active={filter === 'newest'} onClick={() => setFilter('newest')}>
              Lançamentos
            </FilterButton>
            <FilterButton $active={filter === 'oldest'} onClick={() => setFilter('oldest')}>
              Mais Antigos
            </FilterButton>
            <FilterButton $active={filter === 'popular'} onClick={() => setFilter('popular')}>
              Mais Escutados
            </FilterButton>
          </Filters>
          <CarouselTrack
            $current={current}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {sortedAlbums.map((album, idx) => (
              <CarouselSlide key={album.id} $active={idx === current}>
                <AlbumCard>
                  <AlbumCover src={album.images[0]?.url} alt={album.name} />
                  <AlbumDetails>
                    <AlbumTitle>{album.name}</AlbumTitle>
                    <TrackList>
                      {album.tracks.map((track, tIdx) => (
                        <TrackItem key={track.id}>
                          <TrackIndex className="track-index">{tIdx + 1}</TrackIndex>
                          <MusicLink
                            href={track.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {track.name}
                          </MusicLink>
                        </TrackItem>
                      ))}
                    </TrackList>
                  </AlbumDetails>
                </AlbumCard>
              </CarouselSlide>
            ))}
          </CarouselTrack>
          <CarouselDots>
            {sortedAlbums.slice(0, 5).map((_, idx) => (
              <CarouselDot
                key={idx}
                $active={idx === current % 5}
                onClick={() => goTo(idx)}
                aria-label={`Ir para o álbum ${idx + 1}`}
              />
            ))}
          </CarouselDots>
        </CarouselWrapper>
      )}
    </DiscographyContainer>
  )
}