import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "/auth/google";
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="flex flex-col items-center justify-center w-1/2 p-10 rounded-lg shadow-md shadow-2xl bg-white/10 backdrop-blur-lg border-white/20 round-2xl">
        <h1 className="text-4xl font-bold text-white">Hi there!</h1>
        <p className="mt-2 text-gray-500">
          Welcome to TaskTide. Community Dashboard
        </p>

        {/* Google Login Button */}
        <button
          className="flex items-center justify-center w-3/4 py-2 mt-6 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
          onClick={handleGoogleLogin}
        >
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

        {/* Email and Password Form */}
        <form className="w-3/4" onSubmit={handleEmailLogin}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 text-right">
            <a
              href="/forgot-password"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </a>
          </div>

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
      <div
        className="relative w-1/2 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url('/images/time.png')", // Fix backgroundImage style
        }}
      >
        <div className="absolute text-white bottom-8 left-8">
          <h2 className="text-xl font-semibold">Welcome to TaskTide</h2>
          <p className="mt-2 text-gray-300">
            To start using TaskTide, log in with your email address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
