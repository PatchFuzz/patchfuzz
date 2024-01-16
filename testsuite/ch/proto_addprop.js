





if (this.WScript && this.WScript.LoadScriptFile) {
    WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");
}


var p = { pp: 123 };

function F() { this.dummy = 12;  }
F.prototype = p;

function make_object() {
    
    return new F();
}

function foo(o) {
    o.x = 1;
    o.y = 2;
}


foo(make_object());
foo(make_object());

var o3 = make_object();

assert.isTrue(Object.getPrototypeOf(o3) === p);
p.__proto__ = { get x() { return "x"; } };

foo(o3);

assert.areEqual("x", o3.x, "Shouldn't add field x");

WScript.Echo("pass");
