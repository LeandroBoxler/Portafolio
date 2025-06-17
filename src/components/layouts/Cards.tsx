import { motion, useDragControls } from "framer-motion";
import type { ReactNode } from "react";
import { openMenu } from "../../animations/animations";
import { FaTimes } from "react-icons/fa";

interface Props {
  limitDragAndDrop?: React.RefObject<HTMLDivElement | null>;
  onClick?: () => void;
  children: ReactNode;
  title: string;
  className?: string;
  classNameTitle?: string;
  onClosed?: () => void;
  zIndex?: number;
}

export const Card = ({
  limitDragAndDrop,
  onClick,
  children,
  title,
  className,
  classNameTitle,
  onClosed,
  zIndex,
}: Props) => {
  const dragControls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={limitDragAndDrop}
      dragMomentum={false}
      dragElastic={0}
      variants={openMenu}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseDown={onClick}
      style={{ position: "absolute", zIndex }}
      className={`border right-0 top-0 bg-white border-b-[4px] border-t-[4px] border-b-[#3D5361] border-t-[#DCDCDC] ${className}`}
    >
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className={`flex justify-between items-center px-2 py-1 border-[4px] border-l-[#7F9DB9] border-t-[#7F9DB9] border-b-black border-r-black w-full ${classNameTitle}`}
      >
        <p className="select-none flex-1">{title}</p>
        <button
          className="border-2 min-w-[24px] max-w-[32px] aspect-square text-center border-t-white bg-red-500 border-l-white border-r-gray-500 border-b-gray-500 text-black font-bold flex items-center justify-center"
          onClick={onClosed}
        >
          <FaTimes />
        </button>
      </div>
      <div>
        <div className={`p-4`}>{children}</div>
      </div>
    </motion.div>
  );
};
