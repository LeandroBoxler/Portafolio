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
    title:"Sportfit",
    description:"Un e-commerce de ropa deportiva. Proyecto final del curso de FullStack en el cual utilizamos todo lo aprendido durante la cursada",
    tecnoligies:["Javascript","Node.js", "Express", "HTML5", "CSS", "MySQL"],
    url:"https://github.com/PaolaMoriconi/G1-SportFit",
    img:"/Sportfit.png"

},
{
    id:"2",
    description:"Es una pagina la cual muestra datos de campeones del juego league of legends.",
    title:"League of Data",
    tecnoligies:["TypeScript","Angular","Scss"],
    url:"https://github.com/LeandroBoxler/LeagueOfData.git",
    img:"/LeagueOfData.png"

},{
    id:"3",
    description:"Es un e-commerce parecido a MercadoLibre utilizando un JSON como base de datos",
    title:"Mercado Liebre",
    tecnoligies:["Ejs","javaScript","Css"],
    url:"https://github.com/LeandroBoxler/mercadoLiebre",
    img:"/MercadoLiebre.png"

}]