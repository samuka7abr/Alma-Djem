import logoContato from '../../assets/logo-contato.png';
import {
  FooterContainer,
  LogoContainer,
  Logo,
  Credits,
  PhonesContainer,
  PhoneNumber
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        <Logo src={logoContato} alt="Logo Alma Djem" />
      </LogoContainer>
      <Credits>
        Desenvolvido por{' '}
        <a 
          href="https://portifolio-lyart-three-23.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Samuel Abrão
        </a>
      </Credits>
      <PhonesContainer>
        <PhoneNumber href="tel:+5511993983428">
          (11) 99398-3428
        </PhoneNumber>
        <PhoneNumber href="tel:+5511999497158">
          (11) 99949-7158
        </PhoneNumber>
      </PhonesContainer>
    </FooterContainer>
  );
};

export default Footer; 