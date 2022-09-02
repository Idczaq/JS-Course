// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// solving problems - calculate temperature amplitude
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding problem
// - What is temp amplitude? Answer: diff between highest and lowest temp
// - How to compute the max and min temperatues
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors ?
// - Find max value
// - Find min value
// - Subtract min from max and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

// Problem 2:
// funcion should now receive 2 arrays of temps

// 1) Understanding a problem
// - with 2 arrays, should we implement functionally twice? NO! just merge 2 arrays

// 2) Breaking up into sub-problems
// - merge 2 arrays?

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeBug);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX
//     // value: Number(prompt('Degrees celsius:')),
//     value: 10,
//   };

//   // B) FIND
//   console.table(measurement);

//   console.log(measurement.value);
//   console.warn(measurement.value);
//   console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// // Using a debugger

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     debugger;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// // A) Identify
// console.log(amplitudeBug);

// Coding Challenge #1

// 1) Understanding the problem
// - Array transformed into a string, separated by...
// - What is X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C
// - Strings needs to contains day (index +1)
// - Add ... between elements and start and end of string

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 4];

// const printForcast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}*C in ${i + 1} days ... `;
//   }
//   console.log('... ' + str);
// };
// printForcast(data1);
// printForcast(data2);
