'use strict';

const obj = {
    n: 5
};

const inc = (obj) => {
    obj.n += 1
};

inc(obj);

console.log(obj.n);

