;

const MaxStringLength = 2**30 - 2;


print(() =>  "a".repeat(MaxStringLength + 1),
                       RangeError);


var s = "\u0390".repeat(MaxStringLength);
print(s.length, MaxStringLength);
var ex = null;
try {
    escape(s);
} catch (e) {
    ex = e;
}
print(ex === "out of memory" || (ex instanceof InternalError), true);
