// dynamically typed
let myAge = 20;
age = '20';

// weakly typed
let numberA = 20;
let numberB = '20';

console.log(numberA + numberB);

function addNumber(a, b) {
    return a + b;
}

console.log(addNumber(numberA, numberB));

const person = {
    firstName: 'Karl',
    age: 30,
};

console.log(person.location);

const config = {
    db: {
        connectionString: 'url',
        connect: () => console.log('connecting to a db'),
    },
};

function startProgram(config) {
    config.db.start();
}

startProgram(config);
