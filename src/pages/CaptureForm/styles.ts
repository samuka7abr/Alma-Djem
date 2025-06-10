import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
`

export const HeroSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 75px;
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
  opacity: 0.7;
  @media (max-width: 768px) {
    background-image: url('/ALMADJEM_BACKGROUND_MOBILE copiar.png');
    opacity: 0.45;
  }
`

export const Title = styled.h1`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4rem;
  font-weight: 900;
  font-family: 'AlmaDjem', sans-serif;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`

export const Title2 = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4rem;
  font-weight: 900;
  font-family: 'AlmaDjem', sans-serif;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
  text-align: center;
  
  @media (max-width: 375px) {
    top: 55%;                    
    transform: translate(-50%, -60%); 
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 3rem;
  }
`

export const ScrollButton = styled.button`
  background-color: #0388C3;
  color: white;
  border: none;
  padding: 1.5rem 3rem;
  margin-bottom: 100px;
  font-size: 1.8rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;

  &:hover {
    background-color:#55FFFF;
    color:rgba(0, 0, 0, 0.51);
    transform: scale(1.05);
  }
`

export const FormSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
` 