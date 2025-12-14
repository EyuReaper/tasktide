import React, { useState } from "react";

const Collaborators = () => {
  const [collaborators, setCollaborators] = useState(["Alice", "Bob"]);
  const [newCollaborator, setNewCollaborator] = useState("");

  const addCollaborator = () => {
    if (newCollaborator.trim()) {
      setCollaborators([...collaborators, newCollaborator.trim()]);
      setNewCollaborator("");
    }
  };

  return (
    <div className="p-6 border rounded bg-white">
      <h2 className="text-lg font-bold mb-4">Team Members</h2>
      <ul className="mb-4">
        {collaborators.map((collaborator, index) => (
          <li key={index} className="mb-2">
            {collaborator.name}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newCollaborator}
        onChange={(e) => setNewCollaborator(e.target.value)}
        placeholder="Add a team member"
        className="border p-2 rounded w-full mb-2"
      />
      <button
        onClick={addCollaborator}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Add Member
      </button>
    </div>
  );
};

export default Collaborators;
