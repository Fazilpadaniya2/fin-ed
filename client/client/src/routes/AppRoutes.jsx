import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login"
import ProtectedRoute from "./ProtectedRoutes";
import '../index.css'
import Dashboard from '../pages/Dashboard/Index.jsx'
import MainScreen from "../components/MainScreen/MainScreen.jsx"; 
import Banking from "../components/MainScreen/topics/Banking-Basics/Banking.jsx";
import CreditCard from "../components/MainScreen/topics/Credit-Cards-101/creditCard.jsx";
import Budgeting from "../components/MainScreen/topics/Budgeting-101/Budgeting.jsx";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/*public route*/}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/*protected route*/}
        
       <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainScreen />} /> 
          <Route path="banking-basics" element={<Banking />} />
          <Route path="credit-cards-101" element={<CreditCard />} />
          <Route path="budgeting-101" element={<Budgeting />} />
          



        </Route>
     
      </Routes>
    </BrowserRouter>
  );
}
