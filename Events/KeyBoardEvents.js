const itemInput = document.getElementById('item-input');

const onKeypress = e => {              //koi bhi key press karega to print hoga
    console.log('Key Press');
}

const onKeyup = e => {              //koi bhi key press karega to print hoga
    console.log('Key Up');
};

const onKeydown = e => {              //koi bhi key press karega to print hoga
    // console.log('Key down');
    //key
    // console.log(e.key);

    //keycode
    if(e.keyCode === 13){
        alert('You pressed enter');
    }

    //Code
    if(e.code === 'Digit1'){
        console.log('You pressed 1');
    }

    if(e.repeat){
        console.log('You are holding down' + e.key);
    }

    console.log('Shift: ' + e.shiftKey);
    console.log('Control: ' + e.ctrlKey);
    console.log('Alt: ' + e.altKey);


};

// itemInput.addEventListener('keypress', onKeypress);
// itemInput.addEventListener('keyup', onKeyup);
itemInput.addEventListener('keydown', onKeydown);

