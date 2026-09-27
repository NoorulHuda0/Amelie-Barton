/**
 * Amelie Barton — Website Designer
 * Central configuration for business details, content, branding, services, and media.
 * Non-technical owners can edit this single file to update the entire website.
 */

export const business = {
  // Brand Identity
  name: "Amelie Barton",
  role: "Website Designer",
  type: "Website designer",
  tagline: "Modern Websites, Better Results.",
  style: "Luxury",

  // Location & Area
  location: {
    area: "Sutton, United Kingdom",
    streetAddress: "1 Gemini Court, 42a Throwley Way",
    locality: "Sutton",
    country: "United Kingdom",
    postcode: "SM1 4AF",
    fullAddress: "1 Gemini Court, 42a Throwley Way, Sutton, United Kingdom, SM1 4AF",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=1+Gemini+Court+42a+Throwley+Way+Sutton+SM1+4AF+United+Kingdom",
  },

  // Direct Communication Channels
  contact: {
    phone: "447915929263",
    phoneDisplay: "+44 (0)7915 929263",
    phoneHref: "tel:447915929263",
    whatsapp: "447915929263",
    whatsappHref: "https://wa.me/447915929263?text=Hi%20Amelie%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.",
    email: "amelie@ameliebarton.co.uk",
    emailHref: "mailto:amelie@ameliebarton.co.uk",
  },

  // Color Palette Tokens
  colors: {
    primary: "#4C1D95",
    primaryHover: "#3B0764",
    primaryLight: "#6D28D9",
    secondary: "#FFFFFF",
    ink: "#140E21",
    inkMuted: "#534D66",
    bg: "#FCFBF9",
    bgAlt: "#F6F4EE",
  },

  // Navigation Links
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Call to Actions
  cta: {
    primary: {
      label: "Message on WhatsApp",
      href: "https://wa.me/447915929263?text=Hi%20Amelie%2C%20I%27d%20like%20to%20discuss%20a%20website%20project.",
      isExternal: true,
    },
    secondary: {
      label: "View Services",
      href: "#services",
      isExternal: false,
    },
    directions: {
      label: "Get Directions",
      href: "https://www.google.com/maps/search/?api=1&query=1+Gemini+Court+42a+Throwley+Way+Sutton+SM1+4AF+United+Kingdom",
      isExternal: true,
    },
  },

  // Hero Section
  hero: {
    eyebrow: "Sutton · Bespoke Web Studio",
    headline: "Modern Websites, Better Results.",
    subheadline: "Thoughtfully crafted digital experiences for ambitious businesses in Sutton and Greater London. Designed with precision, built for performance.",
    trustText: "Direct consultation · Sutton studio on Throwley Way · Fast turnarounds",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    fallbackImage: "/src/assets/images/hero_luxury_studio_1790504258551.jpg",
  },

  // Services Catalog
  services: {
    eyebrow: "Bespoke Capabilities",
    title: "Tailored Website Design & Digital Growth",
    description: "Every service is delivered with obsessive attention to typographic balance, mobile responsiveness, and high conversion.",
    items: [
      {
        id: "website-design",
        number: "01",
        title: "Website Design",
        category: "Creative Direction",
        description: "Bespoke visual layouts designed around your brand's unique identity, built to engage visitors and project authority.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80",
        featured: true,
      },
      {
        id: "website-development",
        number: "02",
        title: "Website Development",
        category: "Engineering",
        description: "Modern, clean frontend engineering that guarantees lightning-fast loading speeds, smooth interactions, and rock-solid code.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
        featured: true,
      },
      {
        id: "ecommerce-website",
        number: "03",
        title: "E-Commerce Website",
        category: "Commerce",
        description: "Seamless online stores designed for frictionless checkout, clear product merchandising, and sustained sales volume.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
        featured: true,
      },
      {
        id: "wordpress-design",
        number: "04",
        title: "WordPress Design",
        category: "Content Management",
        description: "Custom, lightweight WordPress builds that give you complete ownership and simple editing without bulky plugin bloat.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
      {
        id: "landing-page-design",
        number: "05",
        title: "Landing Page Design",
        category: "Conversion",
        description: "Focused, high-converting standalone pages engineered specifically for product launches, ad campaigns, and direct inquiries.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
      {
        id: "website-redesign",
        number: "06",
        title: "Website Redesign",
        category: "Transformation",
        description: "Transforming dated, slow websites into sharp, contemporary assets that reflect how your business operates today.",
        image: "https://images.unsplash.com/photo-1581291518655-952384377313?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
      {
        id: "responsive-web-design",
        number: "07",
        title: "Responsive Web Design",
        category: "Mobile Optimization",
        description: "Meticulously tested across smartphones, tablets, and 4K displays to deliver a flawless browsing experience anywhere.",
        image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
      {
        id: "seo-services",
        number: "08",
        title: "SEO Services",
        category: "Search Strategy",
        description: "Foundational technical architecture, structured schema markup, and speed audits that help search engines understand your site.",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
      {
        id: "local-seo",
        number: "09",
        title: "Local SEO",
        category: "Local Visibility",
        description: "Targeted geographic visibility strategies designed to connect your services directly with prospective clients in Sutton and Surrey.",
        image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
      {
        id: "digital-marketing",
        number: "10",
        title: "Digital Marketing",
        category: "Growth",
        description: "Holistic digital positioning that bridges design, content, and conversion funnels into steady client inquiries.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
      {
        id: "social-media-marketing",
        number: "11",
        title: "Social Media Marketing",
        category: "Engagement",
        description: "Refined digital assets and coherent aesthetic guidelines that maintain your brand's luxury voice across social channels.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
      {
        id: "google-business-profile-optimization",
        number: "12",
        title: "Google Business Profile Optimization",
        category: "Local Presence",
        description: "Complete setup, optimization, and local citation refinement to ensure your business stands out prominently in Google Maps.",
        image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&w=1600&q=80",
        featured: false,
      },
    ],
  },

  // About Section
  about: {
    eyebrow: "About Amelie Barton",
    title: "Dedicated Website Craft in Sutton",
    lead: "I work with independent businesses, professional practices, and ambitious brands to build websites that command attention and drive real commercial results.",
    paragraphs: [
      "Operating from Throwley Way in Sutton, I provide an intentional alternative to impersonal marketing agencies. When you commission a project with me, you work directly with one dedicated designer from initial wireframe to final launch.",
      "Every project balances aesthetic restraint with technical rigour: custom typography, rapid loading speeds, responsive layouts, and local search architecture designed to help your business flourish.",
    ],
    highlights: [
      { label: "Studio Location", value: "Sutton, United Kingdom" },
      { label: "Specialism", value: "Bespoke Web Design & Local SEO" },
      { label: "Collaboration", value: "Direct One-on-One Partner" },
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80",
    fallbackImage: "/src/assets/images/about_amelie_barton_1790504272697.jpg",
  },

  // Why Choose Us
  whyChooseUs: {
    eyebrow: "Why Work Together",
    title: "Clarity, Craftsmanship & Local Accountability",
    description: "Built strictly on the values that define our studio practice in Sutton.",
    items: [
      {
        number: "01",
        title: "Sutton Studio Presence",
        description: "Based at Gemini Court on Throwley Way, providing direct communication, local accountability, and transparent collaboration.",
      },
      {
        number: "02",
        title: "Direct One-on-One Partnership",
        description: "Work directly with Amelie Barton from concept to completion. No account handlers, no diluted feedback, no hidden tiers.",
      },
      {
        number: "03",
        title: "Full-Spectrum Delivery",
        description: "From bespoke visual design and responsive code to local SEO and Google Business Profile optimization, everything works in harmony.",
      },
      {
        number: "04",
        title: "Engineered for Performance",
        description: "Lightweight, accessible code structured to load instantly on any mobile device and deliver high conversion rates.",
      },
    ],
  },

  // Testimonials (Omitted cleanly if none provided)
  testimonials: [],

  // FAQ Section
  faq: {
    eyebrow: "Questions & Answers",
    title: "Common Questions About Working Together",
    description: "Clear answers to help you plan your next website project.",
    items: [
      {
        question: "How does the design and build process work?",
        answer: "We begin with a discovery conversation to define your goals, target audience, and required functionality. I then design custom wireframes and prototypes for your approval before coding the website with clean, modern standards. You review the build at every stage.",
      },
      {
        question: "What is typically included in a website project?",
        answer: "Every project includes bespoke responsive design, clean code architecture, mobile optimization, on-page SEO foundation, domain and hosting setup guidance, and a straightforward handover session.",
      },
      {
        question: "How do you handle local SEO and Google Business Profile optimization?",
        answer: "Alongside designing the website, I ensure your technical metadata, local schema markup, and Google Business Profile in Sutton are fully aligned so nearby customers can locate your services easily.",
      },
      {
        question: "How do we get started?",
        answer: "Reach out via WhatsApp or submit a message through the contact form with details on what you need. We will arrange a consultation to discuss your vision, timeline, and exact scope.",
      },
    ],
  },

  // Contact Section
  contactSection: {
    eyebrow: "Initiate Your Project",
    title: "Let's Build Something Exceptional",
    description: "Reach out on WhatsApp for a quick response, or leave a message below with your project details.",
  },

  // Footer
  footer: {
    copyright: "All rights reserved.",
    backToTop: "Back to top",
  },
};
