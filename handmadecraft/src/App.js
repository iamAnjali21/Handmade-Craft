
import React from "react";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import Navbar from "./pages/Navbar";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Viewdetails from "./pages/Viewdetails";
import ProductDetails from "./pages/ProductDetails";
import BuyNowPage from "./pages/BuyNowPage";

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

function App() {
  return (
   <div>
  
    <Navbar/>
    <Routes>
      <Route path='/' element={<Index/>} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/view/:productId" element={<Viewdetails />} />
      <Route path="/buy" element={<BuyNowPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/contact' element={<Contact/>} />    
      
    </Routes>
  
    {/* <Index/> */}

   </div>
  
  );
}

export default App;
