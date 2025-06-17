import type { HeaderMenu } from '../../App'
import type { ContactData } from '../../data/contactData'
import { Card } from '../layouts/Cards'

interface ContactProps extends ContactData {
  onClosed: (name: HeaderMenu) => void;
}

export const Contact = ({email,linkedIn,phone,urlLinkedIn,onClosed}:ContactProps) => {
     const data = [
    { label: "Correo", value:    email },
    { label: "Teléfono", value: phone },
    { label: "LinkedIn", value:  <a href={urlLinkedIn} target="_blank" rel="noopener noreferrer">{linkedIn}</a> }
  ]
  return (
<Card 
  onClosed={()=>onClosed("contact")}
  title="Contactos" 
  classNameTitle="bg-green-900 text-lime-200 shadow-lg"
  
>
  {data.map((e, i) => (
    <div key={i} className="mb-3">
      <p className="font-bold text-emerald-800">{e.label}:</p>
      <p className="m-2 border p-2 border-emerald-300 bg-white rounded-md flex items-center gap-2 hover:bg-emerald-50 transition-colors">
        {e.value}
      </p>
    </div>
  ))}
</Card>
   
 

)
}
