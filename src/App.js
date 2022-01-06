import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LandingPage } from './pages/landing-page';
import LoginPage from './pages/login'
import Home from './pages/Home';
import { SignUpPage } from './pages/sign-up';
import { VerifyPage } from './pages/verify';
import React from 'react';

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
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} /> 
            {/* <Route
              path="/profile"
              element={
                user.type === user_type.TRAVELLER ? (
          <Header user={true} />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route
              path="/profile"
              element={
                user.type === user_type.TRAVELLER ? (
                  <TravelerProfile user={user} />
                ) : (
                  <ServiceProviderProfilePage user={user} />
                )
              }
            />
            <Route path="/create-schedule" element={<CreateSchedulePage />} />
            <Route path="/schedule" element={<SchedulePage schedule={schedule}/>}/>
            <Route path="/create-service" element={<CreateServicePage />} />
            <Route
              path="/service/service-id"
              element={<ServiceInfoPage service={service} />}
            /> */}
            <Route path="/landing" element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/verify" element={<VerifyPage/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App;
