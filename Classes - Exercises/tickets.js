function tickets(arr, criteria) {

    class Ticket {
        constructor(destination, price, s) {
            this.destination = destination;
            this.price = Number(price);
            this.status = s;
        }
    }

    return arr.map(x => x.split('|'))
        .map(([destination, price, s]) => new Ticket(destination, price, s))
        .sort((a, b) => {
            if (typeof a[criteria] === 'number') {
               return a[criteria] - b[criteria];
            } else {
               return a[criteria].localeCompare(b[criteria]);
            }
        });
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));
    console.log('                   ');
    console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
   'status'
   ));
