import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const MusicVideosContainer = styled.section`
  padding: 2rem 0;
  background: #000000;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`

export const MusicVideosTitle = styled.h2`
  color: #ffffff;
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Akula', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
`

export const VideoCard = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  animation: ${fadeInUp} 0.5s ease-out forwards;
  opacity: 0;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  &:nth-child(4) { animation-delay: 0.4s; }
  &:nth-child(5) { animation-delay: 0.5s; }
  &:nth-child(6) { animation-delay: 0.6s; }
  &:nth-child(7) { animation-delay: 0.7s; }
  &:nth-child(8) { animation-delay: 0.8s; }
  &:nth-child(9) { animation-delay: 0.9s; }
  &:nth-child(10) { animation-delay: 1s; }
  &:nth-child(11) { animation-delay: 1.1s; }
  &:nth-child(12) { animation-delay: 1.2s; }

  &:hover {
    transform: scale(1.05);
  }
`

export const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  background: #1a1a1a;
`

export const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;

  ${VideoCard}:hover & {
    background: rgba(0, 0, 0, 0.1);
  }
`

export const YouTubeIcon = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 60px;
  height: 60px;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 2;

  svg {
    width: 100%;
    height: 100%;
    fill: #ffffff;
    transition: all 0.3s ease;
  }

  ${VideoCard}:hover & {
    opacity: 1;
    animation: ${slideIn} 0.3s ease forwards;

    svg {
      fill: #ff0000;
    }
  }

  @media (max-width: 768px) {
    opacity: 1;
    animation: none;

    svg {
      fill: #ffffff;
    }

    ${VideoCard}:hover & {
      svg {
        fill: #ff0000;
      }
    }
  }
`

export const SeeMoreButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 1rem 2rem;
  background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #ffffff;
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #000000;

    &::before {
      left: 0;
    }
  }
` 