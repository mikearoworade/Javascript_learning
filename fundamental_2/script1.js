'use strict'

function logger() {
    console.log("My name is Michael");
}

// Calling / running / invoking function
logger();

// A function receive and return back data. apples and oranges are variables
function fruitProcessor(apples, oranges) { //apples and oranges are parameters.
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; // return variable 'juice'
}

// The actual value passes. i.e. 5, 2 are arguments
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

const appleOrangleJuice = fruitProcessor(3, 4);
console.log(appleOrangleJuice);

// Function Declarations vs. Expressions
// Function declaration
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge1(1996);
  
// Function expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age1, age2);

// Arrow functions
const calcAge3 = birthYear => 2024 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1994, 'Samuel')); 
console.log(yearsUntilRetirement(1996, 'Michael'));
console.log(yearsUntilRetirement(1999, 'Joel'));


// Functions Calling Other Functions
function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor1 (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice; // return variable 'juice'
}

console.log(fruitProcessor1(2, 3));


// Introduction to Arrays
// Arrays and Objects are examples of data structures
const friend1 = 'Fuad';
const friend2 = 'Emmanuel';
const friend3 = 'Olayinka';

// Creating an array
const friends = ['Fuad', 'Emmanuel', 'Olayinka']; // Using Literal syntax
console.log(friends);

const years = new Array(1989, 1994, 1996, 1999); // USing the new keyboard

// Accessing Array element. Arrays are zero based..
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

// length of items in array.
console.log(friends.length);
// last element of an array. RECALL: Expression produces values.
console.log(friends[friends.length - 1]);

// Mutatating array element.. Only primitive values are immutable. Hence, we are able to mutate array because it isn't primitive.
friends[2] = 'Ediomo';
console.log(friends);
// friends = ['Dapo', 'Bright'] -- this is not allowed(Assign to const var)

// Array can hold values with different types
const first_Name = 'Michael';
const mike = [first_Name, 'Aroworade', 2024 - 1996, 'Techie', friends];
console.log(mike);
console.log(mike.length);

// Basic Array Operations (Methods)
const friends1 = ['Emmanuel', 'Ediomo', 'Fuad'];

// Add elements with push: adds element to end of array
const newLength = friends1.push('Olayinka');
console.log(friends1);
console.log(newLength);

// Add element to the beginning of an array
friends1.unshift('Cuby');
console.log(friends);

// Remove elements from an array. pop removes last. shift removes first.
friends1.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends1);

friends1.shift(); // First
console.log(friends1);

// CHeck index of an element
console.log(friends1.indexOf('Ediomo'));
console.log(friends1.indexOf('Fuad'));

// includes(ES6) - returns true of false if an element exist in an array
console.log(friends1.includes('Emmanuel'));
console.log(friends1.includes('Philip'));

if (friends1.includes('Ediomo')) {
  console.log('You have a friend called Ediomo');
}

// Introduction to Objects
const mikeArray = [
    'Michael',
    'Aroworade',
    2024 - 1996,
    'Software Engineer',
    ['Fuad', 'Emmanuel', 'Olayinka']
];
  
const mikeObject = {
    firstName: 'Michael',
    lastName: 'Aroworade',
    age: 2037 - 1996,
    job: 'Software Engineer',
    friends: ['Fuad', 'Emmanuel', 'Olayinka']
};

// Dots vs. Bracket Notation
console.log(mikeObject);

console.log(mikeObject.firstName);
console.log(mikeObject['firstName']);

// In square bracket, we can put any expression.
const nameKey = 'Name';
console.log(mikeObject['first' + nameKey]);
console.log(mikeObject['last' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// Assuming we got this from prompt
const interestedIn = "job";

if (mikeObject[interestedIn]) {
  console.log(mikeObject[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

// Add item in object
mikeObject.location = 'Nigeria';
mikeObject['twitter'] = '@mikearoworade';
console.log(mikeObject);

// Object Methods
const michael = {
    firstName: 'Michael',
    lastName: 'Aroworade',
    birthYear: 1996,
    job: 'Software Engineer',
    friends: ['Fuad', 'Emmanuel', 'Olayinka'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2024 - birthYear
    // }
    calcAge: function () {
        console.log(this);
        this.age = 2024 - this.birthYear; // We just created "michael.age"
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${michael.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
      }
};

console.log(michael.calcAge())
// console.log(michael['calcAge']());
console.log(michael.age);
console.log(michael.getSummary());


// Iteration: The for Loop
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

// Array, Break, Continue
const michaelArray = [
    'Michael',
    'Aroworade',
    2024 - 1996,
    'Software Engineer',
    ['Fuad', 'Emmanuel', 'Olayinka'],
    true
];

const types = [];
// console.log(michaelArray[0])
// console.log(michaelArray[1])
// ...
// console.log(michaelArray[4])
// jonas[5] does NOT exist
for (let i = 0; i < michaelArray.length; i++) {
    // Reading from michaelArray array
    console.log(michaelArray[i], typeof michaelArray[i]);
  
    // Filling types array
    // types[i] = typeof michaelArray[i];
    types.push(typeof michaelArray[i]);
}
console.log(types);

const yearsArray = [1989, 1994, 1996, 1999];
const agesArray = [];
for (let i = 0; i < yearsArray.length; i++) {
    agesArray.push(2024 - yearsArray[i]);
}
console.log(agesArray);

// continue and break
console.log('--- CONTINUE: ONLY STRINGS ---')
for (let i = 0; i < michaelArray.length; i++) {
  if (typeof michaelArray[i] !== 'string') continue;

  console.log(michaelArray[i], typeof michaelArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < michaelArray.length; i++) {
  if (typeof michaelArray[i] === 'number') break;

  console.log(michaelArray[i], typeof michaelArray[i]);
}

// Looping Backwards and Loops in Loops
const mikeArray1 = [
    'Michael',
    'Aroworade',
    2024 - 1996,
    'Software Engineering',
    ['Emmanuel', 'Fuad', 'Olayinka'],
    true
];
  
  // 0, 1, ..., 4
  // 4, 3, ..., 0
  
for (let i = mikeArray1.length - 1; i >= 0; i--) {
    console.log(i, mikeArray1[i]);
}

// The while Loop
// for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
let rep = 1;
while (rep <= 5) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

// The Math.trunc() method returns the integer part of a number.
// The Math.trunc() method removes the decimals (does NOT round the number).
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
