import React from "react";

export default function More() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-lg w-full rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
        <h1 className="text-2xl font-semibold text-slate-900">Prototype Notice</h1>
        <p className="mt-4 text-slate-600">
          This is a prototype website. I would love to hear your thoughts; let me know
          what you would like to see next.
        </p>
        <div className="mt-6 space-y-3">
          <a
            href="https://github.com/Fazilpadaniya2"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-slate-100 px-6 py-3 text-slate-800 hover:bg-slate-200"
          >
            Follow on GitHub
          </a>
          <a
            href="https://www.linkedin.com/fazil-padaniya/"
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-slate-200 bg-slate-100 px-6 py-3 text-slate-800 hover:bg-slate-200"
          >
            Connect on LinkedIn
          </a>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Have feedback? Drop me a message through these links—I'd love to hear from you.
        </p>
      </div>
    </section>
  );
}
