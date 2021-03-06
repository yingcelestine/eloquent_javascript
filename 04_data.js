// const reverseNumber = (number) => {
//     let numberString = String(number), string = "";
//     for (i = numberString.length - 1; i >= 0; i--) {
//         string += numberString[i];
//     }
//     return Number(string);
// }


const reverseNumber = (number) => {
    // find out how many digits the number has.
    let nDigits = Math.ceil(Math.log10(number));
    // find out each digit
    let number1 = 0;
    for (let i = nDigits - 1, j = 0; i >= 0; i-- , j++) {
        let p = Math.pow(10, i);
        let d = Math.floor(number / p);
        number1 += d * Math.pow(10, j);
        number -= d * p;
    }
    return number1;
}

console.log(reverseNumber(5544));

// const generateString = (string) => {
//     let array = [];
//     for(i = 0; i < string.length; i++) {
//         string += String[i];

//     }
//     return array;
// }
// let array1 = [d, do, dog, o, og, g]
// (string[0],string[0]+string[1],string,string[1],string[1]+string[2],string[2])
// let newString = "";
//  array[0] = string[0]
//  array[4] = string[1]
//  array[6] = string[2]
// newstring += string[i] 
// array[1] += string[0]+string[1]



let anObject = { left: 1, right: 2 };
console.log(anObject.left);
delete anObject.right;
console.log(anObject.right);
console.log("right" in anObject);
console.log("left" in anObject);
anObject.middle = 1.5;
console.log(anObject.middle);
console.log(Object.keys(anObject));
Object.assign(anObject, { right: 4, middle: 3 });
console.log(anObject);
console.log(typeof anObject);
let array = [1, 2, 3,]
console.log(typeof array);
let string = "Hello world";
console.log(typeof string);
let number = 8;
console.log(typeof numble);
let boolean = false;
console.log(typeof boolean);

const score = { visitor: 0, home: 0 };
score.people = 2;
console.log(score);
score.visitor = 1;
console.log(score.visitor);
console.log(score);
const score1 = { visitor: 2, home: 1, people: 3 };
const score2 = { visitor: 2, home: 1, people: 3 };
const score3 = { home: 0, people: 1 }

const compareScores = (s1, s2) => {
    return s1.visitor === s2.visitor && s1.home === s2.home && s1.people === s2.people;
}

if (score2 == score1) {
    console.log('score2 <= score1')
} else {
    console.log("socre2 > score1");
};
if (score == score2) {
    console.log('Objects can be compared.')
} else {
    console.log('Objects can be compared only if both objects are precisely the same value.')
};

if (compareScores(score1, score2)) {
    console.log('score2 == score1')
} else {
    console.log("socre2 != score1");
};

let journal = [];
function addEntry(events, outcome) {
    // journal.push({ events, outcome});
    journal.push({
        events: events,
        outcome: outcome
    })
    // let result = {};
    // result[String(events)] = events;
    // result[String(squirrel)] = squirrel;
    // journal.push(result);
}
addEntry([1, 2, 3], false);
addEntry([6, 9, 99, 88, 76], true);
console.log(journal);
for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    console.log(`${entry.events.length} events.`);
}

for (let entry of journal) {
    console.log(`${entry.events.length} events.`);
}

let array0 = [0, 1, 2, 3, 4, 2, 5, 6, 7, 2];
array0.push(10);
console.log(array0);
array0.shift();
console.log(array0);
array0.unshift(9);
console.log(array0);
array0.pop();
console.log(array0);
console.log(array0.indexOf(2));
console.log(array0.indexOf(2, 2));
console.log(array0.indexOf(2, 3));
console.log(array0.lastIndexOf(2));
console.log(array0.lastIndexOf(2, 2));
console.log(array0.lastIndexOf(2, 3));
console.log(array0.slice(4, 7));
console.log(array0.slice(6));
console.log(array0.slice(4, 7).concat(array0.slice(6)));
console.log(array0);

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e", "f"], 2));

console.log(String(11).padStart(4, "0"));
console.log(Math.floor(3.157));
console.log(Math.ceil(3.157));
console.log(Math.round(3.557));
console.log(Math.abs(-3.157));

// correlation function
// receives two arrays of numbers
// returns the correlation

// const correlation = (array1, array2) => {
//     // make sure the two arrays have the same length, if they don't have the same length, return null
//     // calculate result according to the formula
//     // pre-condition
//     if (array1.length !== array2.length) {
//         return null;
//     }
//     if (array1.length === 0) {
//         return null;
//     }
//     let mult = 0;
//     let sum1 = 0;
//     let sum2 = 0;
//     let sumArray1 = array1.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     });
//     let average1 = sumArray1 / array1.length;
//     let sumArray2 = array2.reduce(function (accumulator, currentValue) {
//         return accumulator + currentValue;
//     });
//     let average2 = sumArray2 / array2.length;
//     for (let i = 0; i < array1.length; i++) {
//         difference1 = array1[i] - average1;
//         difference2 = array2[i] - average2;
//         mult += (array1[i] - average1) * (array2[i] - average2);
//         sum1 += difference1 * difference1;
//         sum2 += difference2 * difference2;
//     }
//     return mult / (Math.sqrt(sum1) * Math.sqrt(sum2));
// }
const correlation = (array1, array2) => {
    if (array1.length !== array2.length) {
        return null;
    }
    if (array1.length === 0) {
        return null;
    }
    let mult = 0;
    let sum1 = 0;
    let sum2 = 0;
    let sumArray1 = array1.reduce((a, b) => a + b, 0);
    // let productArray1 = array1.reduce((a, b) => a * b, 1);
    let average1 = sumArray1 / array1.length;
    let sumArray2 = array2.reduce((a, b) => a + b, 0);
    let average2 = sumArray2 / array2.length;
    for (let i = 0; i < array1.length; i++) {
        difference1 = array1[i] - average1;
        difference2 = array2[i] - average2;
        mult += (array1[i] - average1) * (array2[i] - average2);
        sum1 += difference1 * difference1;
        sum2 += difference2 * difference2;
    }
    return mult / (Math.sqrt(sum1) * Math.sqrt(sum2));
}
let x = [1, 2, 6, 1, 7, 8, 1, 3, 1, 5, 6, 7, 1, 9, 1, 4];
let y = [103, 106, 118, 103, 121, 124, 103, 109, 103, 115, 118, 121, 103, 127, 103, 23];
console.log(correlation(x, y));
console.log(correlation([3, 3, 4, 5, 6], [3, 3, 4, 5, 6, 8]));

// phi function
// receives two arrays of numbers
// returns the correlation, using the second formula
const phi = (array1, array2) => {
    // make sure ... same length
    // make sure all numbers are either 0 or 1.
    // create the pivot table: n00, n01, n10, n11
    function checkNumber(number) {
        return number === 0 || number === 1;
    }
    if (array1.length !== array2.length ||
        array1.length === 0 ||
        array1.every(checkNumber) === false ||
        array2.every(checkNumber) === false) {
        return null;
    }
    let count00 = 0;
    let count01 = 0;
    let count10 = 0;
    let count11 = 0;
    for (let i = 0; i < array1.length; i++) {
        if (0 === array2[i] && array1[i] === 0) {
            count00++;
        } else if (array1[i] === 0 && array2[i] === 1) {
            count01++;
        } else if (1 === array2[i] && array1[i] === 1) {
            count11++;
        } else if (array1[i] === 1 && array2[i] === 0) {
            count10++;
        }
    }
    return (count11 * count00 - count10 * count01) / Math.sqrt((count10 + count11) * (count01 + count00) * (count01 + count11) * (count00 + count10));
}
console.log(phi([0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0], [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1]));

// const range = (start, end) => {
//     let array = [];
//     if (start >= end) {
//         for (i = 0; i < start - end + 1; i++) {
//             array.push(start - i);
//         }
//         return array;
//     }
//     for (i = 0; i < end - start + 1; i++) {
//         array.push(start + i);
//     }
//     return array;
// }
// console.log(range(5, 2));

const range = (start, end) => {
    let array = [];
    if (start >= end) {
        for (let i = start; i >= end; i--) {
            array.push(i);
        }
        return array;
    }
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
console.log(range(5, 2));

console.log(range(3, 12));

// const range1 = (start, end, step) => {
//     let array = [start];
//     let i = start + step;
//     if (start >= end && i >= end) {
//         array.push(i);
//         i += step;
//     }
//     else if(start < end, i <= end) {
//         array.push(i);
//         i += step;

//     }
//     return array;
// }

const range1 = (start, end, step) => {
    let array = [];
    if (step === 0) { return array; }
    if (start >= end) {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
        return array;
    }
    for (let i = start; i <= end; i += step) {
        array.push(i);
    }
    return array;
}

console.log(range1(5, 2, -2));

console.log(range1(3, 12, 2));

const reverseArray = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i])
    }
    return newArray;
}
console.log(reverseArray([3, 4, 5, 6]));

// const reverseArrayInPlace = (array) => {
//     if (array.length === 0) {
//         return;
//     }
//     for (let i = array.length - 1; i >= 0; i--) {
//         array.push(array[i]);
//     }
//     const len = array.length / 2;
//     for (let i = 0; i < len; i++) {
//         array.shift();          
//     }
// }

const reverseArrayInPlace = (array) => {
    const len = Math.floor(array.length / 2);
    for (let i = 0, j = array.length - 1; i < len; i++ , j--) {
        const temporary = array[i];
        array[i] = array[j];
        array[j] = temporary;
    }
}

{
    let a = [4, 3, 2, 1];
    reverseArrayInPlace(a);
    console.log(a);
}

// singly-linked list
// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

let list0 = { rest: null };

const listToArray = (list) => {
    let array = [];
    if (!("value" in list)) {
        return array;
    }
    array.push(list.value);
    let r = list.rest;
    while (r != null) {
        array.push(r.value);
        r = r.rest;
    }
    return array;
}

// console.log(listToArray(list));



// const arrayTolist = (array) => {
//     let list = {};
//     if (array.length === 0) {
//         return list;
//     }

//     list = {
//         value: array[array.length - 1],
//         rest: null
//     };


//     for (let i = array.length - 2; i >= 0; i--) {
//         list = {
//             value: array[i],
//             rest: list
//         };

//     }

//     return list;
// }



const _arrayTolist = (array, list, index) => {
    if (index < 0) {
        return list;
    }
    list = {
        value: array[index],
        rest: list
    };
    return _arrayTolist(array, list, index - 1);
}

const arrayTolist = (array) => {
    return _arrayTolist(array, {}, array.length - 1);
}

console.log(arrayTolist([5, 4, 3, 2, 1]));


const list = {
    value: 5,
    rest: {
        value: 8,
        rest: {
            value: 3,
            rest: {
                value: 4,
                rest: null
            }
        }
    }
}

const nth = (list, n) => {
    if (n === 0) {
        return list.value;
    }
    return nth(list.rest, n - 1);
}

console.log(nth(list, 2))

// nElements
// receives a list
// returns the number of elements in the list
// for example, nElements(list) == 4
// write a recursive function
const nElements = (list) => {
    if (!list || !("value" in list)) {
        return 0;
    }
    return 1 + nElements(list.rest);
}

console.log(nElements(list));

// sum
// receives a number n
// return the value of 0 + 1 + 2 + ... + n
// write a recursive function
const sum = (n) => {
    if (n === 0) {
        return 0;
    }
    return n + sum(n - 1);
}
console.log(sum(10));

// nDigits
// receives a number n
// return the number of digits for n
// nDigits(58891) === 5
// write a recursive function

const nDigits = (n) => {
    let string = String(n);
    if (string.length === 1) {
        return 1;
    }
    n = Number(string.substr(1));
    return 1 + nDigits(n);
}

// const nDigits = (n) => {
//     if (n < 1) return 0;
//     return 1 + nDigits(n / 10);
// }

console.log(nDigits(588912));
// 1 + nDigits(5889.1)
// 2 + nDigits(588.91)
// 3 + nDigits(58.891)
// 4 + nDigits(5.8891)
// 5 + nDigits(0.58891)





// fibonacci
// receives a number n
// returns the nth number of the fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//                                                   a  b
//                                                      a  b
//                                                         a  b
// recursive helper
const _fibonacci = (n, a, b) => {
    if (n === 0) {
        return a;
    }
    let temp = a + b;
    a = b;
    b = temp;
    return _fibonacci(n - 1, a, b);
}

const fibonacci = (n) => {
    return _fibonacci(n, 0, 1);
}
console.log(fibonacci(8));




// thrinity
// receives a number n
// returns the nth number of the thrinity sequence: 0, 1, 2, 3, 6, 11, 20, 37, ...
// recursive helper
const _thrinity = (n, a, b, c) => {
    if (n === 0) {
        return a;
    }
    // if (n === 1) {
    //     return b;
    // }
    let temp1 = a + b + c;
    a = b;
    b = c;
    c = temp1;
    return _thrinity(n - 1, a, b, c)
}

const thrinity = (n) => {
    return _thrinity(n, 0, 1, 2);
}
console.log(thrinity(7));

// maxRecursive
// receive an array of numbers
// returns the largest number in the array
// be recursive
// maxRecursive([3, 1, 5, 7, 9, 1, 1, 21, 3]) === 21
// const maxRecursive = (array) => {
//     if (array.length === 0) {
//         return null;
//     }
//     if (array.length === 1) {
//         return array[0];
//     }
//     let i = array.length - 1;
//     if (array[i] >= array[i - 1]) {
//         array.splice(i - 1, 1);
//     } else {
//         array.pop();
//     }
//     return maxRecursive(array);
// }

const maxRecursive = (array) => {
    if (array.length === 0) {
        return null;
    }
    if (array.length === 1) {
        return array[0];
    }
    let m = maxRecursive(array.slice(1));
    return array[0] > m ? array[0] : m;
}
console.log(maxRecursive([3, 1, 5, 7, 9, 1, 1, 21, 3]));




// reverseRecursive("hello") === "olleh"




// const reverseRecursive = (string) => {
//     if (string.length == 0) return string;
//     return reverseRecursive(string.substr(1)) + string[0];
// }


const reverseRecursive = (string) => {
    if (string.length == 0) return string;
    return string[string.length - 1] + reverseRecursive(string.substr(0, string.length - 1));
}
console.log(reverseRecursive("hello"));

let a = { b: { c: "d" } }, b = { c: "d" }
console.log(typeof a);
console.log(Object.getPrototypeOf(a) === b);

const arrayEqual = (array1, array2) => {
    array1.sort();
    array2.sort();
    return array1.length === array2.length && array1.every((value, index) => {
        return value === array2.sort()[index]
    });
}

const deepEqual = (val1, val2) => {
    if (typeof (val1) !== typeof (val2)) {
        return false;
    }
    if (typeof (val1) === "undefined" || typeof (val2) === "undefined") {
        return false;
    }
    if (val1 === null || val2 === null) {
        return val1 === val2;
    }
    if (typeof (val1) != "object") {
        return val1 === val2;
    }
    let keys1 = Object.keys(val1).sort();
    let keys2 = Object.keys(val2).sort();
    if (!arrayEqual(keys1, keys2)) {
        return false;
    }
    for (let key of keys1) {
        if (!deepEqual(val1[key], val2[key])) {
            return false;
        }
    }
    return true;
}

const x1 = {
    a: 1, b: 2, c: [1, 2, 3], d: {
        e: "hello",
        f: {
            g: 431,
            h: ["a", "b"]
        }
    }
};
console.log(deepEqual(x1, x1));
console.log(deepEqual(x1, {
    a: 2, b: 1, c: [1, 2], d: {
        e: "hello",
        f: {
            g: 431,
            h: ["a", "b"]
        }
    }
}));
console.log(deepEqual(x1, x1.d));
console.log(deepEqual(x1, null));
console.log(deepEqual(null, null));
console.log(deepEqual(null, x1.d));
console.log(deepEqual(undefined, undefined));


// const deepEqual = (val1, val2) => {
//     // if (val1 === null || val2 === null || typeof val1 !== object || typeof val2 !== object) {
//     //     console.log("They can't be compared.")
//     //     return false;
//     // }
//     if (typeof val1 !== typeof val2) {
//         return false;
//     }
//     if (typeof val1 === typeof val2 && typeof val1 !== object && typeof val2 !== object) {
//         return true;
//     }
//     if (typeof val1 === typeof val2 && typeof val1 === object) {
//         if (Object.keys(val1) !== Object.keys(val2)) {
//             return false;
//         }
//         typeof val1.key
//         if (Object.values(val1) !== Object.values(val2)) {
//             return false;
//         }
//         deepEqual(val1.)
//     }

// }