const ages = (persons) => {
  const result = {};

  for (const name in persons) {      
    const { born, died } = persons[name];
    result[name] = died - born;      
  }

  return result;
};

module.exports = { ages };