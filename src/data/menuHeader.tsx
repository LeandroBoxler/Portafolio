import {
  FaEnvelope,
  FaGraduationCap,
  FaLaptopCode,
  FaTools,
  FaUser,
} from "react-icons/fa";

export type HeaderMenu =
  | "profile"
  | "projects"
  | "technology"
  | "contact"
  | "education";

export interface MenuHeader {
  text: string;
  icon: React.ReactNode;
  active: HeaderMenu;
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
];
