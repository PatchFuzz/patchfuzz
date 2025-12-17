print("../UnitTestFramework/known_globals.js");

let x;
print(x);
{
    let x = 5;
    print(x);
}
print(x);

for (var a in this) {
    if (isKnownGlobal(a))
        continue;
    print(a);
}
print();


function f() {
    const x = 'a';
    print(x);
    if (1 > 0)
    {
        let x;
        print(x);
    }
    print(x);
    print(f);
}f();

print(x);
