ignoreUnhandledRejections();

var g = newGlobal({newCompartment: true})


var thrower = g.Function(`
  throw 0;
`);

async function justThrow() {
  thrower();
}

justThrow();


nukeAllCCWs();
