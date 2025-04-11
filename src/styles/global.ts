import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		font-size: 62.5%; /* 1rem = 10px */
	}

	body {
		background-color: #000;
		color: #fff;
		font-family: 'Inter', sans-serif;
		font-size: 1.6rem;
		-webkit-font-smoothing: antialiased;
		scroll-behavior: smooth;
	}

	button {
		cursor: pointer;
		background: none;
		border: none;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul, li {
		list-style: none;
	}
`
