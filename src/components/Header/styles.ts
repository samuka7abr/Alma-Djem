import styled from 'styled-components'

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 7rem;
	padding: 0 2rem;
	background: #FFFFFF;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
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
	gap: 6rem;
`

export const SocialLink = styled.a`
	position: relative;
	font-size: 1.6rem;
	color: rgb(63, 63, 63);
	transition: color 0.2s ease;

	&::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0%;
		height: 1px;
		background-color: rgb(63, 63, 63);
		transition: width 0.3s ease;
	}

	&:hover {
		color: rgb(40, 40, 40);

		&::after {
			width: 100%;
		}
	}
`


export const Socials = styled.div`
	display: flex;
	align-items: center;
	margin-right: 2rem;
	gap: 6rem;
`

export const SocialIcon = styled.a`
	font-size: 1.6rem;
	color:rgb(63, 63, 63);
	transition: transform 0.2s ease;

	&:hover {
		transform: scale(1.2);
	}
`
