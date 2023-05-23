var goodDrivingRecord = true;
var age = 24;

// Write a program that evaluates the status of the variables 
// above, and uses logic to print one of three possible messages:

// if the driving record is good and user is over 25 years old,
// they should get a discount on the car rental

// if the user either has a good record or is over 25 years old,
// they should pay full price

// if the user is not over 25 and has a bad driving record,
// they need to have someone else sign for the rental

if (goodDrivingRecord === true && age > 25){
    console.log("You get a car rental discount");
  } else if (goodDrivingRecord === true || age > 25){
    console.log("You have to pay full price");
  } else {
    console.log("Sorry, Someone else needs to sign for the rental.");
  }
  
  