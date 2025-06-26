import { useState, useEffect } from "react";
import { SelectsHeader } from "./SelectsHeader";
import { optionsMenuProps, type ItemsHeader } from "../../data/menuHeader";

interface HeaderProps {
  openWindow: string[];
  toggleOpenWindow: (name: ItemsHeader) => void;
}

export const Header = ({ openWindow, toggleOpenWindow }: HeaderProps) => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowHeader(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!showHeader) return null;

  return (
    <header className="w-full border-0 shadow-lg">
      <div className="bg-[#008080] border-[4px] border-l-[#7F9DB9] border-t-[#7F9DB9] border-b-[#003366] border-r-[#003366] p-2 flex items-center justify-between gap-4">
        <p className="text-2xl sm:text-3xl text-white">MENU</p>
      </div>
      <div className="flex justify-center gap-2 p-2 bg-[#C0C0C0] border-t-[4px] border-l-[4px] border-t-white border-l-white border-b-[#808080] border-r-[#808080]">
        {optionsMenuProps.map((e, i) => (
          <SelectsHeader
            key={i}
            text={e.text}
            icon={e.icon}
            isActive={openWindow.includes(e.active)}
            onClick={() => toggleOpenWindow(e.active)}
          />
        ))}
      </div>
    </header>
  );
};
