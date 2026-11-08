export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Contract Farming and Agricultural Platform",
    category: "Web Application",
    description:
      "A responsive agricultural platform connecting farmers and buyers. It supports crop posts, contract proposals, agricultural resource management, harvest records and payment tracking.",
    image: "../../public/agrimart.png",
    technologies: ["React", "TypeScript", "Firebase", "CSS"],
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "MyOJTApp",
    category: "Mobile Application",
    description:
      "A React Native learning application built with Expo. It includes login, registration, profile, navigation, interactive components and local storage.",
    image: "../../public/myojtapp.png",
    technologies: ["React Native", "Expo", "JavaScript"],
    github: "",
    demo: "",
  },
];
