"use client";

import { OrderForm } from "@/components/order-form";
import { SectionShell } from "@/components/ui/section-shell";
import { getLocalizedPacks } from "@/config/packs";
import { trackEvent } from "@/lib/tracking";
import type { ReactNode } from "react";

import type { MessageBundle } from "@/types/content";
import type { LanguageOption } from "@/types/purchase";

interface LandingPageProps {
  locale: LanguageOption;
  messages: MessageBundle;
}

export function LandingPage({ locale, messages }: LandingPageProps) {
  const packs = getLocalizedPacks(locale);
  return (
    <main id="main" className="overflow-hidden">
      <Hero locale={locale} messages={messages} />

      <SectionShell id="promise" className="py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Promise</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
            {messages.promise.title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            {messages.promise.intro}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {messages.promise.cards.map((card) => (
            <article
              key={card.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-display text-3xl uppercase leading-tight text-white">
                {card.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/70">{card.description}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="includes" className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">Includes</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
              {messages.includes.title}
            </h2>
            <p className="mt-5 text-lg text-white/70">{messages.includes.intro}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {messages.includes.items.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-black/25 p-6"
              >
                <p className="text-xs uppercase tracking-[0.32em] text-red-400">
                  {item.kicker}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="highlights" className="py-20 sm:py-24">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">Highlights</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
              {messages.highlights.title}
            </h2>
            <p className="mt-5 text-lg text-white/70">{messages.highlights.intro}</p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {messages.highlights.items.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-[4/3] bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.4),_transparent_55%),linear-gradient(135deg,#260101_0%,#090909_55%,#171717_100%)] p-6">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-dashed border-white/20 p-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/60">
                      {item.eyebrow}
                    </p>
                    <p className="mt-3 font-display text-4xl uppercase text-white">
                      {item.title}
                    </p>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
                    {item.duration}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-6 text-white/70">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="packs" className="py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">Packs</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
            {messages.packs.title}
          </h2>
          <p className="mt-5 text-lg text-white/70">{messages.packs.intro}</p>
        </div>
        <div className="mt-10 grid gap-5 xl:grid-cols-3">
          {packs.map((pack) => (
            <article
              key={pack.id}
              className={`rounded-[2rem] border p-6 ${
                pack.recommended
                  ? "border-red-500 bg-red-500/10 shadow-[0_0_80px_rgba(220,38,38,0.18)]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  {pack.badge ? (
                    <span className="rounded-full border border-red-400/40 bg-red-500/15 px-3 py-1 text-xs uppercase tracking-[0.24em] text-red-200">
                      {pack.badge}
                    </span>
                  ) : null}
                  <h3 className="mt-4 font-display text-4xl uppercase text-white">
                    {pack.name}
                  </h3>
                </div>
                <p className="text-right">
                  <span className="block text-4xl font-semibold text-white">
                    {pack.price}
                  </span>
                  <span className="text-sm uppercase tracking-[0.22em] text-white/60">
                    {pack.currency}
                  </span>
                </p>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/70">{pack.summary}</p>
              <ul className="mt-6 grid gap-3 text-sm text-white/80">
                {pack.features.map((feature) => (
                  <li key={feature} className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#order"
                className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-neutral-950 transition hover:bg-red-500 hover:text-white"
                onClick={() =>
                  trackEvent({ event: "pack_cta_click", locale, pack: pack.id })
                }
              >
                {pack.ctaLabel}
              </a>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/55">{messages.packs.guarantee}</p>
      </SectionShell>

      <SectionShell id="authority" className="py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">Authority</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
              {messages.authority.title}
            </h2>
            <p className="mt-5 text-lg text-white/70">{messages.authority.intro}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72">
              {messages.authority.body}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {messages.authority.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.5rem] border border-white/10 bg-black/25 p-4"
                >
                  <p className="font-display text-3xl uppercase text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-white/55">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {messages.authority.miniTestimonials.map((item) => (
              <blockquote
                key={item.quote}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-lg leading-7 text-white">{item.quote}</p>
                <footer className="mt-4 text-sm uppercase tracking-[0.24em] text-red-300">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell id="faq" className="py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400">FAQ</p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
            {messages.faq.title}
          </h2>
          <p className="mt-5 text-lg text-white/70">{messages.faq.intro}</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {messages.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <summary className="cursor-pointer list-none font-semibold text-white">
                {item.question}
              </summary>
              <p className="mt-4 text-sm leading-6 text-white/70">{item.answer}</p>
            </details>
          ))}
        </div>
      </SectionShell>

      <SectionShell id="order" className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-400">Order</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white sm:text-6xl">
              {messages.form.title}
            </h2>
            <p className="mt-5 text-lg text-white/70">{messages.form.subtitle}</p>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/30 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                Backend notes
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-white/70">
                <li>Lambda/API should validate `formKey`, honeypot, consent, and pack logic.</li>
                <li>Stripe flow can return `redirectUrl` or use pack-level payment links.</li>
                <li>Manual flow can return `requestCode` plus `paymentInstructions`.</li>
              </ul>
            </div>
          </div>
          <OrderForm locale={locale} copy={messages.form} />
        </div>
      </SectionShell>
    </main>
  );
}

function Hero({
  locale,
  messages,
}: {
  locale: LanguageOption;
  messages: MessageBundle;
}) {
  return (
    <SectionShell className="relative py-10 sm:py-16 lg:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top_left,_rgba(239,68,68,0.38),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,#0a0a0a_0%,#090909_40%,#050505_100%)]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-red-400">
            {messages.hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-display text-[4.25rem] uppercase leading-[0.88] text-white sm:text-[5.5rem] lg:text-[7rem]">
            {messages.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
            {messages.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <TrackedAnchor
              href={messages.hero.primaryCta.href}
              event={messages.hero.primaryCta.event}
              locale={locale}
              className="inline-flex rounded-full bg-red-600 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-red-500"
            >
              {messages.hero.primaryCta.label}
            </TrackedAnchor>
            {messages.hero.secondaryCta ? (
              <TrackedAnchor
                href={messages.hero.secondaryCta.href}
                event={messages.hero.secondaryCta.event}
                locale={locale}
                className="inline-flex rounded-full border border-white/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-white transition hover:border-white/40"
              >
                {messages.hero.secondaryCta.label}
              </TrackedAnchor>
            ) : null}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {messages.hero.stats.map((item) => (
              <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4">
                <p className="text-xs uppercase tracking-[0.32em] text-white/45">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-red-600/20 blur-3xl" />
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(140deg,#1d0000_0%,#111111_60%,#050505_100%)] p-5">
            <div className="aspect-[4/5] rounded-[2rem] border border-dashed border-white/15 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_35%),linear-gradient(160deg,rgba(239,68,68,0.22),rgba(0,0,0,0.2))] p-6">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-red-300">
                    {messages.hero.teaserLabel}
                  </p>
                  <h2 className="mt-4 font-display text-5xl uppercase leading-none text-white">
                    {messages.hero.teaserTitle}
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-white/70">
                  {messages.hero.teaserCopy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function TrackedAnchor({
  href,
  event,
  locale,
  className,
  children,
}: {
  href: string;
  event: string;
  locale: LanguageOption;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackEvent({ event, locale })}
    >
      {children}
    </a>
  );
}
