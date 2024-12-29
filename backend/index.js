const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  //Emit notification
  setInterval(() => {
    socket.emit("notification", "This is a real-time notiification!");
  }, 5000);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(5000, () => console.log("Server is runnig on port 5000"));
