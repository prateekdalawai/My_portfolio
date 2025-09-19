import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Prateek Dalawai",
  title: "Java Full Stack Developer",
  description:
    "Java full stack developer with internship experience at Illumora and Pentagon Space. I build secure, scalable products using Spring Boot, React, REST/GraphQL APIs, and production-ready CI/CD pipelines across cloud environments.",
  resumeLink: "https://www.dropbox.com/scl/fi/fcuk0z6al3y67tbodj10j/Prateek_Dalawai-1.pdf?rlkey=uueawvy6zjmi3hytbn4g28qtc&st=e7h5bys2&dl=0",
};

export const openSource = {
  githubUserName: "prateekdalawai",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:pdalawai5@gmail.com",
  linkedin: "https://linkedin.com/in/prateek-dalawai",
  github: "https://github.com/prateekdalawai",
  portfolio: "https://www.illumora.co/",
  phone: "tel:+918884448149",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "End-to-end Java full stack delivery with modern frontend, API, and DevOps practices",
  data: [
    {
      title: "Programming & Languages",
      lottieAnimationFile: "/lottie/skills/ethereum.json",
      skills: [
        emoji("Write clean, type-safe code with Java, JavaScript, and TypeScript"),
        emoji("Craft accessible HTML5/CSS3 UI foundations and reusable utility helpers"),
      ],
      softwareSkills: [
        { skillName: "Java", iconifyTag: "logos:java" },
        { skillName: "JavaScript", iconifyTag: "logos:javascript" },
        { skillName: "TypeScript", iconifyTag: "logos:typescript-icon" },
        { skillName: "HTML5", iconifyTag: "vscode-icons:file-type-html" },
        { skillName: "CSS3", iconifyTag: "vscode-icons:file-type-css" },
      ],
    },
    {
      title: "Frontend Engineering",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji("Develop responsive React and Next.js applications focused on UX"),
        emoji("Ship component libraries, state management, and design system integrations"),
        emoji("Collaborate with designers to deliver polished, accessible experiences"),
      ],
      softwareSkills: [
        { skillName: "React", iconifyTag: "logos:react" },
        { skillName: "Next.js", iconifyTag: "logos:nextjs-icon" },
        { skillName: "Responsive UI", iconifyTag: "mdi:responsive" },
        { skillName: "Redux", iconifyTag: "logos:redux" },
        { skillName: "Tailwind", iconifyTag: "logos:tailwindcss-icon" },
      ],
    },
    {
      title: "Backend, APIs, and DevOps",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json",
      skills: [
        emoji("Design REST and GraphQL APIs with Spring Boot, Node.js, and Express"),
        emoji("Implement JWT and OAuth2 authentication, Redis caching, and observability"),
        emoji("Automate deployments with Docker, Jenkins/GitHub Actions, and cloud-ready pipelines"),
      ],
      softwareSkills: [
        { skillName: "Spring Boot", iconifyTag: "logos:spring-icon" },
        { skillName: "Node.js", iconifyTag: "logos:nodejs-icon" },
        { skillName: "GraphQL", iconifyTag: "logos:graphql" },
        { skillName: "MySQL", iconifyTag: "logos:mysql" },
        { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
        { skillName: "MongoDB", iconifyTag: "logos:mongodb-icon" },
        { skillName: "Redis", iconifyTag: "logos:redis" },
        { skillName: "Docker", iconifyTag: "logos:docker-icon" },
        { skillName: "Jenkins", iconifyTag: "logos:jenkins" },
        { skillName: "AWS", iconifyTag: "logos:aws" },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend (React/Next.js)",
    progressPercentage: "85",
  },
  {
    Stack: "Backend (Spring Boot/Node.js)",
    progressPercentage: "90",
  },
  {
    Stack: "DevOps & Databases",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "GSS College, Belagavi",
    subHeader: "Bachelor of Computer Applications",
    duration: "2020 - 2023",
    desc: "CGPA: 7.34",
    descBullets: ["Capstone focused on cloud-ready Java full stack delivery"],
  },
  {
    schoolName: "GSS College, Belagavi",
    subHeader: "Pre-University",
    duration: "2018 - 2020",
    desc: "Percentage: 54.5%",
    descBullets: ["Specialized in computer science foundations"],
  },
  {
    schoolName: "Bhartesh Education belagavi",
    subHeader: "Secondary Education",
    duration: "2016 - 2018",
    desc: "Percentage: 68.9%",
    descBullets: ["School leadership team and coding club mentor"],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer Intern",
    company: "Illumora",
    companyLogo: "/img/icons/common/illumora.svg",
    date: "Mar 2024 - Oct 2024 | Bengaluru",
    desc: "Built secure, scalable experiences for the Illumora mental health platform across the full stack.",
    descBullets: [
      "Shipped reusable React components backed by type-safe API clients and state management",
      "Designed Spring Boot REST and GraphQL endpoints powering AI-driven product features",
      "Implemented JWT and OAuth2 authentication with Redis-backed session management",
      "Optimized database queries, cutting API latency by roughly twenty percent",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Pentagon Space",
    companyLogo: "/img/icons/common/pentagon-space.svg",
    date: "Mar 2024 - Oct 2024 | Bengaluru",
    desc: "Delivered enterprise education platform features with Java full stack tooling and agile ceremonies.",
    descBullets: [
      "Implemented Spring Boot services, React frontends, and MySQL data models end-to-end",
      "Introduced role-based access control, validation layers, and resilient error handling",
      "Tuned database access patterns to improve response time by up to twenty five percent",
      "Collaborated in agile sprints with design, QA, and DevOps to keep releases on schedule",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Perfume Webstore",
    desc: "E-commerce platform featuring catalog, cart, checkout, dashboards, and CI/CD-ready Docker deployment.",
    github: "https://github.com/prateekdalawai/perfume-webstore",
    link: "https://github.com/prateekdalawai/perfume-webstore",
  },
  {
    name: "Healthcare Management System",
    desc: "Patient records, appointments, notifications, and role-based access built with React, Spring Boot, MySQL, and JWT.",
    github: "https://github.com/prateekdalawai/healthcare-management-system",
  },
  {
    name: "Illumora AI Platform",
    desc: "Internship project integrating AI-powered mental health workflows with secure Spring Boot APIs and React UI.",
    link: "https://www.illumora.co/",
  },
  {
    name: "College Management System (Android)",
    desc: "Android app with WebSocket-driven announcements, role-based access, and real-time messaging for campus teams.",
    github: "https://github.com/prateekdalawai/college-management-system",
  },
  {
    name: "Smart Workflow System",
    desc: "Workflow automation platform on Frappe, Python, and MariaDB delivering multi-stage approvals and 40 percent efficiency gains.",
    github: "https://github.com/prateekdalawai/smart-workflow-system",
  },
  {
    name: "Event Crew",
    desc: "EventCrew Hub is a platform that connects skilled professionals with event organizers, providing vetted staff for security, catering, technical, and general event needs. It ensures seamless event execution with flexible staffing, 24/7 support, and verified professionals.",
    github: "https://github.com/prateekdalawai",
  },
];

export const feedbacks: FeedbackType[] = [];

export const seoData: SEODataType = {
  title: "Prateek Dalawai | Full Stack Developer",
  description: greetings.description,
  author: "Prateek Dalawai",
  image: "https://avatars.githubusercontent.com/u/138231841?v=4",
  url: "https://www.illumora.co/",
  keywords: [
    "Prateek Dalawai",
    "Prateek",
    "Prateek Portfolio",
    "Java Full Stack Developer",
    "Spring Boot Developer",
    "React Developer",
  ],
};
