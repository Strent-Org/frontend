
import './App.css'
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
      </Routes>
      {/* footer should be here */}
      footer
    </div>

  )
}

export default App
