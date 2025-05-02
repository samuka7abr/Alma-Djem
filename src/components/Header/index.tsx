import React, { useState } from 'react'
import { FaSpotify, FaYoutube, FaDeezer, FaInstagram, FaFacebook } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  Container,
  Logo,
  Actions,
  SocialLink,
  Socials,
  SocialIcon,
  MenuButton,
  MobileMenu,
  MobileNav,
  MobileSocials
} from './styles'
import logo from '../../assets/logo.png'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Container>
      <Logo>
        <img src={logo} alt="Logo Alma Djem" />
      </Logo>

      <Actions>
        <SocialLink href="#">HOME</SocialLink>
        <SocialLink href="#">DISCOGRAFIA</SocialLink>
        <SocialLink href="#">CONTATO</SocialLink>
      </Actions>

      <Actions>
        <Socials>
          <SocialIcon href="#" target="_blank"><FaSpotify /></SocialIcon>
          <SocialIcon href="#" target="_blank"><FaYoutube /></SocialIcon>
          <SocialIcon href="#" target="_blank"><FaDeezer /></SocialIcon>
          <SocialIcon href="#" target="_blank"><FaInstagram /></SocialIcon>
          <SocialIcon href="#" target="_blank"><FaFacebook /></SocialIcon>
        </Socials>
      </Actions>

      <MenuButton onClick={() => setIsOpen(open => !open)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuButton>

      <MobileMenu isOpen={isOpen}>
        <MobileNav>
          <SocialLink href="#">HOME</SocialLink>
          <SocialLink href="#">DISCOGRAFIA</SocialLink>
          <SocialLink href="#">CONTATO</SocialLink>
        </MobileNav>
        <MobileSocials>
          <SocialIcon href="#" target="_blank"><FaSpotify /></SocialIcon>
          <SocialIcon href="#" target="_blank"><FaYoutube /></SocialIcon>
          <SocialIcon href="#" target="_blank"><FaDeezer /></SocialIcon>
          <SocialIcon href="#" target="_blank"><FaInstagram /></SocialIcon>
          <SocialIcon href="#" target="_blank"><FaFacebook /></SocialIcon>
        </MobileSocials>
      </MobileMenu>
    </Container>
  )
}
