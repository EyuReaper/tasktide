import React, { useState } from 'react';
import { useTheme } from '../ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('en');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 settings-page">
      <div className="w-full max-w-md">
        <h1 className="mb-6 text-2xl font-bold text-center">Settings</h1>

        {/* Theme Selector */}
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-center">Theme</h2>
          <div className="flex justify-center space-x-4">
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

        {/* Profile Settings */}
        <form onSubmit={handleSubmit} className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-center">Profile Settings</h2>

          {/* Display Name */}
          <div className="mb-4">
            <label className="block mb-1">Display Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your display name"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label className="block mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Change */}
          <div className="mb-4">
            <label className="block mb-1">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter new password"
            />
          </div>

          {/* Two-Factor Authentication */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
              className="mr-2"
            />
            <span>Enable Two-Factor Authentication</span>
          </div>

          {/* Language Preferences */}
          <div className="mb-4">
            <label className="block mb-1">Language Preferences</label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              {/* Add more languages as needed */}
            </select>
          </div>

          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md">
            Save Changes
          </button>
        </form>

        {/* Additional Features */}
        <div className="mb-6">
          <h2 className="mb-2 text-lg font-semibold text-center">Notifications</h2>
          <label className="flex items-center justify-center space-x-2">
            <input type="checkbox" className="text-blue-500 form-checkbox" />
            <span>Enable notifications</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;