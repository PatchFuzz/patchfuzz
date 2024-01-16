














var badDeleteArray = new Proxy([0], {
  deleteProperty: function() {
    throw "My Super Error A";
  }
});

try {
  JSON.parse('[0,0]', function() { this[1] = badDeleteArray; });
} catch (ex) {
  assert(ex === "My Super Error A");
}


var badDeleteObj = new Proxy([0], {
  deleteProperty: function() {
    throw "My Super Error B";
  }
});

try {
  JSON.parse('[0,0]', function() { this[1] = badDeleteObj; });
} catch (ex) {
  assert(ex === "My Super Error B");
}


var badDefineArray = new Proxy([null], {
  defineProperty: function(_, name) {
    throw "My Super Error C";
  }
});

try {
  JSON.parse('["first", null]', function(_, value) {
    if (value === 'first') {
      this[1] = badDefineArray;
    }
    return value;
  });
} catch (ex) {
  assert(ex === "My Super Error C");
}


var badDefineObj = new Proxy({0: null}, {
  defineProperty: function(_, name) {
    throw "My Super Error D";
  }
});

try {
  JSON.parse('["first", null]', function(_, value) {
    if (value === 'first') {
      this[1] = badDefineObj;
    }
    return value;
  });
} catch (ex) {
  assert(ex === "My Super Error D");
}


var badKeys = new Proxy({}, {
  ownKeys: function() {
    throw "My Super Error E";
  }
});

try {
  JSON.parse('[0,0]', function() { this[1] = badKeys; });
} catch (ex) {
  assert(ex === "My Super Error E");
}
