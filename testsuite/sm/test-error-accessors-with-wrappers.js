let g = newGlobal();

let error = g.eval("Error()");


assertEq(typeof error.stack, "string");

g.error = Error();


assertEq(g.eval("typeof error.stack"), "string");
