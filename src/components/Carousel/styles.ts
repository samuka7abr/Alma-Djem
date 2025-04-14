import styled, { keyframes } from 'styled-components'

const textCompose = keyframes`
  0% {
    opacity: 0;
    letter-spacing: 3rem;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    letter-spacing: 0.4rem;
    transform: scale(1);
  }
`

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #111;
`

export const Track = styled.div`
  display: flex;
  transition: transform 0.8s ease;
  will-change: transform;
`

export const VideoWrapper = styled.div<{ isFocused: boolean }>`
  flex: 0 0 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({ isFocused }) => (isFocused ? 'none' : 'blur(12px)')};
  transition: filter 0.3s ease;
`

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
  background-color: #111;
`

export const Overlay = styled.div<{ hovering: boolean }>`
  position: absolute;
  inset: 0;
  background: transparent;
  transition: background 0.4s ease;
`

export const TextOverlay = styled.div<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-align: center;
  width: 100%;
  animation: ${textCompose} 0.7s ease;
`

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 2;
  user-select: none;
`

export const ArrowLeft = styled(Arrow)`
  left: 2rem;
`

export const ArrowRight = styled(Arrow)`
  right: 2rem;
`
