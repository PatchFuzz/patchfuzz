













var g = (Object.getOwnPropertyDescriptor({get a(){}}, 'a')).get;

try {
  new g;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var s = (Object.getOwnPropertyDescriptor({set a(value){}}, 'a')).set;

try {
  new s;
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
