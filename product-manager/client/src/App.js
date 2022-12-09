import './App.css';
import ProductDetails from './components/ProductDetails';
import ProductFormAndList from './components/ProductFormAndList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/home" element={<ProductFormAndList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
