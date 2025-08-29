// src/pages/Dashboard/Index.jsx
import Navbar from "../../components/layout/Navbar";
import RightSidebar from "../../components/layout/RightSideBar";
import MainScreen from '../../components/MainScreen/MainScreen.jsx'
import { Outlet } from "react-router-dom";
import { TopicsProvider } from "../../context/TopicsContext.jsx";
export default function Dashboard() {
  return (
    <div className="flex  h-screen">
      <aside className="w-64 shrink-0"><Navbar /></aside>

      <main className="w-0 flex-1 min-w-0 overflow-x-hidden">
        <TopicsProvider>
           <Outlet />
        </TopicsProvider>
      </main>
      <aside className="w-80 bg-neutral-900 shrink-0 p-6">
          <RightSidebar />
        </aside>
    </div>
  );
}
