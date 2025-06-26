import type { RefObject } from "react";
import type { ItemsHeader } from "../../data/menuHeader";
import type { Category, TechnologyData } from "../../data/technologyData";
import { Card } from "../layouts/Cards";

interface Props {
  technologies: TechnologyData[];
  onClosed: (name: ItemsHeader) => void;
  className?: string;
  onClick:()=>void
  zIndex:number
    dragConstraints: RefObject<HTMLDivElement | null>;
  
}

export const Technology = ({ technologies, onClosed, className,onClick,zIndex,dragConstraints }: Props) => {
  const categories: Category[] = ["Lenguajes", "Frameworks", "Herramientas"];

  return (
    <Card
      title="Habilidades Tecnologias"
      classNameTitle="bg-indigo-800 text-white"
      onClosed={() => onClosed("technology")}
      className={`${className}`}
      zIndex={zIndex}
      onClick={onClick}
      limitDragAndDrop={dragConstraints}
    >
      <div className="">
        {categories.map((category) => {
          const items = technologies.filter(
            (tech) => tech.category === category
          );
          return (
            <div key={category}>
              <p className="mb-2 font-bold text-lg">{category}</p>
              <div className="grid grid-cols-2 gap-2 pl-4">
                {items.map(({ name, icon, bgColor, textColor }) => (
                  <p
                    key={name}
                    className={`border p-2 rounded-md flex items-center gap-2 ${bgColor} ${
                      textColor ?? ""
                    }`}
                  >
                    {icon} {name}
                  </p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
