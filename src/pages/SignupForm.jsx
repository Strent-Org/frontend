import { useState } from 'react';
import { userInfo } from '../components/atom/user';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useTransition } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    accountType: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
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
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, accountType: value }));
    if (errors.accountType) {
      setErrors((prev) => ({ ...prev, accountType: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Account type validation
    if (!formData.accountType) {
      newErrors.accountType = 'Account type must be selected';
    }

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 5) {
      newErrors.fullName = 'Full name must be at least 5 characters long';
    } else if (formData.fullName.trim().split(/\s+/).length < 2) {
      newErrors.fullName = 'Full name must contain at least 2 words';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one lowercase letter';
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password =
        'Password must contain at least one uppercase letter';
    } else if (!/\d/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be exactly 10 digits';
    }

    // Terms validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      /*  method 
             steps to preventmultiple sign up with same email
             > get all users
             >check if type email exist 
             > if it exist dont sign up else sign up
             */
      axios
        .get(`http://localhost:8080/User`)
        .then((response) => {
          const userExists = response.data.some(
            (user) => user.id === formData.email
          );
          if (userExists) {
            alert('Email already exists. Cannot sign up');
            console.log('Email already exists. Cannot sign up.');

            // Don't sign up
          } else {
            console.log('Email is unique. Signing up...');
            // Sign up logic here
            const newUser = {
              accountType: formData.accountType,
              fullName: formData.fullName,
              id: formData.email,
              password: formData.password,
              phoneNumber: formData.phoneNumber,
              agreeToTerms: formData.agreeToTerms,
            };

            axios
              .post(`http://localhost:8080/User`, newUser)
              .then((response) => {
                startTransition(() => {
                  setTimeout(() => {
                    setUser({ isLoggedIn: true, data: response.data });
                  }, 1000 );``
                  // redir
                  if(newUser.accountType === 'Tenant'){
                     console.log('Tenant signed up successfully');
                   redir('/');
                  
                  }else if(newUser.accountType === 'Landlord'){
                    redir('/posting')
                  }else{
                    redir('/agent')
                  }
                });

                console.log('User created:', response.data);
                alert('Account created successfully!');
              });
          }
        })
        .catch((error) => {
          console.error(error);
        });

      console.log('Form submitted:', formData);
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
          {/* Account Type */}
          <div>
            <select
              name="accountType"
              value={formData.accountType}
              onChange={(e) => handleSelectChange(e.target.value)}
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.accountType ? 'border-error' : 'border-input'
              } cursor-pointer text-[#B9B9B9] bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            >
              <option value="">Select Account Type</option>
              <option value="Landload">Landload</option>
              <option value="Tenant">Tenant</option>
              <option value="Agent">Agent</option>
            </select>
            {errors.accountType && (
              <p className="text-error text-sm mt-1">{errors.accountType}</p>
            )}
          </div>

          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.fullName ? 'border-error' : 'border-input'
              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.fullName && (
              <p className="text-error text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Email"
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.email ? 'border-error' : 'border-input'
              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter Password"
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.password ? 'border-error' : 'border-input'
              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.password && (
              <p className="text-error text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className={`w-full h-12 px-4 rounded-lg border ${
                errors.confirmPassword ? 'border-error' : 'border-input'
              } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
            />
            {errors.confirmPassword && (
              <p className="text-error text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex gap-2">
            <div className=" text-[#565658] w-20 h-12 px-2 rounded-lg border border-input bg-background flex items-center justify-center text-sm text-muted-foreground">
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
                  errors.phoneNumber ? 'border-error' : 'border-input'
                } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring`}
              />
            </div>
          </div>
          {errors.phoneNumber && (
            <p className="text-error text-sm mt-1">{errors.phoneNumber}</p>
          )}

          {/* reCAPTCHA */}
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

          {/* Register Button */}
          
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
              Already have an account?{' '}
            </span>
            <Link
              to="/login"
              className=" font-inter text-[14px] text-[#4438E7]  hover:text-brand-primary-hover font-medium transition-colors"
            >
              Login Now
            </Link>
          </div>
          {isPending && 'Signup successfully'}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
