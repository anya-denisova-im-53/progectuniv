const pipe = (...fns) => {
    for (let fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error('pipe: all arguments must be functions');
        }
    }

    return x => {
        let result = x;
        for (let fn of fns) {
            result = fn(result);
        }
        return result;
    };
};
