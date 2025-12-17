function foo() { return 1; }
var x = {toJSON: foo.bind()};
print("1", JSON.stringify(x));
