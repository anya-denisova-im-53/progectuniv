function difference(array1, array2) {
    const result = [];
    for (let item of array1) {
        if (!array2.includes(item)) {
            result.push(item);
        }
    }
    return result;
}
