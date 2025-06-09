import React from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  PageContainer, 
  HeroSection, 
  BackgroundImage, 
  ContentWrapper,
  Title, 
  Message, 
  WhatsAppButton 
} from './styles'

export const ThankYouPage: React.FC = () => {
  const navigate = useNavigate()

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.open('https://chat.whatsapp.com/I92OOLhVBCWHgnzq93L6GY', '_blank', 'noopener,noreferrer')
    
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }

  return (
    <PageContainer>
      <HeroSection>
        <BackgroundImage />
        <ContentWrapper>
          <Title>Obrigado!</Title>
          <Message>
            Para ficar por dentro de todas as novidades sobre a pré-venda, 
            entre no nosso grupo do WhatsApp.
          </Message>
          <WhatsAppButton 
            href="https://chat.whatsapp.com/I92OOLhVBCWHgnzq93L6GY" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
          >
            Entrar no grupo
          </WhatsAppButton>
        </ContentWrapper>
      </HeroSection>
    </PageContainer>
  )
}
