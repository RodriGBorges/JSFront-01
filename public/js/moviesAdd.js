console.log("Se vinculó correctamente");

const qs = (e) => document.querySelector(e)

const h1 = qs('h1')
const section = qs('section')
const article = qs('article')

h1.innerHTML = "AGREGAR PELÍCULAS"

h1.classList.add('titulo')

article.classList.add('fondoTransparente')

section.classList.add('fondoCRUD')