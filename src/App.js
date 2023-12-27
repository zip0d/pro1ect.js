import Header from "./components/Header";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  './App.css'
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsListPage from "./pages/ProductsListPage";
import SingleProductPage from "./pages/SIngleProductPage";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (

      <Router>
    <div className= 'content'>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/categories" element={<CategoriesPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
        <Route path="/products/all" element={<ProductsListPage type='all'/>}/>
        <Route path="/products/sales" element={<ProductsListPage type='sale'/>}/>
        <Route path="/category/:id" element={<ProductsListPage type='categories'/>}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
      <Footer/>
    </div>
  </Router>

  );
}

export default App;
