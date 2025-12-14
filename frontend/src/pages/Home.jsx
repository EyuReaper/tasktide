import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-base-100"  >

      {/* Hero Section */}
      <section className="container grid items-center gap-8 px-8 mx-auto mt-16 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight ">
            Stay productive with <br />
            <span className="text-blue-600">TaskTide</span>
          </h1>
          <p className="mb-6 text-lg ">
            Your go-to platform for task management and team collaboration.
            Organize your work, meet deadlines, and achieve goals—all in one
            place.
          </p>
          <div className="flex space-x-4">
            <a
              href="/login"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Get started
            </a>
            <a
              href="/About"
              className="px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-100"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
          {/* Replace the image below */}
          <img
            src="/images/tasktide_logo.png"
            alt="TaskTide Hero Illustration"
            className="relative w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container grid gap-8 px-8 mx-auto mt-16 md:grid-cols-3">
        <div className="flex items-center p-6 space-x-4 rounded-lg shadow-md bg-base-200">
          <img
            src="/images/schedule.png"
            alt="Task Management"
            className="w-40 h-40"
          />
          <div>
            <h3 className="text-lg font-bold text-white-200">
              Seamless Task Management
            </h3>
            <p>
              Track, prioritize, and complete tasks with ease.
            </p>
          </div>
        </div>
        <div className="flex items-center p-6 space-x-4 rounded-lg shadow-md bg-base-200">
          <img
            src="/images/teamwork.png"
            alt="Team Collaboration"
            className="w-40 h-40"
          />
          <div>
            <h3 className="text-lg font-bold text-white-200">
              Team Collaboration
            </h3>
            <p >
              Work together with your team in real time.
            </p>
          </div>
        </div>
        <div className="flex items-center p-6 space-x-4 rounded-lg shadow-md bg-base-200">
          <img
            src="/images/brain.png"
            alt="Integrations"
            className="w-40 h-40"
          />
          <div>
            <h3 className="text-lg font-bold text-white-200">
              Powerful Integrations
            </h3>
            <p >
              Connect with tools like Google Drive, Slack, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
