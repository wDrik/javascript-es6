console.log('-------> Arrow Function');

const arr = [1, 3, 4, 5, 6];

// const mapArr = arr.map(function (item, index) {
//     return item + index;
// });
// console.log(mapArr);

const mapArr = arr.map(item => item * 2 );
console.log(mapArr);

const showName = () => {
    return {
        name: 'Iorgen'
    };
}
console.log(showName());
// OR
const showNameInline = () => ({ name: 'Iorgen' });

console.log(showNameInline());

// Default values for parameters
const calc = (a = 3, b = 6) => a + b;
console.log(calc()); 
