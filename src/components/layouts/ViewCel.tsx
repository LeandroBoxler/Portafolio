interface Props {
  text: string;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const ViewCel = ({ text, icon, onClick, className }: Props) => {
  return (
    <div
      className={`${className}
      text-white p-10 flex flex-col justify-center items-center text-2xl
        
`}
      onClick={onClick}
    >
      <span className="mb-1">{icon}</span>
      <p className="font-bold">{text}</p>
    </div>
  );
};
