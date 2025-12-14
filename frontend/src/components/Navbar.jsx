import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../ThemeContext';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
<nav
      className={`text-blue-500 shadow-md ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
      }`}
    >      <div className="container flex items-center justify-between px-8 py-4 mx-auto" >
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            className="rounded-full w-9 h-9"
            alt="logo"
            src="/images/tasktide_logo.png"
          />
          <h1 className="text-xl font-bold btn btn-ghost">TaskTide</h1>
          
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="space-x-3 menu menu-horizontal">
            <li>
              <Link to="/" className=" hover:bg-blue-600 hover:text-white">
                <strong>
                  Home
                  </strong>
              </Link>
            </li>
            <li>
              <Link to="/about" className=" hover:bg-blue-600 hover:text-white">
                <strong>
                  About
                  </strong>
              </Link>
            </li>
            <li>
              <Link to="/login" className=" hover:bg-blue-600 hover:text-white">
                <strong>
                  Sign In
                  </strong>
              </Link>
            </li>
            <li>
              <Link to="/signup" className=" hover:bg-blue-600 hover:text-white">
                <strong>
                  Sign Up
                  </strong>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="btn btn-ghost lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-base-200">
          <ul className="p-2 space-y-2 menu">
            <li>
              <Link
                to="/"
                className="text-white hover:bg-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:bg-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="text-white hover:bg-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="text-white hover:bg-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
