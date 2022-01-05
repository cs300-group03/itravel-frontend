import './App.css'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ServiceCard from './components/service-card'
import ScheduleCard from './components/schedule-card/creator-view';
// testing data
import schedule from './data/schedule'
import service from './data/service'
import PublishScheduleCard from './components/schedule-card/publish-view';


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
        <PublishScheduleCard schedule={schedule}/>
        <ScheduleCard schedule={schedule} />
        <Routes>
          <Route path="/" element="" />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
