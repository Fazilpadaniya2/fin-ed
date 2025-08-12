

export default function Question({Question}){



    return(
        <>
<div class="w-full bg-[var(--color-neutral-50)]">
  <div class="max-w-5xl mx-auto px-6 pt-10 pb-4">
    <h2 class="text-[var(--color-neutral-900)] text-3xl md:text-4xl font-semibold leading-tight">
      {Question}
    </h2>
  </div>
</div>

        </>
    )
}