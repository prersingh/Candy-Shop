import React from 'react'
import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {

  const [products,setProducts] = useState([])
  const [cartCount,setCartCount] = useState(0)


  const addProduct = (data) => {
    setProducts((prevProduct) => [...prevProduct,data])
  }

  const addToCart = () => {
    setCartCount((prevCount) => prevCount+1)
  }

  const addToCart2 = () => {
    setCartCount((prevCount) => prevCount+2)
  }

  const addToCart3 = () => {
    setCartCount((prevCount) => prevCount+3)
  }

  const deleteCart = (product) => {
    setProducts(products.filter((p) => p!== product));
    setCartCount((prevCount) => prevCount-1)
  }

  return (
    <>
    <Header cartCount={cartCount}/>
    <Form addProduct={addProduct} addToCart={addToCart} addToCart2={addToCart2} addToCart3={addToCart3} />
    <Products products={products} addToCart={addToCart} addToCart2={addToCart2} addToCart3={addToCart3}  deleteCart={deleteCart}/>
    </>
  );
};

export default App;