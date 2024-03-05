import { Gameboard } from "../modules/gameboard";
import { Ship } from "../modules/ship";

describe('gameboard functionality', () => {
    const testBoard = Gameboard();

    it('board does not have ships on start', () => {
        for (let i = 0; i < testBoard.board.length; i++) {
            for (let j = 0; j < testBoard.board.length; j++) {
                expect(testBoard.board[i][j].boardShip).toBe(null);
            }
        }
    });

    it('board placeShip function working', () => {
        const cruiser = Ship(3);
        const coordinates = [0, 1];
        const vertical = true;

        testBoard.placeShip(cruiser, coordinates, vertical);
        expect(testBoard.board[0][1].boardShip).toBe(cruiser);
    });

    it('board receiveAttack function working', () => {
        const coordinates = [0, 2];
        testBoard.receiveAttack(coordinates);
        expect(testBoard.board[0][2].attacked).toBe(true);
    });
});