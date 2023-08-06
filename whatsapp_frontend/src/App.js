import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./features/userSlice";

export default function App() {
  const dispathc = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  console.log(user);

  return (
    <div className="dark">
      <button onClick={() => dispathc(logout())}>LogOut</button>
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
