import {
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaTools,
  FaUser,
} from "react-icons/fa";

export type ItemsHeader =
  | "profile"
  | "projects"
  | "technology"
  | "contact"
  | "education"
  | "experience"

export interface MenuHeader {
  text: string;
  icon: React.ReactNode;
  active: ItemsHeader;
}
export const optionsMenuProps: MenuHeader[] = [
  { text: "Perfil", icon: <FaUser />, active: "profile" },

  { text: "Contacto", icon: <FaEnvelope />, active: "contact" },
  {
    text: "Tecnologías",
    icon: <FaLaptopCode />,
    active: "technology",
  },
  {
    text: "Educación",
    active: "education",
    icon: <FaGraduationCap />,
  },
  {
    text: "Proyectos",
    active: "projects",
    icon: <FaTools />,
  },
   {
    text: "Experiencia laboral",
    active: "experience",
    icon: <FaTools />,
  },
];
