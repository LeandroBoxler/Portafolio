import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaFolderOpen,
  FaFolder,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { openMenuProyects } from "../../animations/animations";
import type { ProyectsData } from "../../data/proyectsData";
import type { ItemsHeader } from "../../data/menuHeader";

interface Props {
  proyects: ProyectsData[];
  zIndex: number;
  onClick: () => void;
  toggleOpenWindowProyect: (id: string) => void;
  open: string[];
  onClosed: (name: ItemsHeader) => void;
}

export const Proyect = ({
  proyects,
  toggleOpenWindowProyect,
  open,
  onClick,
  zIndex,
  onClosed,
}: Props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [openProyects] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleProjectClick = (id: string) => {
    if (isMobile) {
      setExpandedId(expandedId === id ? null : id);
    } else {
      toggleOpenWindowProyect(id);
    }
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <motion.div
      variants={openMenuProyects}
      initial="hidden"
      animate={openProyects ? "visible" : "hidden"}
      className={`${
        isMobile
          ? "fixed inset-x-0 bottom-0 rounded-t-lg h-full"
          : "absolute top-0 right-0 h-full w-full sm:w-80 md:w-72"
      }
        bg-[#C0C0C0] border-2 border-t-white border-l-white border-b-[#808080] border-r-[#808080]
        text-black overflow-y-auto`}
      style={{ zIndex }}
      onClick={onClick}
    >
      <div
        className={`p-4 border-b border-[#808080] bg-[#000080] text-white flex items-center justify-between
        ${isMobile ? "rounded-t-lg" : ""}`}
      >
        <div className="flex items-center gap-2">
          <FaFolderOpen />
          <h1 className="font-bold text-lg">Mis Proyectos</h1>
        </div>
        {isMobile && (
          <button onClick={() => onClosed("projects")}>
            <FaTimes className="text-white" />
          </button>
        )}
      </div>

      <div className="p-1">
        {proyects.map((e, i) => (
          <div
            key={i}
            className={`border-b border-b-[#808080] last:border-b-0 ${
              !isMobile && open.includes(e.id)
                ? "bg-[#E0E0E0] text-[#000080]"
                : ""
            }`}
          >
            <button
              onClick={() => handleProjectClick(e.id)}
              className={`w-full text-left px-3 py-3 flex items-center gap-2
                ${isMobile ? "active:bg-[#E0E0E0]" : "hover:bg-[#E0E0E0]"} 
                transition-colors`}
            >
              <div className="flex-shrink-0">
                {isMobile ? (
                  expandedId === e.id ? (
                    <FaFolderOpen />
                  ) : (
                    <FaFolder />
                  )
                ) : (
                  <FaFolder />
                )}
              </div>
              <div className="truncate flex-1">
                <p className="font-bold text-sm truncate">{e.title}</p>
                <p className="text-xs text-[#555555]">{e.tecnoligies}</p>
              </div>
              {isMobile && (
                <motion.div
                  animate={{ rotate: expandedId === e.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {expandedId === e.id ? (
                    <FaChevronUp size={12} />
                  ) : (
                    <FaChevronDown size={12} />
                  )}
                </motion.div>
              )}
            </button>

            {isMobile && (
              <AnimatePresence>
                {expandedId === e.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-3 pt-1 text-sm text-gray-700">
                      {e.description}
                      <button
                        onClick={() => onClosed("projects")}
                        className="rounded-md flex items-center w-full my-5 justify-center bg-[#000080] text-white p-3"
                      >
                        <a href={e.url}>Visitar proyecto</a>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
      {isMobile && (
        <div className="sticky bottom-0 p-4 bg-gradient-to-t from-[#C0C0C0] to-transparent">
          <button
            onClick={() => onClosed("projects")}
            className="w-full py-3 bg-gray-800 text-white rounded-md flex items-center justify-center shadow-md"
          >
            Cerrar
          </button>
        </div>
      )}
    </motion.div>
  );
};
