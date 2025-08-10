// import { Link } from "react-router-dom";
// import logo from "../assets/images/strent-logo.svg";

// const Navbar = () => {
//   return (
//     <header className="bg-white shadow-sm">
//       <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         {/* <div className="text-2xl font-bold text-[#4B3DFE]">
//           LOGO
//         </div> */}
//         <Link to="/" className="flex items-center">
//           <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
//         </Link>

//         {/* Menu Links */}
//         <ul className="flex space-x-6 text-sm font-normal text-[#1E1E1E]">

//           {["about", "listings", "shortlet", "agents", "contact"].map(
//             (page, index) => (
//               <li key={index}>
//                 <Link
//                   to={`/${page}`}
//                   className="hover:text-[#4B3DFE] transition-colors duration-200"
//                 >
//                   {page.charAt(0).toUpperCase() +
//                     page.slice(1).replace("-", " ") +
//                     (page === "contact" ? " Us" : "")}
//                 </Link>
//               </li>
//             )
//           )}
//         </ul>

//         {/* Auth & CTA */}
//         <div className="flex items-center space-x-4">
//           <Link
//             to="/login"
//             className="text-sm text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"

//           >
//             Log In
//           </Link>
//           <Link
//             to="/signup"
//             className="text-sm text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"

//           >
//             Sign Up
//           </Link>
//           <Link
//             to="/post-property"
//             className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-md text-sm font-normal transition-colors duration-200"

//           >
//             Post Property
//           </Link>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/strent-logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-normal text-[#1E1E1E]">
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

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="text-sm text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"
          >
            Sign Up
          </Link>
          <Link
            to="/post-property"
            className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-md text-sm font-normal transition-colors duration-200"
          >
            Post Property
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#1E1E1E] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <ul className="space-y-2 text-sm font-normal text-[#1E1E1E]">
            {["about", "listings", "shortlet", "agents", "contact"].map(
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

          {/* Auth & CTA in mobile menu */}
          <div className="flex flex-col gap-3 pt-3 border-t">
            <Link
              to="/login"
              className="text-sm text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="text-sm text-[#1E1E1E] font-normal hover:text-[#4B3DFE]"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              to="/post-property"
              className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-md text-sm font-normal transition-colors duration-200 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Post Property
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
