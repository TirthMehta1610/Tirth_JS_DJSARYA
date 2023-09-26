const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemfilter = document.getElementById('filter');
let isEditMode = false;
const formBtn = itemForm.querySelector('button');

function displayitems(){
  const itemsfromstorage = getItemsfromstorage();
  itemsfromstorage.forEach(item => addItemtoDOM(item));
  checkUI();
}

function onaddItemSubmit(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  // Validate Input
  if (newItem === '') {
    alert('Please add an item');
    return;
  }
  
  // Check for edit mode
  if(isEditMode){
    const itemToedit = itemList.querySelector('.edit-mode');

    removeItemformStorage(itemToedit.textContent);
    itemToedit.classList.remove('edit-mode');
    itemToedit.remove();
    isEditMode = false;
  }
  else{
    if(checkifitemexists(newItem)){
      alert('That item already exists');
      return;
    }
  }

  //Create item DOM element
  addItemtoDOM(newItem);

  // Add item to local storage
  addItemtoStorage(newItem);

  checkUI();

  itemInput.value = '';
}

function addItemtoDOM(item){
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  //Add li to the DOM
  itemList.appendChild(li);
}



function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function addItemtoStorage(){
  const itemsfromstorage = getItemsfromstorage();

  //Add new item to array 
  itemsfromstorage.push(item);

  //Convert to JSON string and set to local storage
  localStorage.setItemItem('items',JSON.stringify(itemsfromstorage));
}

function getItemsfromstorage(){
  let itemsfromstorage;

  if(localStorage.getItem('item') === null){
    itemsfromstorage = [];
  }
  else{
    itemsfromstorage = JSON.parse(localStorage.getItem('items'));
  }

  return itemsfromstorage;
}

function onClickItem(e){
  if (e.target.parentElement.classList.contains('remove-item')){
    removeItem(e.target.parentElement.parentElement);
  }
  else{
    setItemtoEdit(e.target);
  }
}

function checkifitemexists(item){
  const itemsfromstorage = getItemsfromstorage();
  return itemsfromstorage.includes(item);
   
}

function setItemtoEdit(item){
  isEditMode = true;

  itemList.querySelectorAll('li').forEach(i => i.classList.remove.add('edit-mode'));

  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class = "fa-solid fa-pen"></i>Update Item';
  formBtn.style.backgroundColor = '#228B22';
  itemInput.value = item.textContent;
}

function removeItem(item) {
   if(confirm('Are you sure')){
    //Revome item from DOM
    item.remove();

    //Remove item from storage
    removeItemformStorage(item.textContent);

    checkUI();
   }
}

function removeItemformStorage(item){
  let itemsfromstorage = getItemsfromstorage();

  //Filter out item to be removed
  itemsfromstorage = itemsfromstorage.filter((i) => i !== item);

  //Reset to local storage
  localStorage.setItem('items',JSON.stringify(itemsfromstorage));
}
  
function clearItems() {
    while (itemList.firstChild) {
      itemList.removeChild(itemList.firstChild);
    }

    // Clear from local storage
    localStorage.removeItem('items');

    checkUI();
}

function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    // console.log(text);
    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        // console.log(itemName);
        if(itemName.indexOf(text) !== -1){
            item.style.display = 'flex';
        }
        else{
            item.style.display = 'none';
        }
    });
}

function checkUI() {
    itemInput.value = '';

    const items = itemList.querySelectorAll('li');

    if(items.length === 0){
        clearBtn.style.display = 'none';
        itemfilter.style.display = 'none';
    }
    else{
        clearBtn.style.display = 'block';
        itemfilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';

    isEditMode = false;
}

// Initialize App
function init(){
  // Event Listeners
  itemForm.addEventListener('submit', onaddItemSubmit);
  itemList.addEventListener('click', onClickItem);
  clearBtn.addEventListener('click', clearItems); 
  itemfilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded',displayitems);

  checkUI();
}

init();

