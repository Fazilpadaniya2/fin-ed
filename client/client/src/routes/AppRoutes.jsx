import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login"
import '../index.css'


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* we’ll add /login and /dashboard later */}
      </Routes>
    </BrowserRouter>
  );
}
