//CodeWithHarry se kiya hua
// Conditional Statements + Loops
var age = 34;
if(age > 8){
    console.log("You are not a kid");
}
else{
    console.log("You are a kid");
}

//if-else ladder bhi use karte hai same as java(else if lagake)

//LOOPS
var arr = [1,2,3,4,5];
console.log(arr);
for(var i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

//Same as above
//niche wala chota syntax hai
/*
arr.forEach(function(Element){
    console.log(Element);
})
*/

//WHILE LOOP
let j = 0;
while(j < arr.length){
    console.log(arr[j]);
    j++;
}

do{
    console.log(arr[j]);
    j++;
}while(j < arr.length); //ye nai chalega abhi as upar ka while loop hai,usko comment karne ke baad hoga

//Traversy(udemy) se kiya hua
// If Statement Syntax
if (true) {
    console.log('This is true');
  }
  
  if (false) {
    console.log('This is NOT true');
  }
  
  // Evaluation expressions
  const x = 10;
  const y = 5;
  
  if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
  }
  
  if (x === y) {
    console.log(`${x} is equal to ${y}`);
  } else {
    console.log(`${x} is NOT equal to ${y}`);
  }
  
  // Block scope
  if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
  }
  
  console.log(z); // Throw error
  
  // Shorthand If/Else
  if (x >= y)
    console.log(`${x} is greater than or equal to ${y}`),
      console.log('This is true');
  else console.log('This is false');


//SWITCH CASE
const d = new Date(2022, 1, 10, 19, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

// Immediate value evaluation
switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb or March');
}

// Range evaluation
switch (true) {
  case hour < 12:
    console.log('Good Morning');
    break;
  case hour < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}


// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)

const x1 = function () {};

if (x1) {
  console.log('This is truthy');
} else {
  console.log('This is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

// Checking for literal 0
if (children) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Solution
if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number of children');
}

// Checking for empty arrays
const posts = ['Post One'];

// Always true even when empty
if (posts) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Solution
if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts To List');
}

// Checking for empty objects
const user = {
  name: 'Brad',
};

// Always true, even when no properties
if (user) {
  console.log('List User');
} else {
  console.log('No User');
}

// Solution
if (Object.keys(user).length > 0) {
  console.log('List User');
} else {
  console.log('No User');
}

// Loose Equality (==)
console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// Strict Equality
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false



//Logical Operators
console.log(10 < 20 && 30 > 15 && 40 > 30); // Must all be true
console.log(10 > 20 || 30 < 15); // Only one has to be true

// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts1 = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts1[0]);

// || - Will return the first truthy value or the last value

let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;
console.log(b);

// ?? - Returns the right side operand when the left is null or undefined

let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);


//Ternary Operator
const age = 17;

// Using an if statement
if (age1 >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

// Using a ternary operator
age1 >= 18 ? console.log('You can vote!') : console.log('You can not vote');

// Assigning a conditional value to a variable
const canVote = age1 >= 18 ? true : false;
const canVote2 = age1 >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements

const auth = true;

// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }

// Shorter ternary version
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);

// Ternary with no else
auth ? console.log('Welcome to the dashboard') : null;
// Shorthand for ternary with no else
auth && console.log('Welcome to the dashoard');


//FOR LOOP
// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log('7 is my lucky number');
//   } else {
//     console.log('Number ' + i);
//   }
// }

// Nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}


// Break
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
      console.log('Breaking...');
      break;
    }
    console.log(i);
  }
  
  // Continue
  for (let i = 0; i <= 20; i++) {
    if (i === 13) {
      console.log('Skipping 13...');
      continue;
    }
    console.log(i);
  }


//WHILE DO WHILE LOOP

let i = 0;

while (i <= 20) {
  console.log('Number ' + i);
  i++;
}

// Loop over arrays
const arr = [10, 20, 30, 40, 50];

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// Nesting while loops
while (i <= 5) {
  console.log('Number ' + i);

  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }

  i++;
}

// Do While Loop - Always runs once
do {
  console.log('Number ' + i);
  i++;
} while (i <= 20);


//FOR-OF LOOPS
// Loop through arrays
const items = ['book', 'table', 'chair', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}


//FOR-IN LOOPS
// Loop through objects
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
  };
  
  for (const key in colorObj) {
    console.log(key, colorObj[key]);
  }
  
  // Loop through arrays
  const colorArr = ['red', 'green', 'blue', 'yellow'];
  
  for (const key in colorArr) {
    console.log(colorArr[key]);
  }


//FOR-EACH LOOP
const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// View prototype chain
console.log(socials.__proto__);

// Long form
socials.forEach(function (item) {
  console.log(item);
});

// Short form
socials.forEach((item) => console.log(item));

// We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

socialObjs.forEach((item) => console.log(item.url));


//FILTERS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// Short version
const evenNumbers2 = numbers.filter((number) => number % 2 === 0);

// Same with forEach
const evenNumbers3 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retail companies
const retailCompanies = companies.filter(
  (company) => company.category === 'Retail'
);
// console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
// console.log(earlyCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log(longCompanies);


//MAPS
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers2.map((number) => number * 2);
console.log(doubledNumbers);

// Same with forEach
const doubledNumbers2 = [];
numbers2.forEach((number) => {
  doubledNumbers2.push(number * 2);
});

const companies1 = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// Create an array of company names
const companyNames = companies1.map((company) => company.name);
// console.log(companyNames);

// Create an array with just company and category
const companyInfo = companies1.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// Create an array of objects with the name and the length of each company in years
const companyYears = companies1.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});

console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

// Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);


const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together
const sum = numbers1.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers1.reduce((acc, cur) => acc + cur, 0);

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers1) {
    acc += cur;
  }
  return acc;
};

// Shopping cart example (objects)
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 200 },
];

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);


