# minibiblio-js-dom

Ejercicio con arrays, objetos, manejo del DOM

Dado el siguiente array de objetos, pintar en el DOM tarjetas con los detalles de los siguientes libros. 
    - Maquetación HTML + CSS. Respetar semántica HTML5
    - Mobile first. Usar Flexbox para las tarjetas y media queries. 
    - Subir a GitHub el proyecto
    - Podéis implementar las dos fases en el mismo proyecto

Para generar las tarjetas (Hay que hacerlo de las 2 formas):

Fase 1
Utilizar métodos de manejo del DOM
    - innerHTML
    - appendChild()
    - createElement()
    - createAttribute()
    - createTextNode()

Fase 2
Utilizar template string
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://www.w3schools.com/js/js_string_templates.asp

Ejemplo template string: 
https://wesbos.com/template-strings-html

const person = {
name: 'Wes',
job: 'Web Developer',
city: 'Hamilton',
bio: 'Wes is a really cool guy that loves to teach web development!'
}
// And then create our markup:
const markup = `
<div class="person">
<h2>
${person.name}
</h2>
<p class="location">${person.city}</p>
<p class="bio">${person.bio}</p>
</div>
`;
