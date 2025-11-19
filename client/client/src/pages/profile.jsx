import React, { useState, useEffect } from "react";
import api from "../lib/api";

// Plain JSX (no TypeScript). Tailwind CSS for styling.
// Drop-in ready for Vite/CRA/Next.

export default function UserProfileCard() {

    const [data, setData] = useState({});

useEffect(() => {
  const fetchProfile = async () => {
    try {
      console.log("fetching");
      const { data } = await api.get("/profile");
        console.log(data.data, "we are here");
        console.log(data);
        setData(data)
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);


  return (
      <section className="mx-auto max-w-3xl px-4 py-12">
      <div className="overflow-hidden rounded-3xl border border-[var(--color-neutral-100)] bg-[var(--color-neutral-50)] shadow-2xl">
        <div className="bg-gradient-to-r from-[var(--color-brand-500)] to-[var(--color-accent-500)] px-8 py-10 text-[var(--color-neutral-50)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-brand-600)] bg-opacity-30 text-[var(--color-neutral-50)]">
                <svg viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" aria-hidden>
                  <path d="M12 13.5c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2.25c-3.64 0-10.5 1.82-10.5 5.46V24h21v-2.79c0-3.64-6.86-5.46-10.5-5.46z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] opacity-80">
                  Profile
                </p>
                <h1 className="text-3xl font-semibold leading-tight">{data.username || "—"}</h1>
                <p className="text-sm opacity-80">{data.email || "—"}</p>
              </div>
            </div>
            <div className="rounded-full border border-[var(--color-neutral-50)] px-5 py-2 text-sm font-semibold uppercase tracking-wide">
              {data.role || "—"}
            </div>
          </div>
        </div>
        <div className="px-8 py-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-neutral-500)]">
            Account Details
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-[var(--color-brand-100)] bg-[var(--color-brand-50)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-600)]">
                Username
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-neutral-900)]">
                {data.username || "—"}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-neutral-100)] bg-[var(--color-neutral-100)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-neutral-500)]">
                Email
              </p>
              <p className="mt-2 break-all text-lg font-semibold text-[var(--color-neutral-900)]">
                {data.email || "—"}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-brand-500)] bg-[var(--color-brand-100)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-700)]">
                Role
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-brand-700)]">
                {data.role || "—"}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-neutral-100)] bg-[var(--color-neutral-50)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-neutral-500)]">
                ID
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-neutral-900)]">
                {data.id || "—"}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-info-500)] bg-[var(--color-info-100)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-info-600)]">
                IAT
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-info-600)]">
                {data.iat || "—"}
              </p>
            </div>
            <div className="rounded-2xl border border-[var(--color-accent-500)] bg-[var(--color-accent-50)] p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-600)]">
                EXP
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-accent-600)]">
                {data.exp || "—"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


