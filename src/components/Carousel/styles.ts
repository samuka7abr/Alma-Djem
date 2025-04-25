import styled, { keyframes, css } from 'styled-components'

// Animações de texto (slide + espaçamento)
const slideComposeFromRight = keyframes`
  0% { 
  opacity: 0; 
  transform: translateX(100%) translateY(-50%); 
  letter-spacing: 0.4rem; 
  }
  100% { 
  opacity: 1; 
  transform: translateX(-50%) translateY(-50%); 
  letter-spacing: 0.4rem; 
  }
`
const slideComposeFromLeft = keyframes`
  0% {
  opacity: 0; 
  transform: translateX(-100%) translateY(-50%); 
  letter-spacing: 0.4rem; 
  }
  100% { opacity: 1;
  transform: translateX(-50%) translateY(-50%); 
  letter-spacing: 0.4rem;
  }
`

// Animações de botão (slide)
const slideButtonFromRight = keyframes`
  0% { 
  opacity: 0; 
  transform: translateX(150%) translateY(-50%); 
  }
  100% {
  opacity: 1; transform: translateX(-50%) translateY(-50%);
  }
`
const slideButtonFromLeft = keyframes`
  0% { 
  opacity: 0;
  transform: translateX(-150%) translateY(-50%); 
  }
  100% {
  opacity: 1; 
  transform: translateX(-50%) translateY(-50%);
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

// VideoWrapper agora recebe hasBackground para controlar o fundo
export const VideoWrapper = styled.div<{ isFocused: boolean; hasBackground?: boolean }>`
  flex: 0 0 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${({ isFocused }) => (isFocused ? 'none' : 'blur(12px)')};
  transition: filter 0.3s ease;
  background: ${({ hasBackground }) => (hasBackground ? '#F18F0A' : 'transparent')};
`

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
  background-color: #111;
`

// Imagem com tamanho original (mantém proporção), com opção de fullSize para slide específico
export const StyledImage = styled.img<{ fullSize?: boolean }>`
  display: block;
  border-radius: ${({ fullSize }) => (fullSize ? '0' : '1rem')};
  background-color: transparent;
  ${({ fullSize }) => fullSize
    ? css`
        width: 100%;
        height: 100%;
        object-fit: cover;
      `
    : css`
        max-width: 80%;
        max-height: 80%;
        width: auto;
        height: auto;
        object-fit: contain;
      `}
`

export const TextOverlay = styled.div<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-align: center;
  width: 70%;
  max-width: 800px;
  z-index: 1;
  white-space: normal;
  word-break: break-word;
  line-height: 1.2;
  ${({ direction }) => css`
    animation: ${direction === 'right' ? slideComposeFromLeft : slideComposeFromRight} 0.7s ease-out forwards;
  `}
`

export const LinkButton = styled.a<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  width: 12rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 20px;
  z-index: 3;
  cursor: pointer;
  transition: background 0.3s ease;
  ${({ direction }) => css`
    animation: ${direction === 'right' ? slideButtonFromRight : slideButtonFromLeft} 0.7s ease-out forwards;
  `}
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
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
