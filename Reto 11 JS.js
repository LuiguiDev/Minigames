var señales = ['Piedra', 'Papel', 'Tijera']
var usuario
var CPU = señales [Math.floor(Math.random() * 3)]

var juego = function (usuario, CPU){
    switch (true){
        case (usuario == 'Piedra' && CPU == 'Tijera'):
            console.log('CPU pone: ' + CPU)
            console.log('¡Ganaste!')
            break
        case (usuario == 'Papel' && CPU == 'Piedra'):
            console.log('CPU pone: ' + CPU)
            console.log('Ganaste')
            break
        case (usuario == 'Tijera' && CPU == 'Papel'):
            console.log('CPU pone ' + CPU)
            console.log('Ganaste')
            break
        case (usuario == CPU):
            console.log('CPU pone ' + CPU)
            console.log('Es un empate')
            break
        default:
            console.log('CPU pone ' + CPU)
            console.log('Perdiste')
    }
}