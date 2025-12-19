import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-6 rounded bg-transparent text-base-content">
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
            href="https://X.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-gray-200"
          >
            <svg  className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 1200 1227"><path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"/></svg>
            
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