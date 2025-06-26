import { FaGraduationCap } from "react-icons/fa";
import type { EducationData } from "../../data/educationData";
import { Card } from "../layouts/Cards";
import type { ItemsHeader } from "../../data/menuHeader";
import type { RefObject } from "react";

interface Props {
  educations: EducationData[];
  onClosed: (name: ItemsHeader) => void;
  className?: string;
  zIndex: number;
  onClick: () => void;
  dragConstraints: RefObject<HTMLDivElement | null>;
}

export const Education = ({
  educations,
  onClosed,
  className,
  zIndex,
  onClick,
  dragConstraints,
}: Props) => {
  return (
    <Card
      title="Educación"
      classNameTitle="bg-[#008080] text-white border-t-2 border-l-2 border-t-[#7F9DB9] border-l-[#7F9DB9] border-b-2 border-r-2 border-b-[#003366] border-r-[#003366] px-4 py-1"
      onClosed={() => onClosed("education")}
      className={`lg:left-1  ${className}`}
      zIndex={zIndex}
      onClick={onClick}
      limitDragAndDrop={dragConstraints}
    >
      <div className="space-y-2">
        {educations.map((e, i) => (
          <div
            key={i}
            className="bg-[#c0c0c0] p-3 border-2 
                      border-t-white border-l-white 
                      border-b-[#808080] border-r-[#808080]
                      "
          >
            <div className="flex items-center gap-2 mb-1">
              <FaGraduationCap className="text-[#003366] text-lg" />
              <p className="font-bold text-[#003366] text-sm">{e.title}</p>
            </div>
            <p className="text-[#000000] pl-6 text-sm">{e.name}</p>
            <p className="text-[#555555] pl-6 text-xs mt-1">{e.date}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
