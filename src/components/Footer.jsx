import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-6 rounded bg-base-200 text-base-content">
      <div className="container flex flex-col items-center mx-auto space-y-6">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          <Link to="/about" className="link link-hover">
            About Us
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
          <Link to="/settings" className="link link-hover">
            Settings
          </Link>
        </nav>

        {/* Social Icons */}
        <nav className="flex justify-center gap-4">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M23.498 2h-5.502L16 4.628 14.004 2H8.502L2 8.774v5.59L6.5 16 2 18.228v5.59L8.502 30h5.502L16 27.372 17.996 30h5.502L30 23.226v-5.59L25.5 16 30 13.772v-5.59L23.498 2zm-2.625 2 5.625 6.003-4.303 3.26L28.5 16l-6.305 4.737L26.498 26h-6.63l-3.868-5.745L12.13 26H5.502l5.625-6.003-4.303-3.26L3.502 16l6.305-4.737L5.502 6h6.63l3.868 5.745L19.87 6h6.003z" />
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-red-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>

        {/* Copyright Section */}
        <aside className="text-center">
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
            <span className="font-bold">TaskTide</span>
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
