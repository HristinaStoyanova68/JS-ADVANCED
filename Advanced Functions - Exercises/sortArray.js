function sortingArr(arr, typeOfSorting) {

    const dict = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a,
    };

    const result = arr.sort(dict[typeOfSorting]);

    return result;

}

sortingArr([14, 7, 17, 6, 8], 'asc');
sortingArr([14, 7, 17, 6, 8], 'desc');