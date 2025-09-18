const myArray = [1, 2, 3, 'stuff', true, [3, 4, 5]];

// myArray = ['a,b,c'];
//
console.log(myArray);
console.log(myArray[2]);
console.log(myArray.length);
console.log(Array.isArray(myArray));

myArray.push('newValue');
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log(myArray[5][1]);

myArray[0] = 'hello';
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift('world');
console.log(myArray);
myArray.shift();
console.log(myArray);

console.log(myArray.reverse());
