g = newGlobal({newCompartment: true});
g.parent = this;
g.eval(`new Debugger(parent).onExceptionUnwind = () => null;`);
let exc = "fail";

import("javascript: throw 'foo'").catch(e => { exc = e; });
drainJobQueue();
assertEq(exc, undefined);

