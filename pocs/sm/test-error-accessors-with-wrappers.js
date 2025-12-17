let g = newGlobal();

let error = g.eval("Error()");


print(typeof error.stack, "string");

g.error = Error();


print(g.eval("typeof error.stack"), "string");
