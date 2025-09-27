import React, { useState, useEffect } from "react";
import api from "../lib/api";

// Plain JSX (no TypeScript). Tailwind CSS for styling.
// Drop-in ready for Vite/CRA/Next.

function StatBox({ label, value, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2 text-slate-500 text-sm">
        {icon}
        <span>{label}</span>
      </div>
      <div className="mt-1 text-2xl font-semibold text-slate-800">{value}</div>
    </div>
  );
}

function AvatarPlaceholder() {
  return (
    <div className="relative mx-auto -mt-12 h-28 w-28 rounded-full bg-[#d8eefb] flex items-center justify-center">
      {/* Dashed outline */}
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#5fb3e6]" />
      {/* Silhouette + plus */}
      <svg viewBox="0 0 128 128" className="h-16 w-16" aria-hidden>
        <path
          d="M64 18c-14.5 0-26 11.5-26 26s11.5 26 26 26 26-11.5 26-26S78.5 18 64 18zM26 104c0-17.7 18.9-28 38-28s38 10.3 38 28v6H26v-6z"
          fill="#9fd3f4"
        />
        <g fill="#ffffff">
          <rect x="60" y="44" width="8" height="24" rx="2" />
          <rect x="52" y="52" width="24" height="8" rx="2" />
        </g>
      </svg>
    </div>
  );
}

function PencilIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
    </svg>
  );
}

export default function UserProfileCard() {

    const [data, setData] = useState({
    name: "",
    handle: "",
    joinedText: "",
    following: 1,
    followers: 1,
    localeFlag: "🇨🇦",
    stats: {
      streakDays: 0,
      totalXp: 0,
      currentLeagueLabel: "",
      top3Finishes: 0,
    },
  });
useEffect(() => {
  const fetchProfile = async () => {
    try {
      console.log("fetching");
      const { data } = await api.get("/profile");
        console.log(data.data, "we are here");
        console.log(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);


  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white shadow-sm">
      kuch
    </div>
  );
}

// Example usage:
// <UserProfileCard />
