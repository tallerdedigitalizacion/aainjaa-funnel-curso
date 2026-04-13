import { getPurchaseFormOptions } from "@/config/purchase-options";
import type { MessageBundle } from "@/types/content";

export const enMessages: MessageBundle = {
  localeLabel: "English",
  languageSwitcherLabel: "Change language",
  skipToContent: "Skip to content",
  meta: {
    title: "AAINJAA | Stage-driven percussion with Homero Cortes",
    description:
      "Bilingual landing page for selling an AAINJAA digital percussion product with configurable packs, embedded form, and Stripe or manual payment flows.",
    siteName: "AAINJAA",
    ogTitle: "AAINJAA | Digital percussion product",
    ogDescription:
      "Learn a stage-ready percussion arrangement with clear resources, configurable packs, and private digital access.",
  },
  nav: [
    { label: "Value", href: "#promise" },
    { label: "Includes", href: "#includes" },
    { label: "Packs", href: "#packs" },
    { label: "FAQ", href: "#faq" },
    { label: "Order", href: "#order" },
  ],
  hero: {
    eyebrow: "AAINJAA x Homero Cortes",
    title: "Percussion with stage energy, sharp structure, and real pulse.",
    subtitle:
      "A conversion-focused landing page for a digital product that blends live-performance energy, guided learning, and a checkout-ready flow.",
    primaryCta: { label: "Choose your pack", href: "#packs", event: "cta_primary_click" },
    secondaryCta: { label: "Watch highlights", href: "#highlights", event: "cta_secondary_click" },
    teaserLabel: "Main teaser",
    teaserTitle: "Ready space for a video, visual teaser, or campaign collage",
    teaserCopy:
      "Replace this block with a clip, thumbnail, or editorial montage once the final creative assets are ready.",
    stats: [
      { label: "Format", value: "Digital + scalable" },
      { label: "Languages", value: "ES / EN" },
      { label: "Payments", value: "Stripe or manual" },
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
  packs: {
    title: "Choose the pack that matches your moment",
    intro: "Three configurable packs, one recommended option, and a structure ready for Stripe or manual flow.",
    guarantee: "Digital access is enabled after payment is verified. If physical material exists, it is confirmed based on availability.",
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
        answer: "After payment is validated, the backend can approve access and send instructions or unlock the private area.",
      },
      {
        question: "Which language is the product in?",
        answer: "The site works in Spanish and English. Product language can be defined by pack or by the backend response.",
      },
      {
        question: "Do I need prior experience?",
        answer: "Not necessarily, although the current recommended level is intermediate. This copy remains editable by locale.",
      },
      {
        question: "Can I pay with Stripe?",
        answer: "Yes. The form is prepared to redirect to checkout or a payment link when the backend or config says so.",
      },
      {
        question: "Is manual payment available?",
        answer: "Yes. The backend response can return manual payment instructions plus a reference code.",
      },
      {
        question: "Does the product include physical material?",
        answer: "Only if the selected pack requires it. In that case shipping fields appear and availability messaging can be shown.",
      },
      {
        question: "How long does delivery take?",
        answer: "Digital access is usually fast after validation. If physical material is included, timelines are indicative and may vary due to logistics or customs.",
      },
    ],
  },
  form: {
    title: "Place your order",
    subtitle: "Embedded form with validation, ready for your own backend, Lambda, or API.",
    submitLabel: "Send order",
    submittingLabel: "Sending...",
    successTitle: "Order submitted",
    successCopy: "Your request has been recorded. Redirects or manual instructions can be shown right after submission.",
    errorTitle: "We could not submit the form.",
    privacyLabel: "I have read and accept the privacy policy and the processing of my data to manage this order.",
    manualInfoLabel: "Manual payment preference",
    stripeInfoLabel: "Stripe payment preference",
    stripeHelperLabel: "Automatic card payment",
    manualHelperLabel: "Transfer or manual handling",
    paymentDetails: {
      stripeTitle: "Secure card payment",
      stripeDescription: "Enter your card details to complete the payment.",
      stripePlaceholderLabel: "Container prepared for Stripe Elements",
      stripePlaceholderHint: "The real card widget will be mounted here once Stripe is connected.",
      manualTitle: "Manual payment and confirmation",
      manualDescription:
        "After submitting this order, you will receive an email with the payment details and the reference code needed to complete the payment and reconciliation. Once the payment is manually confirmed, you will receive access to the course.",
      supportPrefix: "If you have any questions or issues, you can contact us at",
    },
    labels: {
      fullName: "Full name",
      email: "Email",
      phone: "Phone optional",
      country: "Country",
      language: "Preferred language",
      currency: "Payment currency",
      selectedPack: "Selected pack",
      paymentMethodPreferred: "Payment method",
      shippingAddress: "Shipping address",
      line1: "Address",
      line2: "Additional address",
      city: "City",
      region: "State / region",
      postalCode: "Postal code",
      shippingCountry: "Shipping country",
    },
    placeholders: {
      fullName: "Your full name",
      email: "you@email.com",
      phone: "+1 555 000 000",
      country: "Your country of residence",
      line1: "Street and number",
      line2: "Apt, suite, reference",
      city: "New York",
      region: "NY",
      postalCode: "10001",
      shippingCountry: "United States",
    },
    errors: {
      fullName: "Please enter your full name.",
      email: "Please enter a valid email.",
      phone: "Please enter a valid international phone number.",
      country: "Please enter your country.",
      privacyConsent: "We need your consent to process the order.",
      shippingAddress: "Please complete the shipping address.",
      global: "Please review the form and try again.",
    },
    options: getPurchaseFormOptions("en"),
  },
  thanks: {
    title: "Thank you for your order",
    body: "Your request is now inside the flow. This space is ready to show confirmation, a reference code, or next steps depending on the backend.",
    cta: "Back to home",
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
            "The form may collect name, email, phone, country, language preferences, currency, skill level, and shipping data if required by the pack.",
            "Consent states, technical identifiers, and user-provided notes may also be processed.",
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
