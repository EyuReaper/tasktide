import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold text-gray-800">Hi there!</h1>
        <p className="mt-2 text-gray-500">
          Welcome to TaskTide. Community Dashboard
        </p>

        {/* Google Login Button */}
        <button className="mt-6 w-3/4 flex items-center justify-center py-2 border border-gray-300 rounded-md hover:bg-gray-100">
          <img
            src="/images/google-icon.png"
            alt="Google Icon"
            className="w-5 h-5 mr-2"
          />
          Log in with Google
        </button>

        <div className="my-4 flex items-center w-3/4">
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
          <div className="text-right mb-4">
            <a href="/forgot-password" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-bold hover:bg-gray-800"
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
      <div
        className="w-1/2 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/time.png')",
        }}
      >
        <h2 className="absolute top-4 right-4 text-sm text-white">
          <select className="bg-transparent text-white border-none">
            <option value="en">English (USA)</option>
            <option value="es">Español</option>
          </select>
        </h2>
        <div className="absolute bottom-8 left-8 text-white">
          <h2 className="text-xl font-semibold">Largest Space Community</h2>
          <p className="mt-2 text-gray-300">
            Go anywhere you want in a Galaxy full of wonders!
          </p>
        </div>
        <div className="absolute bottom-4 flex space-x-2 left-8">
          <button className="w-3 h-3 rounded-full bg-white"></button>
          <button className="w-3 h-3 rounded-full bg-gray-500"></button>
          <button className="w-3 h-3 rounded-full bg-gray-500"></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
