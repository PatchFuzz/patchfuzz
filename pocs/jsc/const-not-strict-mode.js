function truth() {
    return true;
}
noInline(truth);

function print(cond) {
    if (!cond)
        throw new Error("broke assertion");
}
noInline(print);





const NUM_LOOPS = 1000;

;(function() {
function foo(i) {
    delete x;
    const x = i;
    print(x === i);
}
function bar(i) {
    delete x;
    const x = i;
    function capX() { return x; }
    print(x === i);
}

for (var i = 0; i < NUM_LOOPS; i++) {
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

    if (truth()) {
        
        
        
        
        
        
        
        
        
        const x = 40;
        let threw = false;
        try {
            eval("var x = 20;");
        } catch(e) {
            threw = true;
            print(e.toString() === "SyntaxError: Can't create duplicate variable in eval: 'x'");
        }
        print(threw);
        print(x === 40);
    }
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

    if (truth()) {
        const x = 40;
        function capX() { return x; }
        let threw = false;
        try {
            eval("var x = 20;");
        } catch(e) {
            threw = true;
            print(e.toString() === "SyntaxError: Can't create duplicate variable in eval: 'x'");
        }
        print(threw);
        print(x === 40);
    }
    print(typeof x === "undefined");
}

function baz() {
    if (truth()) {
        const x = 40;
        eval("const x = 20; print(x === 20);");
        print(x === 40);
    }
    if (truth()) {
        const x = 40;
        function capX() { return x; }
        eval("const x = 20; print(x === 20);");
        print(x === 40);
    }
}

function baz() {
    
    const x = 20;
    const evalString = "x;";

    print(eval(evalString) === 20);
    if (truth()) {
        const y = 60;
        print(eval(evalString) === 20);
        print(y === 60);
        if (truth()) {
            const y = 50, z = 70, x = 40;
            print(eval(evalString) === 40);
            print(y === 50 && z === 70);
        }
    }
}

for (var i = 0; i < NUM_LOOPS; i++) {
    foo();
    bar();
    baz();
}

})();
