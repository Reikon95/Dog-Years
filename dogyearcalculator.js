var myAge = 23;
//age of user - input your age here. You don't need to do anything else!
let earlyYears = 2;
//this value will change due to the calculation 

earlyYears *= 10.5;

let laterYears = myAge - 2;
laterYears *= 4;
//calcs later years
console.log(laterYears);
console.log(earlyYears);

var myAgeInDogYears = laterYears + earlyYears;
//calculates dog years age

var myName = 'Cameron'.toLowerCase();
//returns string of lowercase 


console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
