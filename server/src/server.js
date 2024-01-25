const express = require("express");
const http = require("http");
const Socket = require("socket.io");
const dotenv = require("dotenv");
const cors = require("cors");
const { fetchDataFromApi } = require("./apiService");

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3001;
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

server.listen(PORT);

// Socket setup
const io = Socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Set up Socket.io connection
io.on("connection", (socket) => {
  console.log("client connected");

  // Send initial data to the client upon connection
  fetchDataFromApi().then((data) => {
    if (data !== null) {
      io.emit("initialData", data);
      console.log("initialData emitted");
    }
  });
});

const emitDataToClients = async () => {
  const data = await fetchDataFromApi();
  if (data !== null) {
    io.emit("updateData", data);
    console.log("updateData emitted");
  }
};
setInterval(emitDataToClients, 60000);
