import { optionsMenuProps, type ItemsHeader } from "../../data/menuHeader";
import { ViewCel } from "./ViewCel";

interface DesktopIconsProps {
  openWindow: string[];
  toggleOpenWindow: (name: ItemsHeader) => void;
}

export const DesktopIcons = ({
  openWindow,
  toggleOpenWindow,
}: DesktopIconsProps) => {
  return (
    <aside className="hidden lg:flex absolute top-4 right-2 z-10 flex-col items-end gap-4">
      {optionsMenuProps
        .filter((item) => item.active !== "projects")
        .map((item) => {
        const isActive = openWindow.includes(item.active);

        return (
          <ViewCel
            key={item.active}
            text={item.text}
            icon={item.icon}
            onClick={() => toggleOpenWindow(item.active)}
            iconClassName="text-4xl drop-shadow-[1px_1px_0_#000000]"
            textClassName="w-full px-0 text-center text-[9px] font-normal tracking-tight leading-4 whitespace-nowrap overflow-hidden [text-shadow:1px_1px_0_#000000]"
            className={`w-28 h-28 border flex flex-col items-center justify-center p-2 text-white hover:bg-[#00008090] hover:border-white/40 focus:outline-none focus:bg-[#00008090] focus:border-white/40 ${
              isActive
                ? "bg-[#00008090] border-white/70"
                : "bg-transparent border-transparent"
            }`}
          />
        );
        })}
    </aside>
  );
};
