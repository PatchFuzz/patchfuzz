function testSyntax(script) {
    try {
        eval(script);
    } catch (error) {
        if (error instanceof SyntaxError)
            throw new Error("Bad error: " + String(error));
    }
}

function testSyntaxError(script, message) {
    var error = null;
    try {
        eval(script);
    } catch (e) {
        error = e;
    }
    if (!error)
        throw new Error("Expected syntax error not thrown");

    if (String(error) !== message)
        throw new Error("Bad error: " + String(error));
}

testSyntaxError(`
class Hello {
    get *gen() {
    }
}
`, `SyntaxError: Unexpected token '*'. Expected a ';' following a class field.`);


testSyntaxError(`
class Hello {
    set *gen(value) {
    }
}
`, `SyntaxError: Unexpected token '*'. Expected a ';' following a class field.`);

testSyntaxError(`
function ** gen() { }
`, `SyntaxError: Unexpected token '**'`);



testSyntax(`
var value = () => {
    yield
}
`);

testSyntax(`
var value = (val = yield) => {
}
`);




testSyntax(`
function *gen() {
    function ng(val = yield) {
    }
}
`);




testSyntaxError(`
var yield;
function *gen() {
    var ng = (val = yield) => {
    }
}
`, `SyntaxError: Unexpected keyword 'yield'. Cannot use yield expression out of generator.`);

(function testYieldBindingIdentifier() {
    var yield = "hello!";
    function* gen() {
        yield (function(x = yield) { return x; })();
    }
    var result = gen().next();
    if (result.value !== "hello!")
        throw new Error("Expected BindingIdentifier bound to 'hello!', but found " + JSON.stringify(result));
})();

testSyntax(`
function* gen() {
    var ng = (it = function*() { yield 1; }) => {
        return it().next();
    }
    yield ng();
}
`);

testSyntaxError(`
function* gen() {
    var ng = (it = function() { yield 1; }) => {
        return it().next();
    }
    yield ng();
}
`, `SyntaxError: Unexpected number '1'`);

testSyntax(`
function gen(val = yield) {
}
`);


testSyntaxError(`
function *gen(val = yield) {
}
`, `SyntaxError: Unexpected keyword 'yield'. Cannot use yield expression within parameters.`);

testSyntaxError(`
function *gen(val = yield 20) {
}
`, `SyntaxError: Unexpected keyword 'yield'. Cannot use yield expression within parameters.`);

testSyntaxError(`
function *gen(val = yield * g) {
}
`, `SyntaxError: Unexpected keyword 'yield'. Cannot use yield expression within parameters.`);


testSyntax(`
function *gen(g = function *() { yield  }) {
}
`);

testSyntaxError(`
function* gen(arguments) {
    "use strict";
}
`, `SyntaxError: Invalid parameters or function name in strict mode.`);

testSyntaxError(`
function* gen(eval) {
    "use strict";
}
`, `SyntaxError: Invalid parameters or function name in strict mode.`);

testSyntaxError(`
function* arguments() {
    "use strict";
}
`, `SyntaxError: 'arguments' is not a valid function name in strict mode.`);

testSyntaxError(`
function* eval() {
    "use strict";
}
`, `SyntaxError: 'eval' is not a valid function name in strict mode.`);

testSyntaxError(`
function* gen(a) {
    let a = 1;
}
`, `SyntaxError: Cannot declare a let variable twice: 'a'.`);

testSyntaxError(`
function* gen(b) {
    const b = 1;
}
`, `SyntaxError: Cannot declare a const variable twice: 'b'.`);

testSyntaxError(`
if (false) function* gen() {}
`, `SyntaxError: Unexpected token '*'. Cannot use generator function declaration in single-statement context.`);
