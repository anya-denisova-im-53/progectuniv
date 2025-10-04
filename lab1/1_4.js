'use strict';

const myArray = [ 
    true, false, null, 1, 6, 379, 'city', 'im-53', 'hello', false
];

let counter = {};

for (let item of myArray) {
    let type = typeof item;
    if (counter[type]) {
        counter[type]++;
    } else {
        counter[type] = 1;
    }
}

console.log(counter);

