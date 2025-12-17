var obj1 = {B : function () { return {x:"x"}; } }
function A() {
    return obj1;
}

function test1() {
    var o = A();    
    o = A().B();
    return o;
}
test1();

function f1() { return 70; }

function f2() {
    var m = 31;
    m++;
    var coll = new Intl.Collator();
    m += f1();
    return m;
}

function test2() {
    var k = f2();    
    k++;
}

test2();

print("Pass");