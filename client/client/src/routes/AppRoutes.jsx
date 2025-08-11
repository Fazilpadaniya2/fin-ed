import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login"
import ProtectedRoute from "./ProtectedRoutes";
import '../index.css'
import Dashboard from '../pages/Dashboard/Index.jsx'
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/*public route*/}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/*protected route*/}
         <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
