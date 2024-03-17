let js = 'amazing'; // js is a variable

console.log(40 + 8 + 23 - 10);
console.log('Michael');  //Michael is a value
console.log(23);    // 23 is a value

let firstName = "Michael";  //fistName is a variable, Michael is a value
console.log(firstName);  //console outputs the value in variable firstName

let PI = 3.1415;    //uppercase name convention for constants
let lastName = "Aroworade"; //Camelcase name convention
let middle_name = "Ayodele"; // Underscore name convention
let myFirstJob = "Programmer"; //Describes what value the varaible holds


// Boolean
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true); // To show type of value
console.log(typeof javascriptIsFun); // To show type of variable

//String - dynamic typing
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);
console.log("Michael Aroworade");
console.log(typeof "Michael Aroworade");


//Undefined
let year;
console.log(year); //undefined variable
console.log(typeof year); // type undefined


// Number - dynamic typing
year = 1996;
console.log(typeof year);


// let, var, const
// var is function scope
var name = 'Michael';
name = 'Ayodele'; // var should not be used. Use let instead
console.log(name);

// let is a block scope.
let age = 25; // It can be reassigned. i.e. Mutable
age = 28;
console.log(age);

// Note: we can't not create empty const.. 
// It's best practice to use const, except you sure the value will change.
const birthYear = 1996; // It can't not be reassigned. i.e. immutable
//birthYear = 2000;
//console.log(birthYear); --- Error

// Note: we also do not declare variable.
lastname = 'Aroworade';
console.log(lastName); 
