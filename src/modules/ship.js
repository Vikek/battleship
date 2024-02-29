export const Ship = (length) => {
    const shipLength = length;
    let numberOfHits = 0;
    let sunk = false;

    function hit() {
        numberOfHits++;
    }

    function isSunk() {
        if (numberOfHits >= shipLength) {
            sunk = true;
        }
        return sunk;
    }

    function getLength() { return shipLength; }

    return { hit, isSunk, getLength };
}