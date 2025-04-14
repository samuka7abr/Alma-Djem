import { useRef, useState } from 'react'
import {
  CarouselContainer,
  Track,
  VideoWrapper,
  StyledVideo,
  TextOverlay,
  ArrowLeft,
  ArrowRight
} from './styles'

const videos = [
  { src: '../../../public/video/v1.mp4', title: 'Primeiro clipe' },
  { src: '/videos/v2.mp4', title: 'Segundo clipe' },
  { src: '/videos/v3.mp4', title: 'Terceiro clipe' },
]

export function Carousel() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [mouseZone, setMouseZone] = useState<'left' | 'center' | 'right'>('center')

  const trackRef = useRef<HTMLDivElement>(null)

  const next = () => {
    setDirection('right')
    setCurrent((prev) => (prev + 1) % videos.length)
  }

  const prev = () => {
    setDirection('left')
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, currentTarget } = e
    const width = currentTarget.clientWidth

    if (clientX < width * 0.33) setMouseZone('left')
    else if (clientX > width * 0.66) setMouseZone('right')
    else setMouseZone('center')
  }

  return (
    <CarouselContainer onMouseMove={handleMouseMove}>
      <TextOverlay direction={direction}>{videos[current].title}</TextOverlay>

      <ArrowLeft onClick={prev}>&#8592;</ArrowLeft>
      <ArrowRight onClick={next}>&#8594;</ArrowRight>

      <Track
        ref={trackRef}
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {videos.map((video, index) => (
          <VideoWrapper
            key={index}
            isFocused={index === current && mouseZone === 'center'}
          >
            <StyledVideo src={video.src} autoPlay muted loop />
          </VideoWrapper>
        ))}
      </Track>
    </CarouselContainer>
  )
}
