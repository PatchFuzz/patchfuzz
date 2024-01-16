

var map = new Map();


for (var i = 0; i < 15; i++) {
  map.set ("foo" + i, i);
  assert (map.size === i + 1);
}

var counter = 0;

map.forEach (function (value, key) {
  assert (typeof key === "string");
  assert (key === "foo" + counter);
  assert (typeof value === "number");
  assert (value === counter);
  counter++;
});

map.clear ();
assert (map.size === 0);
counter = 0;


for (var i = 0; i < 15; i++) {
  map.set (i + 0.5, "foo" + i);
  assert (map.size === i + 1);
}

map.forEach (function (value, key) {
  assert (typeof key === "number");
  assert (key === counter + 0.5);
  assert (typeof value === "string");
  assert (value === "foo" + counter);
  counter++;
});

map.clear ();
assert (map.size === 0);
counter = 0;

var objectList = [];


for (var i = 0; i < 15; i++) {
  objectList[i] = { index : i };
  map.set (objectList[i], "foo" + i);
  assert (map.size === i + 1);
}

map.forEach (function (value, key) {
  assert (typeof key === "object");
  assert (key === objectList[counter]);
  assert (key.index === objectList[counter].index);
  assert (typeof value === "string");
  assert (value === "foo" + counter);
  counter++;
});


try {
  Map.prototype.forEach.call ({});
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


try {
  map.forEach (5);
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


try {
  map.forEach (function (value, key) {
    throw new ReferenceError ("foo");
  });
  assert (false);
} catch (e) {
  assert (e instanceof ReferenceError);
  assert (e.message === "foo");
}


var object = {
  _secret : 42
}

map.forEach (function (value, key) {
  assert (this._secret === 42);
}, object);


map = new Map();
map.set('foo', 42);
map.set('bar', 84);

map.forEach(function(value, key, thisArg) {
  assert (typeof thisArg === "object");
  assert (thisArg === map);
});
