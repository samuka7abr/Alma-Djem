import styled, { css } from 'styled-components'

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

  @media (max-width: 768px) {
    display: none;
  }
`

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  background: ${({ $active }) => ($active ? '#1DB954' : 'rgba(255,255,255,0.1)')};
  color: ${({ $active }) => ($active ? '#fff' : '#aaa')};
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: ${({ $active }) => ($active ? '#1ed760' : 'rgba(255,255,255,0.2)')};
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

  @media (max-width: 768px) {
    display: none;
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
    transform: scale(1.1);
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
`

export const AlbumTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 1.5rem;
  color: #fff;
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
`

export const TrackIndex = styled.span`
  width: 1.5rem;
  display: inline-block;
  text-align: center;
  color: #aaa;
  opacity: 1;
  transition: opacity 0.2s;
`

export const MusicLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: text-decoration-color 0.2s;
  text-underline-offset: 2px;
  &:hover {
    color: #1DB954;
    text-decoration: underline;
    text-decoration-color: #1DB954;
  }
`

export const DiscographyTitle = styled.h2`
  text-align: center;
  color: #fff;
  font-size: 4rem;
  margin-bottom: 2rem;
  font-weight: 700;

  @media (min-height: 900px) {
    font-size: 3.2rem;
    margin-bottom: 3rem;
  }
  @media (min-height: 1100px) {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
`

export const CarouselWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: 2rem 0 30px;

    @media (min-height: 900px) {
      justify-content: center;
      padding: 0 0 30px;
    }
  }
`
export const CarouselTrack = styled.div<{ $current: number }>`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  gap: 2rem;
  transform: ${({ $current }) => `translateX(calc(50% - 150px - ${$current * 320}px))`};
`
export const CarouselSlide = styled.div<{ $active: boolean }>`
  flex: 0 0 300px;
  margin-top: 8rem;
  opacity: ${props => (props.$active ? 1 : 0.5)};
  transform: scale(${props => (props.$active ? 1 : 0.92)});
  transition: opacity 0.3s, transform 0.3s;
  pointer-events: ${props => (props.$active ? 'auto' : 'none')};
`

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1.5rem;
`

export const CarouselDot = styled.button<{ $active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  margin: 0 4px;

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.7;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  ${props => props.$active && css`
    animation: pulse 0.5s ease-in-out;
  `}

  &:hover {
    background: #fff;
  }
`

export const SeeMoreButton = styled.button`
  margin: 3rem 0;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border: 2px solid #1DB954;
  border-radius: 25px;
  background: transparent;
  color: #1DB954;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;

  &:hover {
    background: #1DB954;
    color: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`


