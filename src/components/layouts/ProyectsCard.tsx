import type { ProyectsData } from "../../data/proyectsData";
import { Card } from "./Cards";
import { motion } from "framer-motion";

interface ProyectsProps extends ProyectsData {
  onClosed: (e: string) => void;
  className?: string;
  zIndex:number
  onClick:()=>void
}

export const ProyectsCard = ({
  description,
  tecnoligies,
  title,
  url,
  img,
  id,
  onClick,
  zIndex,
  onClosed,
  className,
}: ProyectsProps) => {
  return (
    <Card
      title={title}
      onClosed={() => onClosed(id)}
      classNameTitle="bg-[#000080] text-white"
      onClick={onClick}
      zIndex={zIndex}
      className={`${className}!bg-[#C0C0C0] w-full max-w-[600px]`}
    >
      <div className="relative group">
        <div
          className="relative overflow-hidden border-2 
                      border-t-[#808080] border-l-[#808080] 
                      border-b-white border-r-white"
        >
          <img className="w-full h-48 object-cover" src={img} alt={title} />
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {tecnoligies.map((e, i) => (
              <motion.div
                key={i}
                className="bg-[#000080] text-white text-xs px-2 py-1 border-2
                          border-t-white border-l-white 
                          border-b-[#404040] border-r-[#404040]"
              >
                {e}
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className="mt-2 border-2 
                      border-t-[#808080] border-l-[#808080] 
                      border-b-white border-r-white bg-white p-3"
        >
          <p className="font-bold text-[#000080] mb-1">{title}</p>
          <p className="text-xs text-gray-800">{description}</p>
        </div>{" "}
        <div className="flex gap-2 mt-3">
          <a
            href={url}
            rel="noopener noreferrer"
            className="flex-1 border-2 text-center
                      border-t-white border-l-white 
                      border-b-[#808080] border-r-[#808080]
                      bg-[#C0C0C0] hover:bg-[#E0E0E0] 
                      text-black text-xs p-2 flex items-center justify-center gap-1"
          >
            Visitar Proyecto
          </a>
          <button
            className="flex-1 border-2
                      border-t-white border-l-white 
                      border-b-[#808080] border-r-[#808080]
                      bg-[#C0C0C0] hover:bg-[#E0E0E0] 
                      text-black text-xs p-2"
          >
            Detalles
          </button>
        </div>
      </div>
    </Card>
  );
};
