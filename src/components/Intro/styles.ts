import styled, { keyframes } from 'styled-components'

const fadeInUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(20px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`

const floatAndMorph = keyframes`
	0% {
		opacity: 0;
		transform: translateY(40px) scaleY(0.8);
	}
	25% {
		opacity: 0.8;
		transform: translateY(20px) scaleY(1.1);
	}
	50% {
		opacity: 1;
		transform: translateY(0px) scaleY(1.4);
	}
	75% {
		opacity: 0.8;
		transform: translateY(-20px) scaleY(1);
	}
	100% {
		opacity: 0;
		transform: translateY(-30px) scaleY(0.9);
	}
`

const blink = keyframes`
	0%, 100% { opacity: 0.1; transform: translateY(0); }
	50%      { opacity: 1; transform: translateY(6px); }
`

export const IntroContainer = styled.section`
	position: relative;
	width: 100%;
	height: 100vh;
	background-color: #F0048A;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const Wave = styled.div<{
	color: string
	height: string
	top: string
	delay: string
	duration: string
}>`
	position: absolute;
	width: 200%;
	height: ${({ height }) => height};
	top: ${({ top }) => top};
	left: -50%;
	background-color: ${({ color }) => color};
	border-radius: 50% 50% 0 0 / 100% 100% 0 0;
	opacity: 0;
	animation: ${floatAndMorph} ${({ duration }) => duration} ease-in-out infinite;
	animation-delay: ${({ delay }) => delay};
	transform-origin: center;
	z-index: 1;
`

export const LogoWrapper = styled.div`
	z-index: 10;

	img {
		height: 28rem;
		opacity: 0;
		animation: ${fadeInUp} 1.6s ease-out forwards;
	}
`


export const ArrowWrapper = styled.div`
	z-index: 10;
	margin-top: 2rem;

	span {
		display: inline-block;
		font-size: 8rem;
		color: #111;
		animation: ${blink} 1.5s ease-in-out infinite;
	}
`
