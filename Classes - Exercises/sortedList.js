class List {

    constructor() {
        this.list = [];
        this.size = 0;
    }
    //helper methods
    updateSize() {
        this.size = this.list.length;
    }

    orderList() {
        this.list.sort((a, b) => a - b);
    }

    //main function
    add(number) {
        this.list.push(number);
        this.updateSize();
        this.orderList();
    };

    remove(index) {

        if (this.list[index] === undefined) {
            return;
        }

        this.list.splice(index, 1);
        this.updateSize();
        this.orderList();

    };

    get(index) {

        if (this.list[index] === undefined) {
            return;
        }
        return this.list[index];
    };
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
