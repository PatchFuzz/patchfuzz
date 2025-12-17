print(
    "async function f() { let v = 1; for await (var v of {}) { }",
    SyntaxError);
