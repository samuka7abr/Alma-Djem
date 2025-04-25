import React, { useRef, useState, Fragment } from 'react'
import {
  CarouselContainer,
  Track,
  VideoWrapper,
  StyledVideo,
  StyledImage,
  TextOverlay,
  ArrowLeft,
  ArrowRight,
  LinkButton
} from './styles'

const slides = [
  {
    src: '../../../public/video/v1.mp4',
    title: `Alma Djem feat Maneva - Aeroporto`,
    link: 'https://youtu.be/icjEC-7c16Y?si=pSMseyTj-jA5OvyJ',
    isImage: false,
    hasBackground: false,  
    fullSize: false
  },
  {
    src: '../../../public/capa-album.png',
    title: 'DVD Alma Djem Acústico em São Paulo',
    link: 'https://open.spotify.com/intl-pt/album/2zCD0650sdKCLipMHhv1Yq?si=F2J-8QsSSgaFLbdmP_FjaQ',
    isImage: true,
    hasBackground: true,
    fullSize: false
  },
  {
    src: '../../../public/banda.png',
    title: 'Conheça a história da banda Alma Djem',
    link: 'https://www.almadjem.com.br/material/Release-Alma_Djem.pdf',
    isImage: true,
    hasBackground: false,
    fullSize: true
  }
]

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [mouseZone, setMouseZone] = useState<'left' | 'center' | 'right'>('center')

  const trackRef = useRef<HTMLDivElement>(null)

  const next = () => {
    setDirection('right')
    setCurrent(prev => (prev + 1) % slides.length)
  }

  const prev = () => {
    setDirection('left')
    setCurrent(prev => (prev - 1 + slides.length) % slides.length)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, currentTarget } = e
    const width = currentTarget.clientWidth
    if (clientX < width * 0.13) setMouseZone('left')
    else if (clientX > width * 0.86) setMouseZone('right')
    else setMouseZone('center')
  }

  return (
    <CarouselContainer onMouseMove={handleMouseMove}>
      <Fragment key={current}>
        <TextOverlay direction={direction}>
          {slides[current].title}
        </TextOverlay>
        <LinkButton
          direction={direction}
          href={slides[current].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Veja Mais
        </LinkButton>
      </Fragment>

      <ArrowLeft onClick={prev}>&#8592;</ArrowLeft>
      <ArrowRight onClick={next}>&#8594;</ArrowRight>

      <Track
        ref={trackRef}
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <VideoWrapper
            key={index}
            isFocused={index === current && mouseZone === 'center'}
            hasBackground={slide.hasBackground}
          >
            {slide.isImage ? (
              <StyledImage
                src={slide.src}
                alt={slide.title}
                fullSize={slide.fullSize}
              />
            ) : (
              <StyledVideo src={slide.src} autoPlay muted loop />
            )}
          </VideoWrapper>
        ))}
      </Track>
    </CarouselContainer>
  )
}
