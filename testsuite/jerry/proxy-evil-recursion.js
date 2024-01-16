















function expect_error(error_type, method) {
  try {
    method();
    assert(false);
  } catch (ex) {
    assert (ex instanceof error_type);
  }
}


var proxy_one = new Proxy({length:2}, {});

Reflect.setPrototypeOf(proxy_one, proxy_one); 


function test_proxy_internals_using_proto(proxy_obj) {
  
  expect_error(RangeError, function() { proxy_obj[1];  });
  expect_error(RangeError, function() { proxy_obj[1] = 2;  });
  expect_error(RangeError, function() { 3 in proxy_obj;  });
  expect_error(RangeError, function() { Reflect.has(proxy_obj, 3);  });
}

test_proxy_internals_using_proto(proxy_one);

function test_proxy_internals_not_using_proto(proxy_obj) {
  
  delete proxy_obj.none; 
  delete proxy_obj["other"]; 

  Object.getPrototypeOf(proxy_obj); 
  Reflect.isExtensible(proxy_obj); 
  Object.preventExtensions(proxy_obj); 
  Reflect.getOwnPropertyDescriptor(proxy_obj, "key"); 
  Reflect.defineProperty(proxy_obj, "key2", { value: 4}); 
  Reflect.ownKeys(proxy_obj); 
}

test_proxy_internals_not_using_proto(proxy_one);

expect_error(TypeError, function() { proxy_one(3, 4);  });
expect_error(TypeError, function() { new proxy_one(4);  });


var handler = {
  is_handler: true,
  proxy_target: false,
  counts: {
    get: 0,
    set: 0,
    has: 0,
    deleteProperty: 0,
    getPrototypeOf: 0,
    setPrototypeOf: 0,
    isExtensible: 0,
    preventExtensions: 0,
    getOwnPropertyDescriptor: 0,
    defineProperty: 0,
    ownKeys: 0,
  },
  get: function(target, key) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.get++;
    return this.proxy_target.key;
  },
  set: function(target, key, value) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.set++;
    return this.proxy_target.key = value;
  },
  has: function(target, key) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.has++;
    return Reflect.has(this.proxy_target, key);
  },
  deleteProperty: function(target, key) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.deleteProperty++;
    return Reflect.deleteProperty(this.proxy_target, key);
  },
  getPrototypeOf: function(target) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.getPrototypeOf++;
    return Reflect.getPrototypeOf(this.proxy_target);
  },
  setPrototypeOf: function(target, newproto) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.setPrototypeOf++;
    return Reflect.setPrototypeOf(this.proxy_target, newproto);
  },
  isExtensible: function(target) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.isExtensible++;
    return Reflect.isExtensible(this.proxy_target);
  },
  preventExtensions: function(target) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.preventExtensions++;
    return Reflect.preventExtensions(this.proxy_target);
  },
  getOwnPropertyDescriptor: function(target, key) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.getOwnPropertyDescriptor++;
    return Reflect.getOwnPropertyDescriptor(this.proxy_target, key);
  },
  defineProperty: function(target, key, attrs) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.defineProperty++;
    return Reflect.defineProperty(this.proxy_target, key, attrs);
  },
  ownKeys: function(target) {
    assert(this.is_handler);
    assert(this.proxy_target !== false);
    this.counts.ownKeys++;
    return Reflect.ownKeys(this.proxy_target);
  }
};


var proxy_two = new Proxy({length:2}, handler);

handler.proxy_target = proxy_two;

test_proxy_internals_using_proto(proxy_two);

expect_error(RangeError, function() { delete proxy_two.none;  });
expect_error(RangeError, function() { delete proxy_two["other"];  });
expect_error(RangeError, function() { Object.getPrototypeOf(proxy_two);  });
expect_error(RangeError, function() { Object.setPrototypeOf(proxy_two, {});  });
expect_error(RangeError, function() { Reflect.isExtensible(proxy_two);  });
expect_error(RangeError, function() { Object.preventExtensions(proxy_two);  });
expect_error(RangeError, function() { Reflect.getOwnPropertyDescriptor(proxy_two, "key");  });
expect_error(RangeError, function() { Reflect.defineProperty(proxy_two, "key2", { value: 4});  });
expect_error(RangeError, function() { Reflect.ownKeys(proxy_two);  });
