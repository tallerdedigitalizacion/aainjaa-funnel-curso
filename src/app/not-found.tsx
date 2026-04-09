import Link from "next/link";

import { defaultLocale } from "@/config/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-center text-white">
      <div>
        <p className="font-display text-7xl uppercase tracking-[0.14em] text-red-500">
          404
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase">Route not found</h1>
        <p className="mt-4 text-white/65">
          The requested page does not exist in this build.
        </p>
        <Link
          href={`/${defaultLocale}`}
          className="mt-8 inline-flex rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white"
        >
          Go home
        </Link>
      </div>
    </main>
  );
}
