//Ways to print in JAVAScript
//console.log("Hello");
//document.write("This is a document")
//alert("me")

//JavaScript console API
console.log('Hello World', 6 + 4);
console.warn('This is a warning');
console.error('This is an error');

//Datatypes
//sabke liye var hi use hota hai
var num1 = 50;
var num2 = 50.5;
var str1 = 'Tirth';
var str2 = 'TIRTH';
console.log(num1, num2, str1, str2);

//Object
var obj = {
  tirth: 99,
  soham: 98,
  arnav: 97,
};
console.log(obj);

//Booleans
var A = true;
var B = false;
console.log(A, B);

//undefined
//var und = undefined;
var und; //by default undefined hi print hoga
console.log(und);

var n = null;
console.log(n);

/*
Primitive : null,undefined,number,string,boolean,symbol
Reference : arrays and objects
*/

//arrays
var arr = [1, 2, 3, 4, 5]; //datatype koi bhi daal sakte hai ek array mai
console.log(arr);

//Operators
// 1. Arithmatic -> + - * /
var a = 20;
var b = 10;
console.log('The sum of a + b is : ', a + b);
console.log('The difference of a - b is : ', a - b);
console.log('The multiplication of a * b is : ', a * b);
console.log('The division of a / b is : ', a / b);

var c = b;
console.log(c);

//2. Relational -> == >= <= > <
var x = 100;
var y = 80;
console.log(x >= y);

//Logical -> AND OR NOT
console.log(x >= y && x > 100); //false
console.log(x >= y || x > 100); //true
console.log(!x > y); //false

//var - can be updated and re-declared
//let - can be updated but not re-declared
//const - cannot be updated as well as re-declared

//DATE
let mydate = new Date();
console.log(mydate); //current date aur time dikhata hai
console.log(mydate.getDay()); //aise bohut hai 

//Capitalize Challenge
const mystring = "developer";
let mynewString = "";
for(let i = 0;i < mystring.length;i++){
  mynewString = mystring[0].toUpperCase();
}
console.log(mynewString + mystring.substring(1));

//Number Challenge
const x1 = (Math.random()*100 + 1);
const y1 = (Math.random()*50 + 1); 

console.log("The sum of " + Math.floor(x1) + "+" + Math.floor(y1) + "is :" + Math.floor(x1+y1));
console.log("The difference of " + Math.floor(x1) + "-" + Math.floor(y1) + "is :" + Math.floor(x1-y1));
console.log("The multiplication of " + Math.floor(x1) + "*" + Math.floor(y1) + "is :" + Math.floor(x1*y1));
console.log("The division of " + Math.floor(x1) + "/" + Math.floor(y1) + "is :" + Math.floor(x1/y1));
console.log("The modulus of " + Math.floor(x1) + "%" + Math.floor(y1) + "is :" + Math.floor(x1%y1));

//Array Challenge 1
const arrays = [1,2,3,4,5];

console.log(arrays.reverse());

arrays.push(0);
arrays.unshift(6);

console.log(arrays);

//Array Challenge 2
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];
arr2.shift();
const arr3 = arr1.concat(arr2);
console.log(arr3);

//Object challenge

//Step 1
const library = [
{
  title: "Harry Potter",
  author: "J.K. Rowling",
  status: {
    own: true,
    reading: false,
    read: false
  },
},
{
  title: "The Road Ahead",
  author: "Bill Gates",
  status: {
    own: true,
    reading: false,
    read: false
  },
},
{  
  title: "Steve Jobs",
  author: "Walter Isaacson",
  status: {
    own: true,
    reading: false,
    read: false
  },
},
];

//Step 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
const { title: firstBook } = library[0];
console.log(firstBook);

//Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);


//Function Challenges
// Challenge 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(35)} \xB0C `);

// Challenge 2
function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([2, 31, 4, 5, 6]));

// Challenge 3
((length, width) => {
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(20, 10);


//Calculator Challenge
function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid Operator';
  }

  console.log(result);
  return result;
}
calculator(5, 2, '&');


//FIZZBUZZ CHALLENGE
let j = 1;

while (j <= 100) {
  if (j % 15 === 0) {
    console.log('FizzBuzz');
  } else if (j % 3 === 0) {
    console.log('Fizz');
  } else if (j % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(j);
  }

  j++;
}


//ARRAY METHOD CHALLENGE
// Challenge 1
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
  .filter((person) => person.age <= 25)
  .map((person) => ({
    name: person.firstName + ' ' + person.lastName,
    email: person.email,
  }));

console.log(youngPeople);

// Challenge 2
const numbers = [2, -30, 50, 20, -12, -9, 7];

const positiveSum = numbers
  .filter((number) => number > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(positiveSum);

// Challenge 3
const words = ['coder', 'programmer', 'developer'];

const cWords = words.map((word) => {
  return word[0].toUpperCase() + word.slice(1, word.length);
});

console.log(cWords);


