
import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Shortlets from './pages/Shortlets';
import InnerShortlet from './pages/InnerShortlet';

import Agents from './pages/agents';
import InnerAgents, { Properties, Reviews, Overview } from './pages/innerAgents';

import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import ForgotPassword from './pages/ForgotPassword';

import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactUs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Faqs from "./pages/Faq";

import Listing from './pages/listing-updated/Listing';
import InnerListing from './pages/listing-updated/InnerListing';

import NotFound from './pages/NotFound';
import PostProperties from './pages/PostProperties';
import Dashboard from './components/dashboard/Dashboard';


// import ForgotPassword from './pages/ForgotPassword';
// import PostProperties from './pages/PostProperties';
// import EditProperty from './pages/EditProperty';
// import { Reviews } from './pages/innerAgents';

function App() {
  return (
    <div className="main relative">
      <ScrollToTop />
      <Nav />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/shortlet" element={<Shortlets />} />
        <Route path="/innershortlet/:id" element={<InnerShortlet />} />

        {/* Listings */}
        <Route path="/listings" element={<Listing />} />
        <Route path="/innerlisting/:id" element={<InnerListing />} />

        {/* Agents */}
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<InnerAgents />}>
          <Route index element={<Overview />} />
          <Route path="properties" element={<Properties />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        {/* Static pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<Faqs />} />

        {/* Property posting */}
        <Route path="/post-property" element={<PostProperties />} />

        {/* Dashbord */}
         <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

