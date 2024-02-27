import { Ship } from "../modules/ship";

describe('ship sunk', () => {
    it('ship length 3 no hits to not be sunk', () => {
        expect(Ship(3).isSunk()).toBe(false);
    });

    it('ship length 0 to be sunk', () => {
        expect(Ship(0).isSunk()).toBe(true);
    });

    it('ship length 2 hit 2 times to be sunk', () => {
        const ship = Ship(2);
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true);
    });
});
