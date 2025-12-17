function Blah()
{
    this.hello = "yay";
}

Blah.prototype = "meow"

function Derived()
{
}

Derived.prototype = new Blah();

var blah = new Blah();
print(blah.hello);
print(blah.toString());
var derived = new Derived();
print(derived.toString());
