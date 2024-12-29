import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">TaskTide</h1>
        <ui className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-gray-300">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-gray-300">
              Sign up
            </Link>
          </li>
        </ui>
      </div>
    </nav>
  );
};

export default Navbar;
