import { IntroContainer, Wave, LogoWrapper, ArrowWrapper } from './styles'
import logo from '../../assets/logoIcon.png'

interface IntroProps {
	onScrollDown: () => void;
}

export function Intro({ onScrollDown }: IntroProps) {
	return (
		<IntroContainer>
			<Wave $color="#E31B15" height="12rem" top="5%" delay="0s" duration="11s" />
			<Wave $color="#003D24" height="16rem" top="25%" delay="1s" duration="9s" />
			<Wave $color="#000000" height="18rem" top="70%" delay="0.5s" duration="10s" />
			<Wave $color="#E31B15" height="10rem" top="85%" delay="2s" duration="12s" />
			<Wave $color="#FFF697" height="14rem" top="50%" delay="3s" duration="13s" />

			<LogoWrapper>
				<img src={logo} alt="Logo Almad'Jem" />
			</LogoWrapper>

			<ArrowWrapper onClick={onScrollDown}>
				<span>↓</span>
			</ArrowWrapper>
		</IntroContainer>
	)
}
