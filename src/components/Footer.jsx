import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      // First, check if the email already exists in the database
      const checkResponse = await axios.get(
        `http://localhost:8080/newsletter-subscribers?email=${email}`
      );

      if (checkResponse.data.length > 0) {
        // If the email exists, set the status to 'exists' and stop
        setStatus("exists");
        return;
      }

      // If the email does not exist, proceed with the new subscription
      const postResponse = await axios.post(
        "http://localhost:8080/newsletter-subscribers",
        {
          email: email,
          subscribedAt: new Date().toISOString(),
        }
      );

      console.log("Successfully subscribed:", postResponse.data);
      setStatus("success");
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus("error");
    }
  };

  const year = new Date().getFullYear();
  return (
    <footer className="h-fit w-full px-[4rem] py-[4rem] sm:px-[9.6rem] sm:py-[4.5rem] bg-[#201A6B]">
      <div className="grid gap-11 grid-cols-1 sm:grid-cols-2 lg:flex lg:items-start">
        <div className="max-w-[20rem]">
          {/* <h3 className="text-2xl font-bold text-white mb-4 font-sora">LOGO</h3> */}
          {/* <img src="/strent-logo.svg" alt="Strent logo" className="h-16 sm:h-20 md:h-24 lg:h-26 w-auto m-0 p-0 block align-middle" /> */}
          <img
            src="/footerLogo.png"
            alt="Strent logo"
            className="h-10 w-auto block align-middle"
          />
          <p className="w-full h-fit text-white sm:text-sm text-xs font-inter tracking-[0.4%] leading-normal mt-4">
            Strent is a trusted platform for renting and booking shortlets in
            Nigeria. We connect you with verified listings, flexible payment
            options, and a secure experience. Whether you're staying short-term
            or settling in for longer.
          </p>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="sm:text-xl text-lg font-semibold text-white mb-4 font-sora leading-snug whitespace-nowrap">
            Quick Links
          </h3>
          <ul className="w-full h-fit text-white font-inter text-xs sm:text-sm leading-normal tracking-[0.4%]">
            <li className="mb-4">
              <a href="/about Us">About Us</a>
            </li>
            <li className="mb-4 whitespace-nowrap">
              <a href="/agents">Find an Agent</a>
            </li>
            <li className="mb-4 whitespace-nowrap">
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li className="whitespace-nowrap mb-4">
              <a href="/terms">Terms and Agreement</a>
            </li>
            <li>
              <a href="/faqs">FAQs</a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="sm:text-xl text-lg font-semibold text-white mb-4 font-sora leading-snug tracking-[1.12%] whitespace-nowrap">
            Contact Us
          </h3>
          <div className="w-full h-fit flex flex-col gap-2">
            <span className="text-white mb-4 font-inter text-xs sm:text-sm tracking-[0.4%] leading-normal">
              support@strent.ng
            </span>
            <span className="lg:whitespace-nowrap text-white mb-4 font-inter text-xs sm:text-sm tracking-[0.4%] leading-normal">
              3rd Floor, Civic Hub Building, <br /> Victoria Island, Lagos,
              Nigeria
            </span>
            <span className="text-white font-inter text-xs sm:text-sm tracking-[0.4%] leading-normal whitespace-nowrap">
              +234 913 456 7890 <br /> (Mon–Fri, 9AM – 5PM)
            </span>
          </div>
        </div>
        <div className="max-w-[20rem]">
          <h3 className="sm:text-xl text-lg font-semibold text-white mb-4 font-sora leading-snug tracking-[1.12%]">
            Newsletter
          </h3>

          <form onSubmit={handleSubmit} className="flex mb-4">
            <input
              className="sm:h-8 h-2 rounded-l-xl sm:w-[13rem] w-[8rem] p-4 flex item-center flex-start font-inter"
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              required
            />
            <button
              type="submit"
              className="bg-[#4B3DFE] text-white rounded-r-xl px-3 py-2 flex items-center justify-center transition hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "submitting"}
            >
              {/* Using a simple SVG for the arrow */}
              <svg
                className="w-5 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </form>
          {status === "success" && (
            <p className="text-green-600 mt-2">
              Thank you for joining our mailing list!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">
              There was an error. Please try again.
            </p>
          )}
          {status === "exists" && (
            <p className="text-yellow-400 mt-2">
              This email is already on our mailing list.
            </p>
          )}
          <h3 className="sm:text-xl text-lg font-semibold text-white mb-4 font-sora leading-snug tracking-[1.12%] whitespace-nowrap">
            Follow Us
          </h3>
          <div className="flex gap-2 sm:gap-4">
            <a className="font-inter cursor-pointer" href="#">
              <img
                className="sm:h-9 h-7 mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                src="/facebook.png"
                alt="Facebook Logo"
              />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img
                className="sm:h-9 h-7 mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                src="/twitter.png"
                alt="Twitter Logo"
              />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img
                className="sm:h-9 h-7 mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                src="/instagram.png"
                alt="Instagram Logo"
              />
            </a>
            <a className="font-inter cursor-pointer" href="#">
              <img
                className="sm:h-9 h-7 mb-4 transition-transform duration-300 ease-in-out hover:scale-110"
                src="/tiktok.png"
                alt="Tiktok Logo"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-10">
        <hr className="w-[100%]" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
          <p className="text-white font-inter text-xs sm:text-sm tracking-[0.4%] leading-normal">
            © {year} Strent. All rights reserved.
          </p>
          <p className="text-white font-inter flex items-center text-sm sm:text-base tracking-[0.4%] leading-normal gap-1 mt-2 sm:mt-0">
            Back to Top
            <a href="#">
              <img
                src="/oui_arrow-up.png"
                className="cursor-pointer h-4 sm:h-6"
                alt="Back to Top Arrow"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
