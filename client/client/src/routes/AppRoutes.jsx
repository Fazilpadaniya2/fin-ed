import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Login from "../pages/Auth/Login"
import ProtectedRoute from "./ProtectedRoutes";
import '../index.css'
import Dashboard from '../pages/Dashboard/Index.jsx'
import MainScreen from "../components/MainScreen/MainScreen.jsx"; 
import Banking from "../components/MainScreen/topics/Banking/Banking.jsx";
import Crypto from "../components/MainScreen/topics/Crypto/Crypto.jsx";
import Stocks from "../components/MainScreen/topics/Stocks/Stocks.jsx";
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
      { /*  <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MainScreen />} /> 
          <Route path="banking" element={<Banking />} />
          <Route path="banking/1" element={<h1>Lessong 1</h1>} />
          <Route path="crypto" element={<Crypto />} />
          <Route path="crypto/2" element={<h1>Lessong 2</h1>} />
          <Route path="stocks" element={<Stocks />} />
          <Route path="stocks/3" element={<h1>Lessong 1</h1>} />



        </Route>
     */ }

      </Routes>
    </BrowserRouter>
  );
}
