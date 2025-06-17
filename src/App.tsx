import { useState } from "react";
import { Header } from "./components/pages/Header";
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
import {  motion } from "framer-motion";
import { ProyectsCard } from "./components/pages/ProyectsCard";

export type HeaderMenu = "profile" |"projects" |"technology" |"contact" |"education"

export function App() {

const [openWindowProyect, setOpenWindowProyect] = useState<string[]>([]);
const [openWindow, setOpenWindow]=useState<HeaderMenu[]>([])

const toggleOpenWindow = (name:HeaderMenu)=>{
  setOpenWindow(prev => 
    prev.includes(name)?
  prev.filter(e => e!==name): [...prev,name])
}
const toggleOpenWindowProyect = (name:string)=>{
  setOpenWindowProyect(prev => 
    prev.includes(name)?
  prev.filter(e => e!==name): [...prev,name])
}

  return (
<div className="h-screen w-screen overflow-hidden font-pixel">
  <Header openWindow={openWindow} toggleOpenWindow={toggleOpenWindow} />

   <motion.div
    className="relative h-full w-full bg-no-repeat"
    style={{ backgroundImage: "url('/light.png')" }}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 2 }}
  > 

      {proyectProps.map(e =>(

 openWindowProyect.includes(e.id)  && <ProyectsCard onClosed={toggleOpenWindowProyect} description={e.description} tecnoligies={e.tecnoligies} title={e.title} url={e.url} img={e.img} id={e.id} key={e.id} />
      ))
       }



{openWindow.includes("profile") && (
 
      <Profile {...profileProps}  onClosed={toggleOpenWindow} />
  )}
    {openWindow.includes("projects") && <Proyect toggleOpenWindowProyect={toggleOpenWindowProyect} proyects={proyectProps}  open={openWindowProyect} 
  />}
    {openWindow.includes("technology") && <Technology technologies={technologies} onClosed={toggleOpenWindow} />}
    {openWindow.includes("contact") && <Contact {...contactProps} onClosed={toggleOpenWindow} />}
    {openWindow.includes("education") && <Education educations={educationProps} onClosed={toggleOpenWindow} />}

</motion.div>
</div>

  );
}

     {/* {order.map((id, index) => (
          <Cards
            key={id}
            limitDragAndDrop={limitDragAndDrop}
            text="kijholk"
            onClick={()=>bringToFront}
            zIndex={index}
          />
        ))} */}