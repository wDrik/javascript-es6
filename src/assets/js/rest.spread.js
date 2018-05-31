console.log('-------> Rest');

const user = {
    name: 'Iorgen',
    age: 25,
    company: 'IWS',
};

const { name, ...leftover } = user;
console.log(name);
console.log(leftover);

const arr = [1, 2, 3, 4, 5];
const [ a, b, ...c ] = arr;
console.log(a);
console.log(b);
console.log(c);

function calc(a, b, ...params) {
    return params;
}
console.log(calc(1, 3, 5, 6, 8));

console.log('-------> Spread');
const arr1 = [1, 2, 3,];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user1 = {
    name: 'Iorgen',
    age: 25,
    company: 'IWS',
}
console.log(user1);

const user2 = {
    ...user1,
    name: 'Gabriela',
}
console.log(user2);
