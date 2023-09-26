//ARRAY METHODS

let myarr = ["Fan","Camera",34,null,true];

console.log(myarr.length);

myarr.pop(); //last ka element = pop
console.log(myarr); //pop last ke element ko nikaal deta hai

myarr.push("Tirth"); //push ek element ko add karta hai element me
console.log(myarr);

myarr.shift(); //pehle element ko gayab kar deta hai
console.log(myarr);

myarr.unshift("JAVA"); //sabse pehle index pe element add karta hai
console.log(myarr); //also used to print the length of the array

console.log(myarr.toString()); //string me convert kardega

console.log(myarr.sort()); //sort karega saare elements ko



//STRING METHODS

let mystr = "Tirth is a good boy good";

console.log(mystr.length);

console.log(mystr.indexOf("good"));

console.log(mystr.lastIndexOf("good"));

console.log(mystr.substring(0,3)); //print karega 0 se n-1 yaani 2 tak
//ye dono same hi hai thoda difference wo abhi nai pata mujhe
console.log(mystr.slice(0,3)); //print karega 0 se n-1 yaani 2 tak

console.log(mystr.replace("good","bad")); //yaha doubt hai ki dusre wale good ko kaise replace karenge





