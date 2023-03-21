import React from 'react'
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from './Product/Product';
const App = () => {


  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}


export default App;
