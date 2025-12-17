var counter = 0;

function nextid() {
  counter += 1;
  return counter;
}

function Scope() {
  this.id = nextid();
  this.parent = null;
  this.left = null;
  this.right = null;
  this.head = null;
  this.tail = null;
  this.counter = 0;
}

Scope.prototype = {
  new: function() {
    var Child,
        child;
    Child = function() {};
    Child.prototype = this;
    child = new Child();
    child.id = nextid();
    child.parent = this;
    child.left = this.last;
    child.right = null;
    child.head = null;
    child.tail = null;
    child.counter = 0;
    if (this.head) {
      this.tail.right = child;
      this.tail = child;
    } else {
      this.head = this.tail = child;
    }
    return child;
  },

  destroy: function() {
    if ($root == this) return;
    var parent = this.parent;
    if (parent.head == this) parent.head = this.right;
    if (parent.tail == this) parent.tail = this.left;
    if (this.left) this.left.right = this.right;
    if (this.right) this.right.left = this.left;
  }
};

function inc(scope) {
  scope.counter = scope.counter + 1;
}

var $root = new Scope();

n = 100000;
m = 10;

function doit() {
   var a = $root.new();
   var b = a.new();
   inc(b);
   if (i > m) $root.head.destroy();
}

for (var i = 0; i < n; i++) {
   doit();
}
