import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="min-h-screen bg-base">

      {/* Hero Section */}
      <section className="container px-8 mx-auto my-16">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left Content */}
          <div>
            <h2 className="mb-2 text-lg font-semibold text-orange-500">
              How It Started
            </h2>
            <h1 className="mb-4 text-4xl font-bold ">
              Our Dream is Global Synchronization of Teams & Tasks
            </h1>
            <p className="leading-relaxed ">
              TaskTide was founded by Robert Anderson, a passionate lifelong learner,
              and Maria Sanchez, a visionary educator. Their shared dream was to
              create a digital haven of knowledge accessible to all. United by their
              belief in the transformational power of education, they embarked on a
              journey to build TaskTide. With relentless dedication, they gathered a
              team of experts and launched this innovative platform, creating a global
              community of eager learners, all connected by the desire to explore,
              learn, and grow.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex justify-center">
            <img
              src="/images/network.png"
              alt="About Illustration"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-base">
        <div className="container grid grid-cols-2 gap-8 mx-auto text-center md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-bold ">
              <CountUp end={3.5} duration={2.5} decimals={1} />
            </h3>
            <p className="mt-2 text-slate-400">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold ">
              <CountUp end={23} duration={2.5} />
            </h3>
            <p className="mt-2 text-slate-400">Project Challenges</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold ">
              <CountUp end={830} duration={2.5} suffix="+" />
            </h3>
            <p className="mt-2 text-gray-400">Positive Reviews</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold ">
              <CountUp end={100000} duration={2.5} separator="," />
            </h3>
            <p className="mt-2 text-gray-400">Daily Visitors</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
