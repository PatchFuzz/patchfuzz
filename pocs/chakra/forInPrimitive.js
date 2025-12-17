var echo = WScript.Echo;

function guard(f) {
    try {
        f();
    } catch (e) {
        echo(e);
    }
}

Object.prototype.object_value = "value on Object.prototype";
Object.defineProperty(
    Object.prototype, "object_getter", {
        get: function () { return "getter on Object.prototype: " + typeof(this) + " " + this; },
        enumerable: true,
        configurable: true
    });

Number.prototype.number_proto = "Value on Number.prototype";
Boolean.prototype.boolean_proto = "Value on Boolean.prototype";
String.prototype.string_proto = "Value on String.prototype";


var tests = [
    null,
    undefined,
    Number.NaN,
    0.4,
    -0,
    0,
    1,
    "",
    true,
    false,

    
    0x80000000,
    0x7FFFFFFF,
    0x40000000,
    0x3FFFFFFF,
    -0x3FFFFFFF,
    -0x40000000,
    -0x40000001,
    -0x80000000,
    -0x80000001,
];

tests.forEach(function (a) {
    echo("---- Test:", a, "----");

    guard(function () {
        echo(a.object_value); 
    });
    guard(function () {
        echo(a.object_getter); 
    });

    echo();
    for (var p in a) { 
        echo(" ", p);
    }

    echo();
});
