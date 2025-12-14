import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotificationSystem from "./components/NotificationSystem";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./components/Dashboard";
import Profile from "./pages/Profile";
import Footer from  "./components/Footer";
import Settings from "./pages/Settings";
import Kanban from "./pages/Kanban";
import Analytics from "./pages/Analytics";
import Error404 from "./pages/Error404";
import { ThemeProvider } from './ThemeContext';

const App = () => {
  return (
    <Router>
      <ThemeProvider value = {{theme: 'light'}}>
      <Navbar />
      <NotificationSystem />
      <div className="container p-4 mx-auto bg-base-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </div>
        <Footer />
        </ThemeProvider>
    </Router>
  );
};

export default App;
