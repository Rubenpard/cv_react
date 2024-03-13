

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

{
name:"PHP",
texto:"Con mi experiencia en PHP, puedo crear aplicaciones web dinámicas y funcionales, desde sitios \
simples hasta plataformas complejas. Conozco los fundamentos como variables, arrays y bucles, y estoy \
familiarizado con frameworks populares como Laravel. Puedo integrar PHP con bases de datos y otras \
tecnologías web. En resumen, soy un desarrollador versátil y competente en el mundo del desarrollo \
web gracias a mi dominio de PHP.",
titulo1:"Imprimir mensaje en PHP",
contenido1:"<h1\><?php echo \"¡Hola, mundo!\"; \?\><\/h1\\>"
},

{
name:"Angular",
texto:"Con mi experiencia en Angular, destaco como un desarrollador capacitado para crear aplicaciones \
web dinámicas y de alta calidad. Gracias a mi dominio de este framework de desarrollo frontend, puedo \
construir interfaces de usuario modernas y receptivas de manera eficiente. Mis habilidades incluyen la \
creación de componentes reutilizables, el enrutamiento de páginas, la gestión del estado de la aplicación \
y la integración con servicios backend mediante solicitudes HTTP. Además, estoy familiarizado con conceptos \
avanzados de Angular, como la inyección de dependencias, la creación de directivas personalizadas y el uso \
de observables para manejar flujos de datos asíncronos. Mi experiencia en Angular me permite desarrollar \
aplicaciones escalables y mantenibles que cumplen con los estándares de la industria y ofrecen una \
experiencia de usuario excepcional. En resumen, soy un profesional competente y versátil en el desarrollo \
frontend gracias a mi experiencia con Angular.",
titulo1:"Componente Lista",
contenido1:"\\\\Creamos el comonente mediante consola\n\
ng generate component task-list \n\
\\\\En el componente agregamos una lista y un boton de agregar \n\
<h2>Lista de tareas</h2> \n\
<\ ul\><li *ngFor=\"let task of tasks\">{{ task }}</li><\/ul> \n\
<form (submit)=\"addTask()\">\n<input type=\"text\" [(ngModel)]=\"newTask\" \nplaceholder=\"Nueva tarea\"> \n\
<button type=\"submit\">Agregar tarea</button> \
</form>\n \\\\En el archivo task-list.component.ts,\n\ agregamos la lógica para agregar y eliminar tarea \n\
import { Component } from '@angular/core'; \n\
@Component({selector: 'app-task-list', \n\
templateUrl: './task-list.component.html', \n\
styleUrls: ['./task-list.component.css'] \n\
})\n\ export class TaskListComponent {\n\
tasks: string[] = ['Tarea 1', 'Tarea 2', 'Tarea 3']; \n\
newTask: string = ''; \n\
addTask() {\n\
if (this.newTask.trim() !== '') { \n\
this.tasks.push(this.newTask); \n\
this.newTask = '';\n\}\n\}\n\}",
},
{
name:"React",
texto:"Con mi experiencia en React, soy capaz de crear interfaces de usuario dinámicas y escalables \
para aplicaciones web modernas. Como desarrollador, puedo construir componentes reutilizables y \
estructurarlos en una arquitectura coherente utilizando el enfoque basado en componentes de React. \
Mi dominio de conceptos fundamentales como el estado local, las props, el ciclo de vida de los \
componentes y el enlace de datos me permite desarrollar aplicaciones robustas y de alto rendimiento. \
Además, estoy familiarizado con el ecosistema de herramientas de React, como React Router para el \
enrutamiento, Redux para la gestión del estado global y axios para realizar solicitudes HTTP. \
Gracias a mi experiencia en React, puedo crear experiencias de usuario fluidas y receptivas que \
satisfacen las necesidades de los usuarios y cumplen con los estándares de la industria. En resumen, \
soy un desarrollador competente y versátil en el desarrollo frontend gracias a mi experiencia con React.",
titulo1:"Componente Lista",
contenido1:"import React, { useState } from 'react';\n function App() { \n const [tasks, setTasks] = \
useState([]);\n\const [newTask, setNewTask] = useState('');\n const handleAddTask = () => { \n\
if (newTask.trim() !== '') {\n setTasks([...tasks, newTask]); setNewTask('');\n}\n }; \
return ( \n <div> \n <h1>Lista de tareas</h1> \n<ul> \n {tasks.map((task, index) => (\n\
<li key={index}>{task}</li>\n))}\n</ul>\n<input type=\"text\"value={newTask} \n\
onChange={(e) => setNewTask(e.target.value)}\nplaceholder=\"Nueva tarea\"/> \n\
<button onClick={handleAddTask}>Agregar tarea</button></div>);}. \n\
export default App;",
},

];

export default dataFicha