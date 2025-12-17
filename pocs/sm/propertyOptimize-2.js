function Foo(x)
{
  this.f = x + 10;
}

var x = new Foo(0);
print(10, eval("x.f"));

called = false;
Object.defineProperty(Foo.prototype, 'f', {set: function() { called = true; }});

var y = new Foo(0);
print(10, eval("x.f"));
print(undefined, eval("y.f"));
print(called, true);
