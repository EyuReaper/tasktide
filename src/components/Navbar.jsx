import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
          < div className="navbar bg-base-300">
  <div className="container flex items-center justify-between px-8 py-4 mx-auto">
    {/* Logo Section */}
    <div className="flex items-center flex-1 space-x-2">
      <img className="rounded-full w-9 h-9" alt="logo" src="/images/tasktide_logo.png" />
      <h1 className="text-xl font-bold btn btn-ghost">TaskTide</h1>
    </div>

    {/* Menu Section */}
    <div className="flex-none hidden lg:block">
      <ul className="space-x-3 menu menu-horizontal">
        <li>
          <Link to="/" className="hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">About</Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-300">Sign In</Link>
        </li>
        <li>
          <Link to="/signup" className="hover:text-gray-300">Sign up</Link>
        </li>
      </ul>
    </div>
  </div>
          </div> 

   
  );
};

export default Navbar;
