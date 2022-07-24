const turnon = document.getElementById('turnon')
const turnoff = document.getElementById('turnoff')
const lamp = document.getElementById('lamp')

function islampbroquen () {
    return lamp.src.indexOf ('quebrada') > -1
}
function lampon () {
    if (!islampbroquen ())
    lamp.src = './img/ligada.jpg'
}
function lampoff () {
    if (!islampbroquen ())
    lamp.src = './img/desligada.jpg'
}
function lampbroquen () {
    lamp.src = './img/quebrada.jpg'
}


turnon.addEventListener('click', lampon)
turnoff.addEventListener('click', lampoff)
lamp.addEventListener('mouseover', lampon)
lamp.addEventListener('mouseleave', lampoff)
lamp.addEventListener('dblclick', lampbroquen)
