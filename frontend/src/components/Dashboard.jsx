import React, { useState, useEffect, useContext, useMemo } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext'; // Import ThemeContext for theming

const Dashboard = () => {
  const [tutorialStep, setTutorialStep] = useState(0);
  const { theme } = useContext(ThemeContext); // Access theme context

  const tutorialSteps = useMemo(() => [
    { text: 'Welcome to TaskTide! Here is a brief tutorial.', elementId: 'projects' },
    { text: 'This is your side bar, where you can find your profile and more.', elementId: 'sidebar' },
    { text: 'Here are your team members and their statuses.', elementId: 'team-members' },
    { text: 'You can add new tasks or manage your progress here.', elementId: 'task-board' },
    { text: 'Track total time spent on tasks in this section.', elementId: 'time-tracker' },
    { text: 'Click the settings icon for additional options.', elementId: 'settings' },
  ], []);

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
  }, [tutorialStep, tutorialSteps]);

  return (
    <div
      className={`flex h-screen overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
      data-theme={theme}
    >
      {/* Sidebar */}
      <aside id="sidebar"  className={`w-4/4 p-6 shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 border-r border-gray-700' : 'bg-gray-200 border-r border-gray-400'
        }`}>
        
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
                <span className="ml-2 material-icons">Calendar</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-blue-400">
                <span className="ml-2 material-icons">Branding</span>
              </li>
              <li className="flex items-center cursor-pointer hover:text-blue-400">
                <span className="ml-2 material-icons">New Project</span>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        id="task-board"
        className={`flex-1 p-6 ${
          theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
        }`}
      >
        <header className="flex items-center justify-between pb-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <Link
            to="/settings"
            id="settings"
          >
            <Button></Button>
          </Link>
        </header>

        {/* Task Board */}
        <section className="mt-6">
          <h2 className="text-lg font-semibold">Task Board</h2>
          <div className="grid grid-cols-2 gap-4 mt-4 lg:grid-cols-4">
            {['To Do', 'In Progress', 'Review', 'Done'].map((column, index) => (
              <div
                key={index}
                className={`p-4 rounded-md shadow-lg ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                } hover:bg-gray-700`}
              >
                <h3 className="text-lg font-bold">{column}</h3>
                <p
                  className={`mt-2 text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  No tasks yet!
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Time Tracker */}
        <section id="time-tracker" className="mt-8">
          <h2 className="text-lg font-semibold">Time Tracker</h2>
          <p
            className={`mt-2 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Total time spent: 0 hours
          </p>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside
        id="team-members"
        className={`w-1/4 p-6 shadow-lg ${
          theme === 'dark' ? 'bg-gray-800 border-l border-gray-700' : 'bg-gray-200 border-l border-gray-400'
        }`}
      >
        <h2 className="text-lg font-bold">Team Members</h2>
        <ul className="mt-4 space-y-4">
          {['Karen Smith - Online', 'Steve McConnell - Offline', 'Sarah Green - Online'].map(
            (member, index) => (
              <li
                key={index}
                className={`py-2 border-b ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-400'
                }`}
              >
                {member}
              </li>
            )
          )}
        </ul>
      </aside>

      {/* Tutorial Overlay */}
      {tutorialStep >= 0 && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div
            className={`p-6 rounded-md shadow-lg ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
            }`}
          >
            <p>{tutorialSteps[tutorialStep].text}</p>
            <button
              onClick={nextTutorialStep}
              className="px-4 py-2 mt-4 bg-blue-500 rounded-md hover:bg-blue-600"
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
