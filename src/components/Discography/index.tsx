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

interface DiscographyProps {
  onExpandChange: (expanded: boolean) => void;
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

export const Discography: React.FC<DiscographyProps> = ({ onExpandChange }) => {
  const [albums, setAlbums] = useState<Album[]>([])
  const [singles, setSingles] = useState<Album[]>([])
  const [filter, setFilter] = useState<'newest' | 'oldest' | 'popular'>('newest')
  const [showAllAlbums, setShowAllAlbums] = useState(false)
  const isMobile = useIsMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)

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

      const albumsRes = await fetch(
        `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=20`,
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      if (!albumsRes.ok) return
      const { items: albumItems } = await albumsRes.json()

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

  const handleShowMore = () => {
    if (showAllAlbums) {
      if (!titleRef.current) return
      
      const titleRect = titleRef.current.getBoundingClientRect()
      const targetPosition = titleRect.height + window.scrollY - 50
      window.scrollTo({
        top: targetPosition,
        behavior: 'auto'
      })
      
      setShowAllAlbums(false)
    } else {
      setShowAllAlbums(true)
    }
  }

  const handleAlbumHover = (isHovered: boolean) => {
    onExpandChange(isHovered);
  };

  return (
    <DiscographyContainer ref={containerRef}>
      <DiscographyTitle ref={titleRef}>Discografia</DiscographyTitle>
      <Filters ref={filtersRef}>
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
        {sortedAlbums.slice(0, showAllAlbums ? undefined : (isMobile ? 4 : 5)).map((album, index) => (
          <AlbumCard 
            key={album.id}
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'forwards'
            }}
            onMouseEnter={() => handleAlbumHover(true)}
            onMouseLeave={() => handleAlbumHover(false)}
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
      
      {sortedAlbums.length > (isMobile ? 4 : 5) && (
        <SeeMoreButton onClick={handleShowMore}>
          {showAllAlbums ? 'Ver Menos' : 'Ver Mais'}
        </SeeMoreButton>
      )}
    </DiscographyContainer>
  )
}