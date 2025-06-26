import { useEffect, useState } from "react";
import { optionsMenuProps, type ItemsHeader } from "../../data/menuHeader";
import { ViewCel } from "../layouts/ViewCel";

interface HeaderProps {
  openWindow: string[];
  toggleOpenWindow: (name: ItemsHeader) => void;
}

export const IconsCel = ({ toggleOpenWindow }: HeaderProps) => {
  const [dateAndTime, setDateAndTime] = useState<Date>(new Date());

  useEffect(() => {
    const result = setInterval(() => {
      setDateAndTime(new Date());
    }, 1000); 

    return () => clearInterval(result);
  }, []);

  const formateDate = (date: Date): string => {
    const day = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB'];
    const month = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 
                  'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
    
    return `${day[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]}`;
  };
   const formateTime = (date: Date): string => {
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
  };
  return (
    <div className="lg:hidden relative flex flex-col items-center justify-center h-full w-full text-white p-4">
      <div className="w-full text-center mb-8">
        <div className="text-2xl font-semibold"><p>        {formateDate(dateAndTime)}
</p> </div>
        <div className="text-sm opacity-80"><p>        {formateTime(dateAndTime)}
</p></div>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full">
        {optionsMenuProps.map((e, i) => (
          <ViewCel
            className="bg-[#2e2e2e65] rounded-xl aspect-square flex flex-col items-center justify-center p-2 cursor-pointer "
            key={i}
            text={e.text}
            icon={e.icon}
            onClick={() => toggleOpenWindow(e.active)}
          />
        ))}
      </div>     
    </div>
  );
};


