// // const numbers = [1, 2, 3];
// // console.log(numbers);

// // const num1 = Array(5, 2);
// // console.log(num1);

// // const num2 = Array.of(1, 3);
// // console.log(num2);



// // const li = document.querySelectorAll('li');
// // console.log(li);

// // const num3 = Array.from(li);
// // console.log(num3);

// // const hobbies = ['Sports', 'Cooking'];
// // hobbies.push('Swimming');
// // hobbies.unshift('Coding');
// // hobbies.shift();


// // console.log(hobbies);

// // hobbies.splice(0, 0, 'Good Food');
// // console.log(hobbies);

// // const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// // const storedResult = testResults.concat([3.99, 2]);

// // console.log(storedResult);

// // const arr = [{name: 'Max'}, {name: 'Manuel'}];
// // const prices = [10.99, 5.99, 3.99, 6.59];
// // const tax = 0.19;
// // const taxAdjustedPrices = [];

// // prices.forEach((price, idx, prices) => {
// //     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
// //     taxAdjustedPrices.push(priceObj);
// // })

// // console.log(taxAdjustedPrices);

// const arr = [{name: 'Max'}, {name: 'Manuel'}];
// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)};
//     return priceObj;
// })

// const sortedPrices = prices.sort((a, b) => {
//     if(a > b) {
//         return 1;
//     } else if(a == b) {
//         return 0;
//     } else {
//         return -1;
//     } 
// })

// console.log(taxAdjustedPrices);
// console.log(sortedPrices);
// console.log(sortedPrices.reverse());

// const sumUp =  prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sumUp);

// const nameFragments = ['Max', 'Schwarz'];
// const name = nameFragments.join(' ');
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push('Mr.');
// console.log(nameFragments, copiedNameFragments);

// // const persons = [{name: 'Max', age: 30}, {name: 'Manuel', age: 32}];
// // const copiedPersons = persons.map();

// const nameData = ['Max', 'Schwarz', 'Mr', 30];
// const [firstName, lastName, ...info] = nameData;
// console.log(info);

const arr = [1, 20, 3, 41, 5, 210, 67, 35, 12];

const number = (arr.filter(c => c>5)).map(m => {return { num: m}}).reduce(
    (initialVal, currentVal) => {
        return initialVal * currentVal.num;
    }, 1
);
console.log(number);


