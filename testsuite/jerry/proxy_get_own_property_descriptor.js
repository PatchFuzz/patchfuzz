

















var target = {};
var handler = { getOwnPropertyDescriptor (target) {
  throw "cat";
}};

var proxy = new Proxy(target, handler);

try {
  
  Object.prototype.hasOwnProperty.call(proxy);
  assert(false);
} catch(e) {
  assert(e == "cat");
}

try {
  
  Object.prototype.propertyIsEnumerable.call(proxy)
  assert(false);
} catch(e) {
  assert(e == "cat");
}

try {
  
  Object.getOwnPropertyDescriptor(proxy)
  assert(false);
} catch(e) {
  assert(e == "cat");
}

var target = {};
var configurable_desc = {
  value: 123,
  configurable: true,
  writable: true,
  enumerable: false,
};
Object.defineProperty(target, "configurable", configurable_desc);

var nonconfigurable_desc = {
  value: 234,
  configurable: false,
  writable: false,
  enumerable: true
}
Object.defineProperty(target, "nonconfigurable", nonconfigurable_desc);

var proxied_desc = {
  value: 345,
  configurable: true
};

var proxied_desc = {
  value: 345,
  configurable: true
};

var handler = {
  "getOwnPropertyDescriptor": function(target, name) {
    if (name === "proxied") {
      return proxied_desc;
    }
    if (name === "return_null") {
      return null;
    }
    return Object.getOwnPropertyDescriptor(target, name);
  }
};

var proxy = new Proxy(target, handler);
var proxy_without_handler = new Proxy(target, {});



var configurable_obj = Object.getOwnPropertyDescriptor(proxy, "configurable");

assert(configurable_desc.value == configurable_obj.value);
assert(configurable_desc.configurable == configurable_obj.configurable);
assert(configurable_desc.writable == configurable_obj.writable);
assert(configurable_desc.enumerable == configurable_obj.enumerable);

var nonconfigurable_obj = Object.getOwnPropertyDescriptor(proxy, "nonconfigurable");
assert(nonconfigurable_obj.value == nonconfigurable_desc.value);
assert(nonconfigurable_obj.configurable == nonconfigurable_desc.configurable);
assert(nonconfigurable_obj.writable == nonconfigurable_desc.writable);
assert(nonconfigurable_obj.enumerable == nonconfigurable_desc.enumerable);

var other_obj = { value: proxied_desc.value,
                  configurable: proxied_desc.configurable,
                  enumerable: false,
                  writable: false }
var proxied_obj = Object.getOwnPropertyDescriptor(proxy, "proxied");

assert(other_obj.value == proxied_obj.value);
assert(other_obj.configurable == proxied_obj.configurable);
assert(other_obj.writable == proxied_obj.writable);
assert(other_obj.enumerable == proxied_obj.enumerable);

var other_obj2 = Object.getOwnPropertyDescriptor(proxy_without_handler, "configurable");

assert(other_obj2.value == configurable_desc.value);
assert(other_obj2.configurable == configurable_desc.configurable);
assert(other_obj2.writable == configurable_desc.writable);
assert(other_obj2.enumerable == configurable_desc.enumerable);

var other_obj3 = Object.getOwnPropertyDescriptor(proxy_without_handler, "nonconfigurable");

assert(other_obj3.value == nonconfigurable_desc.value);
assert(other_obj3.configurable == nonconfigurable_desc.configurable);
assert(other_obj3.writable == nonconfigurable_desc.writable);
assert(other_obj3.enumerable == nonconfigurable_desc.enumerable);

try {
  Object.getOwnPropertyDescriptor(proxy, "return_null");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}





handler.getOwnPropertyDescriptor = function(target, name) { return undefined; };

try {
  Object.getOwnPropertyDescriptor(proxy, "nonconfigurable");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

assert(Object.getOwnPropertyDescriptor(proxy, "configurable") == undefined)




handler.getOwnPropertyDescriptor = function(target, name) {
  return {value: 234, configurable: false, enumerable: true};
};

try {
  Object.getOwnPropertyDescriptor(proxy, "nonexistent");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

try {
  Object.getOwnPropertyDescriptor(proxy, "configurable");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

assert(!Object.getOwnPropertyDescriptor(proxy, "nonconfigurable").configurable);



Object.seal(target);
handler.getOwnPropertyDescriptor = function(target, name) { return undefined; };

try {
  Object.getOwnPropertyDescriptor(proxy, "configurable");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

try {
  Object.getOwnPropertyDescriptor(proxy, "nonconfigurable");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

assert(undefined == Object.getOwnPropertyDescriptor(proxy, "nonexistent"));




var existent_desc = {value: "yes"};
handler.getOwnPropertyDescriptor = function() { return existent_desc; };

try {
  Object.getOwnPropertyDescriptor(proxy, "nonexistent");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}

var new_obj =  {  value: "yes",
                  writable: false,
                  enumerable: false,
                  configurable: false };
var conf_proxied = Object.getOwnPropertyDescriptor(proxy, "configurable");

assert(new_obj.value == conf_proxied.value);
assert(new_obj.configurable == conf_proxied.configurable);
assert(new_obj.writable == conf_proxied.writable);
assert(new_obj.enumerable == conf_proxied.enumerable);




handler.getOwnPropertyDescriptor = {};

try {
  Object.getOwnPropertyDescriptor(proxy, "configurable");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}


handler.getOwnPropertyDescriptor = function() { throw "unicorn"; };

try {
  Object.getOwnPropertyDescriptor(proxy, "configurable");
  assert(false);
} catch(e) {
  assert(e == "unicorn");
}


handler.getOwnPropertyDescriptor = function() { return 1; }

try {
  Object.getOwnPropertyDescriptor(proxy, "configurable");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}






handler.getOwnPropertyDescriptor = function(target, name) {
  return {value: 456, configurable: true, writable: true}
};

try {
  Object.getOwnPropertyDescriptor(proxy, "nonconfigurable");
  assert(false);
} catch(e) {
  assert(e instanceof TypeError);
}



var result = [];
var proxy = new Proxy({foo: 1, bar: 2}, {
  getOwnPropertyDescriptor: function(o, v) {
    result.push(v);
    return Object.getOwnPropertyDescriptor(o, v);
  }
});

Object.assign({}, proxy);

assert(result.length === 2);
assert(result[0] === "foo");
assert(result[1] === "bar");


var trapCalls = 0;
var p = new Proxy({}, {
  getOwnPropertyDescriptor: function(t, prop) {
    Object.defineProperty(t, prop, {
      configurable: false,
      writable: true,
    });

    trapCalls++;
    return {
      configurable: false,
      writable: false,
    };
  },
});

try
{
  Object.getOwnPropertyDescriptor(p, "prop");
  assert (false)
}
catch (e)
{
  assert(e instanceof TypeError)
}
