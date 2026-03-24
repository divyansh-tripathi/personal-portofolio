import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },

  {
    id: 4,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },

  {
    id: 5,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 6,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 7,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 8,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 9,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 11,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 12,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];


import PortfolioProject from "/assets/proyek/personal-portfolio.png";
import BookStoreProject from "/assets/proyek/bookstore.png";
import EcommerceProject from "/assets/proyek/e-com.png";
import TaskManagerProject from "/assets/proyek/taskmanagement.png";
import OchiProject from "/assets/proyek/ochi.png";
import BlogProject from "/assets/proyek/blog-app.png";

export const listProyek = [

  {
    id: 1,
    image: PortfolioProject,
    title: "Personal Portfolio",
    subtitle: "A high-performance personal brand showcase built with React and Tailwind CSS.",
    fullDescription: "A sleek, responsive portfolio designed to showcase professional work and skills. Features include smooth scrolling, contact form integration, and a focus on high ATS performance and clean UI aesthetics.",
    borderColor: "#6366F1",
    gradient: "linear-gradient(180deg, #6366F1, #000)",
    url: "https://github.com/divyansh-tripathi/Portfolio.git",
    dad: "100",
  },
  {
    id: 2,
    image: BookStoreProject,
    title: "BookStore Application",
    subtitle: "A digital library interface focusing on user experience and book discovery.",
    fullDescription: "A frontend-heavy application that allows users to browse, filter, and search through a vast collection of books. Built with a focus on clean state management and responsive grid layouts.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(180deg, #F59E0B, #000)",
    url: "https://github.com/divyansh-tripathi/BookStore-Application-main.git",
    dad: "200",
  },
  {
    id: 3,
    image: EcommerceProject,
    title: "E-commerce Website",
    subtitle: "A comprehensive full-stack commerce solution with secure checkout.",
    fullDescription: "A robust full-stack platform featuring user authentication, product management, and a functional shopping cart. This project utilizes an MVC architecture to handle complex data flow between the frontend and backend.",
    borderColor: "#EF4444",
    gradient: "linear-gradient(180deg, #EF4444, #000)",
    url: "https://github.com/divyansh-tripathi/new-ecomm.git",
    dad: "300",
  },
  {
    id: 4,
    image: TaskManagerProject,
    title: "Task Management",
    subtitle: "A productivity tool for organizing daily workflows and deadlines.",
    fullDescription: "A functional task tracker built with React and the Context API for efficient state management. Users can create, update, and delete tasks while maintaining a persistent and organized workflow.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/divyansh-tripathi/task_management.git",
    dad: "400",
  },
  {
    id: 5,
    image: OchiProject,
    title: "Ochi Website",
    subtitle: "A high-end landing page clone focusing on advanced animations.",
    fullDescription: "A frontend exploration project focused on replicating sophisticated design elements and smooth GSAP animations. This project demonstrates mastery over modern CSS and interactive UI components.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(180deg, #8B5CF6, #000)",
    url: "https://github.com/divyansh-tripathi/ochi.git",
    dad: "500",
  },
  {
    id: 6,
    image: BlogProject,
    title: "Blog Application",
    subtitle: "A content-driven platform for sharing insights and articles.",
    fullDescription: "A clean, typography-focused frontend application designed for readability. It features dynamic routing for individual posts and a responsive layout for a seamless reading experience across devices.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(180deg, #3B82F6, #000)",
    url: "https://github.com/divyansh-tripathi/blogApp-UI-main.git",
    dad: "600",
  }

];
