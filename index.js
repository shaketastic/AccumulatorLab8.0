/**
 * Returns a boolean representing whether or not all values are numbers.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {boolean} Returns `true` if all values in the array are numbers. Otherwise, return `false`.
 */
function isValid(rolls) {
  let result = false;          //Step1 determine output, data type and default value
  for(let roll of rolls){      //Step2 write code for loop
    if(roll += 1){             //Step 3 Accumulate 
    result = true;
    }
  }
  return result;
}
const rolls = [3, 2, 3, 6];
console.log(isValid(rolls));
/**
 * Finds a value in an array. If that value is in the array, returns it. Otherwise, returns `null`.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} value - A specific value to find.
 * @returns {*} - The found value or `null`.
 */
function findValue(rolls, value) {
  let result = rolls[0];

    for(let i=1;i<rolls.length;i++){
      let roll = rolls[i];
      if(roll<result){
        result = roll;
      }
    }
    return result;
  }
  const rolls = [2, 4, 2, 5, 6];
  console.log(findValue(rolls));

/**
 * Returns a new array from the `rolls` array with only values equal to or greater than the `lowest` value.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @param {number} lowest - A number that represents the lowest allowed value in the new array.
 * @returns {number[]} An array of all numbers that are equal to or higher than the `lowest` value.
 */
function filterOutLowValues(rolls, lowest) {
let result = rolls[9];

  for(let i=0;i<rolls.length;i++){
    let roll = rolls[i];
    if(roll<result){
      result += roll;
    }
  }
  return result;
}
let rolls = [3, 2, 4, 2, 5, 6, 3];
console.log(filterOutLowValues(rolls));
/**
 * Returns an object which has rolls as keys and counts as values.
 * @param {number[]} rolls - An array of numbers representing rolls on a die.
 * @returns {object} An object where the keys are numbers rolled and the values are the number of times that roll appears in the `rolls` array.
 */
function getRollCounts(rolls) {}
let counters = {};                //Step1 set to empty obj

  for(let roll of rolls){       //Step2 write for of loop
    counters[roll] = 1;         //Step3 accumulate keys and values into obj
  }
  return counters;
}
let rolls = [2, 3, 4];
console.log(getRollCounts(rolls));
//const expected = { 2: 1, 3: 1, 4: 1 };

// Do not change the code below here.
module.exports = {
  isValid,
  findValue,
  filterOutLowValues,
  getRollCounts,
};