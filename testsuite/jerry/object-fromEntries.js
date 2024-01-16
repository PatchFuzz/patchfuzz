














Array.prototype.equals = function (array) {
  if (this.length != array.length)
    return false;

  for (var i = 0; i < this.length; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].equals (array[i]))
        return false;
      }
      else if (this[i] != array[i]) {
        return false;
    }
  }

  return true;
}


const map = new Map ([ ['foo', 'bar'], ['baz', 42] ]);
const obj_map = Object.fromEntries (map);
assert (Object.values (obj_map).equals (["bar", 42]));
assert (Object.keys (obj_map).equals (["foo", 'baz']));


const arr = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj_arr = Object.fromEntries (arr);
assert (Object.values (obj_arr).equals (["a", "b", "c"]));
assert (Object.keys (obj_arr).equals (["0", '1', '2']));


const object1 = { a: 1, b: 2, c: 3 };
const object2 = Object.fromEntries (
  Object.entries (object1)
  .map (([ key, val ]) => [ key, val * 2 ])
);
assert (Object.keys (object2).equals (["a", "b", "c"]));
assert (Object.values (object2).equals ([2, 4, 6]));


const map2 = new Map ([ ['foo', undefined], ['baz', null] ]);
const obj_map2 = Object.fromEntries (map2);
assert (Object.values (obj_map2).equals ([undefined, null]));
assert (Object.keys(obj_map2).equals (["foo", 'baz']))


const map3 = new Map ([ ['foo'], ['baz'] ]);
const obj_map3 = Object.fromEntries (map3);
assert (Object.values(obj_map3).equals ([undefined, undefined]));
assert (Object.keys(obj_map3).equals (["foo", 'baz']));


const map4 = new Map ([]);
const obj_map4 = Object.fromEntries (map4);
assert (Object.values(obj_map4).equals ([]));
assert (Object.keys(obj_map4).equals ([]));


function check_iterator (iterator) {
  try {
    Object.fromEntries (iterator);
    assert (false);
  } catch (e) {
    assert (e instanceof TypeError);
  }
}

check_iterator (null);
check_iterator (undefined);
check_iterator (5);
check_iterator ()


var returned = false;
var closed_iterable = {
  [Symbol.iterator]: function () {
    var advanced = false;
    return {
      next: function () {
        if (advanced) {
          throw 42 
        }
        advanced = true;
        return {
          done: false,
          value: 'ab',
        };
      },
      return: function () {
        if (returned) {
          throw 42 
        }
        returned = true;
      },
    };
  },
};

check_iterator (closed_iterable)
assert (returned);

var next_iterable = {
  [Symbol.iterator]: function () {
    return {
      next: function () {
        return null;
      },
      return: function () {
        throw 42 
      },
    };
  },
};

check_iterator (next_iterable)


var next_iterable_2 = {
  [Symbol.iterator]: function () {
    return {
      next: null,
      return: function () {
        throw 42 
      },
    };
  },
};

check_iterator (next_iterable_2)


returned = false;
var iterable_0 = {
  [Symbol.iterator]: function () {
    var advanced = false;
    return {
      next: function () {
        if (advanced) {
          throw 42 
        }
        advanced = true;
        return {
          done: false,
          value: {
            get '0' () {
              throw new TypeError ();
            },
            get '1' () {
              return "value";
            },
          },
        };
      },
      return: function () {
        if (returned) {
          throw 42 
        }
        returned = true;
      },
    };
  },
};

check_iterator (iterable_0)
assert (returned);


returned = false;
var iterable = {
  [Symbol.iterator]: function () {
    var advanced = false;
    return {
      next: function () {
        if (advanced) {
          throw 42 
        }
        advanced = true;
        return {
          done: false,
          value: {
            0: {
              get toString () { throw new TypeError }
            },
            get '1' () {
              return "value";
            },
          },
        };
      },
      return: function () {
        if (returned) {
          throw 42 
        }
        returned = true;
      },
    };
  },
};

check_iterator (iterable)
assert (returned);


returned = false;
var iterable = {
  [Symbol.iterator]: function () {
    var advanced = false;
    return {
      next: function () {
        if (advanced) {
          throw 42 
        }
        advanced = true;
        return {
          done: false,
          value: {
            get '0' () {
              return 'key';
            },
            get '1' () {
              throw new TypeError;
            },
          },
        };
      },
      return: function () {
        if (returned) {
          throw 42 
        }
        returned = true;
      },
    };
  },
};

check_iterator (iterable)
assert (returned);


var iterable = {
  [Symbol.iterator] () {
    return {
      next () {
        return {
          get value () {
            throw new TypeError }
          }
        }
      }
    }
  }

check_iterator (iterable)
