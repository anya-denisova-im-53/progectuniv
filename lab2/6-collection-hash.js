
const phoneBookHash = {
  'Marcus Aurelius': '+380445554433',
  'Ave': '+380677771111',
  'George': '+380931934567',
};


function findPhoneByName(name) {
  return phoneBookHash[name];
}

console.log(findPhoneByName('Marcus Aurelius')); 
