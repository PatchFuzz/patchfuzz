



let a;

function foo(s) {
    try {
        eval(s);
    } catch (e) {
        gc();
        a / 1;
        a = null;
    }
}

foo('zz');
foo('class A { y() {} }; a=new A; zz');
foo('class C { y() {} }; gc();');

class A {
    y() {}
}

A.prototype.z = 0
