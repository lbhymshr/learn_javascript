/*
Java script is dynamically typed
This is the format for block comment
*/

let js = 'amazing';

let firstName = "Gary"; // use camelCase for variable naming
console.log(firstName);

let PI = 3.141; // use all upper case for constants!
console.log('The value of pi is ' + PI);

// use descriptive naming for variables
let myFirstJob = "Credit Analyst";
let myCurrentJob = "Data Scientist";

console.log(myFirstJob)

let fullAge = true; // or false

let children; // creating an undefined variable

console.log(fullAge);

console.log(typeof fullAge);
console.log(typeof myFirstJob);
console.log(typeof PI);


// Declaring variables using more keywords
let age = 30;
age = age + 1; // variable mutation

// Const - use unless you want to change the value of variable later
const birthYear = 1991; // this is not mutable, it is immutable
//const year; // illegal because it cannot be reassigned later and will alway undefined


// var - this is mutable
var job = "data analyst";
job = 'no way';

// Do not forget to not use any declaration
lastName = "polly" //possible creates a global variable

/****************Arithmetic Operators****************/
let year = 2037;
const ageAlabhya = year - 1991;
const ageNiyati = year - 1991;
console.log('Alabhya:', ageAlabhya, 'Niyati:', ageNiyati);

// multiplication, division and exponentiation
console.log(ageAlabhya * 2, ageAlabhya / 10, ageAlabhya ** 3);

// concatenating strings
console.log("Alabhya" + " " + "Mishra");

// typeof operator returns the data type, below gives string
console.log(typeof "Alabhya");

// assignment operators
let x = 10 + 5; // = is an assignment operator
x += 10; // addition increment operator
x *= 4; // multiplication increment operator
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// comparison operators
console.log(ageAlabhya < ageNiyati);


/*****************Coding Challenge 1*****************/
//////////////////////////////////////////////////////

let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

bmiMark = massMark / heightMark ** 2;
bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;
console.log("Does Mark have higher BMI?", markHigherBMI);



firstName = "Alabhya";
job = "Data Analyst";
// birthYear = 1991;
const currYear = 2037;

/****************String Maipulation & Template Literals****************/
////////////////////////////////////////////////////////////////////////
const newString = "I'm " + firstName + ", a " + (currYear - birthYear) + " years old " + job + "!";
console.log(newString);

// template strings using back ticks!!!
const newnewString = `I'm ${firstName}, a ${currYear - birthYear} year old ${job}`;
console.log(newnewString);

// multi line strings with \n
console.log('String with \n multiple \n lines');

// multiline strings with back ticks
console.log(`So
easy to do this 
this way`)


/****************Conditional Statements If-Else****************/
////////////////////////////////////////////////////////////////
age = 16;
let isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`This person can apply for DL`);
}
else {
    console.log(`This person cannot apply for DL for another ${18 - age} years`);
}

// example 2

//const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(`This person was born in the ${century} century`);


/*****************Coding Challenge 2*****************/
//////////////////////////////////////////////////////
if (markHigherBMI) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's!(${bmiJohn})`);
}
else {
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's (${bmiMark})!`)
}


/****************Type Conversion & Coercion****************/
////////////////////////////////////////////////////////////

// Coercion when Javascript compiler does the type conversion by itself
const inputYear = '1991';

console.log(inputYear + 18); // this is string concatenation

//lets convert inputYear to number
console.log(Number(inputYear) + 18, inputYear); // original variable remains as String

// converting to String
console.log(String(Number(inputYear) + 18), Number(inputYear));
console.log('23' + '10' - 3); // first concatenate, coerce to Number and subtract 3
console.log('23' - 10 + '3'); // first coerce to Number, then coerce to String and concatenate


/****************Boolean Stuff****************/
///////////////////////////////////////////////

// There are 5 falsey values: 0, '', undefined, null, NaN
// Everything else is truthy

console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(undefined));
console.log(Boolean('Alabhya'));
console.log(Boolean(null));
console.log(Boolean({}));
console.log(Boolean(NaN));


/****************Different types of Equality****************/
/////////////////////////////////////////////////////////////
age = '18';
if (age === 18) console.log('You are an adult!'); // strict equality, no coercion
if (age == 18) console.log('You are an adult!'); // loose equality, type coercion

let userInput = Number(prompt("What is your favorite number?")); // input is stored as string

if (userInput == 23) {
    console.log(`${userInput} is an amazing number!`);
}
else if (userInput !== 23) {
    console.log(`You choice sucks! Pick 23...`)
}


/****************Boolean Logic****************/
///////////////////////////////////////////////
console.clear();
const hasDL = false;
const hasGV = true;

// AND
console.log(hasDL && hasGV);

// OR
console.log(hasDL || hasGV);

// NOT
console.log(hasDL || !hasGV);


/*****************Coding Challenge 3*****************/
//////////////////////////////////////////////////////
console.clear();

let scoreDolphin = [97, 101, 112];
let scoreKoalas = [109, 95, 106];

function computeAverage(arrayInput) {
    let sum = 0;
    for (i = 0; i < arrayInput.length; i++) {
        sum += arrayInput[i];
    }
    return sum / arrayInput.length;
}

avgDolphin = computeAverage(scoreDolphin);
avgKoalas = computeAverage(scoreKoalas);

if ((avgDolphin > avgKoalas) && avgDolphin >= 100) {
    console.log(`Dolphins have won the game with ${avgDolphin} points!`);
}
else if ((avgKoalas > avgDolphin) && avgKoalas >= 100) {
    console.log(`Koalas have won the game with ${avgKoalas} points!`);
}
else if ((avgKoalas === avgDolphin) && avgKoalas >= 100) {
    console.log(`Game was drawn between Dolphins and Koalas with both teams at ${avgKoalas} points`);
}
else {
    console.log(`This game has no winner!`);
}


/*****************Switch Statements*****************/
/////////////////////////////////////////////////////
console.clear();

const day = 'Sunday';
// This is a strict comparison
switch (day) {
    case 'Monday':
        console.log('Start planning course structure');
        console.log('It is Monday!');
        break;
    case 'Tuesday':
        console.log('Why?');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Prepare videos!');
        break;
    case 'Friday':
        console.log('Record Videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjoy life')
        break;
    default:
        console.log('Not a valid day!!!')
}

/*****************Conditional Operator*****************/
////////////////////////////////////////////////////////
console.clear();

const age1 = 15;
let drink = age1 >= 18 ? `wine` : `water`;
console.log(`I like to drink ${drink}!`)
// The syntax is a <if condition> ? <then statement> : <else statement>

// Can be used inside template literals
// age = 18;
console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}!`);


/*****************Coding Challenge 4*****************/
//////////////////////////////////////////////////////
console.clear();

let billValue = 430;

const tip = (billValue >= 50 && billValue <= 300) ? 0.15 : 0.2;

console.log(`Steven's bill amount of $${billValue}
creates a tip of $${billValue * tip}
leading to a total bill amounting $${billValue * (1 + tip)}!`);