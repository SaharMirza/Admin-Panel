import './App.css';
import Home from './Pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NavbarComp}  from './Components/Navbar'
import Sidebar from './Components/sidebar'
import User from './Pages/User'
import Orders from './Pages/Orders'
import Products from './Pages/Products'
import Categories from './Pages/Categories'
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <Router>
    <div >   
       {/* NavBar */}
       {/* <NavbarComp />    */}
       <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Users" element={<User />} />
        <Route exact path="/Orders" element={<Orders />} />
        <Route exact path="/Products" element={<Products />} />
        <Route exact path="/Categories" element={<Categories />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
