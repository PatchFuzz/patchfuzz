function print(a) {
    if (!a)
        throw new Error("Bad assertion");
}

print(typeof 0n === "bigint");
print(typeof 1n !== "object");

function typeOf(value)
{
    return typeof value;
}
noInline(typeOf);

var object = {};
var func = function () { };
var bigInt = 1n;
var number = 0;
var string = "String";
var symbol = Symbol("Symbol");

for (var i = 0; i < testLoopCount; ++i) {
    print(typeOf(object) === "object");
    print(typeOf(func) === "function");
    print(typeOf(bigInt) === "bigint");
    print(typeOf(number) === "number");
    print(typeOf(string) === "string");
    print(typeOf(symbol) === "symbol");
    print(typeOf(null) === "object");
    print(typeOf(undefined) === "undefined");
    print(typeOf(true) === "boolean");
}
