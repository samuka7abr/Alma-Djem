import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  FormContainer, 
  FormTitle, 
  FormWrapper,
  Input,
  SubmitButton,
  FormGroup,
  Label,
  ErrorMessage
} from './styles'

export const Form: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      return false;
    }

    const formattedPhone = cleanPhone.replace(
      /^(\d{2})(\d{4,5})(\d{4})$/,
      '($1) $2-$3'
    );

    setFormData(prev => ({
      ...prev,
      phone: formattedPhone
    }));

    return true;
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Telefone inválido!'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)
    
    navigate('/thank-you')
    
    try {
      const response = await fetch('https://alma-djem-forms-api.onrender.com/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '' })
      console.log('Formulário enviado com sucesso')
    } catch (error) {
      console.error('Erro ao enviar:', error)
      alert('Erro ao enviar formulário!')
      setSubmitStatus('error')
      navigate('/capture-form')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FormContainer>
      <FormTitle>Garantir meu Ingresso</FormTitle>
      <FormWrapper onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            required
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seu@email.com"
            required
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Telefone</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(00) 00000-0000"
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </FormGroup>

        {submitStatus === 'success' && (
          <ErrorMessage style={{ color: '#4CAF50' }}>
            Mensagem enviada com sucesso!
          </ErrorMessage>
        )}

        {submitStatus === 'error' && (
          <ErrorMessage>
            Erro ao enviar mensagem. Tente novamente.
          </ErrorMessage>
        )}

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Registrar'}
        </SubmitButton>
      </FormWrapper>
    </FormContainer>
  )
} 