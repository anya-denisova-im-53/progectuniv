function fn() {
  
  const constObj = { name: "Alice" };

  
  let letObj = { name: "Mark" };

  
  constObj.name = "Charlie";
  letObj.name = "Dave";

  //  constObj = { name: "Eve" }; // НЕ МОЖНА — const не дозволяє переназначення
  letObj = { name: "Eve" };


  console.log("constObj:", constObj);
  console.log("letObj:", letObj);
}
function createUser(name, city) {
  return { name, city };
}


fn();

function createUser(name, city) {
  return { name, city };
}

console.log(createUser('Maria', 'Berlin'));
