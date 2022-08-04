document.addEventListener('DOMContentLoaded',() =>{

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function handleClick(event){

    let square = event.target
    let position = square.id

    if(handleMove(position)){

        setTimeout( () =>{
            alert(`O jogo acabou - O jogador ${playerTime+1} foi o vencedor!`)
        }, 10)

    }
    updateSquare(position)

}

let button = document.getElementsByTagName('button')[0]

button.addEventListener('click', () =>{

    board = ['','','','','','','','','']
    playerTime = 0
    gameOver = false
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.innerHTML = ''
    })

})


