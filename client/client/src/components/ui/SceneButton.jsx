

export default function SceneButton({id, Active, click}){


    return(<>
{Active ? (
   <button type="button" aria-pressed="true"  className="relative grid place-items-center">
    {/* outer ring */}
    <div className="p-2 rounded-full bg-[#F1F5F9]">
      {/* inner disc */}
      <div className="grid place-items-center w-20 h-20 rounded-full bg-[#22C55E] shadow-[inset_0_-8px_0_rgba(0,0,0,0.15)]">
        {/* money icon */}
        <svg viewBox="0 0 24 24" classNameNameName="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 4v16" />
          <path d="M8.5 8.5c0-1.7 1.6-2.5 3.5-2.5s3.5.8 3.5 2.5c0 1.3-.9 2-2.7 2.4l-2.1.5c-1.7.4-2.7 1-2.7 2.4 0 1.6 1.6 2.6 3.8 2.6s3.8-1 3.8-2.6" />
        </svg>
      </div>
    </div>
    {/* base shadow */}
    <div className="pointer-events-none absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-5 w-16 rounded-full bg-[#15803D]/20">{id}</div>
  </button>
) : ( <button type="button" aria-pressed="false" onClick={click} className="relative grid place-items-center">
  
    <div className="p-2 rounded-full bg-[#F1F5F9]">
     
      <div className="grid place-items-center w-20 h-20 rounded-full bg-[#F1F5F9] shadow-[0_8px_0_rgba(0,0,0,0.15)]">
        <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#64748B]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 4v16" />
          <path d="M8.5 8.5c0-1.7 1.6-2.5 3.5-2.5s3.5.8 3.5 2.5c0 1.3-.9 2-2.7 2.4l-2.1.5c-1.7.4-2.7 1-2.7 2.4 0 1.6 1.6 2.6 3.8 2.6s3.8-1 3.8-2.6" />
        </svg>
      </div>
    </div>
    <div className="pointer-events-none absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-5 w-16 rounded-full bg-black/15">{id}</div>
  </button>)}
</>)

}