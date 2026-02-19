interface Props {
  text: string;
  icon: React.ReactNode;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const ViewCel = ({
  text,
  icon,
  onClick,
  className,
  iconClassName,
  textClassName,
}: Props) => {
  return (
    <button
      type="button"
      className={`${className}
        
`}
      onClick={onClick}
    >
      <span className={`mb-1 ${iconClassName ?? ""}`}>{icon}</span>
      <p className={`font-bold text-xs ${textClassName ?? ""}`}>{text}</p>
    </button>
  );
};
