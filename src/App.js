import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotificationSystem from "./components/NotificationSystem";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Kanban from "./pages/Kanban";
import Analytics from "./pages/Analytics";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <Router>
      <Navbar />
      <NotificationSystem />
      <div className="container p-4 mx-auto bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
