import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import cert1 from "../assets/cert/cert-1.png";
import cert2 from "../assets/cert/cert-2.png";



export const LANDING_CONTENT = 'I am enthusiastic and aspiring Front-End Developer with a basic foundation in web development principles. With a passion for creating intuitive and visually appealing user interfaces. Equipped with hands-on experience through academic projects, I am eager to contribute to a dynamic team and further develop my skills in a professional setting.';

export const ABOUT_TEXT = `I am a dedicated and aspiring Front-End Developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it evolved into deep learning about web softwares where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  
];

export const PROJECTS = [
  {
    title: "EcoTrack: Garbage Truck Live Tracking and Waste Management Segregation Assistance using GPS (Web Panel)",
    image: project1,
    description:
      "Developed a real-time waste management solution with GPS-based tracking and intelligent segregation.",
    technologies: ["HTML", "CSS", "React"],
  },
  {
    title: "FlashFocus",
    image: project2,
    description:
      "Developed a user-friendly flashcard tool to streamline studying and boost productivity for students and online learners.",
    technologies: ["HTML", "CSS", "JavaScript", "ReactJs", "MySQL"],
  },
  {
    title: "Sitio Cafe Website",
    image: project3,
    description:
      "Created and managed a website showcasing detailed descriptions and reviews of coffee shops, featuring user-friendly navigation and responsive design.",
    technologies: ["HTML", "CSS"],
  },
];

export const CERTIFICATE = [
  {
    title: "Frontend Fundamentals Bootcamp",
    image: cert1,
    description:
    "The Frontend Fundamentals course covers the core principles of web development, including HTML, CSS, and JavaScript, equipping learners with the skills to create responsive and interactive user interfaces.",
    sub: "Completed by August 26th, 2024 at One Code Camp Academy",
  },
  {
    title: "Data Analytics Bootcamp",
    image: cert2,
    description:
    "The Data Analytics Fundamentals course introduces essential concepts and techniques for collecting, analyzing, and visualizing data, empowering beginners to make data-driven decisions across various industries.",
    sub: "Completed by August 26th, 2024 at One Code Camp Academy",
  },
];

export const CONTACT = {
  phoneNo: "+63 915 940 1713",
  email: "shekinahcayco@gmail.com",
  address: "Manila, PH",
};
