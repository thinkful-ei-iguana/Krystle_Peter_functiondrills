function createGreeting(name,age){
return `Hi, my name is Krystle and I\'m 33 years old`;
const yearOfBirth = 2019 - age;
return `I was born in ${yearOfBirth}.`;
}
const greeting1 = createGreeting();
console.log(greeting1);