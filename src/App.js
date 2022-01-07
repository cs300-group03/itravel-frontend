import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LandingPage } from './pages/landing-page';
import LoginPage from './pages/login'
import Home from './pages/Home';
import { SignUpPage } from './pages/sign-up';
import { VerifyPage } from './pages/verify';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getProfile } from './services';
import { useDispatch } from "react-redux";
import { setUser } from './store/auth';
import { setAuthorized } from './store/auth';

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
    black: '#000000'
  },
  typography: {
    fontFamily: "Poppins"
  },
})

function App() {
  const isAuthorized = useSelector(state => state.auth.isAuthorized);
  const [trash, setTrash] = React.useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    async function firstAuthorize() {
      const response = await getProfile();
      if (response) {
        dispatch(setUser(response));
        dispatch(setAuthorized(true));
      } else {
        dispatch(setAuthorized(false));
      }
    };
    firstAuthorize();
  }, [trash]);

  const renderRoute = (route) => {
    let element;
    if (route.isPrivate) {
      if (isAuthorized) {
        element = route.element;
      } else {
        element = (<Navigate to='/landing'/>);
      }
    } else {
      if (isAuthorized) {
        element = (<Navigate to='/'/>);
      } else {
        element = route.element;
      }
    }
    return (<Route element={element} path={route.path}/>);
  }

  const routes = [
    {
      element: <LandingPage/>,
      path: '/landing',
      isPrivate: false,
    },
    {
      element: <Home/>,
      path: '/',
      isPrivate: true,
    },
    {
      element: <LoginPage/>,
      path: '/login',
      isPrivate: false,
    },
    {
      element: <SignUpPage/>,
      path: '/signup',
      isPrivate: false,
    },
    {
      element: <VerifyPage/>,
      path: '/verify',
      isPrivate: false,
    },
  ];

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {
              routes.map((route) => renderRoute(route))
            }
          </Routes>
        </Router>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App;
