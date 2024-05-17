import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import {BrowserRouter,Routes,Router, Route} from 'react-router-dom'
import { items } from "./components/Data";



const App=()=>{
 const [data,setData]=useState([...items])
 const [cart,setCart]=useState([])
  return(
    <>
    <BrowserRouter>
    <Navbar cart={cart} setData={setData}/>
    <Routes>
      <Route path="/"  element={<Product cart={cart} setCart={setCart} items={data}/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/search/:term"  element={<SearchItem/>}/>
      <Route path="/Cart"  element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
    <Product/>
    </BrowserRouter>
    </>

  )
}

export default App;

