import './App.css'
import Header from './components/Header/Header'
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import ServiceCard from './components/service-card'
import ServiceProviderProfilePage from './pages/profile/service-provider'
import CreateServicePage from './pages/create-service'
import ServiceInfoPage from './pages/service-info'
import PublishScheduleCard from './components/schedule-card/publish-view';
import ScheduleCard from './components/schedule-card/creator-view';
//import TravelerProfile from './pages/profile/traveler-profile'
import Hero  from './components/HeroSection/HeroSection'
// testing data
import schedule from './data/schedule'
import service from './data/service'
import user from './data/user'
import { DesignServicesRounded, HevcRounded } from '@mui/icons-material'
import Services from './components/Recommend/RecommendLocations'
import Home from './pages/Home'

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
        <Home/>
             {/* <TravelerProfile user={user}></TravelerProfile>
   <PublishScheduleCard schedule={schedule}/>
        <ScheduleCard schedule={schedule} />
        <ServiceCard service={service}></ServiceCard> 
        <Routes>
          <Route path="/" element="" />
        </Routes>
        <ReactCalendar/>*/}
      </Router>
      
    </ThemeProvider>
  )
}

export default App