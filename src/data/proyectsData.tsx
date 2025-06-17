export interface ProyectsData{
    id:string
    title:string,
    description:string,
    tecnoligies:string[],
    url:string,
    img?:string
}
export const proyectProps:ProyectsData[]=[ {
    id:"1",
    title:"Septiembre 2023 - Mayo 2024",
    description:"Programador FullStack",
    tecnoligies:["JavaScript"],
    url:"www.com.ar",
    img:""

},
{
    id:"2",
    description:"Julio 2024 - Agosto 2024",
    title:"Curso de Angular",
    tecnoligies:["javaScript"],
    url:"www.com.ar"

}]