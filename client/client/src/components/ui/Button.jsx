export default function Button({icon, label, activeId, id, setActiveId}) {
  const base =
    "w-full flex items-center gap-4 rounded-3xl px-5 py-4 transition shadow-sm";
  const activeCls =
    "bg-brand-50 text-neutral-900 shadow-lg ring-1 ring-black/10";
const idleCls =
  "bg-transparent text-neutral-50/90 hover:bg-white/5 hover:text-neutral-50";

  const active = (activeId===id);
  return (
    <button
      type="button"
      className={`${base} ${active ? activeCls : idleCls}`}
      onClick={()=>{setActiveId}}
      aria-pressed={active}
    >
      {/* icon */}
      <span
        className={`text-2xl leading-none select-none ${
          active ? "drop-shadow-sm" : ""
        }`}
        aria-hidden="true"
      >
        {icon}
      </span>

      {/* label */}
      <span className={`font-extrabold tracking-wide text-lg`}>
        {label}
      </span>
    </button>
  );
}
