import express, { Application } from "express";
import http from "http";
import { Server, Socket } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import fetchDataFromApi from "./apiService";

dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string, 10) || 3003;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server: http.Server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Socket setup
const io: Server = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Set up Socket.io connection
io.on("connection", (socket: Socket) => {
  console.log("Client connected");

  // Send initial data to the client upon connection
  fetchDataFromApi().then((data: any) => {
    if (data !== null) {
      socket.emit("initialData", data);
      console.log("Initial data emitted");
    }
  });
});

const emitDataToClients = async () => {
  const data = await fetchDataFromApi();
  if (data !== null) {
    io.emit("updateData", data);
    console.log("Update data emitted");
  }
};

setInterval(emitDataToClients, 60000);
