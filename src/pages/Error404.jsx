import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="max-w-4xl p-6 text-center">
      <div className="flex items-center justify-center mt-8">
  <img
    src="/images/404 Animation.gif"
    alt="Error 404"
    className="h-auto max-w-full w-96" 
  />
</div>
        <h1 className="text-5xl font-bold text-blue-600">Sorry!</h1>
        <p className="mt-4 text-3xl font-semibold text-gray-800">
          This page isn’t available
        </p>
        <p className="mt-2 text-lg text-gray-600">
          The page you were looking for couldn’t be found.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Go back to the home page
          </a>{" "}
          or visit our{" "}
          <a
            href="/help-center"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Help Center
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Error404;
