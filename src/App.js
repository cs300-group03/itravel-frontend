import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: '#F4A442'
    },
    secondary: {
      main: '#125C13'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Router>
          <Header user={false} />
          <Routes>
            <Route path='/' element=""/>
          </Routes>
        </Router>
    </ThemeProvider>
    
  );
}

export default App;
