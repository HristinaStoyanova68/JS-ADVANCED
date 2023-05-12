function previousDay2(year, month, day) {

    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);

    let yy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    let output = `${yy}-${mm}-${dd}`;

    console.log(output);
}

previousDay2(2016, 9, 30);
console.log('................');
previousDay2(2015, 5, 10 );