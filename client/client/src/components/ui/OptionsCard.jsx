export default function OptionCard({OptionName,index, HandleClick}){




    return(<>

   <button
      type="button"
      onClick={HandleClick}
      disabled={disabled}
      aria-pressed={selected}
      className={`relative h-24 w-full rounded-2xl bg-[var(--color-neutral-50)] ring-1 ring-[var(--color-neutral-100)] shadow-sm transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)]`}
    >
      <span className="absolute left-5 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-xl bg-[var(--color-neutral-50)] ring-1 ring-[var(--color-neutral-100)] text-[var(--color-neutral-500)] font-semibold">
        {index}
      </span>

      <span className="pointer-events-none absolute inset-0 grid place-items-center">
        <span className="text-2xl font-medium text-[var(--color-neutral-900)]">
          {option}
        </span>
      </span>
    </button>
    
    </>)
}