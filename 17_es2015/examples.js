'use strict';
const log = console.log.bind(console);
// node --harmony examples.js

// LET
// {
// var variable = 5;
//
// {
//   log('inside', variable); // error
//   let variable = 10;
// }
//
// log('outside', variable); // 5
// }

// CONST
// const variable = 5;
// variable = variable*2; // error

// STRING TEMPLATES
// const world = 'World';
// const str = `Hello ${world + '!'}`;
//
// const multiline = `
// Sir, in my heart there was a kind of fighting
// That would not let me sleep. Methought I lay
// `;
//
// log(str);
// log(multiline);

// DESTRUCTURING
// let arr = [1, 2, 3, 4];
// let [a, b, c] = arr;
//
// log(arr, a, b, c); // 1, 2, 3
//
//
// const obj = {e: 1, f: 2, g: 3};
// const {e, f, h} = obj;
//
// log(e, f, g); // error

// SPREAD
// let [head, ...tail] = [1,2,3,4,5];
//
// log(head, tail); // 1, [2, 3, 4, 5]
//
// // not es2015
// // let {a, ...rest} = {a: 1, b: 2, c: 3};

// ARROWS
// let arr = [1,2,3,4].reduce((n, mem) => mem + n);
// log(arr); // 10

// FUNCTION PARAMETERS
// function sum (a = 0, b = 0) {
//   return a + b;
// }
//
// log(sum(2)); // 2
//
// function sum (...vals) {
//   // better than arguments!
//   return vals.reduce((mem, n) => mem + n, 0);
// }
// log(sum(1, 2, 3, 4)); // 10
//
// function rectArea ({ width = 5, height = 5 } = {}) {
//   return width * height;
// }
// log(rectArea({height: 30})); // 150

// CLASSES
class Animal {
  constructor (name, legs) {
    this.name = name;
    this.legs = legs;
  }

  describe () {
    return `${this.name} has ${this.legs} legs`;
  }
}

class Cat extends Animal {
  constructor (name) {
    super(name, 4);
  }

  describe () {
    return `${super.describe()} and says meow`;
  }
}

let cat = new Cat('Tom');
log(cat.describe()); // Tom has 4 legs and says meow

// GETTERS/SETTERS
// const someGuy = {
//   get status () {
//     return this.isMarried ? 'married' : 'single';
//   },
//   set name (name) {
//     if (!name) throw new Error('Need a name');
//     this._name = wateva
//   }
// }
//
// log(someGuy.status); // 'single'
// log(someGuy.name = null); // Error: Need a name
