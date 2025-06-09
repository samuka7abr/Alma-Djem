import { Form } from '../../components/Form'
import {
  PageContainer,
  HeroSection,
  BackgroundImage,
  ScrollButton,
  FormSection,
  FormContainer,
  Title,
  Title2
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
        <Title>Pré-venda show brasília </Title>
        <Title2>27 & 28 de Setembro</Title2>
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