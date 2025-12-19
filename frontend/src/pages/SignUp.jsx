import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "An unexpected error occurred.");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "/auth/google";
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section: Illustration */}
      <div className="flex flex-col items-center justify-center w-1/2 p-10 bg-base-700">
        <h1 className="text-4xl font-bold text-blue-500">TaskTide</h1>
        <p className="mt-4 text-lg text-white">
          A central hub where teams can work, plan, and achieve amazing things
          together.
        </p>
        <img
          src="/images/tasktide_logo.png"
          alt="Signup Illustration"
          className="w-3/4 mt-8"
        />
      </div>

      {/* Right Section: Signup Form */}
      <div className="flex flex-col items-center justify-center w-1/2 p-10">
        <div className="w-3/4">
          <h2 className="text-3xl font-bold text-white">
            Sign up to TaskTide
          </h2>
          <p className="mt-2 text-slate-400">
            Already a member?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p>

          <form className="mt-6" onSubmit={handleSignup}>
            {error && (
              <div className="mb-4 text-sm text-red-500">{error}</div>
            )}

            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="name@mail.com"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="6+ Characters, 1 Capital letter"
                className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Create an account
            </button>
          </form>

          {/* Google Signup */}
          <button
            type="button"
            className="relative z-10 flex items-center justify-center w-full py-2 mt-4 overflow-hidden text-gray-700 transition-colors ease-in-out border border-gray-300 rounded-md outline-none hover:bg-gray-100 duration-400"
            onClick={handleGoogleLogin}
          >
            <img
              src="/images/google.png"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>

          <p className="mt-4 text-xs text-gray-500">
            This site is protected by reCAPTCHA and the Google{" "}
            <button type="button" className="text-blue-500 hover:underline">
              Privacy Policy
            </button>{" "}
            and{" "}
            <button type="button" className="text-blue-500 hover:underline">
              Terms of Service
            </button>{" "}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
