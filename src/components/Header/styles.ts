import styled from 'styled-components'

export const Container = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 6rem;
	padding: 0 2rem;
	background: rgba(0, 0, 0, 0.8);
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
		height: 4rem;
		width: auto;
		object-fit: contain;
	}
`


export const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`

export const SocialLink = styled.a`
	font-size: 1.4rem;
`

export const Burger = styled.button`
	font-size: 2.4rem;
    color: #FFFFFF
`
