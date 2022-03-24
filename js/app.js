// function 1 from assignment. line 2 defines the function, creates the function name and sets the parameters/what the input will be. line 3 assigns the permanent value of 5 to number3. line 4 defines what the function does and 5 returns the answer. Line 8 logs the 2 numbers i want to add and multiply by 5. 
function addX5 (number, number2, number3){
  var number3 = 5;
  var addNumX5 = (number + number2) * number3;
  return addNumX5;
}

console.log(addX5 (1, 4));
console.log(addX5 (2, 3));
console.log(addX5 (0, 5));




// function 2 from assignment. the function sets up the function name and the input type, the var sets up a name for the input type to be referenced in the if/else. The words.length is a builtin function that counts how many characters are in the input string, and the > 10 is tied to an if/else so that if the charcters are 11 or higher to input true, and 10 or under to print false.
function characterCount (string){
  var words = (string);
  if(words.length > 10){
      return true;
    } else {
      return false;
    }
  }

console.log(characterCount('6 long'));
console.log(characterCount('this is 10'));
console.log(characterCount('this is 15 long'));



// function A (number, number2, C){
//   var C = ?;
//   var B = (number +-*/ number2) +-*/ C;
//   return B;
// }
// this is the basic lasyout of a function (I cant of like lasyout as a name instead of layout for this cheat sheet, but is the easiest way to demonstrate a math function.) 
// find out if there are resources that can spell it out like that





// function 3 from assignment. 
// ask why capitals don't work like PhD in the 3d console.log and if there is a way around that

// function filterPh (array) {
//     var filtered = array.filter(function (word) {
//       return word.charAt(array)==='p';
//     });
// return filtered;
// }
function filterPh (array) {
    var filtered = array.indexOf(filterPh['ph', fromIndex]);
    return filtered;
}    
console.log(filterPh.startsWith('ph'));
// he used tht in class

console.log(filterPh (['phoenix', 'jeep', 'phoebe', 'mouse', 'people', 'phone']));
// console.log(filterPh (['filter', 'jerico', 'focus', 'phony', 'merry', 'plaque']));
// console.log(filterPh (['fortune', 'crash', 'phoney', 'PhD', 'photo', 'park']));

// var PATTERN = 'ph',
//     filtered = filterPh.filter(function (str) { return str.indexOf(PATTERN) === -1; });

// function 3 from assignment. 
// function filterPh (array) {
//     const filtered = phWords.filter(ph => {
//     return filtered;
//   }
// });

