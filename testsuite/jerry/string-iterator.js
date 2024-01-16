













try {
  String.prototype[Symbol.iterator].call(undefined);
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  String.prototype[Symbol.iterator].call(Symbol('foo'));
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var str = 'foobar';
var iterator = str[Symbol.iterator]();

try {
  iterator.next.call(5);
  assert (false);
} catch (e) {
  assert(e instanceof TypeError);
}

try {
  iterator.next.call({});
  assert(false);
} catch (e) {
  assert(e instanceof TypeError);
}

var str = 'Example string.';
var expected = ['E', 'x', 'a', 'm', 'p', 'l', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g', '.'];

var iterator = str[Symbol.iterator]();
var next = iterator.next();
var idx = 0;

while (!next.done) {
  assert(next.value === expected[idx++]);
  assert(next.done === false);
  next = iterator.next();
}

assert(next.value === undefined);

var str = '^o𓙦һR񼴆]ŭ媖?᯾豼עW򏋁';
var expected = ['^', 'o', '𓙦', 'һ', 'R', '񼴆', ']', 'ŭ', '媖', '?', '᯾', '豼', 'ע', 'W', '򏋁'];

iterator = str[Symbol.iterator]();
next = iterator.next();
idx = 0;

while (!next.done) {
  assert(next.value === expected[idx++]);
  assert(next.done === false);
  next = iterator.next();
}

assert(next.value === undefined);

assert(iterator.toString() === '[object String Iterator]');
assert(iterator[Symbol.toStringTag] === 'String Iterator');

iterator = (' '.repeat(80000))[Symbol.iterator]();
next = iterator.next();
idx = 0;

while (!next.done) {
  assert(next.value === ' ');
  assert(next.done === false);
  next = iterator.next();
  idx++;
}
assert(idx == 80000);
