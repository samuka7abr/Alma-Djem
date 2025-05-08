import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Carousel } from './components/Carousel';
import { Discography } from './components/Discography';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles/global';

const AppContainer = styled.div`
  overflow-x: hidden;
  width: 100%;
  position: relative;
  min-height: 100vh;
`;

const Section = styled.section<{ $isExpanded?: boolean }>`
  scroll-snap-align: start;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
  const [headerTransparent, setHeaderTransparent] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDiscographyExpanded, setIsDiscographyExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }, []);

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
          if (!hasScrolled) {
            setShowHeader(scrollPosition >= window.innerHeight * 0.8);
          }
        } else {
          setShowHeader(scrollPosition >= carouselTop - 50);
        }
        
        setHeaderTransparent(scrollPosition > carouselTop + 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, hasScrolled]);

  const handleScrollDown = () => {
    const carouselSection = document.getElementById('carousel-section');
    if (carouselSection) {
      carouselSection.scrollIntoView({ behavior: 'smooth' });
      setShowHeader(true);
      setHasScrolled(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 1000);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer ref={containerRef}>
        {showIntro && (
          <Section>
            <Intro onScrollDown={handleScrollDown} />
          </Section>
        )}
        {showHeader && <Header transparent={headerTransparent} />}

        <Section id="carousel-section">
          <Carousel />
        </Section>

        <Section id="discography-section" $isExpanded={isDiscographyExpanded}>
          <Discography onExpandChange={setIsDiscographyExpanded} />
        </Section>

        <Section id="contact-section">
          <ContactForm />
        </Section>

        <Footer />
      </AppContainer>
    </>
  );
}