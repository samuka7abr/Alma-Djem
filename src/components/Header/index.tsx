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
import { useState } from 'react'
import logo from '../../assets/logonova.png'

interface HeaderProps {
  transparent: boolean;
}

export function Header({ transparent }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <Container $transparent={transparent}>
      <Logo>
        <img src={logo} alt="Logo Alma Djem" />
      </Logo>

      <Actions>
        <SocialLink 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('carousel-section')
          }}
          $transparent={transparent}
        >
          HOME
        </SocialLink>
        <SocialLink 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('discography-section')
          }}
          $transparent={transparent}
        >
          DISCOGRAFIA
        </SocialLink>
        <SocialLink 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('contact-section')
          }}
          $transparent={transparent}
        >
          CONTATO
        </SocialLink>
      </Actions>

      <Actions>
        <Socials>
          <SocialIcon href="https://open.spotify.com/intl-pt/artist/4B8KF3OtiyDkloMmJ4qCm0" target="_blank" $transparent={transparent}><FaSpotify /></SocialIcon>
          <SocialIcon href="https://www.youtube.com/channel/UCsJLOU83G24h0yZKniBY6uw" target="_blank" $transparent={transparent}><FaYoutube /></SocialIcon>
          <SocialIcon href="https://www.deezer.com/br/artist/5891691" target="_blank" $transparent={transparent}><FaDeezer /></SocialIcon>
          <SocialIcon href="https://www.instagram.com/almadjem/" target="_blank" $transparent={transparent}><FaInstagram /></SocialIcon>
          <SocialIcon href="https://www.facebook.com/almadjem" target="_blank" $transparent={transparent}><FaFacebook /></SocialIcon>
        </Socials>
      </Actions>

      <MenuButton 
        onClick={() => setIsOpen(open => !open)}
        $transparent={transparent}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuButton>

      <MobileMenu $isOpen={isOpen} $transparent={transparent}>
        <MobileNav>
          <SocialLink 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('carousel-section')
            }}
            $transparent={transparent}
          >
            HOME
          </SocialLink>
          <SocialLink 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('discography-section')
            }}
            $transparent={transparent}
          >
            DISCOGRAFIA
          </SocialLink>
          <SocialLink 
            href="#" 
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact-section')
            }}
            $transparent={transparent}
          >
            CONTATO
          </SocialLink>
        </MobileNav>
        <MobileSocials>
          <SocialIcon href="https://open.spotify.com/intl-pt/artist/4B8KF3OtiyDkloMmJ4qCm0" target="_blank" $transparent={transparent}><FaSpotify /></SocialIcon>
          <SocialIcon href="https://www.youtube.com/channel/UCsJLOU83G24h0yZKniBY6uw" target="_blank" $transparent={transparent}><FaYoutube /></SocialIcon>
          <SocialIcon href="https://www.deezer.com/br/artist/5891691" target="_blank" $transparent={transparent}><FaDeezer /></SocialIcon>
          <SocialIcon href="https://www.instagram.com/almadjem/" target="_blank" $transparent={transparent}><FaInstagram /></SocialIcon>
          <SocialIcon href="facebook.com/almadjem" target="_blank" $transparent={transparent}><FaFacebook /></SocialIcon>
        </MobileSocials>
      </MobileMenu>
    </Container>
  )
}
