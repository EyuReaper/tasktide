import React from "react";

const About = () => {
  return (
    <div className="min-h-screen" style= {{backgroundColor: '#1D232A'}}>

      {/* Hero Section */}
      <section className="container mx-auto my-16 px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-orange-500 font-semibold text-lg mb-2">
              How It Started
            </h2>
            <h1 className="text-4xl font-bold text-slate-400 mb-4">
              Our Dream is Global Learning Transformation
            </h1>
            <p className="text-slate-100 leading-relaxed">
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
              src="/images/about-illustration.png"
              alt="About Illustration"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">3.5</h3>
            <p className="text-gray-600 mt-2">Years Experience</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">23</h3>
            <p className="text-gray-600 mt-2">Project Challenges</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">830+</h3>
            <p className="text-gray-600 mt-2">Positive Reviews</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">100K</h3>
            <p className="text-gray-600 mt-2">daily visitors</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
