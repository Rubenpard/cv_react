

const dataFichaBibliotecas = [

{
name:"Bootstrap",
texto:"Con mi experiencia en Bootstrap, tengo la capacidad de crear interfaces de usuario atractivas y \
responsivas de manera eficiente. Gracias a mi dominio de este popular framework de diseño frontend, puedo \
aprovechar sus componentes preestablecidos y su sistema de rejilla para construir rápidamente diseños \
consistentes y adaptables para sitios web y aplicaciones. Además, estoy familiarizado con las clases \
de utilidad de Bootstrap, lo que me permite personalizar fácilmente el aspecto y la funcionalidad de \
los elementos HTML sin necesidad de escribir mucho código personalizado. Mi habilidad para utilizar \
Bootstrap me permite acelerar el proceso de desarrollo y garantizar una experiencia de usuario coherente \
en diferentes dispositivos y tamaños de pantalla. En resumen, mi experiencia en Bootstrap me convierte \
en un desarrollador frontend eficaz y versátil, capaz de crear interfaces modernas y funcionales con \
facilidad y eficiencia.",
titulo1:"Ejemplo de pagina con Bootstrap",
contenido1:"<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\"> \n <a class=\"navbar-brand\" href=\"#\">\
Mi Sitio</a>\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\n\
\"collapse\" data-target=\"#navbarNav\"\
aria-controls=\"navbarNav\" \naria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\
<span class=\"navbar-toggler-icon\"></span>\n</button> \
<div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n<ul class=\"navbar-nav ml-auto\"> \n\
<li class=\"nav-item active\"> \n<a class=\"nav-link\" href=\"#\">\nInicio \n\
<span class=\"sr-only\">(current)</span></a>\n</li>\n\<li class=\"nav-item\">\n\
<a class=\"nav-link\" href=\"#\">Acerca de</a>\n</li>\n<li class=\"nav-item\">\n\
<a class=\"nav-link\" href=\"#\">Servicios</a>\n</li>\n<li class=\"nav-item\">\n\
<a class=\"nav-link\" href=\"#\">Contacto</a>\n</li>\n</ul>\n</div>\n</nav>",
titulo2:"",
contenido2:"",
path:""
}, 
{
  name:"Jquery",
  texto:"Con mi experiencia en jQuery, tengo la capacidad de crear interacciones dinámicas y mejorar \
  la funcionalidad de sitios web de manera eficiente. Gracias a mi dominio de esta biblioteca de JavaScript, \
  puedo manipular fácilmente el DOM, responder a eventos del usuario y realizar animaciones y efectos \
  visuales de forma rápida y sencilla. Además, estoy familiarizado con las numerosas funciones y métodos \
  proporcionados por jQuery, lo que me permite desarrollar aplicaciones web interactivas con menos código \
  y en menos tiempo. Mi habilidad para utilizar jQuery me permite mejorar la experiencia del usuario y añadir \
  funcionalidades avanzadas a los sitios web de una manera intuitiva y accesible. En resumen, mi experiencia \
  en jQuery me convierte en un desarrollador frontend versátil y eficaz, capaz de crear sitios web modernos \
  y dinámicos con facilidad y eficiencia.",
  titulo1:"Cambio de color de borton con jQuery",
  contenido1:"<head> \n\
  <script src=\"https://code.jquery.com/jquery-3.6.0.min.js\">\n</script>\n\
</head>\n\
<body>\n\
<div id=\"miDiv\" style=\"width: 200px; \nheight: 200px; background-color: lightgray;\"></div> \n\
<button id=\"cambiarColorBtn\">Cambiar Color</button>\n\
<script>\n\
  $(document).ready(function(){\n\
    // Escuchamos el evento de clic en el botón\n\
    $(\"#cambiarColorBtn\").click(function(){\n\
      // Cambiamos el color de fondo del div a rojo\n\
      $(\"#miDiv\").css(\"background-color\", \"red\");\n\
    });\n\
  });\n\
</script>",
},

];

export default dataFichaBibliotecas