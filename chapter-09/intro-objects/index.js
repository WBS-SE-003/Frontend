const firstPerson = {
    firstName: 'Karl',
    age: 30,
    friends: ['Hannah', 'John'],
    location: {
        city: 'berlin',
    },
    greet: () => console.log('Hey'),
};

console.log(firstPerson.age);

console.log(firstPerson.location.city);

console.log(firstPerson.friends[0]);

firstPerson.greet();

const myKey = 'age';

console.log(firstPerson[myKey]);

firstPerson.firstName = 'Karla';

firstPerson.lastName = 'Karlsen';

console.log(firstPerson);

const myFriends = [
    { firstName: 'Hannah', age: 20 },
    { firstName: 'Karla', age: 50 },
];

const [firstFriend, secondFriend] = myFriends;
console.log('first', firstFriend);

console.log(myFriends[0].age);

const specialName = firstPerson.firstName;
const {
    firstName,
    location: { city },
} = firstPerson;
console.log(firstName);
console.log(city);

// function greetPerson(person) {
//     console.log(`Hey ${person.firstName}`);
// }

// function greetPerson({ firstName }) {
//     console.log(`Hey ${firstName}`);
// }
//

function greetPerson(firstName) {
    console.log(`Hey ${firstName}`);
}
// greetPerson(firstPerson);

greetPerson('stefan');

console.log(console);
console.error('warning');

const alphabet = ['a', 'b', 'c', 'd'];

console.log(alphabet[Math.floor(Math.random() * alphabet.length)]);

console.log(new Date().getMonth());

console.log('document');
console.log(document);

console.log(Object.entries(firstPerson));

const myCopy = { ...firstPerson };
firstPerson.firstName = 'Jane';
console.log(myCopy);
