import { useState, useEffect } from "react";
import { SelectsHeader } from "./SelectsHeader";
import { optionsMenuProps, type ItemsHeader } from "../../data/menuHeader";

interface HeaderProps {
  openWindow: ItemsHeader[];
  toggleOpenWindow: (name: ItemsHeader) => void;
}

export const Header = ({ openWindow, toggleOpenWindow }: HeaderProps) => {
  const [showHeader, setShowHeader] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const checkScreenSize = () => {
      setShowHeader(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!showHeader) return null;

  return (
    <header className="w-full bg-[#C0C0C0] border-t-[4px] border-l-[4px] border-t-white border-l-white border-b-[#808080] border-r-[#808080] shadow-lg">
      <div className="h-14 px-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => toggleOpenWindow("projects")}
          className="h-10 px-4 bg-[#C0C0C0] border-[3px] border-t-white border-l-white border-b-[#404040] border-r-[#404040] text-sm font-bold text-black select-none flex items-center"
        >
          Inicio
        </button>

        <div className="h-8 w-[2px] bg-[#808080] border-l border-white" />

        <div className="flex-1 h-full py-1 flex items-center gap-2 overflow-x-auto">
          {openWindow
            .filter((activeWindow) => activeWindow !== "projects")
            .map((activeWindow) => {
            const menuItem = optionsMenuProps.find(
              (item) => item.active === activeWindow
            );

            if (!menuItem) return null;

              return (
                <div key={menuItem.active} className="h-full min-w-36 max-w-44">
                  <SelectsHeader
                    text={menuItem.text}
                    icon={menuItem.icon}
                    isActive
                    onClick={() => toggleOpenWindow(menuItem.active)}
                  />
                </div>
              );
            })}
        </div>

        <div className="h-8 w-[2px] bg-[#808080] border-l border-white" />

        <div className="h-10 min-w-28 px-3 bg-[#C0C0C0] border-[3px] border-t-[#808080] border-l-[#808080] border-b-white border-r-white flex items-center justify-between gap-2 text-black text-xs font-bold">
          <span className="w-2 h-2 bg-[#000080]" />
          <span className="w-2 h-2 bg-[#000080]" />
          <span className="ml-1">{currentTime}</span>
        </div>
      </div>
    </header>
  );
};
