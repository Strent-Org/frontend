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
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default browser form submission

    setSubmissionStatus({ loading: true, success: false, error: "" });

    try {
      // The local JSON server URL to post the data.
      // We are posting to a new endpoint named 'messages' which is appropriate for a contact form.
      const response = await axios.post("http://localhost:8080/messages", {
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toISOString(), // Optional: add a timestamp
      });

      console.log("Form submitted successfully:", response.data);
      setSubmissionStatus({ loading: false, success: true, error: "" });
      setFormData({ fullName: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionStatus({
        loading: false,
        success: false,
        error: "Failed to submit the form. Please try again.",
      });
    }
  };

  return (
    <div>
      <ContactHero />
      <div className="bg-[#fff] w-full h-fit flex flex-col lg:flex-row gap-3 px-[4rem] sm:px-[9.6rem] my-16">
        <div className="lg:flex  md:grid-cols-2 bg-white">
          {/* Left - Contact Info */}
          <div className="bg-[linear-gradient(89.73deg,#352BB4_0.22%,#4438E7_31.8%,#4B3DFE_54.29%,#6F64FE_75.35%,#867DFE_94.97%)] text-white p-8 flex flex-col w-full lg:w-[385px]">
            <h3 className="md:text-xl text-lg font-semibold mb-7 font-sora">
              Our Contact Information
            </h3>
            <p className="mb-7 text-sm leading-relaxed font-inter">
              Need to talk to someone? Kindly reach out to us via any of our
              communication channels with the details below
            </p>

            <ul className="flex flex-col items-start justify-center space-y-7 text-sm font-inter mb-7">
              <li className="flex items-center gap-3">
                <img src={location} alt="Address" />
                <a href="#">
                  Location: 3rd Floor, Civic Hub Building, Victoria Island,
                  Lagos, Nigeria
                </a>
              </li>
              <li className="flex items-center gap-3">
                <img src={mail} alt="Email" />
                <a href="mailto:support@strent.ng">Email: support@strent.ng</a>
              </li>
              <li className="flex items-center gap-3">
                <img src={phone} alt="Phone Number" />
                <a href="tel:+2349134567890">Call: +234 913 456 7890</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 my-7">
              <a
                href="#"
                className="lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#4B3DFE]"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="#"
                className="lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#4B3DFE]"
              >
                <img src={x} alt="x" />
              </a>
              <a
                href="#"
                className="lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#4B3DFE]"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="#"
                className="lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#4B3DFE]"
              >
                <img src={tiktok} alt="tiktok" />
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="p-8 w-full lg:w-[574px] border border-[#DDDDE1]">
            <h2 className="text-xl font-semibold mb-6 font-sora">
              We want to hear from you!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Email side by side on sm+, stacked on mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-3 text-sm font-inter border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="w-full p-3 text-sm font-inter border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
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
                  className="w-full p-3 text-sm font-inter border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 text-sm font-inter border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B3DFE]"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className=" px-6 py-3 bg-[#4B3DFE] text-white text-base mt-4 rounded-lg hover:bg-[#3a2ddd] transition font-inter font-semibold"
                  disabled={submissionStatus.loading}
                >
                  {/* Send Message */}
                  {submissionStatus.loading ? "Sending..." : "Send Message"}
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
