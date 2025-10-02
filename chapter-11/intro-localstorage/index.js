localStorage.setItem('myDog', 'Bello');

localStorage.removeItem('myCat');

const myCat = {
    age: 20,
    name: 'Tom',
};

localStorage.setItem('age', 20);
console.log(typeof Number(localStorage.getItem('age')));

localStorage.setItem('myCat', JSON.stringify(myCat));

console.log(JSON.parse(localStorage.getItem('myCat')));

const myPets = ['tom', 'bello'];

localStorage.setItem('myPets', JSON.stringify(myPets));

//

const petsInStorage = JSON.parse(localStorage.getItem('myPets'));

petsInStorage.push('max');

localStorage.setItem('myPets', petsInStorage);

sessionStorage.setItem('temp', 'salut');

process .env.