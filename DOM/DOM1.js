// //Traversing the DOM - Elements

// let output;

// const parent = document.querySelector('.parent');

// output =  parent.children;     //gives an HTML collection of all the div child 
// output =  parent.children[1].innerText;      //Child 2
// output =  parent.children[1].className;     //child
// output =  parent.children[1].nodeName;      //DIV

// parent.children[1].innerText = 'Child Two';
// parent.children[1].style.color = 'red';

// parent.firstElementChild.innerText = 'Child One';
// parent.lastElementChild.innerText = 'Child Three';

// //Get Parent Elements from Child

// const child = document.querySelector('.child');

// output = child.parentElement;
// child.parentElement.style.border = '2px solid #ccc';
// child.parentElement.style.padding = '10px';

// //Sibling elements

// const secondItem = document.querySelector('.child:nth-child(2)');
// output = secondItem;
// output = secondItem.nextElementSibling;

// secondItem.nextElementSibling.style.color = 'green';
// secondItem.previousElementSibling.style.color = 'orange';

// console.log(output);
// // console.dir(output);





// // Traversing the DOM - Node
// let output;

// const parent = document.querySelector('.parent');

// output = parent.childNodes;   //gives u a node list
// output = parent.childNodes[0].nodeName;     //#text
// output = parent.childNodes[3].textContent;     //Child 1
// output = parent.childNodes[3].innerHTML;        //Child 1
// output = parent.childNodes[3].outerHTML;

// output = parent.childNodes[3].innerHTML = 'Child One';
// output = parent.childNodes[5].style.color = 'red';

// output = parent.firstChild;
// output = parent.lastChild;

// parent.lastChild.textContent = "hello";

// //Parent Node

// const child = document.querySelector('.child');

// output = child.parentNode;
// output = child.parentElement;  //ye dono iss case me same hi output denge

// child.parentNode.style.backgroundColor = '#ccc';
// child.parentNode.style.padding = '10px';

// //Siblings
// const secondItem = document.querySelector('.child:nth-child(2)');

// output = secondItem;

// output = secondItem.nextSibling;
// output = secondItem.previousSibling;     //ye dono abhi #text output denge as white space hai next aur previous nodes

// console.log(output);




// // CREATE AND APPEND ELEMENTS

// const div = document.createElement('div');
// div.className = 'my-element';
// div.id = 'my-element';
// div.setAttribute('title', 'My Element');

// // div.innerText = 'Hello World';    //Easy way to put text

// const text = document.createTextNode('Hello World');    //better way
// div.appendChild(text);

// // document.body.appendChild(div);

// document.querySelector('ul').appendChild(div).style.border = '1px solid #ccc';
// document.querySelector('ul').appendChild(div).style.padding = '10px';
// document.querySelector('ul').appendChild(div).style.paddingRight = '110px';

// // console.log(div);




// // QUICK AND DIRTY WAY - innerHTML

// function createListItem(item){                         //ye wale ka output nai aa raha hai
//     const li = document.createElement('li');            //ye puchna hai

//     li.innerHTML = `${item}
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;

//     document.querySelector('.item').appendChild(li);
// }



// // CLEAN AND PERFORMANTW WAY - createElement()

// function createNewItem(item){
//     const li = document.createElement('li');
//     li.appendChild(document.createTextNode(item));

//     const button = createButton('remove-item btn-link text-red');

//     li.appendChild(button);

//     document.querySelector('.items').appendChild(li);

//     // console.log(li.innnerHTML);
//     // console.log(button);
// }
// function createButton(classes){
//     const button = document.createElement('button');
//     button.className = classes;

//     const icon = createIcon('fa-solid fa-xmark');
//     button.appendChild(icon);

//     return button;
// }

// function createIcon(classes){
//   const icon = document.createElement('i');
//   icon.className = classes;
//   return icon;
// }

// // createListItem('Eggs');
// createNewItem('Cheese');





// INSERT ELEMENTS,TEXT AND HTML

/*
<!-- beforebegin
<p>
  afterbegin
  foo
  beforeend
</p>
afterend -->
*/

// // insertadjacentelement example
// function insertElement(){
//   const filter = document.querySelector('.filter');

//   const h1 = document.createElement('h1');
//   h1.textContent = 'insertAdjacentElement';

//   filter.insertAdjacentElement('beforebegin',h1);
// }

// insertElement();


// //insertadjacenttext example
// function insertText(){
//   const item = document.querySelector('li:first-child');

//   item.insertAdjacentText('afterend','insertAdjacentText');
// }

// insertText();


// //insertadjacenthtml example
// function insertHTML(){
//   const clearBtn = document.querySelector('#clear');

//   clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
// }

// insertHTML();


// //insertbefore example
// function insertBeforeItem(){
//   const ul = document.querySelector('ul');

//   const li = document.createElement('li');
//   li.textContent = 'insertBefore';

//   const thirdItem = document.querySelector('li:nth-child(3)');

//   ul.insertBefore(li, thirdItem);
// }

// insertBeforeItem();


// // CUSTOM INSERTAFTER FUNCTION CHALLENGE
// function insertAfter(newEL, existingEL){
//   existingEL.parentElement.insertBefore(newEL,existingEL.nextSibling);
// }

// //New element to insert
// const li = document.createElement('li');
// li.textContent = 'Insert Me After';

// //Existing element to insert after
// const firstItem = document.querySelector('li:first-child');

// //Our custom function
// insertAfter(li, firstItem);





// //REPLACING ELEMENTS

// //First Way
// function replacefirstItem(){
//   const firstItem = document.querySelector('li:first-child');

//   const li = document.createElement('li');
//   li.textContent = 'Replaced First';

//   firstItem.replaceWith(li);
// }

// replacefirstItem();

// //Second Way
// function replacesecondItem(){
//   const secondItem = document.querySelector('li:nth-child(2)');

//   secondItem.outerHTML = '<li>Replaced Second</li>';
// }

// replacesecondItem();

// //Third Way - Replace all items together
// function replaceallItems(){
//   const lis = document.querySelectorAll('li');

//   // lis.forEach((item,index) => {
//   //   // item.outerHTML = '<li>Replace All</li>'; or
//   //   if(index === 1){
//   //     item.innerHTML = 'Second Item';
//   //   }else{
//   //     item.innerHTML = 'Replace All';
//   //   }
//   // });

//   //or

//   lis.forEach(
//     (item,index) => (item.outerHTML = index === 1 ? 
//   '<li>Second Item</li>':'<li>Item</li>')
//   );
// }
// replaceallItems();


// function replaceChildHeading(){
//   const header = document.querySelector('header');
//   const h1 = document.querySelector('h1');

//   const h2 = document.createElement('h2');
//   h2.id = 'app-title';
//   h2.textContent = 'Shopping List';
//   header.replaceChild(h2,h1);
// }
// replaceChildHeading();




// //REMOVING ELEMENTS

// function removeClearButton(){
//   const clearBtn = document.querySelector('#clear');
//   clearBtn.remove();
// }
// removeClearButton();

// function firstItem(){
//   const ul = document.querySelector('ul');
//   const li = document.querySelector('li:first-child');

//   ul.removeChild(li);
// }
// // firstItem();

// function removeItem(itemNumber){
//   const ul = document.querySelector('ul');
//   const li = document.querySelector(`li:nth-child(${itemNumber})`);

//   ul.removeChild(li);
// }
// // removeItem(1);

// function removeItem2(itemNumber){
//   const ul = document.querySelector('ul');
//   const li = document.querySelectorAll('li')[itemNumber];

//   ul.removeChild(li);
// }
// // removeItem2(1);

// function removeItem3(itemNumber){
//   const li = document.querySelectorAll('li');
//   li[itemNumber].remove();
// }
// removeItem3(2);




//WORKING WITH STYLES AND CLASSES

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
  // className - Gets a string of all classes
  console.log(itemList.className);
  // Changing the classes with className
  text.className = 'card dark';

  // classList - Array of classes, which also has methods to add, remove, toggle and replace
  console.log(itemList.classList);

  // We can loop through the classes
  itemList.classList.forEach((c) => console.log(c));

  // Add, remove, toggle, replace
  text.classList.add('dark');
  text.classList.remove('card');
  text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // style property - Add styles to elements
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;