








var Test = {};

class A {
    constructor(foo) { this.foo = foo; }
    toB() {
        return new Test.B(this);
    }
}

class B {
    constructor(bar) { this.bar = bar; }
}

Test.B = B;

for (var i=0; i<10; i++)
{
    var a = new A(i);
    var b = a.toB();

    try
    {
        WScript.Echo(b.bar.foo);        
    }
    catch (e)
    {
        WScript.Echo(e);
        WScript.Echo(b);
        break;
    }
}
