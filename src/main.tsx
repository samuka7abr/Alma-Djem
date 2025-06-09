import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CaptureFormPage } from './pages/CaptureForm'
import { ThankYouPage } from './pages/ThankYou'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/capture-form" element={<CaptureFormPage />} />
					<Route path="/thank-you" element={<ThankYouPage />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
)
