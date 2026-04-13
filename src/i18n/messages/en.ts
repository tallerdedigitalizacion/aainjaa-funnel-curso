import type { MessageBundle } from "@/types/content";

export const enMessages: MessageBundle = {
  localeLabel: "English",
  languageSwitcherLabel: "Change language",
  skipToContent: "Skip to content",
  meta: {
    title: "AAINJAA | Stage-driven percussion with Homero Cortes",
    description:
      "Bilingual landing page to validate an AAINJAA digital percussion masterclass with one clear offer and direct Stripe checkout.",
    siteName: "AAINJAA",
    ogTitle: "AAINJAA | Digital percussion product",
    ogDescription:
      "Join a digital percussion masterclass with a launch offer and direct Stripe checkout.",
  },
  nav: [
    { label: "Value", href: "#promise" },
    { label: "Includes", href: "#includes" },
    { label: "Offer", href: "#offer" },
    { label: "FAQ", href: "#faq" },
    { label: "Order", href: "#order" },
  ],
  hero: {
    eyebrow: "AAINJAA x Homero Cortes",
    title: "Percussion with stage energy, sharp structure, and real pulse.",
    subtitle:
      "A direct market-test page built around one digital masterclass, one launch offer, and a clean Stripe-first checkout flow.",
    primaryCta: { label: "Get access now", href: "#order", event: "cta_primary_click" },
    teaserLabel: "Main teaser",
    teaserTitle: "Ready space for a video, visual teaser, or campaign collage",
    teaserCopy:
      "Replace this block with a clip, thumbnail, or editorial montage once the final creative assets are ready.",
    stats: [
      { label: "Format", value: "Digital masterclass" },
      { label: "Languages", value: "ES / EN" },
      { label: "Offer", value: "20% launch · 7 days" },
    ],
  },
  promise: {
    title: "Not just another loose video. A piece designed to learn, play, and keep.",
    intro: "Short, conversion-ready blocks that make the promise clear within seconds.",
    cards: [
      {
        title: "What you learn",
        description: "A percussion arrangement taught step by step with musical context, reading support, and practical application.",
      },
      {
        title: "Who it is for",
        description: "Percussionists, drummers, teachers, and curious musicians looking for a strong reference point.",
      },
      {
        title: "Recommended level",
        description: "Starting at intermediate, with editable messaging so you can reposition it for beginners or advanced players.",
      },
      {
        title: "Why it matters",
        description: "It reduces friction, gives structure to practice, and feels closer to a carefully built class than random content.",
      },
    ],
  },
  includes: {
    title: "What is included",
    intro: "All visible content is driven by configuration so the offer can evolve without rebuilding the page.",
    items: [
      {
        kicker: "Step by step",
        title: "Guided breakdown",
        description: "A clear walkthrough of the arrangement with a progression that is easy to follow.",
      },
      {
        kicker: "Per instrument",
        title: "Separated layers",
        description: "Individual parts to understand each tone and rebuild the full piece with precision.",
      },
      {
        kicker: "Practice",
        title: "Slow version",
        description: "Reduced tempo for memorising, correcting, and locking in the groove.",
      },
      {
        kicker: "Downloadable",
        title: "PDF scores",
        description: "Editable support material for reading, rehearsal, and teaching.",
      },
      {
        kicker: "Bonus",
        title: "Extra content",
        description: "Reserved space for bonuses, artistic notes, or premium add-ons.",
      },
    ],
  },
  highlights: {
    title: "Highlights ready for clips",
    intro: "Three slots ready for real thumbnails or videos without changing the structure.",
    items: [
      {
        id: "clip-1",
        eyebrow: "Clip 01",
        title: "Pulse and entry",
        description: "Placeholder for a teaser focused on energy, gesture, and first impact.",
        duration: "00:34",
      },
      {
        id: "clip-2",
        eyebrow: "Clip 02",
        title: "Layer breakdown",
        description: "Placeholder showing how instruments split out and rebuild the arrangement.",
        duration: "00:48",
      },
      {
        id: "clip-3",
        eyebrow: "Clip 03",
        title: "Slow version and detail",
        description: "Placeholder for a study-focused sample with clarity and technical control.",
        duration: "00:41",
      },
    ],
  },
  offer: {
    title: "One focused offer to validate real demand",
    intro: "One product, one visible price, and one clear decision: submit the order and finish the payment in Stripe.",
    supportLine: "Purchase flow",
  },
  authority: {
    title: "About Homero and AAINJAA",
    intro: "A concise authority block with editable stats so trust grows without turning the page into a long biography.",
    body: "AAINJAA blends stage language, rhythmic research, and contemporary pedagogy. This section is ready for easy updates around touring, student community, and international presence.",
    stats: [
      { label: "Countries", value: "12+" },
      { label: "Students", value: "1,500+" },
      { label: "Spaces", value: "Festivals, classrooms, residencies" },
    ],
    miniTestimonials: [
      { quote: "A proposal with identity, rhythm, and remarkable pedagogical clarity.", name: "Editable testimonial" },
      { quote: "It feels closer to artistic direction than to a generic online tutorial.", name: "AAINJAA community" },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    intro: "Short, clear answers that can be polished later with final commercial details.",
    items: [
      {
        question: "When do I get access?",
        answer: "After the Stripe payment is completed, you will receive an email with the instructions to access the course.",
      },
      {
        question: "Which language is the product in?",
        answer: "The landing is available in Spanish and English. Access and follow-up communication can be adapted from the locale you use to purchase.",
      },
      {
        question: "Do I need prior experience?",
        answer: "Not necessarily, although the current recommended level is intermediate. This copy remains editable by locale.",
      },
      {
        question: "Can I pay with Stripe?",
        answer: "Yes. Submitting the form creates the order and immediately redirects you to Stripe Checkout to finish the payment.",
      },
      {
        question: "How long does the offer last?",
        answer: "The launch offer runs for the first 7 days and applies a 20% discount to the base price.",
      },
    ],
  },
  form: {
    title: "Reserve your access",
    subtitle: "Leave your name and email. When you submit the order, we will take you directly to Stripe to complete the purchase.",
    submitLabel: "Go to Stripe Checkout",
    submittingLabel: "Sending...",
    errorTitle: "We could not submit the form.",
    checkoutNote: "We keep this step minimal. Payment is completed outside the landing in Stripe Checkout.",
    privacyLabel: "I have read and accept the privacy policy and the processing of my data to manage this order.",
    labels: {
      fullName: "Full name",
      email: "Email",
    },
    placeholders: {
      fullName: "Your full name",
      email: "you@email.com",
    },
    errors: {
      fullName: "Please enter your full name.",
      email: "Please enter a valid email.",
      privacyConsent: "We need your consent to process the order.",
      global: "Please review the form and try again.",
    },
  },
  thanks: {
    eyebrow: "Thank you",
    success: {
      title: "Thank you for your purchase",
      body: "Your payment has been processed successfully. You will shortly receive an email with the instructions to access your private course.",
      supportPrefix: "If you have any questions or issues, you can write to us at",
      cta: "Back to home",
    },
    cancel: {
      title: "Payment not completed",
      body: "We could not confirm the payment. If you want, you can try again from the landing page.",
      cta: "Back to home",
    },
  },
  legal: {
    commonBackLabel: "Back to home",
    avisoLegal: {
      title: "Legal notice",
      intro: "Editable base text for ownership, site purpose, and general access conditions.",
      reviewNote: "Requires final legal review before production.",
      sections: [
        {
          heading: "Site owner",
          paragraphs: [
            "AAINJAA and Homero Cortes are shown here as brand placeholders. Replace them with full legal entity details before launch.",
            "This site is intended to inform users and sell digital percussion products with private access after payment verification.",
          ],
        },
        {
          heading: "Access and use",
          paragraphs: [
            "Access to digital content grants a private viewing licence or permission, not ownership of the protected videos or materials.",
            "Access may depend on payment verification, anti-fraud checks, and the technical availability of the private area.",
          ],
        },
        {
          heading: "Delivery and limitation of liability",
          paragraphs: [
            "Digital delivery timelines are indicative and may depend on manual verification or reasonable technical incidents.",
            "If physical material exists, availability, logistics, and customs may affect delivery timing.",
          ],
        },
      ],
    },
    privacidad: {
      title: "Privacy policy",
      intro: "Editable base text explaining data processing related to orders, communication, and tracking.",
      reviewNote: "Requires final legal review before production.",
      sections: [
        {
          heading: "Collected data",
          paragraphs: [
            "The form may collect name, email, phone, country, language preferences, currency, and shipping data if required by the pack.",
            "Consent states and technical identifiers needed to manage the order may also be processed.",
          ],
        },
        {
          heading: "Purpose",
          paragraphs: [
            "To manage orders, verify payments, coordinate private access, answer requests, and prevent unwanted automated submissions.",
            "Non-essential analytics must not run before explicit cookie consent is granted.",
          ],
        },
        {
          heading: "Retention and rights",
          paragraphs: [
            "Retention periods should be defined according to the real legal basis and any tax or contractual obligations.",
            "Users should be able to exercise access, correction, deletion, and related rights through the final legal contact channel.",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookie policy",
      intro: "Editable base text explaining technical cookies, preferences, and analytics.",
      reviewNote: "Requires final legal review before production.",
      sections: [
        {
          heading: "Technical cookies",
          paragraphs: [
            "Cookies or local storage may be used to remember language, basic site behaviour, and consent state.",
            "These are necessary for a consistent website and form experience.",
          ],
        },
        {
          heading: "Analytics and marketing cookies",
          paragraphs: [
            "Google Analytics, GTM, or Meta Pixel should only load if the user accepts non-essential use.",
            "Real identifiers must be configured through environment variables before production.",
          ],
        },
        {
          heading: "Managing preferences",
          paragraphs: [
            "Users can accept, reject, or customise non-essential cookies through the cookie notice.",
            "The decision can later be reviewed through future UI controls or by clearing browser storage.",
          ],
        },
      ],
    },
  },
  footer: {
    copyright: "AAINJAA. All rights reserved.",
    legalLabel: "Legal",
  },
  notFound: {
    title: "This route missed the beat.",
    body: "The page you are looking for is not here or has moved.",
    cta: "Back to home",
  },
  cookieBanner: {
    title: "Cookies and preferences",
    description: "We use technical cookies to run the site and, only if you accept, load analytics and marketing tracking.",
    accept: "Accept",
    reject: "Reject",
    customize: "Customize",
    savePreferences: "Save preferences",
    essentials: "Essential cookies",
    analytics: "Analytics and marketing",
    legalPrefix: "More information in",
  },
};
