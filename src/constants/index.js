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
  sharpener,
  handsInTechnology,
  project1,
  project2,
  project3,
  project4,
  project5,
  threejs,
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
    image: project2,
    view: "https://temp-nextjs-store-draft-omega.vercel.app/",
  },
  {
    name: "Next-Gen E-Commerce",
    description:
      "It leverages modern web technologies Next.js and Tailwind CSS to deliver a seamless shopping experience. The site is optimized for speed, SEO, and dynamic content rendering, making it an excellent choice for online stores. It also supports integrations with various commerce providers, offering flexibility and scalability for businesses.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    view: "https://ecommerce-next13js.vercel.app/",
  },
  {
    name: "Image Gallery",
    description:
      "It offers users the ability to explore and download various pictures, catering to different themes and purposes. The site has a clean, user-friendly design, making it easy to browse through the images available.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Axios",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    view: "https://kvite-images.netlify.app/",
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
    image: project5,
    view: "https://kcomfy-store.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
