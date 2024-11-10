import React from "react";
import { Link } from "react-router-dom";
import image1 from "./mor.jpg";
import vid from "./naruto1.mp4";

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Background video */}
      <video
        src={vid}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-96 object-cover bg-transparent -z-10 opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-white">
        <div className="md:flex md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link
              to="/"
              className="flex items-center transform hover:scale-110 transition-transform duration-300"
            >
              <img
                src={image1}
                className="mr-3 h-20 w-20 rounded-full shadow-xl"
                alt="Logo"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 text-white">
            <div>
              <h2 className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text cursor-pointer hover:text-blue-300 transition-transform transform hover:translate-y-1 hover:scale-105">
                Resources
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text cursor-pointer hover:text-blue-300 transition-transform transform hover:translate-y-1 hover:scale-105"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text cursor-pointer hover:text-blue-300 transition-transform transform hover:translate-y-1 hover:scale-105"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Projects"
                    className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text cursor-pointer hover:text-blue-300 transition-transform transform hover:translate-y-1 hover:scale-105"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text cursor-pointer hover:text-pink-300 transition-transform transform hover:translate-y-1 hover:scale-105">
                Follow Us
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text cursor-pointer hover:text-pink-300 transition-transform transform hover:translate-y-1 hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/github"
                    className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text cursor-pointer hover:text-pink-300 transition-transform transform hover:translate-y-1 hover:scale-105"
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text cursor-pointer hover:text-indigo-300 transition-transform transform hover:translate-y-1 hover:scale-105">
                Legal
              </h2>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="#"
                    className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text cursor-pointer hover:text-indigo-300 transition-transform transform hover:translate-y-1 hover:scale-105"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="mb-6 text-lg font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text cursor-pointer hover:text-indigo-300 transition-transform transform hover:translate-y-1 hover:scale-105"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-500 opacity-50" />
        <div className="sm:flex sm:items-center sm:justify-between text-gray-300">
          <span className="text-sm">
            © 2023{" "}
            <a
              href="https://nature.com/"
              className="hover:text-blue-400 hover:underline"
            >
              Shivam Jha
            </a>
            . All Rights Reserved.
          </span>
          {/* Social Media Links */}
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link
              to="#"
              className="transform hover:scale-125 transition-transform text-black font-serif font-extrabold hover:text-blue-500"
            >
              Facebook
            </Link>
            <Link
              to="#"
              className="transform hover:scale-125 transition-transform text-black font-serif font-extrabold hover:text-blue-500"
            >
              Discord
            </Link>
            <Link
              to="#"
              className="transform hover:scale-125 transition-transform text-black font-serif font-extrabold hover:text-blue-500"
            >
              Twitter
            </Link>
            <Link
              to="#"
              className="transform hover:scale-125 transition-transform text-black font-serif font-extrabold hover:text-blue-500"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
