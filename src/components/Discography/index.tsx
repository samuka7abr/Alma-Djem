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
  CarouselDot
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
  const [filter, setFilter] = useState<'newest' | 'oldest' | 'popular'>('newest')
  const [current, setCurrent] = useState(0)
  const isMobile = useIsMobile()
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  useEffect(() => {
    const fetchAlbums = async () => {
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

      const albumsRes = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=20`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      if (!albumsRes.ok) return
      const { items } = await albumsRes.json()

      const withTracks = await Promise.all(
        items.map(async (alb: SpotifyAlbum) => {
          const tracksRes = await fetch(
            `https://api.spotify.com/v1/albums/${alb.id}/tracks?limit=5`,
            { headers: { Authorization: `Bearer ${access_token}` } }
          )
          const { items: tracks } = await tracksRes.json()
          return { ...alb, tracks }
        })
      )

      setAlbums(withTracks)
    }
    fetchAlbums()
  }, [])

  const sorted = React.useMemo(() => {
    return [...albums].sort((a, b) => {
      if (filter === 'oldest')
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
      if (filter === 'newest')
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      return b.popularity - a.popularity
    })
  }, [albums, filter])

  const goPrev = () => setCurrent(c => (c - 1 + sorted.length) % sorted.length)
  const goNext = () => setCurrent(c => (c + 1) % sorted.length)
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

  return (
    <DiscographyContainer>
      <DiscographyTitle>Discografia</DiscographyTitle>
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
            {sorted.map(album => (
              <AlbumCard key={album.id}>
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
            {sorted.map((album, idx) => (
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
            {sorted.map((_, idx) => (
              <CarouselDot
                key={idx}
                $active={idx === current}
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