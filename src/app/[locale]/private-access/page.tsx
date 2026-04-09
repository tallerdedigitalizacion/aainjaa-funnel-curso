import type { Metadata } from "next";

import { SectionShell } from "@/components/ui/section-shell";
import { getMessages, isLocale } from "@/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const messages = getMessages(locale);
  return buildPageMetadata(locale, "/private-access", {
    title: `${messages.privateAccess.title} | AAINJAA`,
    description: messages.privateAccess.intro,
  });
}

export default async function PrivateAccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;

  const messages = getMessages(locale);

  return (
    <SectionShell className="py-20 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Private access</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
            {messages.privateAccess.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
            {messages.privateAccess.intro}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
            {messages.privateAccess.helper}
          </p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <form className="grid gap-5">
            <label className="grid gap-2 text-sm text-white/75">
              <span>{messages.privateAccess.emailLabel}</span>
              <input
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-red-500"
                placeholder="name@email.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/75">
              <span>{messages.privateAccess.passwordLabel}</span>
              <input
                type="password"
                className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition focus:border-red-500"
                placeholder="••••••••"
              />
            </label>
            <button
              type="button"
              className="mt-2 rounded-full bg-red-600 px-6 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-red-500"
            >
              {messages.privateAccess.cta}
            </button>
          </form>
          <p className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm leading-6 text-white/60">
            {messages.privateAccess.note}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
