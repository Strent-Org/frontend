
import './App.css'
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
function App() {


  return (

    <div className='main'>
      {/* nav should be here */}
      <Nav />
      
      {/* main content should be here */} 

       <Nav />
      {/* section should he here rout */}
      <Routes>
        section i.e home
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* footer should be here */}
      <Footer />
    </div>

  )
}

export default App
