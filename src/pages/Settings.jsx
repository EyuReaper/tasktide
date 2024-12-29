import React, { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (e) => {
    setTheme(e.target.value);
    //apply theme logic
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div>
        <label className="block mb-1">App Theme</label>
        <select
          value={theme}
          onChange={changeTheme}
          className="w-full border p-2 rounded"
        >
          <option value="light">Light</option>
          <optin value="dark">Dark</optin>
        </select>
      </div>
    </div>
  );
};

export default Settings;
