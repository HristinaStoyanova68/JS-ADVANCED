// const obj = {
//     name: 'Peter',
//     outer() {
//         console.log(this);
//         const inner = () => console.log(this);
//         inner();
//     }
// };

// obj.outer();

// function solution(number) {
//     function add(a, b) {
//         return a + b;
//     }
//     console.log(add); 
//     //console.log(this);
//     console.log(add.bind(this, number)); 
// }
// solution(5);

// let add5 = solution(5);
// console.log(add5(2));
// console.log(add5(3));


function add(a, b) {
    console.log(a + b);
}
add(5, 2);