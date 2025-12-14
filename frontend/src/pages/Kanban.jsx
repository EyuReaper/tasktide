import React, { useState } from "react";

const Kanban = () => {
  const [tasks, setTasks] = useState({
    todo: ["Task 1 - High Priority", "Task 2 - Low Priority"],
    inProgress: ["Task 3 - Medium Priority"],
    underReview: ["Task 4 - Medium Priority"],
    done: ["Task 5 - Low Priority"],
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <div className="grid grid-cols-4 gap-4">
        {/* Render each task category */}
        {Object.entries(tasks).map(([category, taskList]) => (
          <div key={category} className="border rounded-lg p-4 bg-gray-100">
            <h2 className="text-xl font-semibold mb-2 capitalize">
              {category}
            </h2>
            <ul>
              {taskList.map((task, index) => (
                <li key={index} className="mb-2 p-2 bg-white rounded shadow">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
