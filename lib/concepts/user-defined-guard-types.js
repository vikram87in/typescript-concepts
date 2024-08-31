"use strict";
function isSquare(shape) {
    return 'size' in shape;
    // return shape.size !== undefined;
}
function isRectangle(shape) {
    return 'width' in shape;
}
function calculateArea(shape) {
    if (isSquare(shape)) {
        return shape.size ** 2;
    }
    else if (isRectangle(shape)) {
        return shape.width * shape.legth;
    }
    const _exhaustiveCheck = shape;
    return _exhaustiveCheck;
}
const area1 = calculateArea({ size: 5 });
console.log(area1); // 25
const area2 = calculateArea({ width: 5, legth: 10 });
console.log(area2); // 50
