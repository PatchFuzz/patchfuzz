function bytecode(f) {
    if (typeof disassemble !== "function")
        return "unavailable";
    var d = disassemble(f);
    
    d = d.replace(/(\n\d{5}:).*\d+/g, "$1");
    return d.slice(d.indexOf("main:"), d.indexOf("\n\n"));
}
print(bytecode(() => "hello" + "world"),
         bytecode(() => "helloworld"));
print(bytecode(() => 2 + "2" + "2"),
         bytecode(() => "222"));
print(bytecode(() => "x" + "3"),
         bytecode(() => "x3"));

var s = "hoge";
print(bytecode(() => "fo" + "o" + s + "ba" + "r"),
         bytecode(() => "foo" + s + "bar"));
print(bytecode(() => "fo" + "o" + 1 + s + 1 + "ba" + "r"),
         bytecode(() => "foo1" + s + "1bar"));
print(bytecode(() => 1 + (2 * 2) + "x"),
         bytecode(() => 5 + "x"));
print(s + 1 + 2, "hoge12");
print((() => s + 1 + 2)(), "hoge12");


print(bytecode(() => "x" + s + 1 + 1),
         bytecode(() => "x" + s + "11"));

var n = 5;
print(1 + n + 1 + "ba" + "r", "7bar");
print(1 + 2 + {valueOf: () => 3, toString: () => 'x'} + 4 + 5,15);
print(1+2+n,8);
print(bytecode(() => 1 + 2 + n + 1 + 2),
         bytecode(() => 3 + n + 1 + 2));
print(1 + 2 + n + 1 + 2, 11);
print(bytecode(() => 1 + 2 + s + 1 + 2),
         bytecode(() => 3 + s + 1 + 2));
print(1 + 2 + s + 1 + 2, "3hoge12");

print(bytecode(() => ["a" + "b" + n]),
         bytecode(() => ["ab" + n]));
var a = ["a" + "b" + n];
print(a[0], "ab5");

