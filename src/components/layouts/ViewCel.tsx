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
        
`}
      onClick={onClick}
    >
      <span className="mb-1">{icon}</span>
      <p className="font-bold text-xs">{text}</p>
    </div>
  );
};
