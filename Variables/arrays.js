var fruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruits = fruits.push("Kiwi");

console.log(fruits.join("*"));
console.log(fruits.pop());
console.log(fruits);

// Array method to sort the fruits array alphabetically.

const fruits2 = ["Banana", "Orange", "Apple", "Kiwi"];

console.log(fruits2.sort());

// Challenge
// You will be given an array of numbers ar. Print each number in the array in the order it appears, unless the number is a multiple of 3. If a number is a multiple of 3, print no3 instead. (Make sure to print everything in a given array on the same line.

var ar = [1,5,6,7,9,89,76,364,84,34,33,23,4,8,24];

for (i=0; i < ar.length; i++ ){
    if (ar[i] % 3 !== 0) {
        console.log(ar[i]);
    } else {
        console.log(3);
    }

}

// or 
var arr = [1,5,6,7,9,89,76,364,84,34,33,23,4,8,24]; 

for (i=0; i < ar.length; i++){
    if (ar[i] % 3 === 0) {
        console.log('no3');
    } else {
        console.log(arr[i]);
    }
}

// let choice;
// do {
//     console.log("Menu:");
//     console.log("1. Option 1");
//     console.log("2. Option 2");
//     console.log("3. Exit");

//     choice = parseInt(prompt("Enter your choice:"));

//     switch (choice) {
//         case 1:
//             console.log("Option 1 selected");
//             break;
//         case 2:
//             console.log("Option 2 selected");
//             break;
//         case 3:
//             console.log("Exiting...");
//             break;
//         default:
//             console.log("Invalid choice. Please try again.");
//     }
// } while (choice !== 3);

//  Processing Files or Data Scenario: You're building a script to process a CSV file line by line, and you need to skip the header line.

let data = ["Name, Age", "John, 30", "Alice, 25", "Bob, 40"];
let i = 1; // Start from 1 to skip header

do {
    console.log("Processing data:", data[i]);
    i++;
} while (i < data.length);

console.log(data);
