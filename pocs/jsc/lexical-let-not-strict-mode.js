function truth() {
    return true;
}
noInline(truth);

function print(cond) {
    if (!cond)
        throw new Error("broke assertion");
}
noInline(print);

;(function() {

function foo(i) {
    delete x;
    let x = i;
    print(x === i);
}
function bar(i) {
    delete x;
    let x = i;
    function capX() { return x; }
    print(capX() === i);
}

for (var i = 0; i < 1000; i++) {
    foo(i);
    bar(i);
}

})();


;(function() {

function foo() {
    var hadError = false;
    try {
        x;
    } catch(e) {
        hadError = true;
    }
    print(hadError);

    var hadSyntaxErrorForEval = false;
    try {
        if (truth()) {
            let x = 40;
            eval("var x = 20;");
        }
    } catch (e) {
        hadSyntaxErrorForEval = e instanceof SyntaxError;
    }

    print(hadSyntaxErrorForEval);
    print(typeof x === "undefined");
}

function bar() {
    var hadError = false;
    try {
        x;
    } catch(e) {
        hadError = true;
    }
    print(hadError);

    var hadSyntaxErrorForEval = false;
    try {
        if (truth()) {
            let x = 40;
            function capX() { return x; }
            eval("var x = 20;");
        } 
    } catch (e) {
        hadSyntaxErrorForEval = e instanceof SyntaxError;
    }

    print(hadSyntaxErrorForEval);
    print(typeof x === "undefined");
}

function baz() {
    if (truth()) {
        let x = 40;
        eval("let x = 20; print(x === 20);");
        print(x === 40);
    }
    if (truth()) {
        let x = 40;
        function capX() { return x; }
        eval("let x = 20; print(x === 20);");
        print(x === 40);
    }
}

function baz() {
    
    let x = 20;
    let evalString = "x;";

    print(eval(evalString) === 20);
    if (truth()) {
        let y = 60;
        print(eval(evalString) === 20);
        print(y === 60);
        if (truth()) {
            let y = 50, z = 70, x = 40;
            print(eval(evalString) === 40);
            print(y === 50 && z === 70);
        }
    }
}

for (var i = 0; i < 100; i++) {
    foo();
    bar();
    baz();
}

})();
