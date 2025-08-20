// src/pages/Dashboard/Index.jsx
import Navbar from "../../components/layout/Navbar";
import RightSidebar from "../../components/layout/RightSideBar";
import MainScreen from '../../components/MainScreen/MainScreen.jsx'
import { Outlet } from "react-router-dom";
import { TopicsProvider } from "../../context/TopicsContext.jsx";
export default function Dashboard() {
  return (
    <div className="min-h-dvh flex bg-neutral-900 text-neutral-50">
      <Navbar />

      <main className="flex-1 bg-neutral-50 text-neutral-900 p-6">
        <TopicsProvider>
           <Outlet />
        </TopicsProvider>
      </main>
      <aside className="w-80 shrink-0 p-6">
          <RightSidebar />
        </aside>
    </div>
  );
}
