import { Link } from "react-router-dom";
// import logo from "../assets/images/strent-logo.svg";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-[32px] font-bold text-[#4B3DFE]">
          LOGO
        </div>
        {/* <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </Link> */}

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
          <Link
            to="/post-property"
            className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-md text-base font-normal transition-colors duration-200"
          >
            Post Property
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;