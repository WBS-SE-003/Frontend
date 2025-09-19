const myArray = [1, 2, 3, 4, 5];

for (const num of myArray) {
    console.log(num);
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

function log(el, index, arr) {
    console.log(el);
    console.log('i', index);
    console.log('arr', arr);
}

myArray.forEach(log);

//map
let multiplied = [];

for (const num of myArray) {
    multiplied.push(num * 2);
}

console.log('multiplied', multiplied);

const multiplied2 = myArray.map(function multiply(el) {
    return el * 2;
});
console.log({ multiplied });

// find

let found;
for (const num of myArray) {
    if (num > 3) {
        found = num;
        break;
    }
}

console.log({ found });

const found2 = myArray.find((el) => el > 3);
console.log({ found2 });

// filter

let filtered = [];

for (const num of myArray) {
    if (num > 3) {
        filtered.push(num);
    }
}
console.log({ filtered });

const filtered2 = myArray.filter((el) => el > 3);
console.log({ filtered2 });

// reduce

let reduced = 0;

for (const num of myArray) {
    reduced += num;
}

console.log({ reduced });

const reduced2 = myArray.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0);
console.log({ reduced2 });

let reducedAdvanced = {};

for (const num of myArray) {
    reducedAdvanced[num] = num;
}
console.log(reducedAdvanced);

const reducedAdvanced2 = myArray.reduce((acc, curr) => {
    acc[curr] = curr;
    return acc;
}, {});

console.log({ reducedAdvanced2 });
