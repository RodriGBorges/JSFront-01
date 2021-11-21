console.log('Se vinculó correctamente');

const body = document.querySelector('body')
const h1 = document.querySelector('h1')

const response = confirm('¿Desea activar el modo oscuro?')

if (response == true) {
    body.style.backgroundColor = '#7f7f7f'

    body.classList.add('fondoMoviesList')

}


h1.innerHTML = "LISTADO DE PELICULAS"

h1.style.backgroundColor = 'teal'
h1.style.color = 'white'
h1.style.padding = '20px'