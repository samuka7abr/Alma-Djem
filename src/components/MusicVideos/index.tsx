import React, { useState } from 'react'
import {
  MusicVideosContainer,
  MusicVideosTitle,
  VideoGrid,
  VideoCard,
  VideoThumbnail,
  YouTubeIcon,
  VideoOverlay,
  VideoModal,
  ModalContent,
  CloseButton,
  ModalOverlay
} from './styles'

const videos = [
  {
    id: 'icjEC-7c16Y',
    title: 'Alma Djem - Vídeo 1'
  },
  {
    id: 'wYquT1vgy5Y',
    title: 'Alma Djem - Vídeo 2'
  },
  {
    id: 'kXWYOojGD68',
    title: 'Alma Djem - Vídeo 3'
  },
  {
    id: 'D9DTbEostEM',
    title: 'Alma Djem - Vídeo 4'
  },
  {
    id: 'nnqzMxdYQLc',
    title: 'Alma Djem - Vídeo 5'
  },
  {
    id: 'pLO8EGOfPzU',
    title: 'Alma Djem - Vídeo 6'
  }
]

export const MusicVideos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const handleCloseModal = () => {
    setSelectedVideo(null)
  }

  return (
    <MusicVideosContainer>
      <MusicVideosTitle>Clipes</MusicVideosTitle>
      <VideoGrid>
        {videos.map((video) => (
          <VideoCard key={video.id} onClick={() => handleVideoClick(video.id)}>
            <VideoThumbnail
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
            />
            <VideoOverlay />
            <YouTubeIcon>
              <svg viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </YouTubeIcon>
          </VideoCard>
        ))}
      </VideoGrid>

      {selectedVideo && (
        <VideoModal>
          <ModalOverlay onClick={handleCloseModal} />
          <ModalContent>
            <CloseButton onClick={handleCloseModal}>×</CloseButton>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </ModalContent>
        </VideoModal>
      )}
    </MusicVideosContainer>
  )
} 