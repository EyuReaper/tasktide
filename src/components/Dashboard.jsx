// Dashboard Component for TaskTide
import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip'; // Example tooltip library

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

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 bg-white shadow-md" id="projects">
        <h2 className="text-lg font-bold">Projects</h2>
        <ul className="mt-4">
          <li className="py-2 hover:text-blue-500 cursor-pointer">Project 1</li>
          <li className="py-2 hover:text-blue-500 cursor-pointer">Project 2</li>
          <li className="py-2 hover:text-blue-500 cursor-pointer">New Project</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Header */}
        <header className="flex items-center justify-between pb-4 border-b">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div id="settings">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
              Settings
            </button>
          </div>
        </header>

        {/* Task Board */}
        <section id="task-board" className="mt-6">
          <h2 className="text-lg font-semibold">Task Board</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="p-4 bg-white border rounded-md shadow-sm">
              <h3 className="font-bold">To Do</h3>
              <p className="mt-2 text-sm text-gray-500">No tasks yet!</p>
            </div>
            <div className="p-4 bg-white border rounded-md shadow-sm">
              <h3 className="font-bold">In Progress</h3>
              <p className="mt-2 text-sm text-gray-500">No tasks yet!</p>
            </div>
            <div className="p-4 bg-white border rounded-md shadow-sm">
              <h3 className="font-bold">Review</h3>
              <p className="mt-2 text-sm text-gray-500">No tasks yet!</p>
            </div>
            <div className="p-4 bg-white border rounded-md shadow-sm">
              <h3 className="font-bold">Done</h3>
              <p className="mt-2 text-sm text-gray-500">No tasks yet!</p>
            </div>
          </div>
        </section>

        {/* Time Tracker */}
        <section id="time-tracker" className="mt-6">
          <h2 className="text-lg font-semibold">Time Tracker</h2>
          <p className="mt-2 text-sm text-gray-500">Total time spent: 0 hours</p>
        </section>
      </main>

      {/* Team Members */}
      <aside className="w-1/4 p-4 bg-gray-200" id="team-members">
        <h2 className="text-lg font-bold">Team Members</h2>
        <ul className="mt-4">
          <li className="py-2">Karen Smith - Online</li>
          <li className="py-2">Steve McConnell - Offline</li>
          <li className="py-2">Sarah Green - Online</li>
        </ul>
      </aside>

      {/* Tutorial Overlay */}
      {tutorialStep >= 0 && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-6 bg-white rounded-md shadow-lg">
            <p>{tutorialSteps[tutorialStep].text}</p>
            <button
              onClick={nextTutorialStep}
              className="mt-4 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
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
