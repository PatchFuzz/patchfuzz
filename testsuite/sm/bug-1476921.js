
"use strict";

load(libdir + "asserts.js");

class UniqueError extends Error {}

let a = registerModule('a', parseModule(`
    throw new UniqueError();
`));

let b = registerModule('b', parseModule(`
    import * as ns0 from "a";
`));

moduleLink(a);
moduleEvaluate(a)
  .then(r => {
    
    assertEq(false, true);
  })
  .catch(e => assertEq(e instanceof UniqueError, true));
moduleLink(b);
moduleEvaluate(b)
  .then(r => {
    
    assertEq(false, true);
  })
  .catch(e => assertEq(e instanceof UniqueError, true));

drainJobQueue();
