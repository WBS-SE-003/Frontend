const firstName = 'Karl';

const greeting = `Hello ${firstName}`;

function greet({ firstName }) {
    console.log(`Hello ${firstName}`);
}

greet({ firstName: 'karl' });
greet({ firstName: 'karla' });

const myPerson = {
    firstName: 'Karl',
    age: 30,
    pets: ['bello', 'rex'],
};

const { age } = myPerson;

myPerson.firstName = 'Karla';
// console.log(myPerson);

const mySecondPerson = {
    ...myPerson,
    age: 40,
    location: 'berlin',
    pets: [...myPerson.pets],
};
mySecondPerson.isMarried = true;

mySecondPerson.pets.push('turly');

// console.log('1', myPerson);
// console.log('2', mySecondPerson);

const myNumbers = [1, 2, 3, 4];

const mySecondNumbers = [...myNumbers];
// console.log(myNumbers);
// console.log(mySecondNumbers);

const products = [
    { id: 1, title: 'backpack' },
    { id: 2, title: 'gamecube' },
    { id: 3, title: 'apple' },
];

const newProducts = products.map((product) => ({ ...product, amount: 0 }));
console.log(newProducts);

const filteredProducts = products.filter((product) => product.id !== 2);

console.log(filteredProducts);

const updatedProducts = [{ id: 4, title: 'banana' }, ...products];
console.log(updatedProducts);

const updatedProducts2 = products
    .filter((product) => product.id !== 2)
    .map((product) => ({ ...product, amount: 0 }));

console.log('updated', updatedProducts2);

console.log([] && 'hello world');

console.log(false ? 'hello' : 'ciao');
