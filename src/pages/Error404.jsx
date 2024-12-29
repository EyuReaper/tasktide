import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="p-6 max-w-md text-center mx-auto">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error404;
