const max = (matrix) => {
  let m = -Infinity;
  for (const row of matrix) {
    for (const value of row) {
      if (value > m) m = value;
    }
  }
  return m;
};

module.exports = { max };