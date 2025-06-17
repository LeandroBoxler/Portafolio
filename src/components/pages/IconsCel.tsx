import { optionsMenuProps, type HeaderMenu } from "../../data/menuHeader";
import { ViewCel } from "../layouts/ViewCel";

interface HeaderProps {
  openWindow: string[];
  toggleOpenWindow: (name: HeaderMenu) => void;
}
const top = optionsMenuProps.slice(0, 3);
const bot = optionsMenuProps.slice(3);

export const IconsCel = ({ toggleOpenWindow }: HeaderProps) => {
  return (
    <div className="md:hidden relative grid grid-cols-2 justify-center h-full  w-full z-0">
      {top.map((e, i) => (
        <ViewCel
          key={i}
          text={e.text}
          icon={e.icon}
          onClick={() => toggleOpenWindow(e.active)}
        />
      ))}
    </div>
  );
};
