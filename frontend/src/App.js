import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./app/store"; // Import store
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
    <Provider store={store}> {/* Wrap with Provider */}
      <Router>
        <ThemeProvider>
          <div className="min-h-screen w-full bg-black relative">
            {/* Midnight Mist */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 100%, rgba(70, 85, 110, 0.5) 0%, transparent 60%),
                  radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.4) 0%, transparent 70%),
                  radial-gradient(circle at 50% 100%, rgba(181, 184, 208, 0.3) 0%, transparent 80%)
                `,
              }}
            />
            {/* Your Content/Components */}
            <div className="relative z-10"> {/* Added relative z-10 to bring content to front */}
              <Navbar />
              <NotificationSystem />
              <div className="container p-4 mx-auto"> {/* Removed bg-base-100 */}
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
            </div>
          </div>
          </ThemeProvider>
      </Router>
    </Provider>
  );
};

export default App;
