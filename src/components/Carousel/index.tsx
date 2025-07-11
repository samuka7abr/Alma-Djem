import React, 
  { 
    useCallback, 
    useState, 
    useRef, 
    useEffect 
  } from 'react'

import {
  CarouselContainer,
  Track,
  SlideWrapper,
  VideoContent,
  ImageContent,
  SlideTitle,
  SlideDescription,
  ActionButton,
  PrevButton,
  NextButton,
  LoadingContainer,
  LoadingSpinner,
  VideoWrapper,
  VideoPlaceholder
} from './styles'

type Direction = 'left' | 'right'

type MouseZone = 'left' | 'center' | 'right'

interface SlideItem {
  id: string
  src: string
  title: string
  description: string
  link: string
  isImage: boolean
  hasBackground: boolean
  fullSize: boolean
}

const slides: SlideItem[] = [
  { 
    id: 'slide-1', 
    src: '/ALMADJEM_BACKGROUND_1920X1080_-copiar.webp', 
    title: 'Show Brasília 27 & 28/09', 
    description: 'Garanta seu ingresso agora!',
    link: 'https://www.bilheteriadigital.com/almadjem', 
    isImage: true, 
    hasBackground: false, 
    fullSize: true 
  },
  { 
    id: 'slide-2', 
    src: 'https://aqyjnfjjhooqvxvcffou.supabase.co/storage/v1/object/public/videos/v1_first_half_first_half.mp4', 
    title: 'Alma Djem feat Maneva - Aeroporto', 
    description: '',
    link: 'https://youtu.be/icjEC-7c16Y?si=pSMseyTj-jA5OvyJ', 
    isImage: false, 
    hasBackground: false, 
    fullSize: false 
  },
  { 
    id: 'slide-3', 
    src: '/banda.png', 
    title: 'Conheça a história da banda Alma Djem',   
    description: '',
    link: 'https://www.almadjem.com.br/material/Release-Alma_Djem.pdf', 
    isImage: true, 
    hasBackground: false, 
    fullSize: true 
  }
]

export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const [direction, setDirection] = useState<Direction>('right')
  
  const [mouseZone, setMouseZone] = useState<MouseZone>('center')
  
  const [isMobile, setIsMobile] = useState(false)
  
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  
  const [isVideoVisible, setIsVideoVisible] = useState(false)
  
  const trackRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoLoadedRef = useRef(false)

  useEffect(() => {
    const handleResize = () => 
      setIsMobile(window.innerWidth <= 768)
    
    handleResize()
    
    window.addEventListener('resize', handleResize)
    
    return () => 
      window.removeEventListener('resize', handleResize)
  }, [])

  const currentSlide = {
    ...slides[currentIndex],
    src: currentIndex === 0 && isMobile 
      ? '/ALMADJEM_BACKGROUND_MOBILE copiar.png' 
      : slides[currentIndex].src
  }

  const handleNext = useCallback(() => {
    setDirection('right')
    
    setCurrentIndex(prev => 
      (prev + 1) % slides.length
    )
  }, [])

  const handlePrev = useCallback(() => {
    setDirection('left')
    
    setCurrentIndex(prev => 
      (prev - 1 + slides.length) % slides.length
    )
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = e
    
    const { width } = currentTarget.getBoundingClientRect()
    
    if (clientX < width * 0.23) 
      setMouseZone('left')
    else if (clientX > width * 0.76) 
      setMouseZone('right')
    else 
      setMouseZone('center')
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') 
      handlePrev()
    else if (e.key === 'ArrowRight') 
      handleNext()
  }, [handleNext, handlePrev])

  const handleVideoLoad = () => {
    setIsVideoLoading(false)
    setIsVideoVisible(true)
    videoLoadedRef.current = true
  }

  useEffect(() => {
    if (videoRef.current) {
      if (currentIndex === 0 && videoLoadedRef.current) {
        setIsVideoLoading(false)
        setIsVideoVisible(true)
      } else {
        videoRef.current.addEventListener('loadeddata', handleVideoLoad)
        return () => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          videoRef.current?.removeEventListener('loadeddata', handleVideoLoad)
        }
      }
    }
  }, [currentIndex])

  const handleActionClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer')
  }

  return (
    <CarouselContainer
      onMouseMove={!isMobile ? handleMouseMove : undefined}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Galeria de conteúdo Alma Djem"
    >
      {!isMobile && (
        <>
          <SlideTitle 
            key={currentIndex} 
            direction={direction}
          >
            {currentSlide.title}
          </SlideTitle>
          
          {currentIndex === 0 && (
            <SlideDescription>
              {currentSlide.description}
            </SlideDescription>
          )}
          
          <ActionButton
            direction={direction}
            onClick={() => handleActionClick(currentSlide.link)}
            aria-label={`Veja mais sobre: ${currentSlide.title}`}
          >
            Veja Mais
          </ActionButton>
          
          <PrevButton 
            onClick={handlePrev} 
            aria-label="Slide anterior" 
            type="button"
          >
            &#8592;
          </PrevButton>
          
          <NextButton 
            onClick={handleNext} 
            aria-label="Próximo slide" 
            type="button"
          >
            &#8594;
          </NextButton>
        </>
      )}

      <Track 
        ref={trackRef} 
        style={{ 
          transform: `translateX(-${isMobile ? 0 : currentIndex * 100}vw)` 
        }}
      >
        {(isMobile ? slides.slice(0, 1) : slides).map((slide, index) => (
          <SlideWrapper
            key={slide.id}
            $isFocused={!isMobile && index === currentIndex && mouseZone === 'center'}
            $hasBackground={slide.hasBackground}
          >
            {slide.isImage ? (
              <ImageContent 
                src={isMobile && index === 0 
                  ? '/ALMADJEM_BACKGROUND_MOBILE copiar.png' 
                  : slide.src
                } 
                alt={slide.title} 
                $fullSize={slide.fullSize} 
                loading="lazy" 
              />
            ) : (
              <VideoWrapper>
                {isVideoLoading && !videoLoadedRef.current && (
                  <LoadingContainer>
                    <LoadingSpinner />
                  </LoadingContainer>
                )}
                <VideoPlaceholder 
                  src="/video-placeholder.png" 
                  alt="Carregando vídeo"
                  className={isVideoVisible ? 'hidden' : ''}
                />
              <VideoContent 
                  ref={videoRef}
                src={slide.src} 
                autoPlay 
                muted 
                loop 
                playsInline 
                  preload="auto"
                  className={isVideoVisible ? 'visible' : ''}
              />
              </VideoWrapper>
            )}
            
            {isMobile && (
              <>
                <SlideTitle 
                  direction={direction}
                >
                  {slide.title}
                </SlideTitle>
                
                {index === 0 && (
                  <SlideDescription>
                    {slide.description}
                  </SlideDescription>
                )}
                
                <ActionButton
                  direction={direction}
                  onClick={() => handleActionClick(slide.link)}
                  aria-label={`Veja mais sobre: ${slide.title}`}
                >
                  Veja Mais
                </ActionButton>
              </>
            )}
          </SlideWrapper>
        ))}
      </Track>
    </CarouselContainer>
  )
}