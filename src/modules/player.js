export const Player = (nameInput) => {
    const name = nameInput;

    const shipFleet = [];

    function addShip(ship) {
        shipFleet.push(ship);
    }

    return { addShip, shipFleet, name };
}