import { useState } from 'react';
import { sendEmail } from '../../services/emailService';
import {
  ContactSection,
  FormContainer,
  ContactFormTitle,
  Form,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
  StatusMessage
} from './styles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      await sendEmail(formData);
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      setFormData({ name: '', email: '', message: '' });
      //eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Por favor, tente novamente mais tarde.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContactSection>
      <FormContainer>
        <ContactFormTitle>Entre em Contato</ContactFormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu Nome"
              required
              disabled={isLoading}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Seu Email"
              required
              disabled={isLoading}
            />
          </FormGroup>
          <FormGroup>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua Mensagem"
              required
              disabled={isLoading}
            />
          </FormGroup>
          {status.message && (
            <StatusMessage $type={status.type}>
              {status.message}
            </StatusMessage>
          )}
          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
          </SubmitButton>
        </Form>
      </FormContainer>
    </ContactSection>
  );
};

export default ContactForm; 