import React from "react";
import ContactHero from "../components/contact/ContactHero";
import location from "../assets/icons/location-white.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import facebook from "../assets/icons/facebook.svg";
import x from "../assets/icons/x.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";

const Contact = () => {
  return (
    <div className="">
      <ContactHero />
      <div className="w-full flex justify-center">
      <div className="w-[960px]  px-4 py-10 md:px-16 :px-[120px] font-['Inter']">
        <div className=" lg:flex md:grid-cols-2 bg-white shadow-lg rounded-xl ">
          {/* Left - Contact Info */}
          <div className="bg-[linear-gradient(89.73deg,#352BB4_0.22%,#4438E7_31.8%,#4B3DFE_54.29%,#6F64FE_75.35%,#867DFE_94.97%)] text-white p-8 flex flex-col w-full lg:w-[385px] lg:rounded-l-xl ">
            <h3 className="text-[20px] font-[600] mb-7 font-['Sora']">
              Our Contact Information
            </h3>
            <p className="mb-[50px] text-sm leading-relaxed">
              Need to talk to someone? Kindly reach out to us via any of our
              communication channels with the details below
            </p>

            <ul className="space-y-4 text-sm mb-6">
              <li className="flex items-center gap-3">
                <img src={location} alt="Address" />
                3rd Floor, Civic Hub Building, Victoria Island, Lagos, Nigeria
              </li>
              <li className="flex items-center gap-3">
                <img src={mail} alt="Email" />
                support@strent.ng
              </li>
              <li className="flex items-center gap-3">
                <img src={phone} alt="Phone Number" />
                +234 913 456 7890
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#4B3DFE]"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#4B3DFE]"
              >
                <img src={x} alt="x" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#4B3DFE]"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#4B3DFE]"
              >
                <img src={tiktok} alt="tiktok" />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="p-8 w-full lg:w-[574px]">
            <h2 className="text-2xl font-bold mb-6 font-['Sora']">
              We want to hear from you!
            </h2>
            <form className="space-y-4">
              {/* Name + Email side by side on sm+, stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                />
              </div>

              {/* Subject + Message */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                ></textarea>
              </div>
                <div className="flex justify-end">
              <button
                type="submit"
                className=" px-6 py-3 bg-[#4B3DFE] text-white rounded-md hover:bg-[#3a2ddd] transition"
              >
                Send Message
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
