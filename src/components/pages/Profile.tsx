import { useState, type RefObject } from "react";
import { Card } from "../layouts/Cards";
import type { ProfileData } from "../../data/profileData";
import type { ItemsHeader } from "../../data/menuHeader";

interface ProfileProp extends ProfileData {
  onClosed: (name: ItemsHeader) => void;
  className?: string;
  zIndex: number;
  onClick: () => void;
  dragConstraints: RefObject<HTMLDivElement | null>;
}

export const Profile = ({
  years,
  img,
  info,
  name,
  onClosed,
  className,
  zIndex,
  onClick,
  dragConstraints,
}: ProfileProp) => {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const maxPreviewLength = 72;

  const data = [
    { label: "Nombre", value: name },
    { label: "Edad", value: `${years} Años` },
  ];

  return (
    <Card
      limitDragAndDrop={dragConstraints}
      title="Perfil"
      classNameTitle="bg-gradient-to-r from-indigo-800 to-purple-800 text-white py-2 px-4"
      onClosed={() => onClosed("profile")}
      className={`${className} w-full lg:w-[30%] min-w-[250px]`}
      zIndex={zIndex}
      onClick={onClick}
    >
      <div className="flex flex-col justify-center gap-4 p-3">
        <div className="flex justify-center group">
          <img
            src={`./public/${img}`}
            className="rounded-full border-4 border-indigo-100 w-[50%] max-w-[150px] aspect-square
                       group-hover:border-indigo-300 shadow-md"
            alt="Perfil"
          />
        </div>

        {data.map((e, i) => (
          <div key={i}>
            <p className="font-bold text-indigo-700 text-sm">{e.label}:</p>
            <p className="border border-indigo-100 w-full p-2 bg-indigo-50 rounded-md mt-1">
              {e.value}
            </p>
          </div>
        ))}

        <div>
          <p className="font-bold text-indigo-700 text-sm">Sobre mí</p>
          <div
            className={`break-words overflow-y-auto h-full  ${
              !showFullInfo ? "line-clamp-3" : "max-h-[25vh]"
            }`}
          >
            <p className={`break-words ${!showFullInfo ? "line-clamp-3" : ""}`}>
              {info}
            </p>
            {info.length > maxPreviewLength && (
              <button
                onClick={() => setShowFullInfo(!showFullInfo)}
                className="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1"
              >
                {showFullInfo ? (
                  <>
                    <p>Mostrar menos</p>
                    <p>↑</p>
                  </>
                ) : (
                  <>
                    <p>Mostrar más</p>
                    <p>↓</p>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
