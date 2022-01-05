import './App.css'
import Header from './components/Header/Header'
import Footer from './components/footer/footer'
import ReactCalendar from './components/calendar/calendar'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ServiceCard from './components/service-card'

// testing data
import service from './data/service'

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
      <Router>
        <Header user={false} /> 
        <ServiceCard service={service} />
        <Routes>
          <Route path="/" element="" />
        </Routes>
        <ReactCalendar/>
      </Router>
    </ThemeProvider>
  )
}

export default App