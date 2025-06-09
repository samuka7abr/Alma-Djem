import React from 'react'
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
          >
            Entrar no grupo
          </WhatsAppButton>
        </ContentWrapper>
      </HeroSection>
    </PageContainer>
  )
}
