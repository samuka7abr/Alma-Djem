import styled, { keyframes } from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  position: relative;
`

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/banda.png');
  background-size: cover;
  background-position: center;
  opacity: 0.7;
`

export const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const Title = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`

export const Message = styled.p`
  color: white;
  font-size: 2rem;
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  background-color: #25D366;
  color: white;
  text-decoration: none;
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  &:hover {
    background-color: #128C7E;
    transform: scale(1.05);
  }
`
