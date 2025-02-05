import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/Header'
import Navigation from './components/navigation/Navigation'
import Dashboard from './pages/dashboard/Dashboard'
import './styles/globals.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Header />
		<Dashboard />
		<Navigation />
	</StrictMode>
)
