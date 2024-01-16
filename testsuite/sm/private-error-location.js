

try {
    eval(`class A { #declared; }
    m.#declared;`)
} catch (e) {
    assertEq(e instanceof SyntaxError, true)
    assertEq(e.lineNumber, 2);
}

