'use strict';

function jediName(firstName, lastName){
    return `${lastName.slice(0,3)}${firstName.slice(0,2)}`;
}

function beyond(num){
    if (num === Infinity){
        console.log('And Beyond');
    }
    if (num > 0){
        console.log('To infinity');
    }
    if (num < 0){
        console.log('To negative infinity');
    }
    if (num === 0){
        console.log('Staying home');
    }
}