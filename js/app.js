/*------------------------------------------Constants------------------------------------------*/
const winOutcomes = [
    //winning combos down
    [1, 8, 15, 22], [8, 15, 22, 29], [15, 22, 29, 36], [2, 9, 16, 23], [9, 16, 23, 30], [16, 23, 30, 37], [3, 10, 17, 24],
    [10, 17, 24, 31], [17, 24, 31, 38], [4, 11, 18, 25], [11, 18, 25, 32], [18, 25, 32, 39], [5, 12, 19, 26], [12, 19, 26, 33],
    [19, 26, 33, 40], [6, 13, 20, 27], [13, 20, 27, 34], [20, 27, 34, 41], [7, 14, 21, 28], [14, 21, 28, 35], [21, 28, 35, 42],
    //winning combos across
    [1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7], [8, 9, 10, 11], [9, 10, 11, 12], [10, 11, 12, 13], 
    [11, 12, 13, 14], [15, 16, 17, 18], [16, 17, 18, 19], [17, 18, 19, 20], [18, 19, 20, 21], [22, 23, 24, 25], 
    [23, 24, 25, 26], [24, 25, 26, 27], [25, 26, 27, 28], [29, 30, 31, 32], [30, 31, 32, 33], [31, 32, 33, 34], 
    [32, 33, 34, 35], [36, 37, 38, 39], [37, 38, 39, 40], [38, 39, 40, 41], [39, 40, 41, 42],
    //winning combos across
    [15, 23, 31, 39], [21, 27, 33, 39], [8, 16, 24, 32], [16, 24, 32, 40], [14, 20, 26, 32], [20, 26, 32, 38], [1, 9, 17, 25],
    [9, 17, 25, 33], [17, 25, 33, 41], [7, 13, 19, 25], [13, 19, 25, 31], [19, 25, 31, 37], [2, 10, 18, 26], [10, 18, 26, 34],
    [18, 26, 34, 42], [3, 11, 19, 27], [11, 19, 27, 35], [6, 12, 18, 24], [12, 18, 24, 30], [18, 24, 30, 36], [5, 11, 17, 23],
    [11, 17, 23, 29], [4, 10, 16, 22], [4, 12, 20, 28]
]

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
        null, null, null, null, null, null, null,
    ]
    playerTurn = 1
    tie= false
    theWinner = false
    render()
}

function render() {
    gameBoardPlay()
    outcomeMessage()
    // gameStartMessage()
}

function gameBoardPlay() {
    gameBoard.forEach(function(slot, idx) {
        if (slot === 1) {
            return tileEls[idx].innerHTML = "player1"
        }else if (slot === -1) {
            return tileEls[idx].innerHTML = "player2"
        }else {
            return tileEls[idx].innerHTML = ""
        }
    })
}

function handleClick(evt) {
    const boardIdx = evt.target.id

    if (theWinner === true) {
        return
    }
    if (gameBoard[boardIdx]) {
        return
    }
    gameTokens(boardIdx)
    changeTurn()
    render()
}

function gameStartMessage() {
    let startMessage = gameBoard.forEach(function(slot) {
        if (slot === null) {
            displayMessage.textContent = "Click a tiki to begin"
        }
    })
    return startMessage
}

function outcomeMessage() {
    let startMessage = gameBoard.forEach(function(slot) {
        if (slot === null) {
            displayMessage.textContent = "Click a tiki to begin"
        }
     if (theWinner === false && tie === false) {
            displayMessage.textContent = `Player ${playerTurn === 1? 'Player1' : 'Player2'} turn`
        }else if (theWinner === false && tie === true) {
            displayMessage.textContent = "It's a tie"
        }else {
            displayMessage.textContent = `Player ${playerTurn === -1? 'Player1' : 'Player2'} wins!`
        }
    })
    return startMessage
}

function changeTurn() {
    if (theWinner === true) {
        return 
    }else {
        playerTurn = playerTurn * -1
    }
}

function gameTokens(idx) {
    gameBoard[idx] = playerTurn
    console.log(gameBoard);
}

