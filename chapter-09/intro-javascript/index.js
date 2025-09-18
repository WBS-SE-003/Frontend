console.log('hello world');

// store information

let myAge;
myAge = 20;
const myName = 'Karl';
// var myPet = 'Bello';
// myAge = 'hello';

// numbers
// strings
// boolean
// arrays
// null
// undefined
// objects

if (myAge) {
    console.log(myAge);
}

// string
//
console.log('double "quotes"');
console.log('single quotes');
console.log(`Hello ${myName}`);
console.log('hello'.length);

// objects
const myPerson = { firstName: 'Karl', age: 20 };
console.log(myPerson.firstName);
console.log(myPerson['firstName']);

// arrays
const myPets = ['bello', 'bella', 'chirpy'];
console.log(myPets[0]);

// Arithmetic
console.log(6 % 5);

let count = 0;
count++;
console.log(count);

// comparison
console.log(5 === '5');
console.log(5 !== '5');
console.log(5 <= 5);

greeting();
console.log(greetPerson('Karl'));

function greeting() {
    return 'hello world';
}

function greetPerson(person) {
    //....
    return `Hello ${person}`;
}
//

const myFunc = function otherName() {
    return 'Something';
};

const myArrowFunc = () => 'something';

console.log(myFunc());
console.log(myArrowFunc());

// scope

const testVariable = 'I am outside';
var testing = 'only';
function log() {
    var testing = 'stuff';
    const testVariable = 'I am inside';
    const insideVariable = 'inside';
    console.log(testVariable);
}

console.log(testing);
log();

console.log(testVariable);
// loop

for (let i = 0; i < 5; i++) {
    console.log('hello');
    console.log(i);
}
