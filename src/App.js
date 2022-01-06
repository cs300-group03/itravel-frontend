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

// testing data
import schedule from './data/schedule'
import service from './data/service'
import user from './data/user'

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#F4A442',
    },
    secondary: {
      main: '#125C13',
    },
    light: {
      main: '#767676',
    },
    dard: {
      main: '#484848',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header user={true} />
        {/* <ScheduleCalendar /> */}
        {/* <PublishScheduleCard schedule={schedule} /> */}
        {/* <ScheduleCard schedule={schedule} /> */}
        {/* <ServiceCard service={service}></ServiceCard> */}
        <Routes>
          <Route path="/" element="" />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
