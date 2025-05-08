import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Carousel } from './components/Carousel';
import { Discography } from './components/Discography';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

const AppContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: relative;
`;

const Section = styled.section`
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
  position: relative;
`;

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [headerTransparent, setHeaderTransparent] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const carouselSection = document.getElementById('carousel-section');
      
      if (carouselSection) {
        const carouselTop = carouselSection.offsetTop;
        
        if (isMobile) {
          setShowHeader(scrollPosition >= window.innerHeight * 0.8);
        } else {
          setShowHeader(scrollPosition >= carouselTop - 50);
        }
        
        setHeaderTransparent(scrollPosition > carouselTop + 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const handleScrollDown = () => {
    const carouselSection = document.getElementById('carousel-section');
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: 'smooth' });
      setShowHeader(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 1000);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        {showIntro && (
          <Section>
            <Intro onScrollDown={handleScrollDown} />
          </Section>
        )}
        {showHeader && <Header transparent={headerTransparent} />}

        <Section id="carousel-section">
          <Carousel />
        </Section>

        <Section id="discography-section">
          <Discography />
        </Section>
      </AppContainer>
    </>
  );
}