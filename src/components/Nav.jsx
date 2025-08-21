import { Link } from "react-router-dom";
import logo from "../assets/images/strent-logo.svg";
import { useRecoilState } from "recoil";
import { userInfo } from "./atom/user";
import React from "react";

const Navbar = () => {
  let [user, setUser] = useRecoilState(userInfo);

  function handleSignout() {
    setUser({ isLoggedIn: false, data: {} })
  }



  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="text-[32px] font-bold text-[#4B3DFE]">
          LOGO
        </div> */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Menu Links */}
        <ul className="flex space-x-6 text-base font-normal text-[#1E1E1E]">
          {["about", "listings", "shortlet", "agents", "contact"].map(
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

        {/* Auth & CTA */}
        <div className="flex items-center space-x-4">
          {/* creating a login button that only shows when user is not logged in */}
          {/* if user is logged in, show signout button instead */}
          <li style={{ display: user.isLoggedIn ? 'none' : 'flex' }}>
            <Link
              to="/login"
              className="text-base text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"
            >
              Log In
            </Link>
          </li>


          {/* creating a signup button that only shows when user is not logged in */}
          {/* if user is logged in, show signout button instead */}
          <li style={{ display: user.isLoggedIn ? 'none' : 'flex' }}>
            <Link
              to="/signup"
              className="text-base text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"
            >
              Sign Up
            </Link>
          </li>


          {/* creating a signout button that only shows when user is logged in */}
          <li style={{ display: user.isLoggedIn ? 'flex' : 'none' }}>
            <Link onClick={() => handleSignout()} to='#'>Signout</Link>

          </li>
          
        
          {/* if user is a landlord or agent, show the post property button */}
          {user.isLoggedIn && (user.data.accountType === 'Landlord' || user.data.accountType === 'Agent') ? (
            <li style={{ display: 'flex' }}>
              <Link
                to="/post-property"
                className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-md text-base font-normal transition-colors duration-200"
              >
                Post Property
              </Link>
            </li>
          ) : null}

        </div>

      </nav>
    </header>
  );
};

export default Navbar;