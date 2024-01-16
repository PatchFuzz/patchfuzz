













var str = new Map();
var iterator = str[ Symbol.iterator ]();

try {
  iterator.next.call({ })
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}
