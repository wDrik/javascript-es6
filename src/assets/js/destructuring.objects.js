console.log('-------> Destructuring of objects');

const user = {
    name: 'Iorgen',
    age: 25,
    address: {
        city: 'Sumaré',
        state: 'SP'
    }
};

// const { name, age, address: { city } } = user;
// console.log(name);
// console.log(age);
// console.log(city);

function showNameAndAge({ name, age }) {
    console.log(name, age);
}

showNameAndAge(user);
