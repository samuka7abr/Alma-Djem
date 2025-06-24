import { FooterContainer, Credits } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
};

export default Footer; 