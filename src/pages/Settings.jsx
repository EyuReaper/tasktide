import React from 'react';
import { useTheme } from '../ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen p-6 settings-page position-center">
      <h1 className="mb-6 text-2xl font-bold">Settings</h1>

      {/* Theme Selector */}
      <div className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Theme</h2>
        <div className="flex space-x-4">
          <button
            onClick={() => toggleTheme('light')}
            className={`px-4 py-2 rounded-md ${
              theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            Light
          </button>
          <button
            onClick={() => toggleTheme('dark')}
            className={`px-4 py-2 rounded-md ${
              theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            Dark
          </button>
          <button
            onClick={() => toggleTheme('custom')}
            className={`px-4 py-2 rounded-md ${
              theme === 'custom' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'
            }`}
          >
            Custom
          </button>
        </div>
      </div>

      {/* Additional Features */}
      <div className="mb-6">
        <h2 className="mb-2 text-lg font-semibold">Notifications</h2>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="text-blue-500 form-checkbox" />
          <span>Enable notifications</span>
        </label>
      </div>

      <div>
        <h2 className="mb-2 text-lg font-semibold">Profile Settings</h2>
        <p className="text-gray-400">Additional profile options will go here.</p>
      </div>
    </div>
  );
};

export default Settings;
