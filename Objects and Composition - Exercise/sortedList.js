function createSortedList() {

    const instance = {

        numbersList: [],
        size: 0,

        //methods
        add: function (element) {
            this.numbersList.push(element);
            this.numbersList.sort(this._comparer);
            this.size += 1;

            return instance;
        },

        remove: function (index) {
            this._validate(index);
            this.numbersList.splice(index, 1);
            this.size -= 1;

            return instance;
        },

        //helper methods
        get: function (index) {
            this._validate(index);

            return this.numbersList[index];
        },

        _validate: function (index) {
            if (index < 0 || index >= this.numbersList.length) {
                throw new Error('Index is out of bounds');
            }
        },

        _comparer: function (a, b) {
            return a - b;
        },
    };

    return instance;
}

let list = createSortedList();
list.add(5);
list.add(6); list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));

