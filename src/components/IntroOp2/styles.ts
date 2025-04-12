import styled, { keyframes } from 'styled-components'

const wavePulse = keyframes`
  0%, 100% {
    transform: scale(1) translateX(0);
  }
  50% {
    transform: scale(1.08) translateX(20px);
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

export const Wave3 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120%;
  height: 60rem;
  background-color:rgb(49, 52, 236);
  clip-path: polygon(
  100% 42%, 96% 44%, 92% 47%, 90% 51%, 87% 53%, 
  84% 57%, 82% 61%, 78% 64%, 75% 69%, 75% 73%, 
  73% 76%, 70% 79%, 68% 84%, 65% 87%, 62% 89%, 
  60% 92%, 58% 96%, 56% 100%, 100% 100%
);
  z-index: 1;
  animation: ${wavePulse} 16s ease-in-out infinite;
  transform-origin: bottom right;
`

export const Wave4 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 40rem;
  background-color:rgb(34, 165, 158);
  clip-path: polygon(
  100% 44%, 95% 47%, 90% 51%, 85% 56%,
  80% 60%, 75% 65%, 70% 70%, 68% 75%,
  66% 80%, 63% 85%, 60% 90%, 58% 95%,
  56% 100%, 100% 100%
);

  z-index: 4;
  animation: ${wavePulse} 16s ease-in-out infinite;
  transform-origin: bottom right;
`

export const Wave1 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 120rem;
  background-color: #00D4C6;
  clip-path: polygon(
  100% 96%, 97% 91%, 94% 87%, 91% 84%, 88% 82%, 
  85% 80%, 82% 79%, 78% 78%, 74% 77%, 70% 76%, 
  66% 75%, 62% 74%, 58% 74%, 54% 75%, 50% 76%, 
  46% 78%, 43% 81%, 41% 85%, 40% 89%, 41% 94%, 
  44% 98%, 48% 100%, 100% 100%
);
  z-index: 3;
  animation: ${wavePulse} 12s ease-in-out infinite;
  transform-origin: bottom right;
`

export const Wave2 = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 95%;
  height: 110rem;
  background-color: #F0048A;
  clip-path: polygon(
  100% 96%, 97% 91%, 94% 87%, 91% 84%, 88% 82%, 
  85% 80%, 82% 79%, 78% 78%, 74% 77%, 70% 76%, 
  66% 75%, 62% 74%, 58% 74%, 54% 75%, 50% 76%, 
  46% 78%, 43% 81%, 41% 85%, 40% 89%, 41% 94%, 
  44% 98%, 48% 100%, 100% 100%
);
  z-index: 3;
  animation: ${wavePulse} 14s ease-in-out infinite;
  transform-origin: bottom right;
` 
 