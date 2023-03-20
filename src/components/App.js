import React from 'react'
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home.js'
const App = () => {


  return (
    <div id="main">
      <Header />
      <Home />
    </div>
  )
}


export default App;
