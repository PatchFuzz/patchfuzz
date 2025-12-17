function foo() {
};
function f() {
    var e = foo;
    a = new e();
    print(typeof(a), "object");
    e=a;
}
f();
