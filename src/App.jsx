import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shortlets from "./pages/Shortlets";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import InnerShortlet from "./pages/InnerShortlet";
import Agents from "./pages/agents";
import InnerAgents, {
  Properties,
  Reviews,
  Overview,
} from "./pages/innerAgents";
import Listings from "./pages/listing";
import ListingDetails from "./pages/ListingDetails";
import ForgotPassword from "./pages/ForgotPassword";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="main relative">
      {/* nav should be here */}
      <Nav />

      {/* main content should be here */}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/shortlet" element={<Shortlets />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/innershortlet/:id" element={<InnerShortlet />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/listing/:id" element={<ListingDetails />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<InnerAgents />}>
          <Route index element={<Overview />} />
          <Route path="properties" element={<Properties />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      {/* footer should be here */}
      <Footer />
    </div>
  );
}

export default App;
