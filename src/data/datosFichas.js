

const dataFicha = [

{ id:"1",
name:"HTML5",
texto: "Poseo sólidos conocimientos y habilidades en HTML5, el lenguaje de marcado fundamental para  \
el desarrollo web moderno.  Con experiencia en la creación de estructuras de páginas web semánticas y \
accesibles, puedo utilizar las etiquetas y atributos de HTML5 para optimizar la estructura y el \
contenido de los sitios web. Además, puedo incorporar elementos multimedia como audio y video, así \
como desarrollar formularios interactivos y compatibles con dispositivos móviles. Con mi dominiode HTML5, \
puedo contribuir a la creación de experiencias web atractivas, funcionales y  compatibles con los \
estándares actuales",
titulo1:"HTML Sematico",
contenido1:"<header><nav></nav></header>\n <main>\n<article></article>\
\n <aside></aside> \n </main> \n <footer></footer>",
titulo2:"Video en HTML5",
contenido2:"<video width='640'height='360' controls> \n<source src='video.mp4' type='video/mp4'>\n\
<source src='video.webm' type='video/webm'>\n</video>",
path:"html5"
}, 

{ 
id:"2",
name:"CSS3",
texto:"  Con habilidades en CSS3, demuestro un dominio sólido en la estilización y el diseño web. \
Desde la creación de diseños modernos y responsivos hasta la implementación de animaciones y efectos \
visuales cautivadores, mi experiencia en CSS3 me permite dar vida a las ideas de diseño más creativas. \
Con un enfoque en la optimización del rendimiento y la accesibilidad, puedo crear experiencias web \
atractivas y funcionales para una amplia variedad de dispositivos y navegadores. \
Mi conocimiento en CSS3 me permite no solo seguir las últimas tendencias de diseño, \
sino también innovar y encontrar soluciones creativas para desafíos específicos de diseño web.",
titulo1:"Animacion",
contenido1:"@keyframes rotar\n{from {transform: rotate(0deg);}\nto\n{transform: rotate(360deg);}\n} ",
titulo2:"Responsive",
contenido2:"@media screen and (max-width: 600px)\n{.texto-pequeno\n{font-size: 14px;}}",
path:"css3",
},

{ id:"3",
name: "JavaScript",
texto:"Con habilidades en JavaScript, demuestro un profundo conocimiento en el desarrollo web dinámico \
y la creación de experiencias interactivas. Desde la manipulación del DOM hasta la implementación de \
lógica de negocios compleja en el lado del cliente, puedo crear aplicaciones web modernas y funcionales. \
Mi experiencia incluye el uso de bibliotecas y frameworks populares como React.js o Angular.js para \
construir interfaces de usuario robustas y escalables. Además, puedo trabajar con tecnologías de \
servidor como Node.js para desarrollar aplicaciones web de extremo a extremo. Con un enfoque en la \
optimización del rendimiento y la resolución de problemas, puedo enfrentar desafíos complejos y ofrecer \
soluciones eficientes y efectivas en el mundo del desarrollo web.",

titulo1:"Manipulación de DOM",
contenido1:"function cambiarColorFondo(){ var body = document.querySelector\n('body');\
body.style.backgroundColor = getRandomColor();}\n \
function getRandomColor(){ var letters = '0123456789ABCDEF';\n var color = '#';\
for (var i = 0; i < 6; i++)\n\{ color += letters[Math.floor(Math.random() * 16)];}\
return color;}\n\
var button = document.createElement('button');\n\
button.textContent = 'Cambiar Color de Fondo';\nbutton.onclick =\n\
cambiarColorFondo;document.body.appendChild(button);",

},

{
name:"SASS",
texto:"Con mi habilidad en Sass, destaco como un profesional altamente competente \
en el desarrollo web. Gracias a mi dominio de este preprocesador de CSS, puedo escribir \
estilos de manera más eficiente y organizada, aprovechando características como variables, \
anidamiento, mixins y funciones. Mi capacidad para modularizar y reutilizar estilos me \
permite mantener un código limpio y fácil de mantener en proyectos de cualquier tamaño. \
Además, mi experiencia con Sass me brinda la flexibilidad necesaria para adaptarme rápidamente \
a las necesidades cambiantes del diseño web, convirtiéndome en un recurso invaluable para equipos \
de desarrollo. En resumen, mi dominio de Sass no solo mejora mi productividad, sino que también \
eleva la calidad y coherencia de mis proyectos web, estableciéndome como un profesional experto \
en el ámbito del desarrollo frontend.",
titulo1:"Casacada de estiños en SASS",
contenido1:"// Definimos variables para colores \n\
$color-primario: #3498db; \n\
$color-secundario: #2ecc71; \n\
@mixin boton($color-fondo) { \n\
display: inline-block; \n\
padding: 10px 20px; \n\
border: none; \n\
border-radius: 5px; \n\
background-color: $color-fondo; \n\
color: white; \n\
text-decoration: none; \n\
transition: background-color 0.3s ease; \
&:hover { \n\
background-color: darken($color-fondo, 10%); \
} \n\
} \n\
// Estilos para un botón primario \n\
.boton-primario { \n\
@include boton($color-primario); \n\
} \n\
// Estilos para un botón secundario \n\
.boton-secundario { \n\
@include boton($color-secundario); \n\
}",
},
];

export default dataFicha