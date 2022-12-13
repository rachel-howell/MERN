import './App.css';
import AuthorList from './components/AuthorList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorList />} />
          <Route path="/new" element={<AuthorForm />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
