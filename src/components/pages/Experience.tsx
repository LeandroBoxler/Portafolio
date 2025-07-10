import { useState } from "react"
import { Card } from "../layouts/Cards"
import type { ItemsHeader } from "../../data/menuHeader"
import type { RefObject } from "react"
import type { ExperienceItem } from "../../data/experienceData";


interface Props {
  onClosed: (name: ItemsHeader) => void;
  className?: string;
  onClick: () => void;
  zIndex: number;
  dragConstraints: RefObject<HTMLDivElement | null>;
  workExperience:ExperienceItem[]
}

export const Experience = ({
  onClosed,
  className,
  onClick,
  zIndex,
  dragConstraints,
  workExperience
}: Props) => {
  const [selectedTab, setSelectedTab] = useState<'description' | 'skills'>('description')
  const [selectedExperience, setSelectedExperience] = useState(0)



  const currentExp = workExperience [selectedExperience]

  return (
    <Card
      title="Experiencia Laboral"
      classNameTitle="bg-indigo-800 text-white"
      onClosed={() => onClosed("experience")}
      className={`${className} lg:w-[45%] min-h-[400px]`}
      zIndex={zIndex}
      onClick={onClick}
      limitDragAndDrop={dragConstraints}
    >
      <div className="flex flex-col h-full p-2">

        <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
          {workExperience.map((exp, index) => (
            <button
              key={exp.id}
              className={`px-4 py-2 rounded-md whitespace-nowrap ${
                selectedExperience === index
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedExperience(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>


        <div className="flex-1 flex flex-col border rounded-lg overflow-hidden">
          <div className="bg-white p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">{currentExp.title}</h2>
            <p className="text-gray-600">{currentExp.company}</p>
            <p className="text-sm text-gray-500">{currentExp.period}</p>
          </div>


          <div className="flex border-b">
          
            <button
              className={`px-4 py-2 ${
                selectedTab === 'description'
                  ? 'bg-indigo-100 text-indigo-800 border-b-2 border-indigo-500'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTab('description')}
            >-
              Descripción
            </button>
            <button
              className={`px-4 py-2 ${
                selectedTab === 'skills'
                  ? 'bg-indigo-100 text-indigo-800 border-b-2 border-indigo-500'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedTab('skills')}
            >
              Habilidades
            </button>
          </div>


          <div className="flex-1 overflow-auto p-4 bg-white">
            {selectedTab === 'description' ? (
              <div>
                <p className="mb-4">{currentExp.details.description}</p>
                {currentExp.details.responsibilities && (
                  <div>
                    <h3 className="font-semibold mb-2">Responsabilidades:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {currentExp.details.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {currentExp.details.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}