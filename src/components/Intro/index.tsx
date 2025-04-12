import { IntroContainer, LogoWrapper, Wave, ArrowWrapper } from './styles'
import logo from '../../assets/logo.png'

export function Intro() {
	return (
		<IntroContainer>
			<Wave color="#FFF697" height="12rem" top="5%" delay="0s" duration="11s" />
			<Wave color="#EC4E31" height="16rem" top="25%" delay="1s" duration="9s" />
			<Wave color="#353190" height="14rem" top="50%" delay="3s" duration="13s" />
			<Wave color="#FFF697" height="18rem" top="70%" delay="0.5s" duration="10s" />
			<Wave color="#EC4E31" height="10rem" top="85%" delay="2s" duration="12s" />

			<LogoWrapper>
				<img src={logo} alt="Logo Almad'Jem" />
			</LogoWrapper>

			<ArrowWrapper>
				<span>↓</span>
			</ArrowWrapper>
		</IntroContainer>
	)
}
