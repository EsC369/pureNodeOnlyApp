/*
    // Module Wrapper Function:  - Basically this is wrapper around all of the code below
    (function (exports, require, module, __filename, __dirname) {

    })
*/

console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;

// const person = require("./person");

// console.log(person.name);