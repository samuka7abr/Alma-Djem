import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  background: #0a0a0a;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

export const Credits = styled.div`
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
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