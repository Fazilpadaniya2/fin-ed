import React from "react";

export default function Shop() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-8 w-8"
            aria-hidden
          >
            <path d="M4 6h16l-1.5 12.5a2 2 0 0 1-2 1.75H7.5a2 2 0 0 1-2-1.75L4 6zm7-4h2a1 1 0 0 1 1 1v1H10V3a1 1 0 0 1 1-1z" />
          </svg>
        </div>
        <p className="text-xl font-semibold text-slate-900">
          We are cooking some things to buy, As the site is under construction.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Check back soon to see the goodies we are preparing for the shop.
        </p>
      </div>
    </section>
  );
}
