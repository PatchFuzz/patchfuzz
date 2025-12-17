function Foo(x)
{
  this.f = x + 10;
}

function Bar()
{
  this.g = 0;
}

Bar.prototype = Foo.prototype;

var x = new Foo(0);
var y = new Bar();

print(10, eval("x.f"));
print(undefined, eval("y.f"));

function Other(x)
{
  this.f = x + 10;
}

var a = new Other(0);
var b = Object.create(Other.prototype);

print(10, eval("a.f"));
print(undefined, eval("b.f"));
