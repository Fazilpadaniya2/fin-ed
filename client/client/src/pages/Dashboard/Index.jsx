// src/pages/Dashboard/Index.jsx
import Navbar from "../../components/layout/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-dvh flex bg-neutral-900 text-neutral-50">
      <Navbar />
      <main className="flex-1 bg-neutral-50 text-neutral-900 p-6">
        {/* long content here */}
      </main>
    </div>
  );
}
