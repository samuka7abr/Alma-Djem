import React, { useState, useEffect } from 'react'
import {
  DiscographyContainer,
  Filters,
  FilterButton,
  AlbumGrid,
  AlbumCard,
  AlbumCover,
  AlbumTitle
} from './styles'

interface Album {
  id: string
  name: string
  images: { url: string }[]
  release_date: string
  popularity: number
}

const artistId = process.env.REACT_APP_SPOTIFY_ARTIST_ID!
const token = process.env.REACT_APP_SPOTIFY_TOKEN!

export const Discography: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([])
  const [filter, setFilter] = useState<'newest' | 'oldest' | 'popular'>('newest')

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await fetch(
          `https://api.spotify.com/v1/artists/${artistId}/albums?include_groups=album&limit=50`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        if (!res.ok) {
          console.error('Erro ao buscar álbuns:', res.status)
          setAlbums([])
          return
        }
        const data = await res.json()
        setAlbums(Array.isArray(data.items) ? data.items : [])
      } catch (err) {
        console.error(err)
        setAlbums([])
      }
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

  return (
    <DiscographyContainer>
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
            <AlbumTitle>{album.name}</AlbumTitle>
          </AlbumCard>
        ))}
      </AlbumGrid>
    </DiscographyContainer>
  )
}
