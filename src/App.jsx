
import './App.css';
import Navbar1 from './components/navbar/nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop"
import Login from './pages/login';
import Cart from './pages/cart';
import Shopcategory from './pages/shopcategory'
import Footer from './components/footer/footer'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import Product from './pages/product'
function App() {
  return (

    <div className="App">


  <Router>
        <Navbar1 />
        <Routes>

          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>} />
          <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>} />
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/product' element={<Product />} />
          <Route path=':productId' element={<Product />} />


        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
