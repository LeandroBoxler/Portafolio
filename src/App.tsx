import { useRef, useState } from "react";
import { Header } from "./components/layouts/Header";
import { technologies } from "./data/technologyData";
import { contactProps } from "./data/contactData";
import { profileProps } from "./data/profileData";
import { Profile } from "./components/pages/Profile";
import { Technology } from "./components/pages/Technology";
import { Contact } from "./components/pages/Contact";
import { educationProps } from "./data/educationData";
import { Proyect } from "./components/pages/Proyect";
import { proyectProps } from "./data/proyectsData";
import { Education } from "./components/pages/Education";
import { motion } from "framer-motion";
import { ProyectsCard } from "./components/layouts/ProyectsCard";
import type { ItemsHeader } from "./data/menuHeader";
import { IconsCel } from "./components/layouts/IconsCel";
import { useZIndex } from "./hooks/zIndex";

export function App() {
  const [openWindowProyect, setOpenWindowProyect] = useState<string[]>([]);
  const [openWindow, setOpenWindow] = useState<ItemsHeader[]>([]);
  const { bringToFront, getZIndex } = useZIndex();
  const toggleOpenWindow = (name: ItemsHeader) => {
    setOpenWindow(
      (prev) => (
        bringToFront(name),
        prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
      )
    );
  };
  const toggleOpenWindowProyect = (name: string) => {
    setOpenWindowProyect((prev) =>
      prev.includes(name) ? prev.filter((e) => e !== name) : [...prev, name]
    );
  };
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="h-screen w-screen overflow-hidden font-pixel">
      <Header openWindow={openWindow} toggleOpenWindow={toggleOpenWindow} />

      <motion.div
        className="relative h-full w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/fondo.png')" }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
        ref={containerRef}
      >
        {proyectProps.map(
          (e) =>
            openWindowProyect.includes(e.id) && (
              <ProyectsCard
                onClick={() => bringToFront(e.id)}
                zIndex={getZIndex(e.id)}
                onClosed={toggleOpenWindowProyect}
                description={e.description}
                tecnoligies={e.tecnoligies}
                title={e.title}
                url={e.url}
                img={e.img}
                id={e.id}
                key={e.id}
                dragConstraints={containerRef}

              />
            )
        )}

        <IconsCel openWindow={openWindow} toggleOpenWindow={toggleOpenWindow} />

        {openWindow.includes("profile") && (
          <Profile
            {...profileProps}
            onClosed={toggleOpenWindow}
            onClick={() => bringToFront("profile")}
            zIndex={getZIndex("profile")}
                        dragConstraints={containerRef}


          />
        )}
        {openWindow.includes("projects") && (
          <Proyect
            toggleOpenWindowProyect={toggleOpenWindowProyect}
            proyects={proyectProps}
            open={openWindowProyect}
            onClosed={toggleOpenWindow}
            onClick={() => bringToFront("projects")}
            zIndex={getZIndex("projects")}

          />
        )}
        {openWindow.includes("technology") && (
          <Technology
            technologies={technologies}
            onClosed={toggleOpenWindow}
            onClick={() => bringToFront("technology")}
            zIndex={getZIndex("technology")}
                        dragConstraints={containerRef}

          />
        )}
        {openWindow.includes("contact") && (
          <Contact
            {...contactProps}
            onClosed={toggleOpenWindow}
            zIndex={getZIndex("contact")}
            onClick={() => bringToFront("contact")}
            dragConstraints={containerRef}
          />
        )}
        {openWindow.includes("education") && (
          <Education
            educations={educationProps}
            onClick={() => bringToFront("education")}
            onClosed={toggleOpenWindow}
            zIndex={getZIndex("education")}
                        dragConstraints={containerRef}

          />
        )}
      </motion.div>
    </div>
  );
}
