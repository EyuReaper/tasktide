import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

const NotificationSystem = () => {
  useEffect(() => {
    const socket = io("http://localhost:5000");

    socket.on("notification", (message) => {
      toast(message);
    });

    return () => socket.disconnect();
  }, []);

  return null;
};

export default NotificationSystem;
