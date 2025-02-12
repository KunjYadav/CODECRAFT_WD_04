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
  threejs,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'React Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'Vue JS',
    icon: vuejs,
  },
];

const experiences = [
  {
    title: 'Node.js Developer',
    company_name: 'Sharpener Tech',
    icon: sharpener,
    iconBg: '#383E56',
    date: 'Sept 2021 - April 2022',
    points: [
      'Developed and maintained robust, high-performance web applications using Node.js and related technologies.',
      'Designed RESTful APIs and integrated third-party services to enhance application functionality.',
      'Utilized Express.js for creating server-side logic and handling HTTP requests and responses.',
      'Implemented real-time features using WebSocket and Socket.IO, enhancing user interaction and experience.',
      'Used MongoDB and other NoSQL databases for efficient data storage and retrieval.',
      'Deployed applications using cloud platforms such as AWS, Google Cloud, and Azure.',
      'Participated in code reviews and provided constructive feedback to improve code quality and maintain best practices.',
    ],
  },
  {
    title: 'Full Stack Web Developer',
    company_name: 'Hands In Technology',
    icon: handsInTechnology,
    iconBg: '#E6DEDD',
    date: 'May 2022 - Present',
    points: [
      'Designed and developed responsive, user-friendly web applications using HTML, CSS, and JavaScript.',
      'Implemented client-side scripting and server-side programming to create dynamic, interactive web pages.',
      'Utilized modern JavaScript frameworks and libraries such as React, Next, and Vue.js to build scalable front-end solutions.',
      'Developed and maintained back-end services using Node.js, Express.js, and other server-side technologies.',
      'Collaborated with UX/UI designers to translate design prototypes into functional, visually appealing web pages.',
      'Managed databases using MySQL, PostgreSQL, and MongoDB for efficient data storage and retrieval.',
      'Employed version control systems like Git for code collaboration and management.',
      'Conducted code reviews and implemented best practices to maintain code quality and consistency.',
      'Troubleshooted and resolved front-end and back-end issues to ensure smooth operation of web applications.'
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Next.js Store Draft',
    description:
      'Discover the cutting-edge of web design with our exclusive draft site. Here, innovation meets creativity as we showcase the potential of Next.js for building dynamic, high-performance online stores.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: project1,
    view: 'https://temp-nextjs-store-draft-omega.vercel.app/',
    source_code_link: 'https://github.com/KunjYadav/temp-nextjs-store-draft',
  },
  {
    name: 'Next-Gen E-Commerce',
    description:
      'Step into the future of online shopping with our cutting-edge e-commerce platform, powered by Next.js13. We bring you a seamless, fast, and intuitive shopping experience that caters to all your needs.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'stripe',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: project2,
    view: 'https://ecommerce-next13js.vercel.app/',
    source_code_link: 'https://github.com/KunjYadav/ecommerce-next13',
  },
  {
    name: 'Image Gallery',
    description:
      'It offers users the ability to explore and download various pictures, catering to different themes and purposes. The site has a clean, user-friendly design, making it easy to browse through the images available.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'axios',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: project3,
    view: 'https://kvite-images.netlify.app/',
    source_code_link: 'https://github.com/KunjYadav/temp-vite-images',
  },
  {
    name: 'Comfy Home Essentials',
    description:
      'Transform your living space into a haven of comfort and style with our curated selection of home essentials. At KComfy, we believe that your home should be a reflection of your unique taste and personality.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'daisyui',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: project4,
    view: 'https://kcomfy-store.netlify.app/',
    source_code_link: 'https://github.com/KunjYadav/comfy-store',
  },
];

export { services, technologies, experiences, testimonials, projects };
