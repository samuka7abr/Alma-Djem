import { useState } from 'react';
import {
  ContactSection,
  FormContainer,
  FormTitle,
  Form,
  FormGroup,
  Input,
  TextArea,
  SubmitButton
} from './styles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o email
    console.log('Dados do formulário:', formData);
  };

  return (
    <ContactSection>
      <FormContainer>
        <FormTitle>Entre em Contato</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Seu Nome"
              required
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
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Assunto"
              required
            />
          </FormGroup>
          <FormGroup>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Sua Mensagem"
              required
            />
          </FormGroup>
          <SubmitButton type="submit">
            Enviar Mensagem
          </SubmitButton>
        </Form>
      </FormContainer>
    </ContactSection>
  );
};

export default ContactForm; 