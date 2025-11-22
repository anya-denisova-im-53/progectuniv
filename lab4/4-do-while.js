const sumDoWhile = (...args) => {
  if (args.length === 0) return 0;
  let acc = 0;
  let i = 0;
  do {
    acc += args[i];
    i++;
  } while (i < args.length);
  return acc;
};
module.exports = { sumDoWhile };