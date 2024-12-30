import React from "react";

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section: Illustration */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold text-blue-500">TaskTide</h1>
        <p className="mt-4 text-gray-600 text-lg">
          A central hub where teams can work, plan, and achieve amazing things
          together.
        </p>
        <img
          src="/images/tasktide"
          alt="Signup Illustration"
          className="mt-8 w-3/4"
        />
      </div>

      {/* Right Section: Signup Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold text-slate-50">
            Sign up to TaskTide
          </h2>
          <p className="mt-2 text-slate-400">
            Already a member?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>

          <form className="mt-6">
            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-300"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@mail.com"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="6+ Characters, 1 Capital letter"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Create an account
            </button>

            {/* Google Signup */}
            <button
              type="button"
              className=" relative z-10 w-full mt-4 py-2 border outline-none border-gray-300 rounded-md flex justify-center items-center text-gray-700 hover:bg-gray-100 transition-colors duration-400 ease-in-out overflow-hidden "
            >
              <img
                src="/images/google-icon.png"
                alt="Google Icon"
                className="w-5 h-5 mr-2"
              />
              Sign up with Google
            </button>
          </form>

          <p className="mt-4 text-xs text-gray-500">
            This site is protected by reCAPTCHA and the Google{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
