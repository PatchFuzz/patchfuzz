function echo(m) { print ? print(m) : print(m); }

function foo() {
    function bar() {
        eval("throw new Error('bar')");
    }

    try {
        bar();
    } catch (e) {
        var e = new Error(); 
        echo("pass");
    }
}

foo();
