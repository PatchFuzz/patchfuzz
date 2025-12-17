;

var g = newGlobal({newCompartment: true})


var thrower = g.Function(`
  throw 0;
`);

async function throwAndAwait() {
  try {
    thrower();
  } finally {
    
    
    
    
    await {};
  }
}
throwAndAwait().then(() => {
  throw new Error("missing error");
}, e => {
  print(e, 0);
});
