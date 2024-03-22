// function multiplyBy5(num) {
//     return num * 5;
// }

// multiplyBy5.power = 2;

// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

// function createUser(userName, score) {
//     this.userName = userName;
//     this.score = score;
// }

// createUser.prototype.increment = function() {
//     this.score++;
// }

// createUser.prototype.printMe = function() {
//     console.log(`score is ${this.score}`);
// }

// const chai = new createUser('chai', 25);
// const tea = new createUser('chai', 250);

// console.log(chai);
// chai.printMe();

// let myName = 'Hitesh';
// console.log(myName.truelength);

// let myHeros = ['Thor', 'Spidy'];
// let heroPower = {
//     thor: "Hammer",
//     spidy: "sling",

//     getSpiderPower: function() {
//         console.log(`spidy power is ${this.spidy}`);
//     }
// }

// Object.prototype.hitesh = function() {
//     console.log("I'm Venegance");
// }
// console.log(heroPower);
// myHeros.hitesh();
// console.log(myHeros);

class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

class Person extends AgedPerson{
    name = 'Max';

    constructor() {
        super();
        this.age = 30;
    }

    greet() {
        console.log('HI, I am ' + this.name + ' &' + this.age + ' years old.');
    }
}



// function Person() {
//     this.name = 'Max';
//     this.age = 30;
//     this.greet = function() {
//         console.log('HI, I am ' + this.name + ' &' + this.age + ' years old.');
//     }
// }

// Person.prototype.printAge = function() {
//     console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.printAge();
// p.greet();
// console.log(p.__proto__);

// const p1 = new Person();
// const p2 = new Person();
// console.log(p1.__proto__ === p1.__proto__);

const course = {
    title: 'Javascript- A Complete Guide',
    rating: 5
};

// console.log(Object.getPrototypeOf(course));

Object.setPrototypeOf(course, {
    printRating: function() {
        console.log(`${this.rating}/5`);
    }
})

course.printRating();
console.log(course);
