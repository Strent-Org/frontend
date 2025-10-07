import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/strent-logo.svg";
import { useRecoilState } from "recoil";
import { userInfo } from "./atom/user";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  let [user, setUser] = useRecoilState(userInfo);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function handleSignout() {
    setUser({ isLoggedIn: false, data: {} });
  }

  // handle post property navigation
  function handlePostProperty() {
    if (
      user.isLoggedIn &&
      (user.data.accountType === "Landlord" ||
        user.data.accountType === "Agent")
    ) {
      navigate("/post-property");
    } else {
      navigate("/login");
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto md:px-20 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Links (desktop) */}
        <ul className="hidden md:flex space-x-6 text-base font-normal text-[#1E1E1E]">
          {["about Us", "listings", "shortlet", "agents", "contact"].map(
            (page, index) => (
              <li key={index}>
                <Link
                  to={`/${page}`}
                  className="hover:text-[#4B3DFE] transition-colors duration-200"
                >
                  {page.charAt(0).toUpperCase() +
                    page.slice(1).replace("-", " ") +
                    (page === "contact" ? " Us" : "")}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Auth & CTA (desktop only) */}
        <div className="hidden md:flex items-center space-x-4">
          {!user.isLoggedIn && (
            <>
              <Link
                to="/login"
                className="text-base text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="text-base text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"
              >
                Sign Up
              </Link>
            </>
          )}

          {user.isLoggedIn && (
            <Link onClick={handleSignout} to="/">
              Signout
            </Link>
          )}

          {/* Always show Post Property button */}
          <button
            onClick={handlePostProperty}
            className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-md text-base font-normal transition-colors duration-200"
          >
            Post Property
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-base font-normal text-[#1E1E1E]">
            {["about", "listings", "shortlet", "agents", "contact", "post-property"].map(
              (page, index) => (
                <li key={index}>
                  <Link
                    to={`/${page}`}
                    className="block hover:text-[#4B3DFE] transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    {page.charAt(0).toUpperCase() +
                      page.slice(1).replace("-", " ") +
                      (page === "contact" ? " Us" : "")}
                  </Link>
                </li>
              )
            )}
          </ul>

          <div className="mt-4 flex flex-col space-y-3">
            {!user.isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="text-base text-[#1E1E1E] hover:text-[#4B3DFE]"
                  onClick={() => setMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="text-base text-[#1E1E1E] hover:text-[#4B3DFE]"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <Link
                onClick={() => {
                  handleSignout();
                  setMenuOpen(false);
                }}
                to="#"
                className="text-base text-[#1E1E1E] hover:text-[#4B3DFE]"
              >
                Signout
              </Link>
            )}

            {/* show Post Property */}
            <button
              onClick={() => {
                handlePostProperty();
                setMenuOpen(false);
              }}
              className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-md text-base font-normal transition-colors duration-200"
            >
              Post Property
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
