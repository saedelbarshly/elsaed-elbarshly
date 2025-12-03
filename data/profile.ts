export const profile = {
  hero: {
    name: "Elsaed Elbarhsly",
    title: "Software Engineer — PHP | Laravel (Backend Developer)",
    counters: [
      { label: "APIs shipped", value: "25+" },
      { label: "Prod systems", value: "10+" },
      { label: "Integrations", value: "15+" }
    ],
    ctas: [
      { label: "Download CV", href: "/Elsaed-Elbarhsly-cv.pdf" },
      { label: "Get in touch", href: "mailto:eelbarshly@gmail.com" }
    ]
  },
  about: {
    blurb:
      "Backend developer specialized in Laravel APIs and scalable systems. I design resilient data models, optimize databases and caching, implement secure auth, and integrate third-party services to ship business-critical features reliably.",
    companies: [
      { name: "True ventures", href: "https://alalmiyalhura.com", image: "/trueventures.jpeg" },
      { name: "Pickappo", image: "/pickappo.jpg" , href: "https://www.linkedin.com/company/pickappo/" },
      { name: "Technomasr For Web Solutions", image: "/techno.jpg", href: "https://www.linkedin.com/company/technomasr/" },
    ],
    doing: [
      { title: "API Design & Development", text: "RESTful endpoints, validation, versioning, docs." },
      { title: "Scalable Backends", text: "Queues, caching, performance profiling, reliability." },
      { title: "Secure Integrations", text: "Payments, JWT/OAuth, third-party services." },
      { title: "Cloud & CI/CD", text: "Reliable deployments and monitoring." }
    ],
    responsibilities: [
      "Develop and maintain scalable Laravel web applications and mobile backends",
      "Optimize performance (caching, queues) and database structures",
      "Implement security best practices and robust authentication/authorization",
      "Integrate payment gateways and external services",
      "Deploy/manage apps on cloud platforms; monitor and troubleshoot"
    ]
  },
  education: [
    { degree: "B.Sc. Computer Science", school: "Mansoura University", start: "Aug 2018", end: "Aug 2022" }
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
        "Design & maintain Laravel apps and mobile backend APIs",
        "Performance tuning, security hardening, database optimization",
        "3rd-party integrations and payment gateways",
        "Cloud deployments; troubleshooting and enhancements"
      ]
    },
    {
      role: "Backend Developer",
      company: "Pickappo",
      image: "/pickappo.jpg",
      location: "Saudi Arabia",
      start: "Jan 2024",
      end: "Aug 2024",
      bullets: [
        "Logistics systems linking orders to captains and companies",
        "Improved daily throughput via efficient assignment pipelines"
      ]
    },
    {
      role: "Backend Developer",
      company: "Technomasr For Web Solutions",
      image: "/techno.jpg",
      location: "Egypt",
      start: "Mar 2023",
      end: "Dec 2023",
      bullets: [
        "Built CRM/ERP/E-commerce solutions with Laravel & MySQL",
        "Collaborated across React and Flutter/Firebase teams"
      ]
    }
  ],
  projects: [
    {
      name: "Mkhdom",
      role: "Backend Developer",
      image: "/mkhdom.png",
      date: "Mar 2025",
      stack: ["Laravel","MySQL","Mobile Backends"],
      highlights: [
        "Remote services platform across education/marketing/gov/banking",
        "Website + client app + provider app; emphasis on scalability"
      ],
      links: [{ label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.alalmiyalhura.mkhdom" },]
    },
    {
      name: "Arkanseifiya",
      role: "Backend Developer",
      image: "/arkan.jpeg",
      date: "May–Jun 2025",
      stack: ["Laravel","MySQL"],
      highlights: [
        "Event/festival management and ticketing",
        "Stable under high traffic with robust admin/user flows"
      ],
      links: [{ label: "Website", href: "https://arkanseifiya.com/" }]
    },
    {
      name: "Babylon Market",
      role: "Backend Developer",
      date: "Jun 2025",
      stack: ["Laravel","Real-time"],
      highlights: [
        "B2B/B2C marketplace with real-time interactions",
        "Reliability and scalability focus"
      ],
      links: [{ label: "Website", href: "https://babylon-market.com/" }]
    },
    {
      name: "Doom",
      role: "Backend Developer",
      image: "/doom.png",
      date: "Aug 2025",
      stack: ["Laravel","Payments","Shipping"],
      highlights: [
        "Multi-vendor marketplace with payment & shipping integrations"
      ],
      links: [{ label: "Website", href: "https://doom-sa.com/" }]
    }
  ],
  skills: [
    "Laravel","PHP","RESTful APIs","MySQL","NOSQL","Database Design/Indexing",
    "Redis Caching","Queues/Jobs","JWT/OAuth","3rd-party Integrations",
    "Payment Gateways","Performance Optimization","Cloud Deployments","Testing","CI/CD"
  ],
  contact: {
    email: "eelbarshly@gmail.com",
    phone: "+20 122 484 5766",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/elsaid-elbarshly/" },
      { label: "Portfolio", href: "https://saedelbarshly.github.io/" }
    ]
  },
  certificates: [
    { name: "Web Development using PHP/MySQL/Laravel", institution: "NTI", date: "Feb 2022" },
    { name: "Web Design", institution: "NTI", date: "Sep 2021" }
  ]
};
