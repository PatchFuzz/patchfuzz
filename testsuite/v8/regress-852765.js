




assertThrows("(import(foo)) =>", SyntaxError, "Invalid destructuring assignment target");


assertThrows("import(foo) =>", SyntaxError, "Malformed arrow function parameter list");
assertThrows("(a, import(foo)) =>", SyntaxError, "Invalid destructuring assignment target");
assertThrows("(1, import(foo)) =>", SyntaxError, "Invalid destructuring assignment target");
assertThrows("(super(foo)) =>", SyntaxError, "'super' keyword unexpected here");
assertThrows("(bar(foo)) =>", SyntaxError, "Invalid destructuring assignment target");


assertThrows("[import(foo).then] = [1];", ReferenceError, "foo is not defined");
assertThrows("[[import(foo).then]] = [[1]];", ReferenceError, "foo is not defined");
