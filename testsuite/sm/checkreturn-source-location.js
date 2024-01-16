
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
assertEq(ex instanceof ReferenceError, true);

assertEq(ex.lineNumber, 8);
assertEq(ex.columnNumber, 5);
