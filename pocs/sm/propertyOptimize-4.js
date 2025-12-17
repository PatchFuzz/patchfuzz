function Foo(a, b, c) {
  this.x = a + b;
  this.y = c;
}

updated = false;
var o = {valueOf: function() {
    Object.defineProperty(Object.prototype, 'y', {set:function() { updated = true; }})
  }};

function Bar() {}
Bar.prototype = new Foo(o, 1, 2);
print(updated, true);
print(Bar.prototype.y, undefined);
