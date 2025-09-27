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
 useEffect(async () => {

  const {data} = await api.get('/profile')

  console.log(data);
    return;
  }, [data]);


  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Banner */}
      <div className="relative h-40 w-full rounded-t-3xl bg-[#d8eefb]">
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/90 px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-white"
          aria-label="Edit banner"
        >
          <PencilIcon className="h-4 w-4" />
          Edit
        </button>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full border-2 border-dashed border-[#8dc8ef] opacity-70" />
        </div>
      </div>

      {/* Avatar */}
      <AvatarPlaceholder />

      {/* Header */}
      <div className="px-6 pb-6">
        <div className="mt-2 flex items-center gap-2">
          <h1 className="text-2xl font-bold text-slate-900">{data.name}</h1>
        </div>
        <div className="mt-1 text-slate-500">{data.handle}</div>
        <div className="mt-1 flex items-center gap-2 text-slate-500">
          <span>{data.joinedText}</span>
          {data.localeFlag ? (
            <span className="ml-1 inline-flex items-center justify-center rounded-md bg-slate-100 px-2 py-0.5 text-sm">
              {data.localeFlag}
            </span>
          ) : null}
        </div>

        {/* Social counts */}
        <div className="mt-4 flex gap-6 text-sm">
          <button className="text-blue-600 hover:underline" type="button">
            {data.following} Following
          </button>
          <button className="text-blue-600 hover:underline" type="button">
            {data.followers} Follower{data.followers === 1 ? "" : "s"}
          </button>
        </div>

        <hr className="my-6 border-slate-200" />

        {/* Statistics */}
        <h2 className="text-xl font-semibold text-slate-900">Statistics</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatBox
            label="Day streak"
            value={data.stats.streakDays}
            icon={<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600">🔥</span>}
          />
          <StatBox
            label="Total XP"
            value={data.stats.totalXp}
            icon={<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600">⚡️</span>}
          />
          <StatBox
            label="Current league"
            value={data.stats.currentLeagueLabel}
            icon={<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600">🏆</span>}
          />
          <StatBox
            label="Top 3 finishes"
            value={data.stats.top3Finishes}
            icon={<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-600">🥉</span>}
          />
        </div>
      </div>
    </div>
  );
}

// Example usage:
// <UserProfileCard />
