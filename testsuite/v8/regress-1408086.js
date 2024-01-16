



const obj1 = {a:42};
const obj2 = {a:42};
function foo() {
    obj1.a = 13.37;
    return obj2;
}

class c1 extends foo {
    obj3 = 1;
}
new c1();
new c1();
