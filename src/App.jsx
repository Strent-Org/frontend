
import './App.css'
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
function App() {


  return (

    <div className='main'>
      {/* nav should be here */}
      Nav

      {/* section should he here rout */}
      <Routes>
        section i.e home
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
      {/* footer should be here */}
      footer
    </div>

  )
}

export default App
