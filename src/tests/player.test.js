import { Player } from "../modules/player";
import { Ship } from "../modules/ship";

describe('player ship adding', () => {
    const player = Player('player1');
    const destroyer = Ship(2)
    const battleship = Ship(4);
    const testFleet = [destroyer, battleship];
    it('player addShip function working', () => {
        player.addShip(destroyer);
        player.addShip(battleship);
        expect(player.shipFleet).toEqual(testFleet);
    });
});