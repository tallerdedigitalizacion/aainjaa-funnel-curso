import type {
  CurrencyOption,
  LanguageOption,
} from "@/types/purchase";

export interface NavLink {
  label: string;
  href: string;
}

export interface CTAConfig {
  label: string;
  href: string;
  event: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: CTAConfig;
  secondaryCta?: CTAConfig;
  teaserLabel: string;
  teaserTitle: string;
  teaserCopy: string;
  stats: Array<{ label: string; value: string }>;
}

export interface PromiseCard {
  title: string;
  description: string;
}

export interface IncludesItem {
  title: string;
  description: string;
  kicker: string;
}

export interface HighlightItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  eyebrow: string;
}

export interface AuthorityStat {
  label: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FormCopy {
  title: string;
  subtitle: string;
  submitLabel: string;
  submittingLabel: string;
  errorTitle: string;
  checkoutNote: string;
  privacyLabel: string;
  labels: Record<string, string>;
  placeholders: Record<string, string>;
  errors: Record<string, string>;
}

export interface FooterContent {
  copyright: string;
  legalLabel: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  title: string;
  intro: string;
  reviewNote: string;
  sections: LegalSection[];
}

export interface MessageBundle {
  localeLabel: string;
  languageSwitcherLabel: string;
  skipToContent: string;
  meta: {
    title: string;
    description: string;
    siteName: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: NavLink[];
  hero: HeroContent;
  promise: {
    title: string;
    intro: string;
    cards: PromiseCard[];
  };
  includes: {
    title: string;
    intro: string;
    items: IncludesItem[];
  };
  highlights: {
    title: string;
    intro: string;
    items: HighlightItem[];
  };
  offer: {
    title: string;
    intro: string;
    supportLine: string;
  };
  authority: {
    title: string;
    intro: string;
    body: string;
    stats: AuthorityStat[];
    miniTestimonials: Array<{ quote: string; name: string }>;
  };
  faq: {
    title: string;
    intro: string;
    items: FAQItem[];
  };
  form: FormCopy;
  thanks: {
    eyebrow: string;
    success: {
      title: string;
      body: string;
      supportPrefix: string;
      cta: string;
    };
    cancel: {
      title: string;
      body: string;
      cta: string;
    };
  };
  legal: {
    commonBackLabel: string;
    avisoLegal: LegalPageContent;
    privacidad: LegalPageContent;
    cookies: LegalPageContent;
  };
  footer: FooterContent;
  notFound: {
    title: string;
    body: string;
    cta: string;
  };
  cookieBanner: {
    title: string;
    description: string;
    accept: string;
    reject: string;
    customize: string;
    savePreferences: string;
    essentials: string;
    analytics: string;
    legalPrefix: string;
  };
}
