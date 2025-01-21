import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [tutorialStep, setTutorialStep] = useState(0);

  const tutorialSteps = [
    { text: 'Welcome to TaskTide! This is your project dashboard.', elementId: 'projects' },
    { text: 'Here are your team members and their statuses.', elementId: 'team-members' },
    { text: 'You can add new tasks or manage your progress here.', elementId: 'task-board' },
    { text: 'Track total time spent on tasks in this section.', elementId: 'time-tracker' },
    { text: 'Click the settings icon for additional options.', elementId: 'settings' },
  ];

  const nextTutorialStep = () => {
    if (tutorialStep < tutorialSteps.length - 1) {
      setTutorialStep(tutorialStep + 1);
    } else {
      setTutorialStep(-1); // End tutorial
    }
  };

  useEffect(() => {
    const step = tutorialSteps[tutorialStep];
    if (step) {
      const element = document.getElementById(step.elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.add('ring-4', 'ring-blue-500');
        return () => element.classList.remove('ring-4', 'ring-blue-500');
      }
    }
  }, [tutorialStep]);

  return (
    <div className="flex h-screen text-white bg-gray-900">
      {/* Sidebar */}
      <aside className="w-1/5 p-6 bg-gray-800 shadow-lg">
        <div className="flex items-center mb-8 space-x-4">
          <img
            src="/images/woman-profile.jpg"
            alt="Profile"
            className="w-12 h-12 border-2 border-blue-500 rounded-full"
          />
          <div>
            <h3 className="text-lg font-semibold">Jane Sparrow</h3>
            <p className="text-sm text-gray-400">Designer</p>
          </div>
        </div>

        <nav className="space-y-8">
          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase">Dashboards</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center justify-between cursor-pointer hover:text-blue-400">
                <span className="material-icons">inbox</span>
                <span className="px-2 py-0.5 text-xs font-medium text-white bg-blue-500 rounded-full">2</span>
              </li>
              <li className="flex items-center justify-between cursor-pointer hover:text-blue-400">
                <span className="material-icons">drive_file</span>
                <span className="px-2 py-0.5 text-xs font-medium bg-gray-200 text-gray-800 rounded-full">200</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-blue-400">
                <span className="material-icons">analytics</span>
                <span className="ml-auto px-2 py-0.5 text-xs font-medium text-white bg-blue-500 rounded-full">3</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-500 uppercase">Projects</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center cursor-pointer hover:text-blue-400">
                <span className="material-icons">calendar_today</span>
                <span className="ml-2">Calendar</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-blue-400">
                <span className="material-icons">branding_watermark</span>
                <span className="ml-2">Branding</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-blue-400">
                <span className="material-icons">add</span>
                <span className="ml-2">New Project</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-900">
        {/* Header */}
        <header className="flex items-center justify-between pb-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            id="settings"
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Settings
          </button>
        </header>

        {/* Task Board */}
        <section id="task-board" className="mt-6">
          <h2 className="text-lg font-semibold">Task Board</h2>
          <div className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-4">
            {['To Do', 'In Progress', 'Review', 'Done'].map((column, index) => (
              <div
                key={index}
                className="p-4 bg-gray-800 rounded-md shadow-lg hover:bg-gray-700"
              >
                <h3 className="text-lg font-bold">{column}</h3>
                <p className="mt-2 text-sm text-gray-400">No tasks yet!</p>
              </div>
            ))}
          </div>
        </section>

        {/* Time Tracker */}
        <section id="time-tracker" className="mt-8">
          <h2 className="text-lg font-semibold">Time Tracker</h2>
          <p className="mt-2 text-sm text-gray-400">Total time spent: 0 hours</p>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="w-1/4 p-6 bg-gray-800 shadow-lg">
        <h2 className="text-lg font-bold">Team Members</h2>
        <ul className="mt-4 space-y-4">
          {['Karen Smith - Online', 'Steve McConnell - Offline', 'Sarah Green - Online'].map(
            (member, index) => (
              <li key={index} className="py-2 border-b border-gray-700">
                {member}
              </li>
            )
          )}
        </ul>
      </aside>

      {/* Tutorial Overlay */}
      {tutorialStep >= 0 && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-6 bg-gray-800 rounded-md shadow-lg">
            <p className="text-white">{tutorialSteps[tutorialStep].text}</p>
            <button
              onClick={nextTutorialStep}
              className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              {tutorialStep === tutorialSteps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
