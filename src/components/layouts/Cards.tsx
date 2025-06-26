import { motion, useAnimation, useDragControls } from "framer-motion";
import { cardsMobile, openMenu } from "../../animations/animations";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState, type ReactNode, type RefObject } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";

interface Props {
  onClick?: () => void;
  children: ReactNode;
  title: string;
  className?: string;
  classNameTitle?: string;
  onClosed?: () => void;
  zIndex?: number;
  limitDragAndDrop?: RefObject<HTMLDivElement | null>;
}

export const Card = ({
  onClick,
  children,
  title,
  className,
  classNameTitle,
  onClosed,
  limitDragAndDrop,

  zIndex,
}: Props) => {
  const dragControls = useDragControls();
  const [minimize, setMinimize] = useState(true);
  const controls = useAnimation();
  const [mobile, SetMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 1024 : false
  );
  useEffect(() => {
    controls.start("animate");
  }, []);

  useEffect(() => {
    if (minimize) {
      controls.start(cardsMobile.minimize);
    } else {
      controls.start(cardsMobile.maximize);
    }
  }, [minimize]);

  useEffect(() => {
    const checkIfMobile = () => {
      SetMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  if (mobile) {
    return (
      <motion.div
        drag="y"
        dragControls={dragControls}
        dragListener={minimize ? true : false}
        dragConstraints={limitDragAndDrop}
        dragMomentum={false}
        dragElastic={0.1}
        variants={{
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        animate={controls}
        initial={{ height: "auto" }}
        exit="exit"
        onMouseDown={onClick}
        style={{ position: "fixed", zIndex, touchAction: "none" }}
        className={` rounded-3xl right-0 top-0 w-full overflow-hidden shadow-2xl bg-white ${className}`}
      >
        <div
          className={`bg-gray-100 px-4 py-3 flex justify-between items-center border-b  border-gray-200 gap-2 ${classNameTitle}`}
        >
          <p className="select-none flex-1 font-medium text-gray-800">
            {title}
          </p>
          <button
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600"
            onClick={() => setMinimize(!minimize)}
            aria-label="Minimizar"
          >
            <BsArrowsAngleExpand size={12} />
          </button>
          <button
            className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600"
            onClick={onClosed}
          >
            <FaTimes size={14} />
          </button>
        </div>

        <div className={`bg-white p-4  flex flex-col mt-64"} p-10`}>
          {children}
        </div>
        <div className="p-10">
          <button
            onClick={onClosed}
            className="py-3 px-8  bg-gray-800 text-white w-full rounded-full flex items-center justify-center shadow-lg"
          >
            <FaTimes className="mr-2" />
            Cerrar
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragConstraints={limitDragAndDrop?.current ? limitDragAndDrop : undefined}
      dragMomentum={false}
      dragElastic={0}
      variants={openMenu}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseDown={onClick}
      style={{ position: "absolute", zIndex }}
      className={`border bg-white border-b-[4px] border-t-[4px] border-b-[#3D5361] border-t-[#DCDCDC] ${className}`}
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
