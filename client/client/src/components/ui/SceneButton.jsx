import { Link, useParams } from "react-router-dom";

export default function SceneButton({topicId, number, title, scene_id }){

  const {sceneid, topic_id} = useParams();
  const active = true;  

    return(<>
{active ? (
   <Link
  to={`scenes/${scene_id}`}
  role="button"
  aria-pressed={active}
  className="group block focus:outline-none"
>
  {/* card */}
  <div className="relative flex items-center gap-4 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-3 ring-1 ring-white/5 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-emerald-400/60">
    {/* avatar / icon */}
    <div className="relative">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500 ring-4 ring-slate-900/70 shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)]">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4v16" />
          <path d="M8.5 8.5c0-1.7 1.6-2.5 3.5-2.5s3.5.8 3.5 2.5c0 1.3-.9 2-2.7 2.4l-2.1.5c-1.7.4-2.7 1-2.7 2.4 0 1.6 1.6 2.6 3.8 2.6s3.8-1 3.8-2.6" />
        </svg>
      </div>
    </div>

    {/* text */}
    <div className="min-w-0 flex-1">
      <h3 className="truncate text-base font-semibold text-slate-100">
        {title}
      </h3>

      <div className="mt-1 flex items-center gap-3 text-sm text-slate-400">
        {/* time / meta left – repurposed for topic number */}
        <span className="inline-flex items-center gap-1">
          {/* clock icon */}
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 text-emerald-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 6v6l4 2" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <span className="tabular-nums">Topic {number}</span>
        </span>

        <span className="h-1 w-1 rounded-full bg-slate-600" />

        {/* extra meta */}
        <span className="truncate">ID: {topicId}</span>
      </div>
    </div>

    {/* badge on right */}
    <span className="ml-auto rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/30">
      Start
    </span>
  </div>
</Link>

) : (  <Link
      to={`/topics/${topic_id}scenes/${scene_id}`}
      role="button"
      aria-pressed={active}
      className="block"
    >
    <div className="p-2 rounded-full bg-[#F1F5F9]">
     
      <div className="grid place-items-center w-20 h-20 rounded-full bg-[#F1F5F9] shadow-[0_8px_0_rgba(0,0,0,0.15)]">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#64748B]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 4v16" />
          <path d="M8.5 8.5c0-1.7 1.6-2.5 3.5-2.5s3.5.8 3.5 2.5c0 1.3-.9 2-2.7 2.4l-2.1.5c-1.7.4-2.7 1-2.7 2.4 0 1.6 1.6 2.6 3.8 2.6s3.8-1 3.8-2.6" />
        </svg>
      </div>
    </div>
    <div className="pointer-events-none absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-5 w-16 rounded-full bg-black/15">Topic id:{topicId}</div>
  </Link>
)}
</>)

}