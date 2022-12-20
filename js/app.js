/*------------------------------------------Constants------------------------------------------*/
const row1 = [tileEls[0], tileEls[1], tileEls[2], tileEls[3], tileEls[4], tileEls[5], tileEls[6]]
const row2 = [tileEls[7], tileEls[8], tileEls[9], tileEls[10], tileEls[11], tileEls[12], tileEls[13]]
const row3 = [tileEls[14], tileEls[15], tileEls[16], tileEls[17], tileEls[18], tileEls[19], tileEls[20]]
const row4 = [tileEls[21], tileEls[22], tileEls[23], tileEls[24], tileEls[25], tileEls[26], tileEls[27]]
const row5 = [tileEls[28], tileEls[29], tileEls[30], tileEls[31], tileEls[32], tileEls[33], tileEls[34]]
const row6 = [tileEls[35], tileEls[36], tileEls[37], tileEls[38], tileEls[39], tileEls[40], tileEls[41]]

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
const slotEls = document.querySelectorAll('.tile')
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
    const slotIdx = parseInt(evt.target.id)

    if (gameBoard[slotIdx]) return

    placeToken(slotIdx)
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
            return slotEls[idx].style.backgroundColor = "#03FFBC"
        }else if (slot === -1) {
            return slotEls[idx].style.backgroundColor = "#FF01E7"
        }else {
            return slotEls[idx].style.backgroundColor = "FFFFFF"
        }
    })
}

//piece fills bottom of board up
//if column is selected filter through column to see which spot is available
//if spot is open fill spot by current player turn 

function placeToken(slotIdx) {
    gameBoard[slotIdx] = playerTurn
}

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
