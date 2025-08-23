import { io } from "socket.io-client";

const token = localStorage.getItem("whiteboard_user_token");

const socket = io("https://whiteboard-be-x3f8.onrender.com", {
  extraHeaders: token ? { Authorization: `Bearer ${token}` } : {}, // Only send if token exists
});

export default socket;
