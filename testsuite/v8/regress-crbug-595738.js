



function foo() { return 1; }
var x = {toJSON: foo.bind()};
assertEquals("1", JSON.stringify(x));
