




function foo() {
    var a = {b: {}}
    a = null !== a.b && 0 < a.b.a
    if (!a) return a
}
let result = null;
for (let i=0; i < 100; ++i)
{
    foo();
}

if(foo() === false)
{
    print("Pass")
}
