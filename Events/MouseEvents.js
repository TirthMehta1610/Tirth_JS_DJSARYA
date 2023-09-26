// MOUSE EVENTS

const logo = document.querySelector('img');

const onclick = () => console.log('click event');

// const onDBLclick = () => console.log('click event twice');
const onDBLclick = () => {
    // document.body.style.backgroundColor = 'cyan';
    if(document.body.style.backgroundColor !== 'cyan'){
        document.body.style.backgroundColor = 'cyan';
        document.body.style.color = 'white';
    }
    else{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
    
};

const onrightclick = () => {
    document.body.style.backgroundColor = 'orange';
}

const onmousedown = () => {
    console.log('Mouse down');
}

const onmouseup = () => {
    console.log('Mouse Up');
}

const onmousewheel = () => {
    console.log('Mouse Wheel');
}

const onmouseover = () => {
    console.log('Mouse Over');
}

const onmouseout = () => {
    console.log('Mouse Out');
}

const ondragstart = () => {
    console.log('Drag Start');
}

const ondrag = () => {
    console.log('Drag');
}

const ondragend = () => {
    console.log('Drag End');
}

logo.addEventListener('click', onclick);
logo.addEventListener('dblclick', onDBLclick);  //do baar click karna hai
logo.addEventListener('contextmenu', onrightclick);  //right click = contextmenu
logo.addEventListener('mousedown', onmousedown);
logo.addEventListener('mouseup', onmouseup);
logo.addEventListener('wheel',onmousewheel);    //image pe jaake scroll karna hai
logo.addEventListener('mouseover',onmouseover);  //image pe jaoge to print hoga
logo.addEventListener('mouseout', onmouseout);   //image me se cursor hataoge to print hoga
logo.addEventListener('dragstart',ondragstart);
logo.addEventListener('drag', ondrag);
logo.addEventListener('dragend', ondragend);