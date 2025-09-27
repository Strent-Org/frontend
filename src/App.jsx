import './App.css'
import './index.css';
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

// import Listings from './pages/listing';
// import ListingDetails from './pages/listingDetails';



import ForgotPassword from './pages/ForgotPassword';
import PostProperties from './pages/PostProperties';
// import EditProperty from './pages/EditProperty';
// import { Reviews } from './pages/innerAgents';


import AboutUs from './pages/AboutUs';
import Contact from './pages/ContactUs';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Faqs from "./pages/Faq";
import Listing from './pages/listingTestPages/Listing';
import InnerListing from './pages/listingTestPages/InnerListing';

function App() {
  return (
    <div className="main relative">

      {/* chat bot */}
      <img
          className="hidden lg:block fixed right-6 bottom-6 w-12 h-12 z-50 cursor-pointer"
          src="/chat.png"
          alt="chat icon"
        />
      {/* nav should be here */}
      <Nav />

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/shortlet" element={<Shortlets />} />
        <Route path="/about Us" element={<AboutUs />} />
        <Route path="/innershortlet/:id" element={<InnerShortlet />} />

        {/* <Route path="/listings" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetails />} /> */}
        <Route path="/listings" element={<Listing />} />
        <Route path="/innerlisting/:id" element={<InnerListing />} />

        <Route path="/Contact" element={<Contact />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<InnerAgents />}>
        

          <Route index element={<Overview />} />
          <Route path="properties" element={<Properties  />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="/agents/:id/reviews" element={<Reviews />} />
          
        </Route>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      {/* footer should be here */}
      <Footer />
    </div>
  );
}

export default App;
