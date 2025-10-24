import { Link } from "react-router-dom";

export default function SceneButton({ topicId, number, title, scene_id, is_completed }) {
  // Make sure it's a real boolean even if API ever sends null/undefined
  const completed = Boolean(is_completed);
  console.log(completed);
  const cardClass = completed
    ? "relative flex items-center gap-4 rounded-2xl bg-gradient-to-b from-slate-700 to-slate-800 p-3 ring-1 ring-emerald-500/30 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-emerald-400/60"
    : "relative flex items-center gap-4 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-3 ring-1 ring-white/5 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-emerald-400/60";

  const avatarClass = completed
    ? "grid h-14 w-14 place-items-center rounded-2xl bg-emerald-600 ring-4 ring-emerald-950/70 shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)]"
    : "grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500 ring-4 ring-slate-900/70 shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)]";

  const titleClass = completed
    ? "truncate text-base font-semibold text-emerald-100"
    : "truncate text-base font-semibold text-slate-100";

  const metaTextClass = completed
    ? "mt-1 flex items-center gap-3 text-sm text-slate-300"
    : "mt-1 flex items-center gap-3 text-sm text-slate-400";

  return (
    <Link
      to={`scenes/${scene_id}`}
      className="group block focus:outline-none"
      // aria-pressed is for buttons/toggles; Links don't need it
    >
      <div className={cardClass}>
        {/* avatar / icon */}
        <div className="relative">
          <div className={avatarClass}>
            {completed ? (
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 4v16" />
                <path d="M8.5 8.5c0-1.7 1.6-2.5 3.5-2.5s3.5.8 3.5 2.5c0 1.3-.9 2-2.7 2.4l-2.1.5c-1.7.4-2.7 1-2.7 2.4 0 1.6 1.6 2.6 3.8 2.6s3.8-1 3.8-2.6" />
              </svg>
            )}
          </div>
        </div>

        {/* text */}
        <div className="min-w-0 flex-1">
          <h3 className={titleClass}>{title}</h3>

          <div className={metaTextClass}>
            <span className="inline-flex items-center gap-1">
              <svg viewBox="0 0 24 24" className={`h-4 w-4 ${completed ? "text-emerald-300" : "text-emerald-400"}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 6v6l4 2" />
                <circle cx="12" cy="12" r="9" />
              </svg>
              <span className="tabular-nums">Topic {number}</span>
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-600" />

            <span className="truncate">ID: {topicId}</span>
          </div>
        </div>

        {/* badge on right */}
        {completed ? (
          <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-200 ring-1 ring-emerald-500/30">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Completed
          </span>
        ) : (
          <span className="ml-auto rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
            Start
          </span>
        )}
      </div>
    </Link>
  );
}
