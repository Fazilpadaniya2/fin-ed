import { NavLink } from "react-router-dom";
import Button from "../ui/Button";
import { useState } from "react";

const items = [
  { to: "/dashboard/learn",         icon: "🏠", label: "LEARN" },
  { to: "/dashboard/leaderboards",  icon: "🛡️", label: "LEADERBOARDS" },
  { to: "/dashboard/quests",        icon: "🎯", label: "QUESTS" },
  { to: "/dashboard/shop",          icon: "🛍️", label: "SHOP" },
  { to: "/dashboard/profile",       icon: "👤", label: "PROFILE" },
  { to: "/dashboard/more",          icon: "⋯", label: "MORE" },
];



export default function Navbar() {
    const [activeId, setActiveId] = useState(0);
  return (
    <aside className="sticky top-0 z-50 h-screen w-[280px] bg-neutral-900 px-4 py-6 text-neutral-50">
      {/* brand */}
      <div className="px-2 pb-6">
        <div className="text-3xl font-extrabold tracking-tight leading-none">
          <span className="text-brand-500">fin</span>
          <span className="text-brand-600">ed</span>
          <h3 className="text-xl">Hey Fazil</h3>
        </div>
      </div>

      {/* nav buttons */}
      <nav className="flex flex-col gap-3">
    {items.map((it, idx) => (
      <NavLink key={it.to} to={it.to} className="block">
        <Button
          icon={it.icon}
          label={it.label}
          id={idx}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </NavLink>
    ))}
      </nav>
    </aside>
  );
}
