import React from "react";

export default function RightSidebar({ user }) {
  const fallbackUser = {
    username: "Learner",
    tag: "@start-fin",
    streakCount: 0,
    xp: 0,
    grade: "N/A",
  };

  const profile = { ...fallbackUser, ...user };

  const formattedXp =
    typeof profile.xp === "number"
      ? profile.xp.toLocaleString()
      : profile.xp ?? fallbackUser.xp;

  const formattedTag = profile.tag?.startsWith("@")
    ? profile.tag
    : profile.tag
    ? `@${profile.tag}`
    : fallbackUser.tag;

  const stats = [
    {
      label: "Streak",
      value: `${profile.streakCount} day${
        profile.streakCount === 1 ? "" : "s"
      }`,
      highlightClass: "text-[var(--color-brand-600)]",
    },
    {
      label: "XP",
      value: formattedXp,
      highlightClass: "text-[var(--color-accent-600)]",
    },
    {
      label: "Grade",
      value: profile.grade,
      highlightClass: "text-[var(--color-brand-700)]",
    },
  ];

  return (
    <div className="flex h-full flex-col gap-6 text-[var(--color-neutral-50)]">
      <section className="rounded-3xl bg-[var(--color-neutral-50)] p-6 text-[var(--color-neutral-900)] shadow-2xl">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-neutral-500)]">
            Learner Profile
          </span>
          <h2 className="text-2xl font-bold text-[var(--color-brand-700)]">
            {profile.username}
          </h2>
          <span className="text-sm font-medium text-[var(--color-accent-600)]">
            {formattedTag}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-[var(--color-neutral-100)] p-4 text-center shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-neutral-500)]">
                {stat.label}
              </p>
              <p className={`mt-2 text-lg font-semibold ${stat.highlightClass}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
