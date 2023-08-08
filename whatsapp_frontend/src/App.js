import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { useSelector } from "react-redux";

export default function App() {
  const { user } = useSelector((state) => ({ ...state }));
  console.log(user);
  return (
    <div className="dark">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}
