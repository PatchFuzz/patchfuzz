














var target = Object.create(null);
var p = new Proxy(target, {
  defineProperty: function() {
    return true;
  }
});

Object.preventExtensions(p);

try {
  p.prop = null;
  assert(false)
}
catch(e)
{
  assert(e instanceof TypeError)
}
