function createGreeting(name,age){
return `Hi, my name is Krystle and I\'m 33 years old`;

}
const greeting1 = createGreeting();
console.log(greeting1);

function getYearOfBirth(age){
const yearOfBirth = 2019 - age;
return `I was born in ${yearOfBirth}.`;

}

function yearOfBirth(age){
if (age < 0) {
    throw new Error("Age cannot be negative");
}
if (name === undefined || age === undefined){
    throw new Error('Arguments not valid');
}
if (typeof age != 'number'){
    throw new TypeError('Age must be number');
}
try {
    const greeting1 = createGreeting('Bob', '35');
    console.log(greeting1);
}
    catch (e){
    console.error(e.message); 
}
