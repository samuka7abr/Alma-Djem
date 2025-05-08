import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background: #0a0a0a;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

export const LogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
`;

export const Credits = styled.div`
  flex: 2;
  text-align: center;
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  a {
    color: #F0048A;
    text-decoration: none;
    transition: color 0.3s ease;
    font-weight: 500;

    &:hover {
      color: #d60060;
      text-decoration: underline;
    }
  }
`;

export const PhonesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  color: #fff;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const PhoneNumber = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #F0048A;
  }
`; 