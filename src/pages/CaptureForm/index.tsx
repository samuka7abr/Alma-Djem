import { Form } from '../../components/Form'
import {
  PageContainer,
  HeroSection,
  BackgroundImage,
  ScrollButton,
  FormSection,
  FormContainer,
  Title
} from './styles'

export function CaptureFormPage() {
  const scrollToForm = () => {
    const formElement = document.getElementById('form-section')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <PageContainer>
      <HeroSection>
        <BackgroundImage />
        <Title>Imagem Ilustrativa</Title>
        <ScrollButton onClick={scrollToForm}>
          Garantir meu Ingresso
        </ScrollButton>
      </HeroSection>
      <FormSection id="form-section">
        <FormContainer>
          <Form />
        </FormContainer>
      </FormSection>
    </PageContainer>
  )
} 