import './App.css';
import AuthorList from './components/AuthorList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthorForm from './components/AuthorForm';
import UpdateAuthorForm from './components/UpdateAuthorForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorList />} />
          <Route path="/new" element={<AuthorForm />} />
          <Route path="/edit/:id" element={<UpdateAuthorForm />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
