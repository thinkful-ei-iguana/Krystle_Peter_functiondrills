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

function decode(word){
    function decode(word) {
        switch(word[0]) {
        case 'a':
          return word[1];
        case 'b':
          return word[2];
        case 'c':
          return word[3];
        case 'd':
          return word[4];
        default:
          return ' ';
        }
      }
// let message = word.split('');

// if (message[0] === 'a'){
//     return word[1];
// }
// if (message[0] === 'b'){
//     return word[2];
// }
// if (message[0] === 'c'){
//     return word[3];
// }
// if (message[0] === 'd'){
//     return word[4];
// }
// else { return ' ';}

// decode ('craft', 'block' , 'argon', 'meter', 'bellls', 'brwon', 'croon', 'droop');