/*------------------------------------------Constants------------------------------------------*/
const winOutcomes = [
    //winning combos down
    [0, 7, 14, 21], [7, 14, 21, 28], [14, 21, 28, 35], [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [2, 9, 16, 23],
    [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24], [10, 17, 24, 31], [17, 24, 31, 38], [4, 11, 18, 25], [11, 18, 25, 32],
    [18, 25, 32, 39], [5, 12, 19, 26], [12, 19, 26, 33], [19, 26, 33, 40], [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41],
    //winning combos across
    [0, 1, 2, 3], [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [7, 8, 9, 10], [8, 9, 10, 11], [9, 10, 11, 12], 
    [10, 11, 12, 13], [14, 15, 16, 17], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [21, 22, 23, 24], 
    [22, 23, 24, 25], [23, 24, 25, 26], [24, 25, 26, 27], [28, 29, 30, 31], [29, 30, 31, 32], [30, 31, 32, 33], 
    [31, 32, 33, 34], [35, 36, 37, 38], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41],
    //winning combos across
    [14, 22, 30, 38], [20, 26, 32, 38], [7, 15, 23, 31], [15, 23, 31, 39], [13, 19, 25, 31], [19, 25, 31, 37], [0, 8, 16, 24],
    [8, 16, 24, 32], [16, 24, 32, 40], [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36], [1, 9, 17, 25], [9, 17, 25, 33],
    [17, 25, 33, 41], [2, 10, 18, 26], [10, 18, 26, 34], [5, 11, 17, 23], [11, 17, 23, 29], [17, 23, 29, 35], [4, 10, 16, 22],
    [10, 16, 22, 28], [3, 9, 15, 21], [3, 11, 19, 27]
]

// let playerOneToken = document.body.style.backgroundColor = "#03FFBC"
// let playerTwoToken = document.body.style.backgroundColor = "#FF01E7"
/*------------------------------------------Variables------------------------------------------*/
let gameBoard, playerTurn, tie, theWinner

/*------------------------------------------Cached---------------------------------------------*/
const gameBoardEls = document.querySelector('.game-board')
const tileEls = document.querySelectorAll('.tile')
const displayMessage = document.getElementById('game-result')

/*------------------------------------------Event Listeners------------------------------------*/
gameBoardEls.addEventListener('click', handleClick)

/*------------------------------------------Functions------------------------------------------*/
start()

function start() {
    gameBoard = [
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null,
        null, null, null, null, null, null, null
    ]
    playerTurn = 1
    tie = false
    theWinner = false
    render()
    gameStartMessage()
}

function render() {
    gameBoardPlay()
    outcomeMessage()
}
function handleClick(evt) {
    const tileIdx = parseInt(evt.target.id)
    placeToken(tileIdx)
    tieGame()
    changeTurn()
    render()
}

function gameStartMessage() {
    gameBoard.forEach(function(slot) {
        if (slot === null) {
            displayMessage.textContent = "Click a column to begin"
        }
    })
}
function gameBoardPlay() {
    gameBoard.forEach(function(slot, idx) {
        if (slot === 1) {
            tileEls[idx] === `${playerTurn === 1? 'player1' : 'player2'}`
        }else if (slot === -1) {
            tileEls[idx] === `${playerTurn === 1? 'player1': 'player2'}`
        }else {
            tileEls[idx] === ""
        }
    })
}

//piece fills bottom of board up
//if column is selected filter through column to see which spot is available
//if spot is open fill spot by current player turn 

function placeToken(tileIdx) {
    console.log(tileIdx);
    for (let i = 7; i <= gameBoard.length; i++) {
        if (tileIdx % i === 0) {

        }
    }
    
}
// for (let i = 7; i <= gameBoard.length; i++) {
//     tileEls.forEach(function(idx) {
//         if (tileEls[idx] % i === 0) {
//             return tileEls[35] === `${playerTurn === 1? 'player1' : 'player2'}`
//         }else if (tileEls[35] !== null) {
//             return tileEls[28] === `${playerTurn === 1? 'player1' : 'player2'}`
//         }else if (tileEls[35] !== null && tileEls[28] !== null) {
//             return tileEls[21] === `${playerTurn === 1? 'player1' : 'player2'}`
//         }else if (tileEls[35] !== null && tileEls[28] !== null && tileEls[21] !== null) {
//             return tileEls[14] === `${playerTurn === 1? 'player1' : 'player2'}`
//         }else if (tileEls[35] !== null && tileEls[28] !== null && tileEls[21] !== null && tileEls[14] !== null) {
//             return tileEls[7] === `${playerTurn === 1? 'player1' : 'player2'}`
//         }else {
//             return tileEls[0]
//         }
//     })
// }

function outcomeMessage() {
    if (theWinner === false && tie === false) {
        displayMessage.textContent = `${playerTurn === 1? 'player1' : 'player2'} turn`
    }else if (theWinner === false && tie === true) {
        displayMessage.textContent = "It's a tie!"
    }else {
        displayMessage.textContent = `${playerTurn === -1? 'player1' : 'player2'} wins!`
    }
}

function changeTurn() {
    if (theWinner === true) {
        return
    }else {
        playerTurn = playerTurn * -1
    }
}

function tieGame() {
    tie = gameBoard.every(function(slot) {
        return slot !== null
    })
}
