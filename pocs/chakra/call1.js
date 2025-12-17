function write(v) { print("" + v); }

function safeCall(func)
{
    try
    {
        return func();
    }
    catch (ex)
    {
        write(ex.name + " (" + ex.number + "): " + ex.message);
    }
}

var x = "global.x";
var o = { x : "object.x" }

function foo(a) {
    write("In foo: " + a + ". this.x: " + this.x);
}

foo(1);
safeCall(function() { foo(1); eval('foo(1) = true;'); });

foo.call(o, 3);

var a = new Array();

for (var i=0; i<10; i++) {
    a[i] = i * i + 1;
}

write(Array.prototype.concat.call(a));
