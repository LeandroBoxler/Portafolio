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
  const activeStyles = isActive
    ? "!bg-[#B8B8B8] border-t-[#808080] border-l-[#808080] border-b-white border-r-white text-black"
    : "";

  return (
    <div
      className={`bg-[#C0C0C0] 
        select-none
                   border-[3px]
                   border-t-white border-l-white 
                   border-b-[#808080] border-r-[#808080]
                   hover:bg-[#000080] hover:text-white
                   active:border-[#808080] active:border-t-[#000000] active:border-l-[#000000]
                   flex justify-start items-center
                   w-full h-full
                   cursor-pointer px-3 py-1 transition-all duration-100 ${className}
                  ${activeStyles}
`}
      onClick={onClick}
    >
      <span className="text-base mr-2">{icon}</span>
      <p className="text-xs font-bold truncate">{text}</p>
    </div>
  );
};
