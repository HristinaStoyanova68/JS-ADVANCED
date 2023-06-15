class Rectangle {
    constructor(width, height, color) {
        this._width = width;
        this._height = height;
        this._color = color;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get color() {
        return this._color
    }

    calcArea() {
        return this._width * this._height;
    }
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect);
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
