try {
    eval(`class A { #declared; }
    m.#declared;`)
} catch (e) {
    print(e instanceof SyntaxError, true)
    print(e.lineNumber, 2);
}

