import './App.css'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ServiceCard from './components/service-card'
import ServiceProviderProfilePage from './pages/profile/service-provider'
import CreateServicePage from './pages/create-service'
import ServiceInfoPage from './pages/service-info'
import PublishScheduleCard from './components/schedule-card/publish-view'
import ScheduleCard from './components/schedule-card/creator-view'
import TravelerProfile from './pages/profile/traveler-profile'
import ScheduleCalendar from './components/schedule-calendar/schedule-calendar'
import LoginPage from './pages/login'

// testing data
import schedule from './data/schedule'
import service from './data/service'
import user from './data/user'
import SchedulePage from './pages/schedule-page'
import CreateSchedulePage from './pages/create-schedule'

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#F4A442',
    },
    secondary: {
      main: '#125C13',
    },
    neutral: {
      main: '#ffffff',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header user ={true}></Header>
        <Routes>
          <Route path="/" element={<TravelerProfile user={user} />} />
          <Route path="/create-schedule" element={<CreateSchedulePage />} />
          <Route path="/schedule" element={<SchedulePage schedule={schedule}/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
