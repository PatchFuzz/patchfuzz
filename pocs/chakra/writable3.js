var echo = print ? WScript.Echo : function () { print([].join.apply(arguments, [", "])); };
function print(value, msg) { if (!value) { throw new Error("Failed: " + msg); } }
function endTest() { echo("pass"); }








function changePrototype(f, expectedSucceed, msg) {
    var tmp = new Object();

    
    f.prototype = tmp;

    var succeeded = (f.prototype === tmp);
    print(succeeded === expectedSucceed, msg);
}


var f = new Boolean(true);  
f.prototype = 12;           

Object.defineProperty(f, "prototype", { writable: false }); 
changePrototype(f, false, "Should not be able to change f.prototype, writable false");

Object.defineProperty(f, "prototype", { writable: true });  
changePrototype(f, true, "f.prototype is now writable, should be changed");

endTest();
