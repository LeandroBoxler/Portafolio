interface Props {
  text: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const SelectsHeader = ({
  text,
  icon,
  className,
  onClick,
  isActive,
}: Props) => {
  return (
    <div
      className={`bg-[#C0C0C0] 
                   border-[4px]
                   border-t-white border-l-white 
                   border-b-[#808080] border-r-[#808080]
                   hover:bg-[#000080] hover:text-white
                   active:border-[#808080] active:border-t-[#000000] active:border-l-[#000000]
                   flex flex-col justify-center items-center
                   w-full h-full
                   cursor-pointer p-1 transition-all duration-100 ${className}
                  ${isActive ? "!bg-[#000080] text-white" : ""}
`}
      onClick={onClick}
    >
      <span className="text-xl mb-1">{icon}</span>
      <p className="text-xs font-bold">{text}</p>
    </div>
  );
};
