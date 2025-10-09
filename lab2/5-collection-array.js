
const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Ave', phone: '+380677771111' },
  { name: 'George', phone: '+380931934567' },
];


function findPhoneByName(name) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone;
    }
  }
  
  return 'Phone number not found';
}


console.log(findPhoneByName('Ave'));          
console.log(findPhoneByName('George')); 
console.log(findPhoneByName('Plato'));            
