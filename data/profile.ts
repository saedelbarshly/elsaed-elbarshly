export const profile = {
  hero: {
    name: "Elsaed Elbarhsly",
    title: "Software Engineer — PHP | Laravel (Backend Developer)",
    counters: [
      { label: "APIs shipped", value: "25+" },
      { label: "Prod systems", value: "10+" },
      { label: "Integrations", value: "15+" },
    ],
    ctas: [
      { label: "Download CV", href: "/Elsaed-Elbarhsly-cv.pdf" },
      { label: "Get in touch", href: "mailto:eelbarshly@gmail.com" },
    ],
  },
  about: {
    blurb:
      "Backend developer specialized in Laravel APIs and scalable systems. I design resilient data models, optimize databases and caching, implement secure auth, and integrate third-party services to ship business-critical features reliably.",
    companies: [
      {
        name: "True ventures",
        href: "https://alalmiyalhura.com",
        image: "/trueventures.jpeg",
      },
      {
        name: "Pickappo",
        image: "/pickappo.jpg",
        href: "https://www.linkedin.com/company/pickappo/",
      },
      {
        name: "Technomasr For Web Solutions",
        image: "/techno.jpg",
        href: "https://www.linkedin.com/company/technomasr/",
      },
    ],
    doing: [
      {
        title: "API Design & Development",
        text: "RESTful endpoints, validation, versioning, docs.",
      },
      {
        title: "Scalable Backends",
        text: "Queues, caching, performance profiling, reliability.",
      },
      {
        title: "Secure Integrations",
        text: "Payments, JWT/OAuth, third-party services.",
      },
      { title: "Cloud & CI/CD", text: "Reliable deployments and monitoring." },
    ],
    responsibilities: [
      "Develop and maintain scalable Laravel web applications and mobile backends",
      "Optimize performance (caching, queues) and database structures",
      "Implement security best practices and robust authentication/authorization",
      "Integrate payment gateways and external services",
      "Deploy/manage apps on cloud platforms; monitor and troubleshoot",
    ],
  },
  education: [
    {
      degree: "B.Sc. Computer Science",
      school: "Mansoura University",
      start: "Aug 2018",
      end: "Aug 2022",
    },
  ],
  experience: [
    {
      role: "Backend Developer",
      company: "True ventures",
      image: "/trueventures.jpeg",
      location: "Egypt",
      start: "Nov 2024",
      end: "Present",
      bullets: [
        "Contributed to a high-performing software house delivering scalable, modular software solutions for clients seeking custom applications and digital products.",
        "PImplemented AI-driven agents and custom automation for code structure, monitoring, and issue resolution, reducing production time by 30% and increasing deployment efficiency.",
        "Optimized backend architecture and DevOps processes, enabling systems to support 1M+ concurrent requests with high availability and performance",
        "Led development and integration of new service modules, contributing to a 25% increase in operational efficiency and supporting company profitability growth.",
        "Collaborated in a strong team of 14+ engineers, following best practices in coding standards, testing, and CI/CD pipelines to ensure reliable, maintainable software delivery.",
      ],
    },
    {
      role: "Backend Developer",
      company: "Pickappo",
      image: "/pickappo.jpg",
      location: "Saudi Arabia",
      start: "Jan 2024",
      end: "Aug 2024",
      bullets: [
        "Developed Pickappo’s unified dashboard and open API, managing 100k+ daily orders across 50+ delivery apps and 300+ logistics companies",
        "Enabled real-time tracking for 200k+ delivery captains, reducing errors and speeding up order fulfillment for restaurants, e-commerce stores, and logistics partners",
        "Designed scalable integration tools allowing seamless onboarding of third-party apps and logistics providers,improving operational efficiency and partner satisfaction",
      ],
    },
    {
      role: "Backend Developer",
      company: "Technomasr For Web Solutions",
      image: "/techno.jpg",
      location: "Egypt",
      start: "Mar 2023",
      end: "Dec 2023",
      bullets: [
        "Designed scalable integration tools allowing seamless onboarding of third-party apps and logistics providers,improving operational efficiency and partner satisfaction",
        "Implemented new features, optimized database queries, and improved system performance, enabling seamless operations and better user experience for clients",
        "Collaborated with cross-functional teams to deliver scalable, maintainable, and high-quality software solutions",
      ],
    },
  ],
  projects: [
    {
      name: "Mkhdom",
      role: "Backend Developer",
      image: "/mkhdom.png",
      date: "Mar 2025",
      stack: ["Laravel", "MySQL", "Mobile Backends"],
      highlights: [
        `Built and scaled a multi-platform service marketplace serving 15,000+ users, supporting real-time chat (Node.js + 
      Redis), high-volume notifications, full auditing, and secure payments with automated webhooks (50,000+ SAR processed). 
      After launch, led major refactoring that improved system performance by over 70% through DB indexing, queue optimization, 
      and code restructuring.`,
      ],
      links: [
        {
          label: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.alalmiyalhura.mkhdom",
        },
      ],
    },
    {
      name: "Arkanseifiya",
      role: "Backend Developer",
      image: "/arkan.jpeg",
      date: "May–Jun 2025",
      stack: ["Laravel", "MySQL"],
      highlights: [
        ` Developed and optimized ArkanSeifiya, a concert ticketing and events platform handling 5,000+ tickets per month
with real-time availability updates, high-volume notifications and emails (10,000+ per month) via Jobs & Queues, and
integrated real-time chat. Built a full job portal supporting 100+ job listings and CV submissions, implemented
webhook automation for payments, and created a real-time admin dashboard with business intelligence and auditing.
Led post-launch refactoring that improved system responsiveness by 60% through caching, queue optimization, and
database tuning.`,
      ],
      links: [{ label: "Website", href: "https://arkanseifiya.com/" }],
    },
    {
      name: "Babylon Market",
      role: "Backend Developer",
      date: "Jun 2025",
      stack: ["Laravel", "Real-time"],
      highlights: [
      `Developed Babylon Market, a multi-platform B2B/B2C marketplace with client apps, website, supplier dashboards,
and super-admin dashboards. Implemented a flexible EAV-based catalog with real-time inventory updates,
high-volume notifications (scalable to 1M users), and integrated chat. Vendors can subscribe, add products, sell, and
purchase in bulk from suppliers with pricing lists. Added a loyalty system where purchases earn points convertible to
vouchers, as well as coupon campaigns. Payments and shipping are handled through multiple gateways (Strategy
Pattern) with webhook automation, while orders use DTOs and follow a State Pattern workflow. Connection-pooled
database access and real-time dashboards enable scalable, high-performance operations across web and mobile
platforms.`,
      ],
      links: [{ label: "Website", href: "https://babylon-market.com/" }],
    },
    {
      name: "Doom",
      role: "Backend Developer",
      image: "/doom.png",
      date: "Aug 2025",
      stack: ["Laravel", "Payments", "Shipping"],
      highlights: [
        ` Developed Doom-SA, a B2B e-commerce platform designed to streamline vendor operations and product
management. Features include an EAV-based catalog supporting product variants and real-time inventory tracking,
real-time chat, business intelligence dashboards, and multi-gateway payment and shipping options (DTO-based
order management, utilizing the Strategy Pattern). The platform also incorporates webhook automation,
connection-pooled database access, and comprehensive system tracking for scalable, high-performance operations.`,
      ],
      links: [{ label: "Website", href: "https://doom-sa.com/" }],
    },
  ],
  skills: [
    "Laravel",
    "PHP",
    "RESTful APIs",
    "MySQL",
    "NOSQL",
    "Database Design/Indexing",
    "Redis Caching",
    "Queues/Jobs",
    "JWT/OAuth",
    "3rd-party Integrations",
    "Payment Gateways",
    "Performance Optimization",
    "Cloud Deployments",
    "Testing",
    "CI/CD",
  ],
  contact: {
    email: "eelbarshly@gmail.com",
    phone: "+20 122 484 5766",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/elsaid-elbarshly/",
      },
      { label: "Portfolio", href: "https://saedelbarshly.github.io/" },
    ],
  },
  certificates: [
    {
      name: "Web Development using PHP/MySQL/Laravel",
      institution: "NTI",
      date: "Feb 2022",
    },
    { name: "Web Design", institution: "NTI", date: "Sep 2021" },
  ],
};
