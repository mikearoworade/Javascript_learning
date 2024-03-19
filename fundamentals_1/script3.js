// Decision: if/else statement.
const driveAge = 28;
const isOldEnough = driveAge >= 18;
// Conditional statement
if (isOldEnough) {
    console.log("Michael can start driving license 🚗");
}
// OR
if (driveAge >= 30) {
    console.log("Michael can start driving license 🚗");
} else {
    const yearsLeft = 30 - driveAge;
    console.log(`Michael is too young. Wait another ${yearsLeft} years.`)
}

// Type conversion and type coercion
const inputYear = '1996';
//String to Number.
console.log(Number(inputYear), inputYear); //type conversion of string to number.
console.log(inputYear + 28);
console.log(Number(inputYear) + 28);
// Number to String
console.log(String(28), 28);

//Type Coercion
console.log("I'm " + 28 + ' years old.'); //the same as below
console.log("I'm " + String(28) + ' years old..')
console.log("I'm 28 years old.");
console.log('23' - '10' - 3); // - triggers number conversion 
console.log('23' - '10' + 3); // + triggers string conversion
console.log('2' * '15'); // * trtiggers number conversion

// Boolean - Truthy and Falsy values
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(''));
console.log(Boolean('Ayo'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all..");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("Height is defined.");
} else {
    console.log("Height is undefined.");
}

// Equality operators == and ===
const checkAge = 18;
if (age === 18) {
    console.log("You just became an adult.");
}
console.log(18 === 18) // true
console.log(18 === 19) // false
// === is a strict equality
// == is a loose equality.. it does type coercion
console.log('18' == 18); // true
console.log('18' === 18); // false

// To get input from a webpage, we use prompt() funtion
// for multiple condition, we use else if..
// const favorite = prompt("What's your favorite number? ");
const favorite = '9'; // we assume the prompted number is 9 
console.log(favorite);
console.log(typeof favorite); //it's a string
if (Number(favorite) === 23) {
    console.log('Cool! 23 is an amazing number..');
} else if (Number(favorite) === 7) {
    console.log('7 is a cool number');
} else {
    console.log('Number is neither 23 nor 7.');
}

// !== is called not equal
if (Number(favorite) !== 23) console.log('Why not 23');


// Lodical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log('Michael is able to drive!');
} else {
    console.log('Someone else should drive...');
}

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Michael is able to drive!');
} else {
    console.log('Someone else should drive...');
}


// Switch Statement
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
    case 'tuesday':
      console.log('Prepare theory videos');
      break;
    case 'wednesday':
    case 'thursday':
      console.log('Write code examples');
      break;
    case 'friday':
      console.log('Record videos');
      break;
    case 'saturday':
    case 'sunday':
      console.log('Enjoy the weekend :D');
      break;
    default:
      console.log('Not a valid day!');
}

// Using if/else to above regard
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

//Tenary Operator
const drinkAge = 23;
drinkAge >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
// Same as above
const drink = drinkAge >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (driveAge >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

// With tenary operator, we can have conditionals in a template literals
console.log(`I like to drink ${driveAge >= 18 ? 'wine 🍷' : 'water 💧'}`);