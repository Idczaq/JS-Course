
/*
let js = 'amazing'
//console.log(40 + 8 + 23 - 10);

console.log("Jonas")
console.log(23)

let firstName = "Jonas"
console.log(firstName)
console.log(firstName)
console.log(firstName)

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = jonas
let PI = 3.1415;

let myFirstJob = "Receptionist";
let muCurrentJob = "Teacher";



let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof "Jonas")

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// javascript pokazuje null jako object (bug)

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teacher';

lastName = "Idczak";
console.log(lastName);


// Math operators
const now = 2037;
const ageFilip = now - 1998;
const ageSara = now - 2018;
console.log(ageFilip, ageSara);


console.log(ageFilip * 2, ageFilip / 10, 2 ** 3) // 2 ** 3 oznacz 2 do potęgi 3 czyli 2 * 2 * 2

const firstName = 'Filip';
const lastName = 'Idczak';
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 10
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageFilip > ageSara); // >,<, >=, <=
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageFilip = now - 1998;
const ageSara = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const avarageAge = (ageFilip + ageSara) / 2
console.log(ageFilip, ageSara, avarageAge);




// Coding Challenge #1


// TEST DATA 1
let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;


// TEST DATA 2
let markHeight = 1.88;
let markWeight = 95;
let johnHeight = 1.76;
let johnWeight = 85;

let markBMI = markWeight / (markHeight ** 2);

let johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);

let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);



const firstName = "Filip";
const job = "receptionist";
const birthYear = 1998;
const year = 2022;


const filip = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(filip);

const filipNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(filipNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;

    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);

}

const birthYear = 1998;

let century; //należy zadeklarować zmienną poza blokiem kodu
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



////////////////////////////////////////

// Coding Challenge #2

let markHeight = 1.69;
let markWeight = 78;
let johnHeight = 1.95;
let johnWeight = 92;


let markBMI = markWeight / (markHeight ** 2);

let johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);

let higherBMI;

if (markBMI > johnBMI) {
    higherBMI = `Mark's BMI (${markBMI}) is higher than John's! (${johnBMI})`
} else {
    higherBMI = `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`
};
console.log(higherBMI);



// type conversion
const inputYear = '1998';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log("23" - "10" - 3);
console.log('23' * '2');

let n = '1' + 1; // '11',
n = n - 1;
console.log(n);



// 5 falsy values: 0, '', undefined, null, NaN


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Filip'));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('Yay! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}



const age = '18';

if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favorite = Number(prompt("What;s your favorite number"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 6) { // '23' == 23
    console.log('Cool! 6 is an amazing number')
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else {
    console.log('Number is not 23 or 7');
}

if (favorite !== 23) console.log("why not 23");



const hasDriversLicense = true; // A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive...")
}

*/

/////////////////////////////////////////////
// Coding Challenge #3

// const avarageScoreDolphins = (96 + 108 + 89) / 3;
// const avarageScoreKoalas = (88 + 91 + 110) / 3;
// console.log(avarageScoreDolphins, avarageScoreKoalas);

// if (avarageScoreDolphins > avarageScoreKoalas) {
//     console.log("Dolphins win!");
// } else if (avarageScoreKoalas > avarageScoreDolphins) {
//     console.log("Koalas win!")
// } else if (avarageScoreDolphins === avarageScoreKoalas) {
//     console.log("Both win!")
// }

// Bonus 1
// const avarageScoreDolphins = (97 + 112 + 101) / 3;

// const avarageScoreKoalas = (109 + 95 + 123) / 3;

// console.log(avarageScoreDolphins, avarageScoreKoalas);

// if (avarageScoreDolphins > avarageScoreKoalas && avarageScoreDolphins >= 100) {
//     console.log("Dolphin win");
// } else if (avarageScoreKoalas > avarageScoreDolphins && avarageScoreKoalas >= 100) {
//     console.log("Koalas win");
// } else if (avarageScoreDolphins === avarageScoreKoalas) {
//     console.log("It's a draw. Both win!")
// }

// Bonus 2
// const avarageScoreDolphins = (97 + 112 + 101) / 3;

// const avarageScoreKoalas = (109 + 95 + 106) / 3;

// console.log(avarageScoreDolphins, avarageScoreKoalas);

// if (avarageScoreDolphins > avarageScoreKoalas && avarageScoreDolphins >= 100) {
//     console.log("Dolphin win");
// } else if (avarageScoreKoalas > avarageScoreDolphins && avarageScoreKoalas >= 100) {
//     console.log("Koalas win");
// } else if (avarageScoreDolphins === avarageScoreKoalas && avarageScoreDolphins >= 100 && avarageScoreKoalas >= 100) {
//     console.log("It's a draw. Both win!")
// } else {
//     console.log("Neither team win!")
// }


// const day = "saturday";

// switch (day) { //day  === "monday"
//     case "monday":
//         console.log("Plan my course stracture");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day!");
// }


// if (day === "monday") {
//     console.log("Plan my course stracture");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thurdsday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend");
// } else {
//     console.log("Not a valid day!")
// }

// const age = 23;
// // age >= 18 ? console.log('I like to drink wine') : console.log("I like to drink water");


// const drink = age >= 18 ? 'wine' : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = "wine"
// } else {
//     drink2 = "water"
// }
// console.log(drink2);


// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);


////////////////////////////////////////
// Coding Challenge # 4

// const bill = 430;

// const tipValue = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const finalValue = bill + tipValue;

// console.log(`The bill value was ${bill}, the tip was ${tipValue} and the total value was ${finalValue}`);


