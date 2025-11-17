import { Container, Content, Title, ContactInfo, PhoneNumbers, PhoneNumber, WhatsAppButton, LogoAndPhones, LogoImg, SocialLinks, SocialIcon } from './styles'
import { FaWhatsapp, FaSpotify, FaYoutube, FaDeezer, FaInstagram, FaFacebook } from 'react-icons/fa'
import logoContato from '../../assets/logo-contato.png'

export function ContactForm() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511993983428', '_blank')
  }

  const handlePhoneClick = (number: string) => {
    window.open(`tel:${number}`, '_blank')
  }

  return (
    <Container id="contact-section">
      <Content>
        <Title>CONTATO</Title>
        <ContactInfo>
          <LogoAndPhones>
            <LogoImg src={logoContato} alt="Logo Alma Djem" />
            <PhoneNumbers>
              <PhoneNumber onClick={() => handlePhoneClick('+5511993983428')}>
                (11) 99398-3428
              </PhoneNumber>
              <PhoneNumber onClick={() => handlePhoneClick('+5511999497158')}>
                (11) 99949-7158
              </PhoneNumber>
            </PhoneNumbers>
          </LogoAndPhones>
          <WhatsAppButton onClick={handleWhatsAppClick}>
            <FaWhatsapp />
            FALE CONOSCO
          </WhatsAppButton>
          <SocialLinks>
            <SocialIcon href="https://open.spotify.com/intl-pt/artist/4B8KF3OtiyDkloMmJ4qCm0" target="_blank" rel="noopener noreferrer">
              <FaSpotify />
            </SocialIcon>
            <SocialIcon href="https://www.youtube.com/channel/UCsJLOU83G24h0yZKniBY6uw" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIcon>
            <SocialIcon href="https://www.deezer.com/br/artist/5891691" target="_blank" rel="noopener noreferrer">
              <FaDeezer />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/almadjem/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://www.facebook.com/almadjem" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
          </SocialLinks>
        </ContactInfo>
      </Content>
    </Container>
  )
} 