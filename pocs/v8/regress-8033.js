print("foo: if (true) do { continue foo } while (false)", SyntaxError);
print("foo: if (true) while (false) { continue foo }", SyntaxError);
print("foo: if (true) for (; false; ) { continue foo }", SyntaxError);
print("foo: if (true) for (let x of []) { continue foo }", SyntaxError);
print("foo: if (true) for (let x in []) { continue foo }", SyntaxError);

print("foo: if (true) { do { continue foo } while (false) }", SyntaxError);
print("foo: if (true) { while (false) { continue foo } }", SyntaxError);
print("foo: if (true) { for (; false; ) { continue foo } }", SyntaxError);
print("foo: if (true) { for (let x of []) { continue foo } }", SyntaxError);
print("foo: if (true) { for (let x in []) { continue foo } }", SyntaxError);

print("foo: goo: if (true) do { continue foo } while (false)", SyntaxError);
print("foo: goo: if (true) while (false) { continue foo }", SyntaxError);
print("foo: goo: if (true) for (; false; ) { continue foo }", SyntaxError);
print("foo: goo: if (true) for (let x of []) { continue foo }", SyntaxError);
print("foo: goo: if (true) for (let x in []) { continue foo }", SyntaxError);

print("foo: goo: if (true) { do { continue foo } while (false) }", SyntaxError);
print("foo: goo: if (true) { while (false) { continue foo } }", SyntaxError);
print("foo: goo: if (true) { for (; false; ) { continue foo } }", SyntaxError);
print("foo: goo: if (true) { for (let x of []) { continue foo } }", SyntaxError);
print("foo: goo: if (true) { for (let x in []) { continue foo } }", SyntaxError);

print("if (true) foo: goo: do { continue foo } while (false)");
print("if (true) foo: goo: while (false) { continue foo }");
print("if (true) foo: goo: for (; false; ) { continue foo }");
print("if (true) foo: goo: for (let x of []) { continue foo }");
print("if (true) foo: goo: for (let x in []) { continue foo }");

print("if (true) foo: goo: { do { continue foo } while (false) }", SyntaxError);
print("if (true) foo: goo: { while (false) { continue foo } }", SyntaxError);
print("if (true) foo: goo: { for (; false; ) { continue foo } }", SyntaxError);
print("if (true) foo: goo: { for (let x of []) { continue foo } }", SyntaxError);
print("if (true) foo: goo: { for (let x in []) { continue foo } }", SyntaxError);

print("if (true) { foo: goo: do { continue foo } while (false) }");
print("if (true) { foo: goo: while (false) { continue foo } }");
print("if (true) { foo: goo: for (; false; ) { continue foo } }");
print("if (true) { foo: goo: for (let x of []) { continue foo } }");
print("if (true) { foo: goo: for (let x in []) { continue foo } }");
