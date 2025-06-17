import { motion } from "framer-motion";
import { useState } from "react";
import { FaFolderOpen, FaFolder } from "react-icons/fa";
import { openMenuProyects } from "../../animations/animations";
import type { ProyectsData } from "../../data/proyectsData";

interface Props {
  proyects: ProyectsData[];
  
  toggleOpenWindowProyect: (id: string) => void;
  open:string[]
}

export const Proyect = ({ proyects,toggleOpenWindowProyect,open }: Props) => {
  const [openProyects, setOpenProyects] = useState(true);

  return (
    <>
      <motion.div
        variants={openMenuProyects}
        initial="hidden"
        animate={openProyects ? "visible" : "hidden"}
        className="absolute top-30 right-0 h-full w-full sm:w-80 md:w-72
        bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]
        text-black z-40 overflow-y-auto"
      >
        <div className="p-2 border-b border-[#808080] bg-[#000080] text-white flex items-center gap-2">
          <FaFolderOpen />
          <h1 className="font-bold text-lg">Mis Proyectos</h1>
        </div>

        <div className="p-1">
          {proyects.map((e, i) => (
            <button
          onClick={()=> toggleOpenWindowProyect(e.id)}
              key={i}
              className={`w-full text-left px-3 py-2 flex items-center gap-2
              hover:bg-[#E0E0E0] hover:text-[#000080] ${open.includes(e.id)? "bg-[#E0E0E0] text-[#000080]":""}
              border-b border-b-[#808080] last:border-b-0 transition-colors`}
            >
              <FaFolder className="flex-shrink-0" />
              <div className="truncate">
                <p className="font-bold text-sm truncate">{e.title}</p>
                <p className="text-xs text-[#555555]">{e.tecnoligies}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </>
  );
};
