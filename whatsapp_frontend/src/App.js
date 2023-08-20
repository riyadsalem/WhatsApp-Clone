import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { useEffect } from "react";

//socket io
const socket = io(process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0]);

export default function App() {
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  useEffect(() => {
    socket.on("receiveMessage", (msg) => console.log(msg));
  });

  const sendMessage = () => {
    socket.emit("sendMessage", "Hello how are you");
  };

  return (
    <div className="dark">
      <button onClick={() => sendMessage()}>Send message</button>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={token ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            exact
            path="/login"
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/register"
            element={!token ? <Register /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}
