;

var g = newGlobal({newCompartment: true})


var thrower = g.Function(`
  throw 0;
`);

function* throwAndYield() {
  try {
    thrower();
  } finally {
    
    
    
    
    yield;
  }
}
print(() => [...throwAndYield()], 0);

function* throwAndNuke() {
  try {
    thrower();
  } finally {
    
    
    nukeAllCCWs();
    yield;
  }
}
print(() => [...throwAndNuke()], 0);
