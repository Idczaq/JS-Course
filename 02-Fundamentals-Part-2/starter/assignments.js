
// const myCountry = "Poland"
// // const myContinent = "Europe"
// let myCountryPopulation = "38000000"
// console.log(myCountry);
// console.log(myContinent);
// console.log(myCountryPopulation);


// const isIsland = false
// // const language;
// console.log(isIsland);
// // console.log(language);

// language = "polish";

// let halfMyCountryPopulation = myCountryPopulation / 2;
// console.log(halfMyCountryPopulation);
// myCountryPopulation++;
// console.log(myCountryPopulation);

// let finlandPopulation = 6000000
// console.log(myCountryPopulation > finlandPopulation);

// let avarageCountryPopulation = 33000000
// console.log(myCountryPopulation < avarageCountryPopulation);

// let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
// console.log(description);



// const country = "Portugal";
// const continent = "Europe";
// const population = "11 milion"
// const language = "portuguese";

// const sentence = `${country} is in ${continent}, and its ${population} people speak ${language}`;

// console.log(sentence);



// const avaragePopulation = 33;
// const polandPopulation = 38;
// let populationComparison;

// if (polandPopulation > avaragePopulation) {
//     populationComparison = "Poland's population is above avarage"
// } else {
//     populationComparison = `Poland populations is ${avaragePopulation - polandPopulation} milion below avarage`
// };

// console.log(populationComparison);



// const numNeighbours = prompt('How many neighbour countries does you country have?');

// if (numNeighbours == 1) {
//     console.log('Only one boarder!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border!')
// } else {
//     console.log('No boarders!');



// if (language === "english" && myCountryPopulation > 50 && !isIsland) {
//     console.log(`You should live in ${myCountry} :)`);
// } else {
//     console.log(`${myCountry} does not meet your criteria :( `)
// }

// const language = "polish";

// switch (language) {
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers")
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D")
// }

// console.log(`${myCountry}'s population is ${myCountryPopulation > 33000000 ? "above avarage" : "below avarage"}`);

// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} million people and its capital city is ${capitalCity}.`
//     return description;
// }
// const countryDescription1 = describeCountry("Poland", 38, "Warsaw");

// const countryDescription2 = describeCountry("Italy", 60, "Rome");

// const countryDescription3 = describeCountry("Spain", 48, "Madrid");
// console.log(countryDescription1, countryDescription2, countryDescription3);

// function perfentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

// const perfentageOfWorld2 = function (population) {
//     return population / 7900 * 100;
// }
// const chinaPop = perfentageOfWorld1(1441);
// const portugalPop = perfentageOfWorld1(10);
// const usaPop = perfentageOfWorld1(332);

// console.log(chinaPop, portugalPop, usaPop);

// const perfentageOfWorld3 = (population) => (population / 7900) * 100;

// const polandPop = perfentageOfWorld3(38);
// console.log(polandPop);


// function perfentageOfWorld1(population) {
//     return population / 7900 * 100;
// }

// const describePopulation = function (country, population) {
//     const percentage = perfentageOfWorld1(population);
//     const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;
//     console.log(description)
// }
// describePopulation('China', 1441);

//

// const populations = [33, 330, 56, 38]
// console.log(populations.length === 4);

// const percentages = [
//     perfentageOfWorld1(populations[0]),
//     perfentageOfWorld1(populations[1]),
//     perfentageOfWorld1(populations[2]),
//     perfentageOfWorld1(populations[2]),
// ];
// console.log(percentages);

// const neighbours = ["Germany", "Checkia", "Slovakia", " Belarus", "Ukraine", "Russia", "Lithuania"]

// neighbours.push("Utopia");

// neighbours.pop();

// if (neighbours.includes("Germany")) {
//     console.log("Central European country");
// } else {
//     console.log("Probably not a central European country :D")
// }

// neighbours[neighbours.indexOf("Russia")] = "Denmark"
// console.log(neighbours);



// const myCountry = {
//     country: "Poland",
//     capital: "Warsaw",
//     language: "polish",
//     population: "38",
//     neighbourgs: ["Germany", "Checkia", "Slovakia", "Ukraine", "Belarus", "Lithuania", "Russia"],

//     describe: function () {
//         console.log(
//             `${this.country} has ${this.population} million
//         ${this.language}-speaking people,
//         ${this.neighbourgs.length} neighbouring countries and a capital called ${this.capital}.`)
//     },
//     checkIsland: function () {
//         this.isIsland = this.neighbourgs.length === 0 ? true : false;
//         // this.isIsland = !Boolean(this.neighbours.length)
//     }

// }

// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry);


// for (rep = 1; rep <= 50; rep++) {
//     console.log(`Voter number ${rep} is currently voting`)
// }



// const populations = [33, 330, 56, 38,]
// const percentages2 = [];



// for (i = 0; i < populations.length; i++) {
//     const perc = populations[i] / 7900 * 100
//     percentages2.push(perc)
// }
// console.log(percentages2);

// const listOfNeighbours = [
//     ['Canada', 'Mexico'],
//     ['Spain'],
//     ['Norway', 'Sweden', 'Russia'],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++)
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

// percentages3 = [];

// let i = 0;
// while (i < populations.length) {
//     const perc = populations[i] / 7900 * 100
//     percentages3.push(perc);
//     i++;
// }
// console.log(percentages3);