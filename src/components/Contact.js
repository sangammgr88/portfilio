import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { SiGmail } from "react-icons/si";
import { IoCall } from "react-icons/io5";
import { FaTelegramPlane, FaFacebook, FaTwitter, FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n1ept4m",
        "template_pctp3x7",
        form.current,
        "vBN1eIVDxf_tHK1K0"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send the message. Please try again later.");
        }
      );
    e.target.reset();
  };

  return (
    <section className="py-12">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-popins">Get In Touch</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto space-y-10 lg:space-y-0 lg:space-x-20 px-4">
        {/* Left Side - Contact Info */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-4">Don't be Shy!</h1>
          <p className="text-gray-600 mb-8">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            visions.
          </p>
          <div className="flex items-center mb-4">
            <SiGmail className="w-8 h-8 mr-4" />
            <div>
              <p className="font-semibold">Mail me</p>
              <p>sangamtmagar46@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center mb-8">
            <IoCall className="w-8 h-8 mr-4" />
            <div>
              <p className="font-semibold">Call me</p>
              <p>9810330979</p>
            </div>
          </div>
          <div className="flex space-x-4">
            {/* Social Media Icons */}
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-black">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="GitHub" className="text-gray-600 hover:text-black">
              <FaGithubSquare className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-black">
              <CiLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            {/* Name, Email, Subject Fields */}
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
              <input
                name="user_name"
                className="w-full border border-gray-300 bg-gray-100 p-4 rounded-full placeholder-gray-500"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                name="user_email"
                className="w-full border border-gray-300 bg-gray-100 p-4 rounded-full placeholder-gray-500"
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                name="user_subject"
                className="w-full border border-gray-300 bg-gray-100 p-4 rounded-full placeholder-gray-500"
                type="text"
                placeholder="Your Subject"
                required
              />
            </div>

            {/* Message Field */}
            <textarea
              name="message"
              className="w-full border border-gray-300 bg-gray-100 p-4 rounded-xl placeholder-gray-500"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex items-center justify-center space-x-2 bg-black text-white py-3 px-8 rounded-full focus:outline-none shadow-md hover:bg-gray-800"
            >
              <span>Send Message</span>
              <FaTelegramPlane className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
