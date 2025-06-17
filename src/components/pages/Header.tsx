import { useState } from "react";
import { FaUser, FaTools, FaLaptopCode, FaEnvelope, FaGraduationCap } from "react-icons/fa";
import { SelectsHeader } from "../layouts/SelectsHeader";
import type { HeaderMenu } from "../../App";

interface HeaderProps {
  openWindow: string[];
  toggleOpenWindow: (name: HeaderMenu) => void;
}

export const Header = ({ openWindow, toggleOpenWindow }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-0 shadow-lg">
      <div className="bg-[#008080] border-[4px] border-l-[#7F9DB9] border-t-[#7F9DB9] border-b-[#003366] border-r-[#003366] p-2 flex items-center justify-between gap-4">
        <p className="text-2xl sm:text-3xl text-white">MENU</p>
       
      </div>

      <div className="hidden sm:flex justify-center gap-2 p-2 
                      bg-[#C0C0C0] border-t-[4px] border-l-[4px] border-t-white border-l-white border-b-[#808080] border-r-[#808080]">
        <SelectsHeader text="Perfil" icon={<FaUser />} isActive={openWindow.includes("profile")} onClick={() => toggleOpenWindow("profile")} />
        <SelectsHeader text="Contacto" icon={<FaEnvelope />} isActive={openWindow.includes("contact")} onClick={() => toggleOpenWindow("contact")} />
        <SelectsHeader text="Tecnologías" icon={<FaLaptopCode />} isActive={openWindow.includes("technology")} onClick={() => toggleOpenWindow("technology")} />
        <SelectsHeader text="Educación" icon={<FaGraduationCap />} isActive={openWindow.includes("education")} onClick={() => toggleOpenWindow("education")} />
        <SelectsHeader text="Proyectos" icon={<FaTools />} isActive={openWindow.includes("projects")} onClick={() => toggleOpenWindow("projects")} />
      </div>

      <div className="sm:hidden bg-[#C0C0C0] border-t border-[#808080] flex justify-center">
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="text-sm px-4 py-1 m-1 border-2 border-white border-b-[#808080] border-r-[#808080] bg-[#E0E0E0] hover:bg-[#D0D0D0] active:translate-y-[1px]"
        >
          {menuOpen ? "Cerrar menú" : "Abrir menú"}
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden flex flex-col gap-1 px-2 pb-2 bg-[#C0C0C0] border-t border-[#808080]">
          <SelectsHeader text="Perfil" icon={<FaUser />} isActive={openWindow.includes("profile")} onClick={() => toggleOpenWindow("profile")} />
          <SelectsHeader text="Contacto" icon={<FaEnvelope />} isActive={openWindow.includes("contact")} onClick={() => toggleOpenWindow("contact")} />
          <SelectsHeader text="Tecnologías" icon={<FaLaptopCode />} isActive={openWindow.includes("technology")} onClick={() => toggleOpenWindow("technology")} />
          <SelectsHeader text="Educación" icon={<FaGraduationCap />} isActive={openWindow.includes("education")} onClick={() => toggleOpenWindow("education")} />
          <SelectsHeader text="Proyectos" icon={<FaTools />} isActive={openWindow.includes("projects")} onClick={() => toggleOpenWindow("projects")} />
        </div>
      )}
    </header>
  );
};
