class A {};
class B extends A {
    constructor(x) {
        if (x === null) {
            throw "fail";
        }
    }
};
let ex;
try {
    new B();
} catch (e) {
    ex = e;
}
print(ex instanceof ReferenceError, true);

print(ex.lineNumber, 8);
print(ex.columnNumber, 5);
