const sumReduce = (...args) => {
  return args.reduce((acc, value) => acc + value, 0);
};
module.exports = { sumReduce };