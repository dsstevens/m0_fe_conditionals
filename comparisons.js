// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === numberStudents);
// this should log: false

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
console.log("Is numberStudents greater than or euqal to 21?", numberStudents >=21);
// this should log: false

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// this should log: true

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
console.log("Is numberStudents less than or equal to 21?", numberStudents <=21);
// this should log: true


// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
// Is 4 less than 9?
// This should log true.
// This conditional statement is asking how these elements compare to each other in a boolean statement. 
// 4 and 9 are defined numbers with fixed values, so 4 is always less than 9. The expected output is true. 
// console.log is commanding the console to print the expected output.

var books = 3;
console.log(4 < books);
// YOU DO: Explain.
// Is 4 less than books?
// This should log false.
// We define the variable `books` as having the numerical value of 3.
// This boolean statement is asking if the number 4 is less than the variable books. 
// Since we defined books as having the value of 3 then the expected output is false.

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
// Is the value of the variables friends greater than siblings?
// The expected output is true.
// We define the variable friends as having the numerical value of 6 and siblings as 2.
// This boolean statement is asking if the value of friends is more than siblings.


var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// Is the value of the variable attendees not strictly equal to the value of the variable meals?
// The expected output is true and you have one hungry guest.
// We define the variables of attendees as the numerical value of 9 and meals as the numerical value of 8.
// This boolean statement is asking if the value of the attendees is not strictly equal to the value of meals.



// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log (lovesToPlay && age)
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER:
// The final line of code evaluated to be just the number 1. 
// I think this is because the comparison model doesn't work with the second variable of age, 
// so the output defaults to just the number value which is a constant.