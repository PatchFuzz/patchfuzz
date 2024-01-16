













function Box(data) {
  this._data = data;
}

var box = new Box('=');

Object.defineProperty(Box.prototype, 'data', {
  get: function () {
    assert(this === box);
    return this._data;
  },
  set: function (data) {
    assert(this === box);
    this._data = data;
  }
});

assert(box.data === '=');
box.data = '+';
assert(box.data === '+');

function test_access(value, proto) {
  "use strict"

  Object.defineProperty(proto, 'test', {
    get: function () { assert (this === value) },
    set: function () { assert (this === value) }
  });

  value.test;
  value.test = undefined;
}

test_access ("str", String.prototype);
test_access (1, Number.prototype);
test_access (true, Boolean.prototype);
