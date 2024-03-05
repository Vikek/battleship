export const Player = (name) => {
    const name = name;

    const shipFleet = [];

    function addShip(ship) {
        shipFleet.push(ship);
    }

    return { addShip, shipFleet, name };
}