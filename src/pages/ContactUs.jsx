import React from "react";
import ContactHero from "../components/contact/ContactHero";
import location from "../assets/icons/location-white.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import facebook from "../assets/icons/facebook.svg";
import x from "../assets/icons/x.svg";
import instagram from "../assets/icons/instagram.svg";
import tiktok from "../assets/icons/tiktok.svg";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

   const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default browser form submission

    setSubmissionStatus({ loading: true, success: false, error: '' });

    try {
      // The local JSON server URL to post the data.
      // We are posting to a new endpoint named 'messages' which is appropriate for a contact form.
      const response = await axios.post('http://localhost:8080/messages', {
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString() // Optional: add a timestamp
      });

      console.log('Form submitted successfully:', response.data);
      setSubmissionStatus({ loading: false, success: true, error: '' });
      setFormData({ fullName: '', email: '', subject: '', message: '' }); // Clear form

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus({
        loading: false,
        success: false,
        error: 'Failed to submit the form. Please try again.'
      });
    }
  };

  return (
    <div className="">
      <ContactHero />
      <div className="w-full px-4 py-10 md:px-16 lg:px-24 font-['Inter']">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email side by side on sm+, stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Subject + Message */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                   name="subject"
                   value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
                <div className="flex justify-end">
              <button
                type="submit"
                className=" px-6 py-3 bg-[#4B3DFE] text-white rounded-md hover:bg-[#3a2ddd] transition"
                disabled={submissionStatus.loading}
              >
                {/* Send Message */}
                {submissionStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
              </div>
            </form>
            {/* Submission status messages */}
            {submissionStatus.success && (
              <p className="mt-4 text-green-600 font-semibold text-center">
                Message sent successfully!
              </p>
            )}

            {submissionStatus.error && (
              <p className="mt-4 text-red-600 font-semibold text-center">
                {submissionStatus.error}
              </p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
