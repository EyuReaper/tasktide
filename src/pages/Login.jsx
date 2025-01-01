import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-1/2 p-10 bg-white">
        <h1 className="text-4xl font-bold text-gray-800">Hi there!</h1>
        <p className="mt-2 text-gray-500">
          Welcome to TaskTide. Community Dashboard
        </p>

        {/* Google Login Button */}
        <button className="flex items-center justify-center w-3/4 py-2 mt-6 border border-gray-300 rounded-md hover:bg-gray-100">
          <img
            src="/images/google.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Log in with Google
        </button>

        <div className="flex items-center w-3/4 my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email Input */}
        <form className="w-3/4">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-4 text-right">
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 font-bold text-white bg-black rounded-md hover:bg-gray-800"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-col items-center justify-center w-1/2 p-10 text-white bg-black">
        <h2 className="absolute text-sm top-4 right-4">
          <select className="text-white bg-transparent border-none">
            <option value="en">English (USA)</option>
            <option value="es">Español</option>
          </select>
        </h2>
        <div className="text-center">
          <h2 className="text-xl font-semibold">Largest Space Community</h2>
          <p className="mt-2 text-gray-400">
            Go anywhere you want in a Galaxy full of wonders!
          </p>
        </div>
        <img
          src="public/images/tasktide_logo.png"
          alt="Astronaut"
          className="w-3/4 mt-8"
        />
        <div className="absolute flex space-x-2 bottom-4">
          <button className="w-3 h-3 bg-white rounded-full"></button>
          <button className="w-3 h-3 bg-gray-500 rounded-full"></button>
          <button className="w-3 h-3 bg-gray-500 rounded-full"></button>
        </div>
      </div>
    </div>
  );
};


export default Login;
