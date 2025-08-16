import './App.css'
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Listings from './pages/listing';
import ListingDetails from './pages/ListingDetails';

function App() {
  return (
    <div className='main'>
      {/* nav should be here */}
      <Nav />
      
      {/* main content should be here */} 

      {/* section should be here route */}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
      </Routes>
      {/* footer should be here */}
      <Footer />
    </div>
  )
}

export default App