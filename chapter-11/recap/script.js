let result = 0;

function addNumbers(a) {
    result += a;
}
addNumbers(5);
console.log(result);
addNumbers(5);
console.log(result);

// input --> do something -- output

// pure function

function greet(person) {
    console.log(`Hello ${person}`);
}

greet('karl');

const main = document.querySelector('main');
function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    main.appendChild(button);
}

// main.appendChild(createButton('click'));
// main.appendChild(createButton('click'));
// main.appendChild(createButton('click'));
// main.appendChild(createButton('click'));
// main.appendChild(createButton('click'));
// main.appendChild(createButton('click'));
// main.appendChild(createButton('click'));

const greetPerson = () => console.log('hey guest');

const condition = true;

if (condition) {
    console.log('true');
} else {
    console.log('false');
}

console.log(condition ? 'true' : 'false');
console.log(condition && 'elephant');

const myArray = [1, 2, 3, 4];

const result2 = myArray.map((num) => num * 2);
console.log(result2);

const result3 = myArray.filter((num) => num > 2);
console.log(result3);

myArray.forEach((num) => createButton(num));

function createCard({ name, age }) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const ageEl = document.createElement('p');

    nameEl.textContent = name;
    ageEl.textContent = age;

    div.appendChild(nameEl);
    div.appendChild(ageEl);

    main.appendChild(div);
}

const myFriends = [
    { id: 2, name: 'Hannah', age: 30 },
    { id: 3, name: 'Jane', age: 40 },
];

const [friend1, friend2] = myFriends;
console.log(friend1);

myFriends.forEach((friend) => createCard(friend));

console.log(`Hey ${myFriends[0].name}`);

async function getData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Something failed');
        const data = await res.json();
        data.forEach((post) => createPost(post));
    } catch (error) {
        console.log(error.message);
    }
}

getData('https://jsonplceholder.typicode.com/posts');

function createPost(post) {
    const div = document.createElement('div');
    const titleEl = document.createElement('p');
    const contentEl = document.createElement('p');

    titleEl.textContent = post.title;
    contentEl.textContent = post.body;

    div.appendChild(titleEl);
    div.appendChild(contentEl);

    main.appendChild(div);
}
