//JAVASCRIPT EVENT LISTENER

const clearbtn = document.querySelector('#clear');



// clearbtn.onclick = function () {
//     alert('Clear Form');
// };

//addEventListener()   MODERN WAY   Can be used multiple times

// clearbtn.addEventListener('click', function(){
//     alert('Clear form');
// });

function onCLear(){
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';
                //or
    // items.forEach((item) => item.remove());
                //or
    // while(itemList.firstChild){
    //     itemList.removeChild(itemList.firstChild);
    // }
}

clearbtn.addEventListener('click', onCLear);

// setTimeout(() => clearbtn.removeEventListener('click',onCLear),5000);  //5 second ke baad respond karna band kar dega

// setTimeout(() => clearbtn.click(), 5000);  //automatically 5 sec baad show hoga