function Square(length) {
    this.length = length;
}

Square.prototype.getArea = function () {
    return this.length ** 2;
};

Square.prototype.getCircumference = function () {
    return this.length * 4;
};

module.exports = Square;