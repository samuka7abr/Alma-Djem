import styled from 'styled-components';
import backgroundImage from '../../assets/image-footer.jpg';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;

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

export const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const Title = styled.h2`
  font-size: 4rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'AlmaDjem', sans-serif;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-top: -150px;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-top: 100px;
`;

export const PhoneNumbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const PhoneNumber = styled.button`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  font-weight: 500;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    color: #25D366;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const WhatsAppButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: #25D366;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 1.5rem 3rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 5rem;
  width: 100%;
  max-width: 400px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;

  &:hover {
    background: #128C7E;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;

    svg {
      font-size: 1.8rem;
    }
  }
`;

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
  font-family: 'AlmaDjem', sans-serif;
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

export const LogoAndPhones = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const LogoImg = styled.img`
  height: 120px;
  width: auto;
  object-fit: contain;
  @media (max-width: 600px) {
    height: 120px;
  }
`; 