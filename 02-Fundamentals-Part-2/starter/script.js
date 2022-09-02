"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "Audio";
// const private = 543;

// function logger() {
//     console.log("My name is Filip");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

// Function declaration

// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1998);

// Function expression

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear
// }
// const age2 = calcAge2(1998);
// console.log(age1, age2);

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1998, "Filip"));
// console.log(yearsUntilRetirement(1991, "Jonas"));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;

// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1998, "Filip"));

// console.log(yearsUntilRetirement(1950, "Mike"));

/////////////////////////////////////////////
// Coding Challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const averageDolphins = calcAverage(85, 54, 41);
// const averageKoalas = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * averageKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);

//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log("No one wins!")
//     }
// }
// checkWinner(averageDolphins, averageKoalas);

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2022);

// console.log(friends[0]);
// console.log(friends.length); // gives us number of elements in the array
// console.log(friends[friends.length - 1]); // gives us last element

// friends[2] = "Jay"; // changing the array element
// console.log(friends);

// const firstName = "Filip";
// const filip = [firstName, "Idczak", 2037 - 1998, "office assistant", friends];
// console.log(filip);
// console.log(filip.length);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// const friends = ["Michael", "Steven", "Peter"];

// // Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop() // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(friends);
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("Steven"));

// if (friends.includes('Steven')) {
//     console.log("You have a friend called Steven");
// }

///////////////////////////////////
// Coding challenge #2

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         const tipValue = bill * 0.15;
//         return tipValue;
//     } else {
//         const tipValue = bill * 0.2;
//         return tipValue;
//     }
// }

// const tip = calcTip(1000);
// console.log(tip);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
// console.log(tips);

// const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), ((bills[bills.length - 1])) + (tips[tips.length - 1])];
// console.log(total);

// const filip = {
//     firstName: "Filip",
//     lastName: "Idczak",
//     age: 2037 - 1998,
//     job: "office assistant",
//     friends: ["Szymon", "Bartek", "Arek"]
// };
// console.log(filip);

// DOT vs Bracket notation
// const filip = {
//     firstName: "Filip",
//     lastName: "Idczak",
//     age: 2037 - 1998,
//     job: "office assistant",
//     friends: ["Szymon", "Bartek", "Arek"]
// };
// console.log(filip);

// console.log(filip.lastName);
// console.log(filip["lastName"]);

// const nameKey = "Name";
// console.log(filip["first" + nameKey]);
// console.log(filip["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Filip? Choose between firstName, lastName, age, job and friends");
// console.log(filip[interestedIn]);

// if (filip[interestedIn]) {
//     console.log(filip[interestedIn]);
// } else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job and friends ")
// }

// filip.location = "Poland";
// filip["twitter"] = "@idczaq"
// console.log(filip);

// // Challenge
// // "Filip has 3 friends, and his best friend is called Szymon"

// const sentence = `${filip.firstName} has ${filip.friends.length} friends and his best friend is called ${filip.friends[0]}`;
// console.log(sentence);

// const filip = {
//     firstName: "Filip",
//     lastName: "Idczak",
//     birthYear: 1998,
//     job: "office assistant",
//     friends: ["Szymon", "Bartek", "Arek"],
//     hasDriversLicense: true,

//     calcAge: function () {
//         console.log(this)
//         this.age = 2037 - this.birthYear
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's licence`
//     }
// };

// console.log(filip.calcAge());

// console.log(filip.age);
// console.log(filip.age);

// // Challenge

// console.log(filip.getSummary());

//////////////////////////////////////////////////////////////
// Coding Challenge #3

// const mark = {
//     fullName: "Mark Miller",
//     height: 1.69,
//     weight: 78,
//     calcBMI: function () {
//         this.bmi = (this.weight / (this.height ** 2))
//         return this.bmi
//     }
// }

// console.log(mark.calcBMI());

// console.log(mark.bmi);

// const john = {
//     fullName: "John Smith",
//     height: "1.95",
//     weight: "92",
//     calcBMI: function () {
//         this.bmi = (this.weight / (this.height ** 2))
//         return this.bmi
//     }
// }
// console.log(john.calcBMI());

// console.log(john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`)
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`)
// }

// The Loop

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// looping arrays
// const filip = [
//     "Filip",
//     "Idczak",
//     2037 - 1998,
//     "office assistant",
//     ["Szymon", "Bartek", "Arek"]
// ];

// const types = [];
// filip[5] does NOT exist

// for (let i = 0; i < filip.length; i++) {
//     // reading from filip array
//     console.log(filip[i], typeof filip[i]);

//     // filling types array
//     // types[i] = typeof filip[i];
//     types.push(typeof filip[i]);

// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log("---ONLY STRINGS---");
// for (let i = 0; i < filip.length; i++) {
//     if (typeof filip[i] !== "string") continue;

//     console.log(filip[i], typeof filip[i]);
// }

// console.log("---BREAK WITH NUMBER---");
// for (let i = 0; i < filip.length; i++) {
//     if (typeof filip[i] === "number") break;

//     console.log(filip[i], typeof filip[i]);
// }

// const filip = [
//     "Filip",
//     "Idczak",
//     2037 - 1998,
//     "office assistant",
//     ["Szymon", "Bartek", "Arek"]
// ];

// for (let i = filip.length - 1; i >= 0; i--) {
//     console.log(i, filip[i]);
// }

// // Loop inside a loop

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------------- Starting exercise ${exercise}`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`)
//     }
// }

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep}`);
//     // rep++;
// }

//rolling dice
// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log("Loop is about to end ...");
// }

///////////////////////////////////////////////////////////
// Coding challenge #4

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals)

// const calcAverage = function (arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum / arr.length;
// }
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// POWTÓRKA CODING CHALLENGES

// #1

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const JohnWeight = 92;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = JohnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// #2

// const markHeight = 1.69;
// const markWeight = 78;
// const johnHeight = 1.95;
// const JohnWeight = 92;

// const markBMI = markWeight / markHeight ** 2;
// const johnBMI = JohnWeight / johnHeight ** 2;

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Marks's (${markBMI})!`);
// }

// #3

// const scoreDolphins = [97, 112, 101];
// let averageDolphins = 0;

// for (let i = 0; i < scoreDolphins.length; i++) {
//   averageDolphins += scoreDolphins[i] / scoreDolphins.length;
// }
// console.log(averageDolphins);

// const scoreKoalas = [109, 95, 106];
// let averageKoalas = 0;

// for (let i = 0; i < scoreKoalas.length; i++) {
//   averageKoalas += scoreKoalas[i] / scoreKoalas.length;
// }
// console.log(averageKoalas);

// if (averageKoalas > averageDolphins && averageKoalas >= 100) {
//   console.log(`Koalas wins!`);
// } else if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//   console.log(`Dolphins wins!`);
// } else if (
//   averageKoalas === averageDolphins &&
//   averageKoalas >= 100 &&
//   averageDolphins >= 100
// ) {
//   console.log(`It's a draw`);
// } else {
//   console.log(`Nobody wins!`);
// }

// #4

// const bill = [275, 40, 430];
// let tip = 0;

// for (let i = 0; i < bill.length; i++) {
//   bill[i] >= 50 && bill[i] <= 300
//     ? (tip = bill[i] * 0.15)
//     : (tip = bill[i] * 0.2);

//   const totalValue = bill[i] + tip;
//   console.log(totalValue);
// }

// #1 - Fundamentals part 2

// const scoreDolphins = [44, 23, 71];
// let averageDolphins = 0;

// for (let i = 0; i < scoreDolphins.length; i++) {
//   averageDolphins += scoreDolphins[i] / scoreDolphins.length;
// }
// console.log(averageDolphins);

// const scoreKoalas = [65, 54, 49];
// let averageKoalas = 0;
// for (let i = 0; i < scoreKoalas.length; i++) {
//   averageKoalas += scoreKoalas[i] / scoreKoalas.length;
// }
// console.log(averageKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${averageDolphins} vs ${averageKoalas})`);
//   } else if (avgDolphins * 2 <= averageKoalas) {
//     console.log(`Koalas win (${averageKoalas} vs ${averageDolphins})`);
//   } else {
//     console.log(`No team wins....`);
//   }
// };

// checkWinner(averageDolphins, averageKoalas);

// #3 - Fundamentals part 2

// function inside the object
// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.weight / this.height ** 2;
//     return this.BMI;
//   },
// };
// mark.calcBMI();
// console.log(mark.BMI);
