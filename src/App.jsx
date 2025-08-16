
import './App.css'
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Shortlets from './pages/Shortlets'
import Nav from './components/Nav';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import InnerShortlet from './pages/InnerShortlet';
import Agents from './pages/agents';
import InnerAgents from './pages/innerAgents';
import { Properties, Reviews, Overview } from './pages/innerAgents';
import ChatIcon from './components/chat-icon';
function App() {
  return (

    <div className='main relative'>
      {/* nav should be here */}
      <Nav />
      {/* main content should be here */} 
      {/* section should he here rout */}
      <ChatIcon />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={< SignupForm />} />
        <Route path="/shortlet" element={<Shortlets />} />
        <Route path="/innershortlet/:id" element={<InnerShortlet />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<InnerAgents />}>
          <Route index element={<Overview />} />
          <Route path="properties" element={<Properties />} />
          <Route path="reviews" element={<Reviews />} /> 
        </Route>
      </Routes>
      {/* footer should be here */}
      <Footer />
    </div>

  )
}

export default App;
