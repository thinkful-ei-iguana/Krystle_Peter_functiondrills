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

function howManyDays('month', leapYear){
    let numOfDays;
    switch(month){
        case 'september' :
        case 'april' :
        case 'june' :
        case 'november':
        numOfDays = 30;
        break;

        case 'january' :
        case 'march' :
        case 'may' :
        case 'july' :
        case 'august' :
        case 'october' :
        case 'december' :
        numOfDays = 31;
        break;

        case 'february' :
            if (leapYear === true) {
            result = `February has 29 days`;
            }
            if (leapYear === false) {
                result = `February has 28 days`;
                }
    }
    default:
        throw new Error('Must provide a valid month');
    }
    return `${month} has ${numOfDays} days.`;

}

function rockPaperScissors(myNum, computerNum){

    const myNum = Math.floor(Math.random() * 3) + 1;
    const computerNum = Math.floor(Math.random() * 3) + 1;

    if (myNum === 1 && computerNum === 2){
        return `Rock beats scissors`;
    }
    if (myNum === 2 && computerNum === 1){
        return `Paper beats rock`;
    }  
    if (myNum === 2 && computerNum === 3){
        return `Scissors beats paper`;
    }
    if (myNum === 3 && computerNum === 1){
        return `Rock beats scissors`;
    }
    if (myNum === 3 && computerNum === 2){
        return `Scissors beats paper`;
    }
    if (myNum === computerNum){
        return `Tie`;
    }
    if (myNum > 3 || myNum <1) || (computerNum > 3 || computerNum <1)
    throw new Error ('Error');
    }
    
    

    }
