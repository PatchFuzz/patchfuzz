;

let string = Object.defineProperty(new String("123"), "valueOf", {
    get: function() { throw "get-valueOf"; }
});
print(() => "" + string, "get-valueOf");

string = Object.defineProperty(new String("123"), "toString", {
    get: function() { throw "get-toString"; }
});
print(() => string.toLowerCase(), "get-toString");

string = Object.defineProperty(new String("123"), Symbol.toPrimitive, {
    get: function() { throw "get-toPrimitive"; }
});
print(() => string.toLowerCase(), "get-toPrimitive");

let number = Object.defineProperty(new Number(123), "valueOf", {
    get: function() { throw "get-valueOf"; }
});
print(() => +number, "get-valueOf");