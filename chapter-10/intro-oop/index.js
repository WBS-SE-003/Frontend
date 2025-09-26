console.log([1, 2, 3, 4]);
const myPet = {
    name: 'Karl',
    age: 20,
    type: 'dog',
    friends: ['cat', 'rabbit', 'owl'],

    // introduce: function () {
    //     console.log(`Hey, I am ${this.name} and I am ${this.age} years old`);
    introduce: () => {
        console.log(`Hey, I am ${this.name} and I am ${this.age} years old`);
    },

    printFriends: function () {
        this.friends.forEach(function (friend) {
            console.log(`Hey, I am ${this.name} and my friend is ${friend}`);
        });
    },
};

const myPet2 = {
    name: 'Karla',
    age: 25,
    type: 'dog',
    friends: ['cat', 'rabbit', 'owl'],

    // introduce: function () {
    //     console.log(`Hey, I am ${this.name} and I am ${this.age} years old`);
    introduce: () => {
        console.log(`Hey, I am ${this.name} and I am ${this.age} years old`);
    },

    printFriends: function () {
        this.friends.forEach(function (friend) {
            console.log(`Hey, I am ${this.name} and my friend is ${friend}`);
        });
    },
};

myPet.printFriends();

function AnimalMaker(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;

    this.introduce = () => {
        console.log(`Salut, I am ${this.name} and I am ${this.age} years old`);
    };
}

const bello = new AnimalMaker('bello', 100, 'dog');
const bella = new AnimalMaker('bella', 5, 'dog');

console.log(bello);

bello.introduce();
bella.introduce();

class Robot {
    #name;
    constructor(name, age) {
        this.#name = name;
        this.age = age;
    }

    get name() {
        //
        return this.#name;
    }

    set name(newName) {
        if (typeof newName !== 'string') {
            throw new Error('Wrong type');
        }
        this.#name = newName;
    }

    introduce() {
        console.log(`I am ${this.#name}`);
    }

    move() {
        console.log('I can walk');
    }
}

const robotOne = new Robot('Robbie', 2000);

console.log(robotOne.name);
robotOne.introduce();

class SeaRobot extends Robot {
    constructor(name, age, diveDepth) {
        super(name, age);
        this.diveDepth = diveDepth;
    }

    move() {
        console.log(`I can dive ${this.diveDepth} meters deep`);
    }
}

const mySeaRobot = new SeaRobot('Seal', 20, 10000);

console.log(mySeaRobot);
mySeaRobot.move();
