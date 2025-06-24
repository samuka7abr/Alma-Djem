import { Container, Content, Title, ContactInfo, PhoneNumbers, PhoneNumber, WhatsAppButton, LogoAndPhones, LogoImg } from './styles'
import { FaWhatsapp } from 'react-icons/fa'
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
        </ContactInfo>
      </Content>
    </Container>
  )
} 