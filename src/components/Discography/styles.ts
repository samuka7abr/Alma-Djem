import styled from 'styled-components'

export const DiscographyContainer = styled.section`
  padding: 2rem;
  @media (min-width: 1200px) {
    min-height: 100vh;
    padding: 4rem 0;
  }
`

export const Filters = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  justify-content: center;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    gap: 3rem;
    max-width: 1600px;
  }
`

export const AlbumCard = styled.div`
  background: #181818;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 400px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.5);
`

export const AlbumCover = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const AlbumDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const AlbumTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 2rem;
  color: #fff;
`

export const TrackList = styled.ol`
  flex: 1;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  list-style: decimal inside;
`

export const TrackItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
  color: #ddd;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
  position: relative;
  min-height: 2.5rem;

  &:hover {
    background: #232323;
    color: #fff;
  }
`

export const TrackIndex = styled.span`
  width: 2rem;
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
    padding: 2rem 0;

    @media (min-height: 900px) {
      justify-content: center;
      padding: 0;
    }
  }
`
export const CarouselTrack = styled.div<{ $current: number }>`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  gap: 6vw;
  /* Slide ativo centralizado, slides inativos parcialmente visíveis */
  transform: ${({ $current }) => `translateX(calc(50% - 35vw - ${$current * 76}vw))`};
`

export const CarouselSlide = styled.div<{ $active: boolean }>`
  flex: 0 0 70vw;
  opacity: ${props => (props.$active ? 1 : 0.5)};
  transform: scale(${props => (props.$active ? 1 : 0.92)});
  transition: opacity 0.3s, transform 0.3s;
  pointer-events: ${props => (props.$active ? 'auto' : 'none')};
`

export const DiscographyTitle = styled.h2`
  text-align: center;
  color: #111;
  font-size: 2.4rem;
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

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.7rem;
  margin-top: 1.5rem;
`

export const CarouselDot = styled.button<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? '#1DB954' : '#444')};
  opacity: ${({ $active }) => ($active ? 1 : 0.5)};
  transition: background 0.2s, opacity 0.2s;
  cursor: pointer;
  padding: 0;
`