let main = document.querySelector('main');
let h2 = document.querySelector('.subtitulo');
let a = document.getElementById('a');
const p = document.querySelectorAll('p');

main.style.display = 'block'

const name = window.prompt('Ingrese su nombre');

if (name) {
    h2.innerText += ' ' + name 
} else {
    h2.innerText += ' Invitado'
}

h2.style.textTransform = 'uppercase'

a.style.color = '#E5183E'

const confirm = window.confirm('Desea cambiar el fondo?');

if (confirm) {
    document.querySelector('body').classList.add('fondo')
}

for (let i = 0; i < p.length; i++) {
    if (i % 2 === 0) {
        p[i].classList.add('destacadoPar')
    } else {
        p[i].classList.add('destacadoImpar')
    }
}