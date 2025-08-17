import React from "react";

export default function RightSidebar() {
  return (
    <aside className="w-72 sticky top-2 flex flex-col gap-4 p-4 bg-[var(--color-neutral-50)] text-[var(--color-neutral-900)] rounded-xl shadow-lg">
      {/* Unlock Leaderboards */}
      <div className="bg-[var(--color-neutral-100)] p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg text-[var(--color-brand-700)] mb-2">
          Unlock Leaderboards!
        </h3>
        <p className="text-sm text-[var(--color-neutral-500)]">
          Complete <span className="font-semibold">10 more lessons</span> to
          start competing.
        </p>
      </div>

      {/* Daily Quests */}
      <div className="bg-[var(--color-neutral-100)] p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold text-lg text-[var(--color-accent-600)] mb-2">
          Daily Quests
        </h3>
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm">Earn 10 XP</span>
          <span className="text-xs text-[var(--color-neutral-500)]">0 / 10</span>
        </div>
        <div className="w-full h-2 bg-[var(--color-neutral-50)] rounded-full overflow-hidden">
          <div
            className="h-full bg-[var(--color-accent-500)]"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>

      {/* Create Profile 
      <div className="bg-[var(--color-neutral-100)] p-4 rounded-lg shadow-sm flex flex-col gap-3">
        <h3 className="font-semibold text-lg">Create a profile</h3>
        <p className="text-sm text-[var(--color-neutral-500)]">
          Save your progress!
        </p>
        <button className="bg-[var(--color-brand-500)] hover:bg-[var(--color-brand-600)] text-white py-2 rounded-lg font-semibold transition">
          Create a Profile
        </button>
        <button className="bg-white text-[var(--color-brand-500)] border border-[var(--color-brand-500)] hover:bg-[var(--color-brand-50)] py-2 rounded-lg font-semibold transition">
          Sign In
        </button>
      </div>
      */}
    </aside>
  );
}
