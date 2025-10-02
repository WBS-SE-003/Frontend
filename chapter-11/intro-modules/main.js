// import * as Storage from './storage.js';
// Storage.addToLocalStorage();
// Storage.removeFromLocalStorage();

// import { addToLocalStorage as save } from './storage.js';
//
import addToLocalStorage from './storage.js';
import './db.js';

import { person } from './storage.js';
addToLocalStorage();

// save();

// console.log(person);
greetPerson();

function greetPerson() {
    console.log('hello person');
}

console.log(person);
