import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Input from './components/Input';

function App() {

  const input = 2;

  return (
    <div className="App">
      <BrowserRouter>
        <p>
          <Link to="/home">Home</Link>
          |
          <Link to={ input }>Word or Number</Link>
        </p>
        <Routes>
          <Route path="/home" element={ <Home />} />
          <Route path="/:input" element={ <Input />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
