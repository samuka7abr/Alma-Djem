import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	@font-face {
  		font-family: 'Akula';
  		src: url('/fonts/Akula.ttf') format('truetype');
  		font-weight: 400;
  		font-style: normal;
  		font-display: swap;
	}

	@font-face {
  		font-family: 'AlmaDjem';
  		src: url('/fonts/Butler_Black_Stencil.otf') format('opentype');
  		font-weight: normal;
  		font-style: normal;
  		font-display: swap;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		font-size: 62.5%; /* 1rem = 10px */
	}

	body {
		background-color: #FFFFFF;
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
