// Arithmetic operators.
// +, -, *, /, **
const now = 2037;
const ageSam = now - 1994;
const ageMike = now - 1996;
const ageJoel = now - 1999;
console.log(ageSam, ageMike, ageJoel);
console.log(ageMike * 2, ageJoel / 10, 2 ** 3);

// Concatenate with +
const first_name = 'Michael';
const last_name = 'Aroworade';
console.log(first_name + " " + last_name);

// typeof operator
console.log(typeof(first_name));

// Assignment operator (=)
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
// increment and Decrement
x++; // x = x + 1 = 101
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
// >, <, >=, <=
console.log(ageMike > ageJoel);
console.log(ageSam < ageMike);
const isFullAge = ageMike >= 18;
console.log(isFullAge);

// Order of precedence
let a, b; // a and b declaration
a = b = 25 - 10 - 5; // a = b = 10..Assigment operator (right to left)
console.log(a, b); 
// grouging has the highest precedence (....)
console.log(ageSam, ageMike, ageJoel);
const averageAge = (ageSam + ageMike + ageJoel) / 3;
console.log("The average of their ages is " + averageAge);

//string and template literals
const fname = 'Michael';
const job = 'Software Engineer';
const dateOfBirth = 1996;
const Currentyear = 2024;
// Normal way of string concatenation
const bio = "I'm " + fname + ', a ' + (Currentyear - dateOfBirth) + ' years old ' + job + '!';
console.log(bio);
/* ES6 presents a better way called template liteerals
Basically, a template literal can assemble multiple pieces into one final string.
Template literals are enclosed by backtick (`) characters instead of double or single quotes.
*/
const michaelBio = `I'm ${fname}, a ${Currentyear - dateOfBirth} years old ${job}!`;
console.log(michaelBio);
console.log(`Congratulations Michael,
you understand template literals now.`);