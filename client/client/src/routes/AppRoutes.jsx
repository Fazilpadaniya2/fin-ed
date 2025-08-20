import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login"
import ProtectedRoute from "./ProtectedRoutes";
import '../index.css'
import Dashboard from '../pages/Dashboard/Index.jsx'
import MainScreen from "../components/MainScreen/MainScreen.jsx"; 

import TopicLayout from "../components/MainScreen/TopicLayout.jsx";
//import ScenePage from "../components/MainScreen/ScenePage.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/*public route*/}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/*protected route*/}
        
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<MainScreen />} />
        <Route path="topics/:topicid" element={<TopicLayout />}>
           
        </Route>
      </Route>
     
      </Routes>
    </BrowserRouter>
  );
}
