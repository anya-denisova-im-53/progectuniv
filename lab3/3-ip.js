

const ipToInt = (ip = '127.0.0.1') => {
  const bytes = ip.split('.').map(Number);

  return bytes.reduce((acc, byte, index) => {
    const shift = (3 - index) * 8; 
    return acc + (byte << shift);
  }, 0);
};

console.log(ipToInt('127.0.0.1'));       
console.log(ipToInt('10.0.0.1'));        
console.log(ipToInt('192.168.1.10'));    
console.log(ipToInt('0.0.0.0'));         
console.log(ipToInt('8.8.8.8'));
