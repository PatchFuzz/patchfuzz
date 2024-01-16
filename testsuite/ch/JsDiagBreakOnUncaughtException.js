






function noThrowFunction() {
  try {
    throw new Error("throw exception from noThrowFunction");
  } catch (err) {
  }
}
noThrowFunction();


function throwFunction() { 
   throw new Error("throw exception from throwFunction");
}
throwFunction();
