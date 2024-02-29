export const Gameboard = () => {
    const board = createBoard();

    let maxHits = 0; // maximum amount of hits for all ships on board
    let successfulHits = 0;

    function placeShip(ship, coordinates, vertical) {
        const x = coordinates[0];
        const y = coordinates[1];

        maxHits += ship.getLength();

        for (let i = 0; i < ship.getLength(); i++) {
            if (vertical) {
                board[x][y + i].boardShip = ship;
            } else {
                board[x + i][y].boardShip = ship;
            }
        }
    }

    function receiveAttack(coordinates) {
        boardNode = board[coordinates[0]][coordinates[1]];

        if (boardNode.boardShip !== null) {
            boardNode.boardShip.hit();
            successfulHits++;
        }
        
        boardNode.attacked = true;

        if (successfulHits >= maxHits) {
            loseEvent();
        }
    }

    return { placeShip, receiveAttack };
}

const BoardNode = () => {
    let attacked = false;
    let boardShip = null;

    return { attacked, boardShip };
}

function createBoard() {
    const board = [];
    board.length = 10;

    for (let i = 0; i < board.length; i++) {
        board[i] = [];
        for (let j = 0; j < board.length; j++) {
            board[i][j] = BoardNode();
        }
    }
    return board;
}

function loseEvent() {
    console.log('you lose!')
    // make logic for losing
}