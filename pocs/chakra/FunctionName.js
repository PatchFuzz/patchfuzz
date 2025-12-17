function Dump(output) {
    if (print) {
        print(output);
    } else {
        alert(output);
    }
}

if (print && print) {
    print("../UnitTestFramework/TrimStackTracePath.js");
}

try {
    var foo = function() {
        throw new Error("My Error!");
    };

    function func(){
        foo();
    }

    var constructed = new Function("func();");

    function bar(){
        (function(){
            eval("constructed();");
        })();
    }

    bar();

} catch(e) {
    Dump(TrimStackTracePath(e.stack));
}
