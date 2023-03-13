













function Box(data) {
  this._data = data;
}

var box = new Box('=');

Object.defineProperty(Box.prototype, 'data', {
  get: function () {
    print(this === box);
    return this._data;
  },
  set: function (data) {
    print(this === box);
    this._data = data;
  }
});

print(box.data === '=');
box.data = '+';
print(box.data === '+');

function test_access(value, proto) {
  "use strict"

  Object.defineProperty(proto, 'test', {
    get: function () { print(this === value) },
    set: function () { print(this === value) }
  });

  value.test;
  value.test = undefined;
}

test_access ("str", String.prototype);
test_access (1, Number.prototype);
test_access (true, Boolean.prototype);
