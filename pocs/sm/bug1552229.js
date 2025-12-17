let i = 0;
function f(x) {
    print(++i, x);
    return x;
}
class C{
    [f(1)](){}
    [f(2)] = "hi";
    [f(3)](){}
    [f(4)] = "hi";
}
new C();

if (typeof reportCompare === "function")
  reportCompare(true, true);
