import styled from 'styled-components';
import backgroundImage from '../../assets/image-footer.jpg';

export const ContactSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  padding: 4rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
  }
`;

export const FormContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  margin: 0 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(5px);
`;

export const ContactFormTitle = styled.h2`
  color: #ffffff;
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Akula', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
}

  &:focus {
    outline: none;
    border-color: #F28F09;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const TextArea = styled.textarea`
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-size: 1.2rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  backdrop-filter: blur(5px);
  min-height: 180px;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.2rem;
}

  &:focus {
  outline: none;
    border-color: #F28F09;
    background: rgba(255, 255, 255, 0.15);
}
`;

export const SubmitButton = styled.button`
  padding: 1.2rem 2rem;
  background: #F28F09;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: rgb(201, 120, 8);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
}

@media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1.1rem;
  }
`;

export const StatusMessage = styled.div<{ $type: 'success' | 'error' | null }>`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  text-align: center;
  background-color: ${({ $type }) => 
    $type === 'success' ? 'rgba(29, 185, 84, 0.1)' : 
    $type === 'error' ? 'rgba(255, 0, 0, 0.1)' : 
    'transparent'
  };
  color: ${({ $type }) => 
    $type === 'success' ? '#1DB954' : 
    $type === 'error' ? '#ff0000' : 
    'inherit'
  };
  border: 1px solid ${({ $type }) => 
    $type === 'success' ? '#1DB954' : 
    $type === 'error' ? '#ff0000' : 
    'transparent'
  };
`; 