













function compareArray(a, b) {
  if (b.length !== a.length) {
    return false;
  }

  for (var i = 0; i < a.length; i++) {
    if (b[i] !== a[i]) {
      return false;
    }
  }
  return true;
}


(function() {
  try {
    Array.prototype.concat.call({}, {[Symbol.isConcatSpreadable]: true, length : 2 **53 - 1})
    assert(false);
  } catch (e) {
    assert(e instanceof TypeError);
  }

  try {
    Array.prototype.concat.call([1, 2, 3, 4], {[Symbol.isConcatSpreadable]: true, length : 2 **53 - 4})
    assert(false);
  } catch (e) {
    assert(e instanceof TypeError);
  }
})();


(function() {
  var obj = { length: 2 ** 53 - 1, [2 ** 53 - 5] : 'foo'}
  Array.prototype.fill.call(obj, 'bar', 2 ** 53 - 5)

  assert(obj[2 ** 53 - 5] === 'bar');
  assert(obj[2 ** 53 - 4] === 'bar');
  assert(obj[2 ** 53 - 3] === 'bar');
  assert(obj[2 ** 53 - 2] === 'bar');

  obj = { length: 2 ** 53 + 2, [2 ** 53 - 2] : 'foo'}
  Array.prototype.fill.call(obj, 'bar', 2 ** 53 - 2)

  assert(obj[2 ** 53 - 2] === 'bar');
  assert(obj[2 ** 53 - 1] === undefined);
})();


(function() {
  var obj = { length: 2 ** 53 - 1, [2 ** 53 - 5] : 'foo'}
  assert(Array.prototype.includes.call(obj, 'foo', 2 ** 53 - 10) === true);

  var obj = { length: 2 ** 53 - 1, [2 ** 53 + 5] : 'foo'}
  assert(Array.prototype.includes.call(obj, 'foo', 2 ** 53 - 10) === false);
})();


(function() {
  var obj = { length: 2 ** 53 - 1, [2 ** 53 - 5] : 'foo'}
  assert(Array.prototype.indexOf.call(obj, 'foo', 2 ** 53 - 10) === 2 ** 53 - 5);

  var obj = { length: 2 ** 53 - 1, [2 ** 53 + 5] : 'foo'}
  assert(Array.prototype.indexOf.call(obj, 'foo', 2 ** 53 - 10) === -1);
})();


(function() {
  var obj = { length: 2 ** 53 - 1, [2 ** 53 - 5] : 'foo', [2 ** 53 - 6] : 'foo'}
  assert(Array.prototype.lastIndexOf.call(obj, 'foo', 2 ** 53 - 2) === 2 ** 53 - 5);

  var obj = { length: 2 ** 53 - 1, [2 ** 53 - 5] : 'foo', [2 ** 53 - 6] : 'foo'}
  assert(Array.prototype.lastIndexOf.call(obj, 'foo', 10) === -1);
})();



(function() {
  var obj = { length: 2 ** 53 - 1, [2 ** 53 - 2] : 'foo', [2 ** 53 - 3] : 'bar'}
  assert(Array.prototype.pop.call(obj) === 'foo');
  assert(obj.length === 2 ** 53 - 2);

  assert(Array.prototype.pop.call(obj) === 'bar');
  assert(obj.length === 2 ** 53 - 3);
})();


(function() {
  var obj = { length: 2 ** 53 - 1 };
  try {
    Array.prototype.push.call(obj, 'foo');
    assert(false);
  } catch (e) {
    assert(e instanceof TypeError);
  }

  var obj = { length: 2 ** 53 - 2, [2 ** 53 - 3] : 'foo'}

  assert(Array.prototype.push.call(obj, 'bar') === 2 ** 53 - 1);
  assert(obj.length === 2 ** 53 - 1);
})();


(function() {
  var obj = { length: 2 ** 53 - 1, [2 ** 53 - 5] : 'foo', [2 ** 53 - 2] : 'bar'};
  var sliced = Array.prototype.slice.call(obj, 2 ** 53 - 10);
  assert(compareArray(sliced, [,,,,,'foo',,,'bar']));

  var sliced = Array.prototype.slice.call(obj, 2 ** 53 - 8, 2 ** 53 - 4);
  assert(compareArray(sliced, [,,,'foo',]));
})();


(function() {
  var obj = { length: 2 ** 53 - 1, [2 ** 53 - 5] : 'foo', [2 ** 53 - 2] : 'bar'};
  var spliced = Array.prototype.splice.call(obj, 2 ** 53 - 10, 5, '1', '2', '3', '4');
  assert(compareArray(spliced, [,,,,,]));
  assert(obj.length === 2 ** 53 - 2);
  assert(obj[2 ** 53 - 3] === 'bar');
  assert(obj[2 ** 53 - 6] === 'foo');
  assert(obj[2 ** 53 - 7] === '4');
  assert(obj[2 ** 53 - 8] === '3');
  assert(obj[2 ** 53 - 9] === '2');
  assert(obj[2 ** 53 - 10] === '1');
})();


(function() {
  var obj = { length: 2 ** 53 - 1 };
  try {
    Array.prototype.unshift.call(obj, 'foo');
    assert(false);
  } catch (e) {
    assert(e instanceof TypeError);
  }
})();
