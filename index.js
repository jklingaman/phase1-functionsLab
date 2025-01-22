function distanceFromHqInBlocks(block) {
    if (block >= 42) {
        return block - 42;
    } else {
        return 42 - block;
    } 
}
function distanceFromHqInFeet(block) {
    const  feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(block);
    return blocks * feetPerBlock
}
function distanceTravelledInFeet (num1, num2) {
    let  tripTotal;
    if (num1 > num2) {
        tripTotal = num1 - num2;
    } else {
        tripTotal = num2 - num1
    }

    const footPerBlock = 264;

    return tripTotal * footPerBlock;
}
function calculatesFarePrice(start, destination) {
    const travlerBadge = distanceTravelledInFeet(start, destination);
    const mediumDistance = (travlerBadge - 400) * 0.02;
    if (travlerBadge <= 400) {
        return 0;
    } else if (travlerBadge > 400 && travlerBadge <= 2000) {
        return mediumDistance;
    } else if (travlerBadge > 2000 && travlerBadge < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}