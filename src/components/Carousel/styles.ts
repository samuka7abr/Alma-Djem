import styled, 
  { 
    keyframes, 
    css 
  } from 'styled-components'

const slideFromRight = keyframes`
  from 
  { 
    opacity: 0; 
    transform: translateX(100%) translateY(-50%); 
  }
  to 
  { 
    opacity: 1; 
    transform: translateX(-50%) translateY(-50%); 
  }
`

const slideFromLeft = keyframes`
  from 
  { 
    opacity: 0; 
    transform: translateX(-100%) translateY(-50%); 
  }
  to 
  { 
    opacity: 1; 
    transform: translateX(-50%) translateY(-50%); 
  }
`

export const CarouselContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Track = styled.div`
  display: flex;
  transition: transform 0.8s ease;
  will-change: transform;
  height: 100%;
`;

export const SlideWrapper = styled.div<{ 
  $isFocused: boolean; 
  $hasBackground?: boolean 
}>`
  position: relative;
  flex: 0 0 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
  background: ${({ $hasBackground }) => 
    ($hasBackground ? '#F18F0A' : 'transparent')
  };
  filter: ${({ $isFocused }) => 
    ($isFocused ? 'none' : 'blur(12px)')
  };
  transition: filter 0.5s ease;

  @media (max-width: 768px) 
  {
    filter: none !important;
  }
`;

export const VideoPlaceholder = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;

  &.hidden {
    opacity: 0;
  }
`;

export const VideoContent = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;

  &.visible {
    opacity: 1;
  }

  &:not(.visible) {
    opacity: 0;
  }
`;

export const ImageContent = styled.img<{ $fullSize: boolean }>`
  position: relative;
  display: block;
  border-radius: ${({ $fullSize }) => 
    ($fullSize ? '0' : '1rem')
  };
  width: 100%;
  height: 100%;
  object-fit: ${({ $fullSize }) => ($fullSize ? 'cover' : 'contain')};
  filter: brightness(0.7);
  transition: transform 0.3s ease, filter 0.3s ease;

  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

export const SlideTitle = styled.h2<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: clamp(2rem, 4vw, 4rem);
  font-family: 'AlmaDjem', sans-serif;
  font-weight: bold;
  color: white;
  text-align: center;
  width: 80%;
  max-width: 800px;
  z-index: 2;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  animation: ${({ direction }) =>
    direction === 'right'
      ? css`${slideFromRight} 0.7s ease-out forwards`
      : css`${slideFromLeft} 0.7s ease-out forwards`
  };

  @media (max-width: 768px) 
  {
    top: 45%;
    font-size: clamp(3.2rem, 6vw, 4rem);

    width: 90%;
    padding: 0 1rem;
  }
`;

export const ActionButton = styled.button<{ direction: 'left' | 'right' }>`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  color: white;
  text-decoration: none;
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 500;
  z-index: 2;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 10rem;
  border-radius: 2px;
  animation: ${({ direction }) =>
    direction === 'right'
      ? css`${slideFromRight} 0.7s ease-out 0.1s forwards`
      : css`${slideFromLeft} 0.7s ease-out 0.1s forwards`
  };
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: 768px) 
  {
    top: 50%;
    padding: 0.8rem 1.2rem;
    font-size: clamp(1.5rem, 3vw, 1.2rem);
    min-width: 8rem;

  }
  
  &:hover 
  {
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%) scale(1.05);
  }

  &:focus 
  {
    outline: none;
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3);
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
  padding-bottom: 0.5rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover 
  {
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(-50%) scale(1.1);
  }

  &:focus 
  {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) 
  {
    display: none;
  }
`;

export const PrevButton = styled(NavButton)`
  left: 2rem;
`;

export const NextButton = styled(NavButton)`
  right: 2rem;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #F0048A;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;