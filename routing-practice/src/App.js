import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Input from './components/Input';
import SimpleInput from './components/SimpleInput';

function App() {

  const simpleInput = "/2";
  const fancyInput = "2/blue/red";

  return (
    <div className="App">
      <BrowserRouter>
        <p>
          <Link to="/home">Home</Link>
          |
          <Link to={ simpleInput }>Word or Number</Link>
          |
          <Link to={ fancyInput }>Fancy Word or Number</Link>
        </p>
        <Routes>
          <Route path="/home" element={ <Home />} />
          <Route path="/:simInput" element={ <SimpleInput />} />
          <Route path="/:input/:text/:bg" element={ <Input />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
