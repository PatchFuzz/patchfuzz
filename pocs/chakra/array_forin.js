function DumpObject(o)
{
    for (var i in o)
    {
        print(i + " = " + o[i]);
    }
}

var a = new Array(0xFFFFFFFF);
print(a.length);
a[0xFFFFFFFE] = 1;

DumpObject(a);

function Foo()
{
}

Foo.prototype[3] = 101;

var o = new Foo();
o[3] = 3;
o[4] = 4;

DumpObject(o);

