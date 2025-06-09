import { useState, useEffect } from 'react'
import {
  PageContainer,
  BackgroundImage,
  ContentContainer,
  Title,
  Message,
  ProgressBarContainer,
  ProgressBar,
  ProgressText,
  WhatsAppButton
} from './styles'

export function ThankYouPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 3000 // 3 segundos
    const interval = 30 // atualiza a cada 30ms
    const steps = duration / interval
    const increment = 97 / steps // vai até 97%

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 97) {
          clearInterval(timer)
          return 97
        }
        return prev + increment
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <PageContainer>
      <BackgroundImage />
      <ContentContainer>
        <Title>Quase lá!</Title>
        <Message>
          Para garantir seu ingresso, entre no nosso grupo do WhatsApp e fique por dentro de todas as novidades!
        </Message>
        <ProgressBarContainer>
          <ProgressBar />
          <ProgressText>{Math.round(progress)}%</ProgressText>
        </ProgressBarContainer>
        <WhatsAppButton 
          href="https://chat.whatsapp.com/SEU_LINK_DO_GRUPO" 
          target="_blank"
          rel="noopener noreferrer"
        >
          Entrar no Grupo do WhatsApp
        </WhatsAppButton>
      </ContentContainer>
    </PageContainer>
  )
}
