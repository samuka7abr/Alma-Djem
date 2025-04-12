import styled from 'styled-components'

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 8rem;
	padding: 0 2rem;
	background: linear-gradient(
		to right,
		#ee028b 0%,
		rgba(253, 201, 240, 1) 30%,
		rgba(253, 201, 240, 1) 70%,
		#ee028b 100%
	);
	border-bottom: solid 1px rgb(68, 68, 68);
	display: flex;
	align-items: center;
	justify-content: space-between;
	backdrop-filter: blur(10px);
	z-index: 10;
`


export const Logo = styled.div`
	display: flex;
	align-items: center;
	margin-left: 15px;

	img {
		height: 6rem;
		width: auto;
		object-fit: contain;
	}
`

export const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 4rem;
`

export const SocialLink = styled.a`
	font-size: 1.6rem;
	color: #000
`

export const Socials = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
`

export const SocialIcon = styled.a`
	font-size: 2.4rem;
	color:rgb(0, 0, 0);
	transition: transform 0.2s ease;

	&:hover {
		transform: scale(1.1);
	}
`
