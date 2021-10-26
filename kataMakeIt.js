const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // TODO
    if (fuelLeft * mpg >= distanceToPump) {
        return true;
    } else {
        return false;
    }
};

console.log(zeroFuel(50, 25, 2)); // Return True
console.log(zeroFuel(100, 50, 1)); // Return True
