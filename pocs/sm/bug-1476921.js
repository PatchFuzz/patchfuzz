"use strict";

;

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
    
    print(false, true);
  })
  .catch(e => print(e instanceof UniqueError, true));
moduleLink(b);
moduleEvaluate(b)
  .then(r => {
    
    print(false, true);
  })
  .catch(e => print(e instanceof UniqueError, true));

drainJobQueue();
