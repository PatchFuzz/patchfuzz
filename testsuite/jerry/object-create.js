















var o = Object.create(Object.prototype, {
  
  foo: { writable: true, configurable: true, value: 'hello' },
  
  bar: {
    configurable: false,
    get: function() { return 10; },
    set: function(value) { console.log('Setting `o.bar` to', value); }
  }
});



var o = Object.create({}, { p: { value: 42 } });

o.p = 24;
assert (o.p === 42);


var o2 = Object.create({}, {
  p: {
    value: 42,
    writable: true,
    enumerable: true,
    configurable: true
  }
});

assert (o2.p === 42);


function Shape() {
  this.x = 0;
  this.y = 0;
}


Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
};


function Rectangle() {
  Shape.call(this); 
}


Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

assert (rect instanceof Rectangle);
assert (rect instanceof Shape);
rect.move(1, 1);
assert (rect.x === 1)
assert (rect.y === 1);

var obj = {
  protoFunction: function() {
    return 3;
  }
};

Object.defineProperties(obj, {
  "foo": {
    value: 42,
    writable: true,
  },
  "a": {
    value: "b",
    configurable: true
  },
  "bar": {
    get: function() {
      return this.foo;
    },
  },
});

var obj2 = Object.create(obj);

assert (obj2.protoFunction() === 3);
assert (obj2.foo === 42);
assert (obj2.a === "b");
assert (obj2.bar === 42);
assert (Object.getPrototypeOf (obj2) === obj);


var props = {
    prop1: {
        value: 1,
    },
    hey: function () {
        return "ho";
    }
};

var obj3 = Object.create(obj, props);
assert (obj3.prop1 === 1);
assert (obj3.protoFunction() === 3);
try {
  assert (obj3.hey === undefined);
  obj3.hey();
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}


var obj = Object.create(null)
assert (typeof (obj) === "object");
assert (Object.getPrototypeOf (obj) === null);

try {
    Object.create()
    assert (false);
} catch (e) {
    assert (e instanceof TypeError);
}

try {
    Object.create(undefined)
    assert (false);
} catch (e) {
    assert (e instanceof TypeError);
}
