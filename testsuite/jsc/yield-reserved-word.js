function shouldNotThrow(func) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }
    if (error)
        throw new Error(`bad error: ${String(error)}`);
}

function shouldThrow(func, errorMessage) {
    let errorThrown = false;
    let error;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error('not thrown');
    if (String(error) !== errorMessage)
        throw new Error(`bad error: ${String(error)}`);
}

function checkClassicNoSyntaxError(source) {
    shouldNotThrow(() => eval(source));
}

function checkClassicSyntaxError(source, errorMessage) {
    shouldThrow(() => eval(source), errorMessage);
}

function checkStrictSyntaxError(source, errorMessage) {
    shouldThrow(() => checkModuleSyntax(source), errorMessage);
}


function checkNoSyntaxErrorCases(source) {
    checkClassicNoSyntaxError(source);

    
    
    checkClassicNoSyntaxError(`function *gen() { function f() { ${source} } }`);
    checkClassicNoSyntaxError(`function *gen() { async function f() { ${source} } }`);
    checkClassicNoSyntaxError(`function *gen() { let f = () => { ${source} } }`);
    checkClassicNoSyntaxError(`function *gen() { let f = async () => { ${source} } }`);
    checkClassicNoSyntaxError(`function *gen() { var o = { f() { ${source} } } }`);
    checkClassicNoSyntaxError(`function *gen() { var o = { async f() { ${source} } } }`);
    checkClassicNoSyntaxError(`function *gen() { var o = { get f() { ${source} } } }`);
    checkClassicNoSyntaxError(`function *gen() { var o = { set f(x) { ${source} } } }`);
}


checkNoSyntaxErrorCases(`var yield`);
checkNoSyntaxErrorCases(`let yield`);
checkNoSyntaxErrorCases(`const yield = 1`);
checkNoSyntaxErrorCases(`var {yield} = {}`);
checkNoSyntaxErrorCases(`yield: 1`);
checkNoSyntaxErrorCases(`function yield(){}`);
checkNoSyntaxErrorCases(`function foo(yield){}`);

checkNoSyntaxErrorCases(`(class { *yield(){} })`); 
checkNoSyntaxErrorCases(`function *yield(){}`); 

checkNoSyntaxErrorCases(`var o = { yield(yield){ var yield } }`); 
checkNoSyntaxErrorCases(`var o = { *yield(){} }`); 
checkNoSyntaxErrorCases(`var o = { async yield(){} }`); 
checkNoSyntaxErrorCases(`var o = { get x(){ var yield } }`); 
checkNoSyntaxErrorCases(`var o = { set x(yield){} }`); 
checkNoSyntaxErrorCases(`var o = { set x(yield){} }`); 




checkClassicSyntaxError(`
function* foo() { yield: 1; }
`, `SyntaxError: Cannot use 'yield' as a label in a generator function.`);

checkClassicSyntaxError(`
function* foo() { var yield; }
`, `SyntaxError: Cannot use 'yield' as a variable name in a generator function.`);

checkClassicSyntaxError(`
function* foo() { let yield; }
`, `SyntaxError: Cannot use 'yield' as a lexical variable name in a generator function.`);

checkClassicSyntaxError(`
function* foo() { var {yield} = {}; }
`, `SyntaxError: Cannot use abbreviated destructuring syntax for keyword 'yield'.`);

checkClassicSyntaxError(`
function* foo(yield){}
`, `SyntaxError: Cannot use 'yield' as a parameter name in a generator function.`);


checkClassicSyntaxError(`
(function* yield() { })
`, `SyntaxError: Cannot declare generator function named 'yield'.`);


checkClassicSyntaxError(`
function* foo() { function* yield(){} }
`, `SyntaxError: Cannot use 'yield' as a generator function name in a generator function.`);


checkClassicSyntaxError(`
function* gen() { (class yield {}) }
`, `SyntaxError: Unexpected keyword 'yield'. Expected opening '{' at the start of a class body.`);




checkStrictSyntaxError(`
function* foo() { yield: 1; }
`, `SyntaxError: Cannot use 'yield' as a label in strict mode.:2`);

checkStrictSyntaxError(`
var yield;
`, `SyntaxError: Cannot use 'yield' as a variable name in strict mode.:2`);

checkStrictSyntaxError(`
let yield;
`, `SyntaxError: Cannot use 'yield' as a lexical variable name in strict mode.:2`);

checkStrictSyntaxError(`
var {yield} = {};
`, `SyntaxError: Cannot use abbreviated destructuring syntax for keyword 'yield'.:2`);

checkStrictSyntaxError(`
yield: 1
`, `SyntaxError: Cannot use 'yield' as a label in strict mode.:2`);

checkStrictSyntaxError(`
import {yield} from 'foo'
`, `SyntaxError: Cannot use keyword as imported binding name.:2`);

checkStrictSyntaxError(`
function* foo(yield){}
`, `SyntaxError: Cannot use 'yield' as a parameter name in strict mode.:2`);

checkStrictSyntaxError(`
function* yield(){}
`, `SyntaxError: Cannot use 'yield' as a generator function name in strict mode.:2`);

checkStrictSyntaxError(`
(function* yield(){})
`, `SyntaxError: Cannot use 'yield' as a generator function name in strict mode.:2`);

checkStrictSyntaxError(`
function* gen() { (class yield {}) }
`, `SyntaxError: Unexpected keyword 'yield'. Expected opening '{' at the start of a class body.:2`);

checkClassicSyntaxError(`
function *get() { var o = { yield }; }
`, `SyntaxError: Cannot use 'yield' as a shorthand property name in a generator function.`);






checkClassicSyntaxError(`function *gen() { function yield() {} }`, `SyntaxError: Unexpected keyword 'yield'`);
checkClassicNoSyntaxError(`function *gen() { function f(yield) {} }`);



checkClassicNoSyntaxError(`function *gen() { (function yield() {}) }`);
checkClassicNoSyntaxError(`function *gen() { (function f(yield) {}) }`)
checkClassicNoSyntaxError(`function *gen() { (function yield(yield) {}) }`)
checkClassicNoSyntaxError(`function *gen() { (function(yield) {}) }`);



checkClassicSyntaxError(`function *gen() { async function yield() {} }`, `SyntaxError: Unexpected keyword 'yield'`);
checkClassicNoSyntaxError(`function *gen() { async function f(yield) {} }`);



checkClassicNoSyntaxError(`function *gen() { (async function yield() {}) }`);
checkClassicNoSyntaxError(`function *gen() { (async function f(yield) {}) }`)
checkClassicNoSyntaxError(`function *gen() { (async function yield(yield) {}) }`);
checkClassicNoSyntaxError(`function *gen() { (async function(yield) {}) }`);



checkClassicSyntaxError(`function *gen() { let f = (yield) => {} }`, `SyntaxError: Cannot use 'yield' as a parameter name in a generator function.`);



checkClassicSyntaxError(`function *gen() { let f = (yield) => {} }`, `SyntaxError: Cannot use 'yield' as a parameter name in a generator function.`);



checkClassicSyntaxError(`function *gen() { let f = async (yield) => {} }`, `SyntaxError: Cannot use 'yield' as a parameter name in a generator function.`);
