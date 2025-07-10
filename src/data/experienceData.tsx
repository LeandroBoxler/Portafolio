  export interface ExperienceItem {
    id: string;
    title: string;
    period: string;
    company: string;
    details: ExperienceDetail
  }

  interface ExperienceDetail{
    description:string
    responsibilities:string[]
    skills:string[]
  }
  
  export const workExperience: ExperienceItem[] = [
    {
      id: 'exp-1',
      title: "Programador Full Stack",
      period: "Enero 2023 - Presente",
      company: "ForIT Software Factory",
      details: {
        description: "Desarrollo de plataforma integral de servicio de empleo (recruiting) multi-tenant para AMIA.",
        responsibilities: [
          "Desarrollo de features frontend con React",
          "Implementación de API REST con Node.js",
          "Coordinación con equipo de diseño"
        ],
        skills: ["React", "Node.js", "TypeScript", "MongoDB"]
      }
    },
    {
      id: 'exp-2',
      title: "Desarrollador Frontend",
      period: "Marzo 2021 - Diciembre 2022",
      company: "Municipalidad",
      details: {
          responsibilities: [
          "Desarrollo de features frontend con React",
          "Implementación de API REST con Node.js",
          "Coordinación con equipo de diseño"
        ],
        description: "Desarrollo de aplicaciones web para sector financiero.",
        skills: ["JavaScript", "Angular", "CSS"],
      }
    },
    {
      id: 'exp-3',
      title: "Desarrollador Frontend",
      period: "Marzo 2021 - Diciembre 2022",
      company: "Otro lugar",
      details: {
          responsibilities: [
          "Desarrollo de features frontend con React",
          "Implementación de API REST con Node.js",
          "Coordinación con equipo de diseño"
        ],
        description: "Desarrollo de aplicaciones ",
        skills: ["JavaScript"],
      }
    }
  ]