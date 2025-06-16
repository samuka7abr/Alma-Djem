import { Container, Content, Title, ContactInfo, PhoneNumbers, PhoneNumber, WhatsAppButton } from './styles'
import { FaWhatsapp } from 'react-icons/fa'

export function ContactForm() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511999999999', '_blank')
  }

  const handlePhoneClick = (number: string) => {
    window.open(`tel:${number}`, '_blank')
  }

  return (
    <Container id="contact-section">
      <Content>
        <Title>CONTATO</Title>
        <ContactInfo>
          <PhoneNumbers>
            <PhoneNumber onClick={() => handlePhoneClick('+5511999999999')}>
              +55 (11) 99999-9999
            </PhoneNumber>
            <PhoneNumber onClick={() => handlePhoneClick('+5511999999999')}>
              +55 (11) 99999-9999
            </PhoneNumber>
          </PhoneNumbers>
          <WhatsAppButton onClick={handleWhatsAppClick}>
            <FaWhatsapp />
            FALE CONOSCO
          </WhatsAppButton>
        </ContactInfo>
      </Content>
    </Container>
  )
} 