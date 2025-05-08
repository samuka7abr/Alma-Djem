import styled from 'styled-components'

export const Container = styled.header<{ $transparent: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 7rem;
  padding: 0 2rem;
  background: ${({ $transparent }) => 
    $transparent ? 'rgba(255, 255, 255, 0.15)' : '#fff'};
  box-shadow: ${({ $transparent }) => 
    $transparent ? 'none' : '0 4px 6px rgba(0,0,0,0.05)'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(10px);
  z-index: 10;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img { height: 6rem; width: auto; object-fit: contain; }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  @media(max-width:768px){ display: none; }
`

export const SocialLink = styled.a<{ $transparent: boolean }>`
  position: relative;
  font-size: 1.6rem;
  color: ${({ $transparent }) => 
    $transparent ? 'rgba(255, 255, 255, 0.9)' : '#3f3f3f'};
  transition: color .2s ease;
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0%;
    height: 1px;
    background: ${({ $transparent }) => 
      $transparent ? 'rgba(255, 255, 255, 0.9)' : '#3f3f3f'};
    transition: width .3s ease;
  }
  &:hover {
    color: ${({ $transparent }) => 
      $transparent ? '#fff' : '#282828'};
    &::after { width: 100%; }
  }
`

export const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  @media(max-width:768px){ display: none; }
`

export const SocialIcon = styled.a<{ $transparent: boolean }>`
  font-size: 1.6rem;
  color: ${({ $transparent }) => 
    $transparent ? 'rgba(255, 255, 255, 0.9)' : '#3f3f3f'};
  transition: transform .2s ease, color .2s ease;
  &:hover { 
    transform: scale(1.2);
    color: ${({ $transparent }) => 
      $transparent ? '#fff' : '#282828'};
  }
`

export const MenuButton = styled.button<{ $transparent: boolean }>`
  display: none;
  background: none;
  border: none;
  font-size: 2.4rem;
  cursor: pointer;
  color: ${({ $transparent }) => 
    $transparent ? 'rgba(255, 255, 255, 0.9)' : '#3f3f3f'};
  transition: color 0.3s ease;
  @media(max-width:768px){ display: block; }
`

export const MobileMenu = styled.div<{ $isOpen: boolean; $transparent: boolean }>`
  position: absolute;
  top: 7rem;
  left: 0;
  width: 100%;
  background: ${({ $transparent }) => 
    $transparent ? 'rgba(255, 255, 255, 0.15)' : '#fff'};
  backdrop-filter: blur(10px);
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.3s ease;
  @media(min-width:769px){ display: none; }
`

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`

export const MobileSocials = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 2rem;
  margin-top: 2rem;
`
