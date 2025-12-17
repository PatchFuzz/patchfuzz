ignoreUnhandledRejections();

var g = newGlobal({newCompartment: true})


g.nuke = () => {
  
  nukeAllCCWs();
};


var thrower = g.Function(`
  nuke();
  throw 0;
`);

async function justThrow() {
  thrower();
}

justThrow();
