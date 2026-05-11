import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  nextjs,
  vuejs,
  threejs,
  sharpener,
  handsInTechnology,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
  project12,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
];

const experiences = [
  {
    title: "Node.js Developer",
    company_name: "Sharpener Tech",
    icon: sharpener,
    iconBg: "#383E56",
    date: "Sept 2022 - April 2023",
    points: [
      "Developed and maintained robust, high-performance web applications using Node.js and related technologies.",
      "Designed RESTful APIs and integrated third-party services to enhance application functionality.",
      "Utilized Express.js for creating server-side logic and handling HTTP requests and responses.",
      "Implemented real-time features using WebSocket and Socket.IO, enhancing user interaction and experience.",
      "Used MongoDB and other NoSQL databases for efficient data storage and retrieval.",
      "Deployed applications using cloud platforms such as AWS, Google Cloud, and Azure.",
      "Participated in code reviews and provided constructive feedback to improve code quality and maintain best practices.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Hands In Technology",
    icon: handsInTechnology,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Designed and developed responsive, user-friendly web applications using HTML, CSS, and JavaScript.",
      "Implemented client-side scripting and server-side programming to create dynamic, interactive web pages.",
      "Utilized modern JavaScript frameworks and libraries such as React, Next, and Vue.js to build scalable front-end solutions.",
      "Developed and maintained back-end services using Node.js, Express.js, and other server-side technologies.",
      "Collaborated with UX/UI designers to translate design prototypes into functional, visually appealing web pages.",
      "Managed databases using MySQL, PostgreSQL, and MongoDB for efficient data storage and retrieval.",
      "Employed version control systems like Git for code collaboration and management.",
      "Conducted code reviews and implemented best practices to maintain code quality and consistency.",
      "Troubleshooted and resolved front-end and back-end issues to ensure smooth operation of web applications.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IGL Indian Gaming League",
    description:
      "Indian Gaming League (IGL) is a competitive e-sports platform that connects tournament organizers, players, and spectators. Founded by a team of gamers who believe in providing Indian players with a stage to launch their gaming careers, IGL offers tournaments across various games and platforms.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    view: "https://iglnetwork.com/",
  },

  {
    name: "Porter",
    description:
      "A streamlined logistics platform designed to simplify intra-city deliveries and movement of goods. Porter provides a user-friendly interface for booking mini-trucks and bikes, offering real-time tracking, transparent pricing, and efficient route optimization for both personal and business needs.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    view: "https://porter-local.vercel.app/",
  },

  {
    name: "Chat App",
    description:
      "The website hosts a deployable, feature-rich AI chatbot application built with Next.js and Vercel. It uses a unified API to connect with advanced AI models (such as OpenAI's GPT-4, Google Gemini, and others) and comes with a compact client, multi-language interface, and a wide library of prompt templates for powerful and customizable conversations.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Clerk",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    view: "https://chat-next-dusky.vercel.app/",
  },

  {
    name: "Socially",
    description:
      "Socially is a social-style web application deployed on Vercel, likely built to showcase a modern social media or networking experience with posts, profiles, and interactive engagement features.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    view: "https://socially-app-psi.vercel.app/",
  },

  {
    name: "Next.js Store Draft",
    description:
      "Discover the cutting-edge of web design with our exclusive draft site. Here, innovation meets creativity as we showcase the potential of Next.js for building dynamic, high-performance online stores.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    view: "https://temp-nextjs-store-draft-omega.vercel.app/",
  },

  {
    name: "Tech Agency",
    description:
      "A comprehensive management portal designed for tech agencies to streamline project tracking and client interactions. This application provides a centralized dashboard for managing internal operations, visualizing workflow progress, and improving overall organizational efficiency.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    view: "https://kunj-tech-agency-management-portal.vercel.app/",
  },

  {
    name: "Analytics Dashboard",
    description:
      "A high-performance data visualization platform that transforms complex datasets into actionable insights. Featuring interactive charts, real-time data streaming, and customizable filters, this dashboard allows users to monitor key performance indicators (KPIs) and track trends through a clean, intuitive interface.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Chart.js",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    view: "https://data-visualization-dashboard-client.vercel.app/",
  },

  {
    name: "JobMatch AI",
    description:
      "An intelligent recruitment tool that leverages AI to bridge the gap between job seekers and employers. By analyzing resumes and job descriptions, it provides automated matching scores, skill gap analysis, and personalized career recommendations to streamline the hiring process.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: project8,
    view: "https://job-match-ai-rust.vercel.app/",
  },

  {
    name: "Demo DAG LLM Pipeline",
    description:
      "An interactive visual builder for Large Language Model (LLM) workflows. It utilizes a Directed Acyclic Graph (DAG) interface to allow users to drag and drop nodes, connecting various AI models, prompts, and data processing steps to design complex automated pipelines.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "React-Flow",
        color: "green-text-gradient", 
      },
      {
        name: "LLM-Ops",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    view: "https://demo-dag-llm.vercel.app/",
  },

  {
    name: "Comfy Home Essentials",
    description:
      "Transform your living space into a haven of comfort and style with our curated selection of home essentials. At KComfy, we believe that your home should be a reflection of your unique taste and personality.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "daisyUI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project10,
    view: "https://kcomfy-store.netlify.app/",
  },

  {
    name: "Real-Time-Collaboration-Tool",
    description:
      "A dynamic platform designed for seamless teamwork, enabling multiple users to edit documents and share ideas in real-time. Featuring live cursor tracking, instant synchronization, and integrated chat, it ensures that every contributor stays on the same page regardless of location.",
    tags: [
      {
        name: "Socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: project11,
    view: "https://real-time-collaboration-tool-backend.onrender.com/",
  },

  {
    name: "Finance Dashboard",
    description:
      "A sophisticated financial management application that provides a holistic view of monetary assets and liabilities. It features real-time expense tracking, automated budget forecasting, and detailed transaction history, all presented through an elegant dark-themed interface for optimal readability and data analysis.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Recharts",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project12,
    view: "https://finance-dashboard-mock-ui.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
