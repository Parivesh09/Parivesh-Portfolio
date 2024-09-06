import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobhunt,
  tripguide,
  threejs,
  internLogo,
  python,
  ml,
  cpp,
  ReactIntroduction,
  ReactHooksAdv,
  StateManagementRedux,
  ServerSideRenderingNext
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
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "blogs",
    title: "Blog",
  }
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
    title: "Machine Learning Developer",
    icon: ml
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    link: "https://www.w3schools.com/html/",
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
    name: "python",
    icon: python
  },
  {
    name: "machine learning",
    icon: ml
  },
  {
    name: "c++",
    icon: cpp
  }
];

const experiences = [
  {
    title: "React & Node JS Developer (Intern)",
    company_name: "SoftCoded Pvt. Ltd.",
    icon: internLogo,
    iconBg: "#383E56",
    date: "July 2024 - Oct 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job Hunt",
    description:
      "Web application that enables users to search for job openings and recruiters to post job openings. Users can search by job title, department, or even location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongo",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: jobhunt,
    source_code_link: "https://github.com/Parivesh09/job-portal",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const blogPosts = [
  {
    name: "React",
    posts: [
      {
        title: "Introduction to React",
        description: "Learn the basics of React and how to build your first component.",
        tags: [{ name: "React", color: "text-blue-500" }, { name: "JavaScript", color: "text-yellow-500" }],
        // image: ReactIntroduction,
        post_link: "https://yourblog.com/react-introduction",
      },
      {
        title: "Advanced React Hooks",
        description: "Learn how to use React hooks effectively and efficiently.",
        tags: [{ name: "React", color: "text-blue-500" }, { name: "Hooks", color: "text-yellow-500" }],
        // image: ReactHooksAdv,
        post_link: "https://yourblog.com/react-hooks-advanced",
      },
      {
        title: "State Management with Redux",
        description: "Learn how to manage state in React applications using Redux.",
        tags: [{ name: "React", color: "text-blue-500" }, { name: "Redux", color: "text-yellow-500" }],
        // image: StateManagementRedux,
        post_link: "https://yourblog.com/react-redux-state-management",
      },
      {
        title: "Server-Side Rendering with Next.js",
        description: "Learn how to build a fully dynamic and SEO-friendly web application using Next.js.",
        tags: [{ name: "Next.js", color: "text-blue-500" }, { name: "Server-Side Rendering", color: "text-yellow-500" }],
        // image: ServerSideRenderingNext,
        post_link: "https://yourblog.com/nextjs-server-side-rendering",
      },
    ],
  },
  {
    name: "HTML",
    posts: [
      {
        title: "Introduction to HTML",
        description: "Learn the basics of HTML and how to create a web page structure.",
        tags: [{ name: "HTML", color: "text-red-500" }],
        // image: HTMLIntro,
        post_link: "https://yourblog.com/html-introduction",
      },
      {
        title: "HTML Forms and Input",
        description: "Explore how to create and manage forms using HTML.",
        tags: [{ name: "HTML", color: "text-red-500" }, { name: "Forms", color: "text-blue-500" }],
        // image: HTMLForms,
        post_link: "https://yourblog.com/html-forms",
      },
    ],
  },
  {
    name: "CSS",
    posts: [
      {
        title: "Introduction to CSS",
        description: "Learn the basics of CSS for styling your web pages.",
        tags: [{ name: "CSS", color: "text-blue-500" }],
        // image: CSSIntro,
        post_link: "https://yourblog.com/css-introduction",
      },
      {
        title: "Flexbox and Grid Layout",
        description: "Master layout design using Flexbox and Grid in CSS.",
        tags: [{ name: "CSS", color: "text-blue-500" }, { name: "Flexbox", color: "text-green-500" }],
        // image: CSSFlexboxGrid,
        post_link: "https://yourblog.com/css-flexbox-grid",
      },
    ],
  },
  {
    name: "JavaScript",
    posts: [
      {
        title: "JavaScript Basics",
        description: "Understand the basics of JavaScript, from variables to functions.",
        tags: [{ name: "JavaScript", color: "text-yellow-500" }],
        // image: JSBasics,
        post_link: "https://yourblog.com/javascript-basics",
      },
      {
        title: "Asynchronous JavaScript",
        description: "Learn about asynchronous programming, callbacks, promises, and async/await.",
        tags: [{ name: "JavaScript", color: "text-yellow-500" }, { name: "Async", color: "text-blue-500" }],
        // image: JSAsync,
        post_link: "https://yourblog.com/javascript-asynchronous",
      },
    ],
  },
  {
    name: "Redux Toolkit",
    posts: [
      {
        title: "Introduction to Redux Toolkit",
        description: "Learn how to manage state using Redux Toolkit for React applications.",
        tags: [{ name: "Redux Toolkit", color: "text-purple-500" }, { name: "React", color: "text-blue-500" }],
        // image: ReduxToolkitIntro,
        post_link: "https://yourblog.com/redux-toolkit-introduction",
      },
    ],
  },
  {
    name: "Tailwind CSS",
    posts: [
      {
        title: "Introduction to Tailwind CSS",
        description: "Get started with utility-first CSS using Tailwind CSS.",
        tags: [{ name: "Tailwind CSS", color: "text-teal-500" }],
        // image: TailwindCSSIntro,
        post_link: "https://yourblog.com/tailwind-css-introduction",
      },
      {
        title: "Responsive Design with Tailwind CSS",
        description: "Learn how to build responsive web pages with Tailwind CSS.",
        tags: [{ name: "Tailwind CSS", color: "text-teal-500" }, { name: "Responsive", color: "text-blue-500" }],
        // image: TailwindCSSResponsive,
        post_link: "https://yourblog.com/tailwind-css-responsive",
      },
    ],
  },
  {
    name: "MongoDB",
    posts: [
      {
        title: "Introduction to MongoDB",
        description: "Learn how to manage databases using MongoDB, a NoSQL solution.",
        tags: [{ name: "MongoDB", color: "text-green-500" }],
        // image: MongoDBIntro,
        post_link: "https://yourblog.com/mongodb-introduction",
      },
    ],
  },
  {
    name: "Node.js",
    posts: [
      {
        title: "Introduction to Node.js",
        description: "Learn how to build backend applications using Node.js.",
        tags: [{ name: "Node.js", color: "text-green-500" }],
        // image: NodeJSIntro,
        post_link: "https://yourblog.com/nodejs-introduction",
      },
      {
        title: "Building APIs with Express.js",
        description: "Learn how to create RESTful APIs using Node.js and Express.js.",
        tags: [{ name: "Node.js", color: "text-green-500" }, { name: "Express.js", color: "text-yellow-500" }],
        // image: NodeExpressAPI,
        post_link: "https://yourblog.com/nodejs-express-api",
      },
    ],
  },
  {
    name: "Three.js",
    posts: [
      {
        title: "Introduction to Three.js",
        description: "Learn how to create 3D graphics in the browser using Three.js.",
        tags: [{ name: "Three.js", color: "text-blue-500" }],
        // image: ThreeJSIntro,
        post_link: "https://yourblog.com/threejs-introduction",
      },
      {
        title: "3D Animations with Three.js",
        description: "Learn how to create 3D animations using Three.js and JavaScript.",
        tags: [{ name: "Three.js", color: "text-blue-500" }, { name: "Animations", color: "text-red-500" }],
        // image: ThreeJSAnimations,
        post_link: "https://yourblog.com/threejs-animations",
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects, blogPosts };
