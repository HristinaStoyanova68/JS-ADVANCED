class Stringer {
    constructor(str, length) {
        this.innerString = str;
        this.innerLength = length;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        const result = this.innerLength - value;
        this.innerLength = result < 0 ? 0 : result;
    }

    toString() {
        const LESS_THAN_INITIAL_VALUE = '...';

        if (this.innerLength === 0) {
            return LESS_THAN_INITIAL_VALUE;
        }

        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}${LESS_THAN_INITIAL_VALUE}`;
        }

        return this.innerString;
    }
}

const test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
