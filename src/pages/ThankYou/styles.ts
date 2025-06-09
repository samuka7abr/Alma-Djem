import styled, { keyframes } from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
`

export const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/ALMADJEM_BACKGROUND_1920X1080_ copiar.png');
  background-size: cover;
  background-position: center;
  opacity: 0.5;

  @media (max-width: 768px) {
    background-image: url('/ALMADJEM_BACKGROUND_MOBILE copiar.png');
    opacity: 0.5;
  }
`

export const ContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 4rem;
  border-radius: 2rem;
  text-align: center;
  max-width: 800px;
  width: 90%;
  z-index: 2;
`

export const Title = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: 900;
  font-family: 'AlmaDjem', sans-serif;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export const Message = styled.p`
  color: white;
  font-size: 2rem;
  margin-bottom: 3rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`

const progressAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 97%;
  }
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin: 2rem 0;
  overflow: hidden;
  position: relative;
`

export const ProgressBar = styled.div`
  height: 100%;
  background-color: #FF6B00;
  border-radius: 10px;
  animation: ${progressAnimation} 3s ease-in-out forwards;
`

export const ProgressText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

export const WhatsAppButton = styled.a`
  display: inline-block;
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  border: 2px solid #25D366;

  &:hover {
    background-color: transparent;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 1.2rem 2.4rem;
    font-size: 1.6rem;
  }
`
