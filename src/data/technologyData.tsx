import { DiScrum } from "react-icons/di";
import { FaJs, FaNodeJs, FaReact, FaAngular, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTypescript, SiHtml5, SiCss3, SiExpress, SiMysql, SiTailwindcss, SiJira } from "react-icons/si";

export type Category = "Lenguajes" | "Herramientas" | "Frameworks";

export interface TechnologyData {
  name: string;
  icon: React.ReactNode;
  bgColor: string; 
  textColor?: string; 
  category: Category;
}


export const technologies: TechnologyData[] = [
  { name: "JavaScript", icon: <FaJs />, bgColor: "bg-yellow-50", textColor: "text-yellow-500", category: "Lenguajes" },
  { name: "TypeScript", icon: <SiTypescript />, bgColor: "bg-blue-50", textColor: "text-blue-600", category: "Lenguajes" },
  { name: "HTML", icon: <SiHtml5 />, bgColor: "bg-orange-50", textColor: "text-orange-500", category: "Lenguajes" },
  { name: "CSS", icon: <SiCss3 />, bgColor: "bg-blue-50", textColor: "text-blue-500", category: "Lenguajes" },
  { name: "Node.js", icon: <FaNodeJs />, bgColor: "bg-green-50", textColor: "text-green-600", category: "Frameworks" },
  { name: "Express", icon: <SiExpress />, bgColor: "bg-gray-100", textColor: "text-gray-800", category: "Frameworks" },
  { name: "MySQL", icon: <SiMysql />, bgColor: "bg-blue-50", textColor: "text-blue-800", category: "Frameworks" },
  { name: "React", icon: <FaReact className="animate-spin-slow" />, bgColor: "bg-blue-50", textColor: "text-blue-500", category: "Frameworks" },
  { name: "Angular", icon: <FaAngular />, bgColor: "bg-red-50", textColor: "text-red-600", category: "Frameworks" },
  { name: "Tailwind", icon: <SiTailwindcss />, bgColor: "bg-cyan-50", textColor: "text-cyan-500", category: "Frameworks" },
  { name: "REST", icon: <span className="text-purple-600">🌐</span>, bgColor: "bg-purple-50", category: "Frameworks" },
  { name: "MVC", icon: <span className="text-gray-700">📦</span>, bgColor: "bg-gray-100", category: "Frameworks" },
  { name: "SCRUM", icon: <DiScrum />, bgColor: "bg-orange-50", textColor: "text-orange-500", category: "Herramientas" },
  { name: "Git", icon: <FaGitAlt />, bgColor: "bg-orange-50", textColor: "text-orange-600", category: "Herramientas" },
  { name: "GitHub", icon: <FaGithub />, bgColor: "bg-gray-800", textColor: "text-white", category: "Herramientas" },
  { name: "Jira", icon: <SiJira />, bgColor: "bg-blue-50", textColor: "text-blue-600", category: "Herramientas" },
];