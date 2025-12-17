var echo = print ? WScript.Echo : function () { print([].join.apply(arguments, [", "])); };
function print(value, msg) { if (!value) { throw new Error("Failed: " + msg); } }
function endTest() { echo("pass"); }








function changePrototype(f, expectedSucceed, msg) {
    var tmp = new Object();

    
    f.prototype = tmp;

    var succeeded = (f.prototype === tmp);
    print(succeeded === expectedSucceed, msg);
}


function f() { }

changePrototype(f, true, "Should be able to change f.prototype initially");

Object.defineProperty(f, "prototype", { writable: false });
changePrototype(f, false, "f.prototype is now not writable, shouldn't be changed");

endTest();
