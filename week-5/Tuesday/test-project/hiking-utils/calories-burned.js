export function caloriesBurned(weightInKg, distanceInKm) {
    const weight = Number(weightInKg);
    const distance = Number(distanceInKm);

    if (isNaN(weight) || isNaN(distance)) {
        console.error("weightInKg or distanceInKm need to be with value");
        return null;
    }
    if (weight <= 0 || distance <= 0) {
        console.error("weightInKg or distanceInKm need to be a positive value");
        return null;
    }
    return weightInKg * distanceInKm * 1.036;
}
