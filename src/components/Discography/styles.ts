import styled from 'styled-components'

export const DiscographyContainer = styled.section`
  padding: 2rem;
`

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#F18F0A' : 'transparent')};
  color: ${({ $active }) => ($active ? '#111' : '#fff')};
  transition: background 0.3s;
  &:hover {
    background: rgba(241, 143, 10, 0.7);
  }
`

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`

export const AlbumCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const AlbumCover = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`

export const AlbumTitle = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #fff;
`
