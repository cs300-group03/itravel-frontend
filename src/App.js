import './App.css'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ServiceCard from './components/service-card'
import ServiceProviderProfilePage from './pages/profile/service-provider'

// testing data
import service from './data/service'
import user from './data/user'
import CreateServicePage from './pages/create-service'

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#F4A442',
    },
    secondary: {
      main: '#125C13',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CreateServicePage />
    </ThemeProvider>
  )
}

export default App
