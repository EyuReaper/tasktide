import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}

      {/* Hero Section */}
      <section className="container grid items-center gap-8 px-8 mx-auto mt-16 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-gray-900">
            Stay productive with <br />
            <span className="text-blue-600">TaskTide</span>
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            Your go-to platform for task management and team collaboration.
            Organize your work, meet deadlines, and achieve goals—all in one
            place.
          </p>
          <div className="flex space-x-4">
            <a
              href="/demo"
              className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Get Free Demo
            </a>
            <a
              href="/learn-more"
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
            src="/images/tasktide-hero.png"
            alt="TaskTide Hero Illustration"
            className="relative w-full rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="container grid gap-8 px-8 mx-auto mt-16 md:grid-cols-3">
        <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
          <img
            src="/images/tasks-icon.png"
            alt="Task Management"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Seamless Task Management
            </h3>
            <p className="text-gray-600">
              Track, prioritize, and complete tasks with ease.
            </p>
          </div>
        </div>
        <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
          <img
            src="/images/team-icon.png"
            alt="Team Collaboration"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Team Collaboration
            </h3>
            <p className="text-gray-600">
              Work together with your team in real time.
            </p>
          </div>
        </div>
        <div className="flex items-center p-6 space-x-4 bg-white rounded-lg shadow-md">
          <img
            src="/images/integrations-icon.png"
            alt="Integrations"
            className="w-12 h-12"
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Powerful Integrations
            </h3>
            <p className="text-gray-600">
              Connect with tools like Google Drive, Slack, and more.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
