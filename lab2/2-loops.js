
function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}


function rangeOdd(start, end) {
  const result2 = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      result2.push(i);
    }
  }
  return result2;
}


console.log(range(15, 30));     
console.log(rangeOdd(15, 30));  


