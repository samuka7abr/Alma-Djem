import { FaSpotify, FaYoutube, FaDeezer, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Container, Logo, Actions, SocialLink, Socials, SocialIcon } from './styles';
import logo from '../../assets/logo.png'

export function Header() {
	return (
		<Container>
			<Logo>
				<img src={logo} alt="Logo Almad'Jem" />
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
		</Container>
	)
}
