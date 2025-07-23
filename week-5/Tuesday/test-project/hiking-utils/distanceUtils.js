export function kmToMeters(km) {
    // Check if km is a number or can be converted to a number
    const numericKm = Number(km);

    if (isNaN(numericKm)) {
        console.error("km needs to be a valid number");
        return null; // or throw an error, depending on usage
    }

    if (numericKm <= 0) {
        console.error("km needs to be greater than 0");
        return null; // or handle as needed
    }

    // Correct conversion from kilometers to meters
    return numericKm * 1000;
}

// // Usage:
// console.log(kmToMeters("1"));   // Output: 1000
// console.log(kmToMeters("abc")); // Output: km needs to be a valid number, returns null

