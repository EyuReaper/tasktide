import React, { useState } from "react";

const Profile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const saveProfile = () => {
        // API call to save profile data
        console.log("Profile updated:", user);
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                </div>
                <button onClick={saveProfile}
                    className="bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
            </div>
        </div>
    );
    
};

export default Profile;