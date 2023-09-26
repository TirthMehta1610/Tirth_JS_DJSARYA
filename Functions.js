//codewithharry se kiya hua

// console.log("Hello");
//FUNCTIONS
// DRY principle = Do not repeat yourself

function avg(a,b){
    return (a+b)/2;
}

var c1 = avg(10,2);
var c2 = avg(50,10);
console.log(c1,c2);

//program with if-else and function
var bool = false
function age(x){
    if(x >= 18){
        bool = true;
        return bool;
    }
    else{
        bool = false;
        return bool;
    }
}
var y = age(15);
if(bool == true){
    console.log("You can drink ransa");
}
else{
    console.log("You cannot drink rasna");
}


//udemy se kiya hua 
// let user = "John";  //isiliye ye nai chalega

//default parameters
function registeruser(user = "Bot"){
    // if(!user){
    //     user = "Bot";       //ye pehle use karte the
    // }
    return user + ' is registered';  //this user is not available outside function
}
console.log(registeruser(/*"Tirth"*/));


//rest parameters
function num(...numbers){
    return numbers;
}
console.log(num(1,2,3,4));

//Objects as parameters
function loginUser(user1){
    return `The user ${user1.name} with the id of ${user1.id} is logged in`;
}
const user1 = {
    name:"Tirth",
    id:1,
};
console.log(loginUser(user1));

//Arrays as parameters
function getRandom(...arr){
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
getRandom(1,2,3,4,5,6,7,8,9,10);


//  Normal function declaration
// function add(a, b) {
//   return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
    return a + b;
  };
  
  // Implicit Return
  const subtract = (a, b) => a - b;
  
  // Can leave off () with a single param
  const double = (a) => a * 2;
  
  // Returning an object
  const createObj = () => ({
    name: 'Brad',
  });
  
  const numbers = [1, 2, 3, 4, 5];
  
  numbers.forEach(function (n) {
    console.log(n);
  });
  
  // Arrow function in a callback
  numbers.forEach((n) => console.log(n));
  
  console.log(add(1, 2));
  console.log(subtract(10, 5));
  console.log(double(10));
  console.log(createObj());