print("(import(foo)) =>", SyntaxError, "Invalid destructuring assignment target");


print("import(foo) =>", SyntaxError, "Malformed arrow function parameter list");
print("(a, import(foo)) =>", SyntaxError, "Invalid destructuring assignment target");
print("(1, import(foo)) =>", SyntaxError, "Invalid destructuring assignment target");
print("(super(foo)) =>", SyntaxError, "'super' keyword unexpected here");
print("(bar(foo)) =>", SyntaxError, "Invalid destructuring assignment target");


print("[import(foo).then] = [1];", ReferenceError, "foo is not defined");
print("[[import(foo).then]] = [[1]];", ReferenceError, "foo is not defined");
