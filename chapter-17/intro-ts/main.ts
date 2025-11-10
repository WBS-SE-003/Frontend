export let myAge = 30;
// myAge = '20';
//

let numberA = 20;
let numberB = 20;

console.log(numberA + numberB);

function addNumbers(a: number, b: number) {
    return a + b;
}

addNumbers(numberA, numberB);

const person = {
    firstName: 'Karl',
    age: 30,
};

console.log(person.location);

type Config = {
    db: {
        connectionString: string;
        connect: () => void;
    };
};

const config: Config = {
    db: {
        connectionString: 'url',
        connect: () => console.log('connecting'),
    },
};

function startProgram(conf: Config) {
    config.db.start();
}

const myName = 'Karl';

const myPets = ['bello', 'rex'];
myPets.push('birdy');
myPets.push(2);

type status = 'loading' | 'error' | 'successfull';

let status: status = 'waiting';
