import styled from 'styled-components'

export const FormContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FormTitle = styled.h1`
  color: #ffffff;
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'AlmaDjem', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const FormWrapper = styled.form`
  width: 100%;
  max-width: 600px;
  background: #111;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`

export const Label = styled.label`
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-family: 'Open-Sans', sans-serif;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 4px;
  background: #222;
  color: #ffffff;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0388C3;
  }

  &:focus {
    outline: none;
    border-color: #55FFFF;
  }

  &::placeholder {
    color: #666;
    font-size: 1.5rem;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #333;
  border-radius: 4px;
  background: #222;
  color: #ffffff;
  font-size: 5rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:hover {
    border-color: #0388C3;
  }

  &:focus {
    outline: none;
    border-color: #0388C3;
  }

  &::placeholder {
    color: #666;
    font-size: 1.5rem;
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: #0388C3;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  margin-top: 2rem;
  letter-spacing: 1px;
  font-family: 'AlmaDjem', sans-serif;

  &:hover {
    background: #55FFFF;
    color:rgba(0, 0, 0, 0.51);
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
  }
`

export const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 1.5rem;
  margin-top: 0.25rem;
  display: block;
` 