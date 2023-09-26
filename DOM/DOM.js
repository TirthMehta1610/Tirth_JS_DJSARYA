//DOM MANIPULATION  

// let elem = document.getElementById('click');
// console.log(elem);

// let elemC = document.getElementsByClassName('container');
// console.log(elemC);

// //elemC[0].style.background = "yellow";

// elemC[0].classList.add("bg-primary");


//DOM -> Document Object Model
//DOM is a programming interface  for web/html elements


// console.log(window);
// console.dir(window.document);
// console.log(document.links[0]);   //to access different links
// doucment.body.innerHTML = '<h1>Hello World</h1>';

// document.write('Hello from JS');

// console.log(document.getElementById('main'));

// const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main</h1>'

// document.querySelector('#main h1').innerText = 'Hello';



// let output;

// output = document.all;
// output = document.all[11];
// output = document.all.length;

// output = document.documentElement; //will give everything in the html body

// output = document.head;
// output = document.body;
// output = document.body.children;
// output = document.head.children;

// output = document.doctype;   //HTMl
// output = document.domain;   //127.0.0.1
// output = document.URL; 
// output = document.characterSet;  //UTF-8 
// output = document.contentType;   //text/html

// output = document.forms;
// output = document.forms[0];
// output = document.forms[0].id;
// output = document.forms[0].method;  //get
// output = document.forms[0].action;

// // document.forms[0].id = 'new-id';

// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].id = 'google-link';

// output = document.images;
// output = document.images[0];
// output = document.images[0].src;

// const forms = Array.from(document.forms);
// document.forms.forEach((form) => console.log(form));

// console.log(output);

// SINGLE ELEMENTS

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));

//Set Attributes
document.getElementById('app-title').title = 'Shopping-List';
document.getElementById('app-title').setAttribute('class','title');

const title = document.getElementById('app-title');
console.log(title);

// Get/Change title
console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>';

//Change style
title.style.color = 'red';
title.style.backgroundColor = 'black';   //javascript does not have hyphen
title.style.padding = '10px';
title.style.borderRadius = '10px';

//document.querySelector()

console.log(document.querySelector('h1'));   //its going to select the first one if there are multiple 
console.log(document.querySelector('#app-title')); 
console.log(document.querySelector('.container')); 
console.log(document.querySelector('input[type="text]')); 

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

//Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';

//SELECTING MULITPLE ELEMENTS
// querySelectorAll() will be used maximum times

const listItems = document.querySelectorAll('.item');
console.log(listItems);
console.log(listItems[1].innerText);



// listItems.style.color = 'red';    //This will show error as style is for 1 element
listItems.forEach((item, index) =>{
    item.style.color = 'red';

    // if(index === 1){
    //     item.remove();
    // }

    if(index === 0){
        item.innerHTML = `Oranges
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`;   //itna isiliye likha kyuki wo side ka cross mark nai aa raha tha
    }
});


const listItems2 = document.getElementsByClassName('item');
console.log(listItems2);
console.log(listItems2[2].innerText);   //Oreos


const listItemsArray = Array.from(listItems2);   //first we converted to array
listItemsArray.forEach((item) => {
    console.log(item.innerText);
});

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3);
console.log(listItems3[0].innerText);







