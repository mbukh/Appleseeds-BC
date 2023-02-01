function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

Square.prototype.isSquare = function (a, b, c, d) {
    return (
        this.a === this.b &&
        this.b === this.c &&
        this.c === this.d &&
        this.d === this.a
    );
};

const sq = new Square(1, 2, 2, 2);
console.log(sq.isSquare());

const sq2 = new Square(1, 1, 1, 1);
console.log(sq2.isSquare());
