import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userInfo } from "../components/atom/user";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [, setUser] = useRecoilState(userInfo);
  const navigate = useNavigate();

  // ✅ Base URL for backend API
  const BASE_URL = "https://backend-k0k7.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/login`, {
        email,
        password,
      });

      if (response.data && response.data.success) {
        const user = response.data.data; // Adjust depending on backend structure

        // ✅ Save user info globally
        setUser({ isLoggedIn: true, data: user });

        // ✅ Redirect based on account type
        switch (user.account_type?.toLowerCase()) {
          case "tenant":
            navigate("/");
            break;
          case "landlord":
            navigate("/post-property");
            break;
          case "agent":
            navigate("/agents");
            break;
          default:
            navigate("/");
            break;
        }
      } else {
        alert("Invalid credentials. Please check your email and password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your credentials or try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md mx-auto bg-card border border-border rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2 font-sora text-left">
            Login to your Account
          </h1>
          <p className="text-muted-foreground text-sm font-medium text-left font-inter text-[#b9b9b9]">
            Login to your account to unlock benefits
          </p>
        </div>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-4 font-inter text-[14px] font-semibold">
            <Link
              to="/forgot-password"
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border border-input text-primary focus:ring-2 focus:ring-ring"
            />
            <label
              htmlFor="remember"
              className="ml-3 text-sm text-foreground cursor-pointer font-inter font-[14px]"
            >
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="text-white w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors mb-6"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-card px-4 text-muted-foreground font-inter font-normal decoration-none">
              Or Continue With
            </span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="h-12 flex items-center justify-center border border-input bg-background hover:bg-accent text-foreground font-medium rounded-lg transition-colors">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign in with Google
          </button>

          <button className="h-12 flex items-center justify-center border border-input bg-background hover:bg-accent text-foreground font-medium rounded-lg transition-colors">
            <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
          </button>
        </div>

        {/* Terms Text */}
        <div className="text-left text-xs text-muted-foreground font-inter text-[#565658] text-[12px] mb-4">
          By registering, you accept our terms of use and privacy and agree that
          we and our selected partners may contact you with relevant offers and
          services.
        </div>

        {/* Register Link */}
        <div className="text-center">
          <span className="text-sm text-muted-foreground text-[14px] font-inter">
            Don't have an account?{" "}
          </span>
          <Link
            to="/signup"
            className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
