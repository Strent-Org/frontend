import { useState } from "react";
import { userInfo } from "../components/atom/user";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useTransition } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = "https://backend-k0k7.onrender.com/api";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    accountType: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [, setUser] = useRecoilState(userInfo);
  const redir = useNavigate();
  const [isPending, startTransition] = useTransition();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, accountType: value }));
    if (errors.accountType) {
      setErrors((prev) => ({ ...prev, accountType: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.accountType)
      newErrors.accountType = "Account type must be selected";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    else if (formData.fullName.trim().length < 5)
      newErrors.fullName = "Full name must be at least 5 characters long";
    else if (formData.fullName.trim().split(/\s+/).length < 2)
      newErrors.fullName = "Full name must contain at least 2 words";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";
    else if (!/[a-z]/.test(formData.password))
      newErrors.password = "Password must contain a lowercase letter";
    else if (!/[A-Z]/.test(formData.password))
      newErrors.password = "Password must contain an uppercase letter";
    else if (!/\d/.test(formData.password))
      newErrors.password = "Password must contain a number";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    else if (!phoneRegex.test(formData.phoneNumber))
      newErrors.phoneNumber = "Phone number must be exactly 10 digits";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newUser = {
      name: formData.fullName.trim(),
      email: formData.email.trim(),
      password: formData.password,
      password_confirmation: formData.confirmPassword,
      account_type: formData.accountType?.toLowerCase(),
      phone: formData.phoneNumber.trim(),
      dial_code: "+234",
    };

    console.log("Signup Payload:", newUser);

    Object.keys(newUser).forEach((key) => {
      if (!newUser[key]) console.warn(`${key} is empty`);
    });

    try {
      const response = await axios.post(`${API_BASE_URL}/register`, newUser, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data?.success) {
        alert("Account created successfully!");
        startTransition(() => {
          setUser({ isLoggedIn: true, data: response.data });
          if (formData.accountType === "Tenant") redir("/");
          else if (formData.accountType === "Landlord") redir("/post-property");
          else if (formData.accountType === "Agent") redir("/agents");
        });
      }
    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
      alert(
        error.response?.data?.detail?.[0]?.msg ||
          "Signup failed. Check all fields."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md mx-auto bg-card border border-border rounded-lg shadow-lg p-8 my-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2 text-left font-sora">
            Register Now
          </h1>
          <p className="text-muted-foreground text-sm font-medium text-left font-inter text-[#b9b9b9]">
            Create an account on Strent for Exclusive Benefits
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <select
              name="accountType"
              value={formData.accountType}
              onChange={(e) => handleSelectChange(e.target.value)}
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.accountType ? "border-error" : "border-input"
              } cursor-pointer text-[#B9B9B9] bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            >
              <option value="">Select Account Type</option>
              <option value="Landlord">Landlord</option>
              <option value="Tenant">Tenant</option>
              <option value="Agent">Agent</option>
            </select>
            {errors.accountType && (
              <p className="text-error text-sm mt-1">{errors.accountType}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.fullName ? "border-error" : "border-input"
              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.fullName && (
              <p className="text-error text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.email ? "border-error" : "border-input"
              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.password ? "border-error" : "border-input"
              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.password && (
              <p className="text-error text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.confirmPassword ? "border-error" : "border-input"
              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.confirmPassword && (
              <p className="text-error text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div className="flex gap-2">
            <div className="text-[#565658] w-20 h-12 px-2 rounded-lg border border-input bg-background flex items-center justify-center text-sm text-muted-foreground">
              +234
            </div>
            <div className="flex-1">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter Phone Number"
                maxLength="10"
                className={`w-full h-12 px-4 rounded-lg border ${
                  errors.phoneNumber ? "border-error" : "border-input"
                } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
              />
            </div>
          </div>
          {errors.phoneNumber && (
            <p className="text-error text-sm mt-1">{errors.phoneNumber}</p>
          )}

          <div>
            <div className="flex items-center p-3 border border-input rounded-lg bg-background">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                className="w-4 h-4 rounded border border-input text-brand-primary focus:ring-2 focus:ring-brand-primary mr-3"
              />
              <label className="text-sm text-foreground text-[14px] font-inter text-[#1E1E1E]">
                I'm not a robot
              </label>
              <div className="ml-auto text-xs text-muted-foreground">
                reCAPTCHA
              </div>
            </div>
            {errors.agreeToTerms && (
              <p className="text-error text-sm mt-1">{errors.agreeToTerms}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-[#4b3dfe] hover:bg-brand-primary-hover text-white font-medium rounded-lg transition-colors"
          >
            Register Now
          </button>

          <div className="text-left text-xs text-muted-foreground font-inter text-[#565658] text-[12px]">
            By registering, you accept our terms of use and privacy and agree
            that we and our selected partners may contact you with relevant
            offers and services.
          </div>

          <div className="text-center">
            <span className="text-sm text-muted-foreground text-[14px] font-inter">
              Already have an account?{" "}
            </span>
            <Link
              to="/login"
              className="font-inter text-[14px] text-[#4438E7] hover:text-brand-primary-hover font-medium transition-colors"
            >
              Login Now
            </Link>
          </div>

          {isPending && "Signup successful"}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
