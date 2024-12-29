import React from "react";

const Analytics = () => {
  const stats = {
    totalTasks: 50,
    completedTasks: 35,
    pendingTasks: 15,
    productivity: "70%",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(stats).map((key) => (
          <div key={key} className="p-4 bg-white rounded shadow border">
            <h2 className="text-lg font-bold mb-2">{key}</h2>
            <p>{stats[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Analytics;
