import styled, { keyframes } from 'styled-components'

const wavePulse = keyframes`
  0%, 100% {
    transform: scale(1) translateX(0);
  }
  50% {
    transform: scale(1.1) translateX(80px);
  }
`

export const IntroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #f0048a 0%, #ec4e31 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;
  overflow: hidden;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  margin-bottom: 80px;
  gap: 2rem;
  z-index: 10;
`

export const Title = styled.h1`
  font-size: 7rem;
  color: #FDBC0A;
  text-shadow: 0 0 16px #FDBC0A;
  font-weight: bold;
  font-family: 'Reggae One', cursive;
`

export const Text = styled.p`
  font-size: 1.8rem;
  margin-top: -20px;
  margin-bottom: 20px;
  color: #fff;
`

export const Button = styled.button`
  width: 22rem;
  padding: 1.4rem 0;
  background-color: rgb(219, 0, 124);
  color: white;
  border: none;
  border-radius: 3rem;
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 0.4rem;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  transition: background 0.3s;
  margin-left: 100px;

  &:hover {
    background-color: #c6006f;
  }
`

export const SideLogo = styled.div`
  img {
    height: 36rem;
    object-fit: contain;
  }
  margin-right: 80px;
  margin-bottom: 80px;
  z-index: 10;
`

export const SvgWave = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 130%;
  z-index: 1;
  animation: ${wavePulse} 8s ease-in-out infinite;
  transform-origin: bottom right;
  pointer-events: none;
`

export const SvgWaveTop = styled(SvgWave)`
  z-index: 2;
  animation: ${wavePulse} 6s ease-in-out infinite;
`

export const SvgWaveMid = styled(SvgWave)`
  z-index: 3;
  animation: ${wavePulse} 4s ease-in-out infinite;
`

export const SvgWaveFront = styled(SvgWave)`
  z-index: 4;
  animation: ${wavePulse} 2s ease-in-out infinite;
`
