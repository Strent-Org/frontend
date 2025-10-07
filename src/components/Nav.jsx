import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/strent-logo.svg";
import { useRecoilState } from "recoil";
import { userInfo } from "./atom/user";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  let [user, setUser] = useRecoilState(userInfo);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  console.log("User data in Navbar:", user?.data);

  function handleSignout() {
    setUser({ isLoggedIn: false, data: {} });
    navigate("/login");
  }

  function handlePostProperty() {
    if (user.isLoggedIn) {
      const accountType = user.data.user?.account_type?.toLowerCase();
      if (accountType === "landlord" || accountType === "agent") {
        navigate("/post-property");
      }
    } else {
      navigate("/login");
    }
  }

  function handleProfileClick() {
    if (!user.isLoggedIn) {
      navigate("/login");
      return;
    }

    const accountType = user.data.user?.account_type;

    if (accountType === "landlord") {
      navigate("/landlord-dashboard");
    } else if (accountType === "agent") {
      navigate("/agent-dashboard");
    } else if (accountType === "tenant") {
      navigate("/tenant-dashboard");
    } else {
      navigate("/profile");
    }
  }

  const displayName =
    user?.data?.user?.tenant?.name?.trim() ||
    user?.data?.user?.agent?.name?.trim() ||
    user?.data?.user?.landlord?.name?.trim() ||
    user?.data?.user?.email?.split("@")[0] ||
    "Profile";

  // Show Post Property:
  // - Always show if NOT logged in (redirects to login)
  // - Show if landlord or agent
  // - Hide if tenant
  const accountType = user?.data?.user?.account_type?.toLowerCase();
  const showPostProperty =
    !user.isLoggedIn ||
    (user.isLoggedIn &&
      (accountType === "landlord" || accountType === "agent"));

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto md:px-20 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-auto object-contain" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Menu Links (desktop) */}
        <ul className="hidden md:flex space-x-6 text-base text-[#1E1E1E]">
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

        {/* Auth & CTA Section */}
        <div className="hidden md:flex items-center space-x-5">
          {!user.isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-base text-[#1E1E1E] hover:text-[#4B3DFE]"
              >
                Log In
              </Link>
              <Link
                to="/signup"
                className="text-base text-[#1E1E1E] hover:text-[#4B3DFE]"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              {/* Profile Icon + Name */}
              <button
                onClick={handleProfileClick}
                className="flex items-center space-x-2 text-[#1E1E1E] hover:text-[#4B3DFE]"
              >
                <FaUserCircle className="text-2xl text-[#4B3DFE]" />
                <span className="text-base truncate max-w-[120px]">
                  {displayName}
                </span>
              </button>

              {/* Sign Out */}
              <button
                onClick={handleSignout}
                className="text-base text-[#1E1E1E] hover:text-red-500 transition-colors duration-200"
              >
                Sign Out
              </button>
            </>
          )}

          {/* Show Post Property if allowed */}
          {showPostProperty && (
            <button
              onClick={handlePostProperty}
              className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 text-base font-medium transition-colors duration-200"
            >
              Post Property
            </button>
          )}
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
              <>
                <button
                  onClick={() => {
                    handleProfileClick();
                    setMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-[#1E1E1E] hover:text-[#4B3DFE]"
                >
                  <FaUserCircle className="text-xl text-[#4B3DFE]" />
                  <span className="text-base">{displayName}</span>
                </button>
                <button
                  onClick={() => {
                    handleSignout();
                    setMenuOpen(false);
                  }}
                  className="text-base text-[#1E1E1E] hover:text-red-500 transition-colors duration-200"
                >
                  Sign Out
                </button>
              </>
            )}

            {/* Show Post Property if allowed */}
            {showPostProperty && (
              <button
                onClick={() => {
                  handlePostProperty();
                  setMenuOpen(false);
                }}
                className="bg-[#4B3DFE] hover:bg-[#352BB4] text-white px-4 py-2 rounded-md text-base transition-colors duration-200"
              >
                Post Property
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
