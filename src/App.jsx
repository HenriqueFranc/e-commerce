import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<ProductsList/>}></Route>
        <Route path='/:id' element={<ProductDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
