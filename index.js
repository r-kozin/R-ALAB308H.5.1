// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
const maxOfThree = function(x, y, z) {
    if (x >= y) {
      if (x >= z) {
        return x;
      }
      return z;
    } else if (y >= z) {
      return y;
    } else {
        return z;
    }
    // if x >= y, check if greater than z, if so, return x. If not, return z. Otherwise check if y is greater than z, if so, return y, if not return z.

}

console.log(maxOfThree(46, 22, 24));

// 3.

function isCharAVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'y') {
        return true;
    }
    return false;
}

console.log(isCharAVowel('b'));

// 4.

const sumArray = function(array){
    let sum = 0;
    for (let i in array){
        sum += array[i];
        i++;
    }
    return sum;
}

console.log(sumArray([1,6, 10]));

// 5. 

function multiplyArray(array){
    let product = 1;
    for (let i in array){
        product *= array[i];
        i++;
    }
    return product;
}

console.log(multiplyArray([12, 35, 17]));

// 6. 

const numArgs = function(args){
    // argsNum = 0;
    // for (let i in args){
    //     argsNum++;
    //     i++;
    // }
    //return argsNum;
    return args.length;
}

console.log(numArgs([1, 2, 3, 4, 5, 6, 5]));

// 7.

function reverseString(word){
    splitWord = word.split('');
    splitWord.reverse();
    reversedWord = splitWord.join('');
   return reversedWord;
}

console.log(reverseString('Welcome'));

// 8.

const longestStringInArray = function(stringArray){
    let longest = 0;
    for (let i in stringArray) {
        if (stringArray[i].length >= longest) {
            longest = stringArray[i].length;
        }
    }
    return longest;
}

console.log(longestStringInArray(['string 1', 'string2', 'this is string 4', 'this is another string string 5']));

// 9.

// function stringsLongerThan(array, numOfArgs){
//     for (let i in array) {
//         if (array[i].length < numOfArgs) {
//             array.splice(array[i],1);
//         }
//     }
//     return array;
// }

function stringsLongerThan(array, numOfArgs){
    let newArray = [];
    for (let i in array) {
        if (array[i].length > numOfArgs) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning', 'longer strings', 'additional strings', 'sho'], 3));

// 10.

const addList = function(...numList){
    let sum = 0;
    for (let i in numList){
        sum += numList[i];
        i++;
    }
    return sum;
}

console.log(addList(1, 412, 2, 5, 321, 23, 123, 444, 423));