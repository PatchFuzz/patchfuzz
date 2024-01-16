

var o = {
  x: 13,

  f: function()
  {
    return () => this.x + 1
  },

  g: function()
  {
    return function() {
      return this.x + 1
    }
  }
}

assert(o.f().call(o) === 14);
assert(o.g().call(o) === 14);

assert(o.f()() === 14);

var o2 = { x:4, f:o.f(), g:o.g() }

assert(o2.f() === 14);
assert(o2.g() === 5);
