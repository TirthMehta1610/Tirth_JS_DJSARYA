//INPUT EVENTS  &  FORM SUBMISSION  &  EVENT BUBBLING  &  EVENT DELEGATION

// const itemInput = document.getElementById('item-input');
// const priorityInput = document.getElementById('priority-input');
// const checkbox = document.getElementById('checkbox');
// const heading = document.querySelector('h1');

// function onInput(e){
//     heading.textContent = e.target.value;
// }
// itemInput.addEventListener('input', onInput);
// priorityInput.addEventListener('input', onInput);  //can use change inplace of input here



// function onChecked(e){
//     const ischecked = e.target.checked;
//     heading.textContent = ischecked ? 'Checked' : 'Not Checked';
// }
// checkbox.addEventListener('input', onChecked);

// function onfocus(){
//     console.log('Input is focused');  
//     itemInput.style.border = 'solid 2px green';
// }

// function onblur(){
//     console.log('Input is blurred');
//     itemInput.style.border = '1px grey';
// }


// itemInput.addEventListener('focus', onfocus);    //click in the dabba
// itemInput.addEventListener('blur', onblur);      //click anywhere outside the dabba




// //FORM SUBMISSION

// const form = document.getElementById('item-form');

// function onSubmit(e) {
//   e.preventDefault();

//   // Get value with .value
//   const item = document.getElementById('item-input').value;
//   const priority = document.getElementById('priority-input').value;

//   if (item === '' || priority === '0') {
//     alert('Please fill in all fields');
//     return;
//   }

//   console.log(item, priority);
// }

// // Using the FormData Object
// function onSubmit2(e) {
//   e.preventDefault();

//   const formData = new FormData(form);

//   // Get individual items
//   const item = formData.get('item');
//   const priority = formData.get('priority');

//   console.log(item, priority);

//   // Get al entried as an Iterator
//   const entries = formData.entries();
//   console.log(entries);

//   // Loop through entries
//   for (let entry of entries) {
//     console.log(entry[1]);
//   }
// }

// form.addEventListener('submit', onSubmit2);




// //EVENT BUBBLING

// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(2)');
// const form = document.querySelector('form');


// button.addEventListener('click', (e) => {
//     alert('Button was clicked');
//     e.stopPropagation();           
// });

// div.addEventListener('click', () => {
//     alert('Div was clicked');
// });

// form.addEventListener('click', () => {
//     alert('Form was clicked');
// });

// document.body.addEventListener('click' , () => {
//     alert('Body was clicked');
// });





// EVENT DELEGATION AND MULTIPLE EVENTS

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

//ye niche ka itna useful nai hai kyuki agar bohut saare elements hue to efficient nai hoga
// listItems.forEach(item => {
//     // console.log()
//     item.addEventListener('click', (e) => {
//         // console.log(e.target);
//         e.target.remove();
//     });
// });
 
list.addEventListener('click', (e) => {
    // console.log(e.target);
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.style.color = 'red';
    }
});