import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header user={true} />
      <Routes>
        <Route path='/' element=""/>
      </Routes>
    </Router>
  );
}

export default App;
