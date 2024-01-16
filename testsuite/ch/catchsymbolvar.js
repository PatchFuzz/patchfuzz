




function echo(m) { this.WScript ? WScript.Echo(m) : console.log(m); }

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
