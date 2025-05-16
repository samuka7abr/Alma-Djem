import styled from 'styled-components'

export const DiscographyContainer = styled.section`
  padding: 2rem;
  background: #0a0a0a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#F28F09' : 'rgba(255,255,255,0.1)')};
  color: ${({ $active }) => ($active ? '#fff' : '#aaa')};
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: ${({ $active }) => ($active ? 'rgb(201, 120, 8)' : 'rgba(255,255,255,0.2)')};
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }
`

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding: 0 4rem;
  max-width: 2000px;
  width: 100%;
  justify-content: center;
  align-items: start;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 3rem;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 0 1rem;
  }
`

export const AlbumCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
  transition: transform 0.3s ease;
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  transform: translateY(20px);
  will-change: transform, opacity;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`

export const AlbumCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`

export const AlbumDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  height: 100%;
  overflow-y: auto;

  ${AlbumCard}:hover & {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`

export const AlbumTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`

export const TrackList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: decimal inside;
`

export const TrackItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
  color: #ddd;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  position: relative;
  min-height: 2rem;

  &:hover {
    background: #232323;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    gap: 0.5rem;
  }
`

export const TrackIndex = styled.span`
  width: 1.5rem;
  display: inline-block;
  text-align: center;
  color: #aaa;
  opacity: 1;
  transition: opacity 0.2s;

  @media (max-width: 768px) {
    width: 1.2rem;
  }
`

export const MusicLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: text-decoration-color 0.2s;
  text-underline-offset: 2px;
  &:hover {
    color: #F28F09;
    text-decoration: underline;
    text-decoration-color: #F28F09;
  }
`

export const DiscographyTitle = styled.h2`
  color: #ffffff;
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Akula', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const SeeMoreButton = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 25px;
  background: #F28F09;
  color: #fff;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background:rgb(201, 120, 8);
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`


