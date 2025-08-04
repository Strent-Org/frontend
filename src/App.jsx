
import './App.css'
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Nav from  './components/Nav';
function App() {
  return (

    <div className='main'>
      {/* nav should be here */}
       <nav />
      {/* section should he here rout */}
      <Routes>
        section i.e home
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* footer should be here */}
      <Footer />
    </div>

  )
}

export default App
