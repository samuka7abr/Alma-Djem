import styled, { keyframes, css } from 'styled-components';

const slideFromRight = keyframes`
  from { 
    opacity: 0; 
    transform: translateX(100%) translateY(-50%);
  }
  to { 
    opacity: 1; 
    transform: translateX(-50%) translateY(-50%);
  }
`;

const slideFromLeft = keyframes`
  from {
    opacity: 0; 
    transform: translateX(-100%) translateY(-50%); 
  }
  to { 
    opacity: 1;
    transform: translateX(-50%) translateY(-50%); 
  }
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #111;
  
  @media (max-width: 768px) {
    height: 70vh;
  }
`;

export const Track = styled.div`
  display: flex;
  transition: transform 0.8s ease;
  will-change: transform;
  height: 100%;
`;

export const SlideWrapper = styled.div<{ 
  $isFocused: boolean; 
  $hasBackground?: boolean;
}>`
  flex: 0 0 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  filter: ${({ $isFocused }) => ($isFocused ? 'none' : 'blur(12px)')};
  transition: filter 0.5s ease;
  background: ${({ $hasBackground }) => ($hasBackground ? '#F18F0A' : 'transparent')};
`;

export const VideoContent = styled.video`
  width: 120%;
  height: 120%;
  object-fit: contain;
  border-radius: 1rem;
  background-color: #111;
`;

export const ImageContent = styled.img<{ $fullSize?: boolean }>`
  display: block;
  border-radius: ${({ $fullSize }) => ($fullSize ? '0' : '1rem')};
  ${({ $fullSize }) =>
    $fullSize
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
`;

export const SlideTitle = styled.h2<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(2rem, 4vw, 4rem);
  font-weight: bold;
  color: white;
  text-align: center;
  width: 80%;
  max-width: 800px;
  z-index: 1;
  line-height: 1.2;
  letter-spacing: 0.4rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  animation: ${({ direction }) => 
    direction === 'right' 
      ? css`${slideFromLeft} 0.7s ease-out forwards`
      : css`${slideFromRight} 0.7s ease-out forwards`
  };
  
  @media (max-width: 768px) {
    top: 25%;
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    letter-spacing: 0.2rem;
  }
`;

export const ActionButton = styled.a<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: white;
  text-decoration: none;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 500;
  z-index: 3;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 10rem;
  border-radius: 4px;
  
  animation: ${({ direction }) => 
    direction === 'right' 
      ? css`${slideFromRight} 0.7s ease-out 0.1s forwards`
      : css`${slideFromLeft} 0.7s ease-out 0.1s forwards`
  };
  
  opacity: 0;
  animation-fill-mode: forwards;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%) scale(1.05);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }
  
  @media (max-width: 768px) {
    top: 50%;
    padding: 0.8rem 1.2rem;
    min-width: 8rem;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.3);
  border: none;
  color: white;
  font-size: 2rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(-50%) scale(1.1);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
  
  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 2rem;
  
  @media (max-width: 768px) {
    left: 1rem;
  }
`;

export const NextButton = styled(NavButton)`
  right: 2rem;
  
  @media (max-width: 768px) {
    right: 1rem;
  }
`;
