document.addEventListener('DOMContentLoaded',()=>{

    let squares =document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click',handleClick);
    })


})
var counterVal = 0;
function handleClick(event){


    let square =event.target;
    let position =square.id;

    if (handleMove(position)) {
        
        
        if (playerTime == 0){
            playerTime = "ALIENS";
        } else {
            playerTime = "HUMANOS";
        }
        setTimeout(() => {
            alert("O JOGO ACABOU E O VENCEDOR FORAM OS " + playerTime)
        }, 10)

    };
    updateSquares();

}

function updateSquares(){
    let squares =document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div`
        }
    })
}

function resetGame() {

    window.location.reload(); //da reload na janela não é isso que eu quero


//     let squares = document.querySelectorAll(".square");

//     squares.forEach((square) => {
//         let position = square.id;
//         let symbol = board[position];

//         if(symbol != ''){
//             square.innerHTML = ''; 
//         }
//         playerTime = 0;
//         gameOver = false;
//     });

}