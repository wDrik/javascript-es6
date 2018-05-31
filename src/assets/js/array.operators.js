const arr = [1, 2, 4, 5, 8, 10];

const mapArr = arr.map(function (item, index) {
    return item + index;
});
console.log(mapArr);

const reduceArr = arr.reduce(function (total, next) {
    return total + next;
});
console.log(reduceArr);

const filterArr = arr.filter(function (item) {
    return item % 2 === 0;
});
console.log(filterArr);

const findArr = arr.find(function (item) {
    return item === 4;
});
console.log(findArr);
