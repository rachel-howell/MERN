// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// The console will print:
//Tesla
//Mercedes

// -------------------------------------------------------

// Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

// Line 27 will throw a reference error because the variable "name" is not defined

// -------------------------------------------------------

// Problem 3:

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//The console will print:
//12345
// (Line 45 will throw a reference error because the key password is not defined in the object person)
// (My prediction (above) was incorrect and the console printed "undefined", but in Problem 2 line 25 threw a reference error because the variable name was not defined. Why?)

const { password: party } = person;
console.log(party);
console.log(person.password);

// It seems like if you call an attribute of an object that doesn't exist it is just undefined because technically you did declare the variable, but if you call a variable that has not been declared it is deemed a reference error.

// -------------------------------------------------------

// Problem 4:

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//first = 2
//second = 5
//third = 2

//The console will print:
//false
//true

// -------------------------------------------------------

// Problem 5:

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//The console will print:
//value
//[1,5,1,8,3,3]
//1
//5