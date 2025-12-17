function handlerMaker(expected_exceptions) {
  var order = [];
  function note(trap, name)
  {
      order.push(trap + '-' + name);
      if (expected_exceptions[trap] === name) {
          throw ("fail");
      }
  }

  return [{
    
    deleteProperty: function(target, name) {
      note("del", name);
      return Reflect.deleteProperty(target, name);
    },
    
    has:          function(target, name) {
      note("has", name);
      return name in target;
    },
    get:          function(target, name, receiver) {
      note("get", name);
      return Reflect.get(target, name, receiver);
    },
    set:          function(target, name, value, receiver) {
      note("set", name);
      return Reflect.set(target, name, value, receiver);
    },
  }, order];
}



function check_splice_proxy(arr, expected_order, expected_exceptions, expected_array, expected_result) {
    print (arr);
    var [handler, store] = handlerMaker(expected_exceptions);
    var proxy = new Proxy(arr, handler);

    try {
        var args = Array.prototype.slice.call(arguments, 5);
        var result = Array.prototype.splice.apply(proxy, args);
        print(Object.keys(expected_exceptions).length, 0);
    } catch (e) {
        print(Object.keys(expected_exceptions).length > 0, true);
    }

    
    print(store.toString(), expected_order);

    
    print(Array.isArray(result) || result === undefined, true);

    
    for (var i in expected_result) {
        print(result[i], expected_result[i]);
    }
    for (var i in result) {
        print(result[i], expected_result[i]);
    }

    
    for (var i in expected_array) {
        print(arr[i], expected_array[i]);
    }
    for (var i in arr) {
        print(arr[i], expected_array[i]);
    }

    return result;
}


check_splice_proxy(
        [10,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-3,get-3,set-0,has-4,get-4,set-1,has-5,get-5,set-2," +
        "del-5,del-4,del-3," +
        "set-length",
        {},
        [3,4,5],
        [10,1,2],
        0, 3
);


check_splice_proxy(
        [11,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-5,get-5,set-9,has-4,get-4,set-8,has-3,get-3,set-7," +
        "set-0,set-1,set-2,set-3,set-4,set-5,set-6," +
        "set-length",
        {},
        [9,9,9,9,9,9,9,3,4,5],
        [11,1,2],
        0, 3, 9, 9, 9, 9, 9, 9, 9
);


check_splice_proxy(
        [12,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "set-0,set-1,set-2," +
        "set-length",
        {},
        [9,9,9,3,4,5],
        [12,1,2],
        0, 3, 9, 9, 9
);






check_splice_proxy(
        [13,1,2,3,4,5],
        "get-length",
        {get: 'length'},
        [13,1,2,3,4,5],
        undefined,
        0, 3, 9, 9, 9
);


check_splice_proxy(
        [14,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1",
        {has: '1'},
        [14,1,2,3,4,5],
        undefined,
        0, 3, 9, 9, 9
);


check_splice_proxy(
        [15,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1",
        {get: '1'},
        [15,1,2,3,4,5],
        undefined,
        0, 3, 9, 9, 9
);


check_splice_proxy(
        [16,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-3,get-3,set-0,has-4",
        {has: '4'},
        [3,1,2,3,4,5],
        undefined,
        0, 3
);



check_splice_proxy(
        [17,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-3,get-3,set-0,has-4,get-4",
        {get: '4'},
        [3,1,2,3,4,5],
        undefined,
        0, 3
);



check_splice_proxy(
        [18,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-3,get-3,set-0,has-4,get-4,set-1",
        {set: '1'},
        [3,1,2,3,4,5],
        undefined,
        0, 3
);


check_splice_proxy(
        [19,1,2,3,,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-3,get-3,set-0,has-4,del-1",
        {del: '1'},
        [3,1,2,3,,5],
        undefined,
        0, 3
);


check_splice_proxy(
        [20,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-3,get-3,set-0,has-4,get-4,set-1,has-5,get-5,set-2," +
        "del-5,del-4",
        {del: '4'},
        [3,4,5,3,4],
        undefined,
        0, 3
);


check_splice_proxy(
        [21,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-5,get-5,set-8,has-4",
        {has: '4'},
        [21,1,2,3,4,5,,,5],
        undefined,
        0, 3, 9,9,9,9,9,9
);



check_splice_proxy(
        [22,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-5,get-5,set-8,has-4,get-4",
        {get: '4'},
        [22,1,2,3,4,5,,,5],
        undefined,
        0, 3, 9,9,9,9,9,9
);



check_splice_proxy(
        [23,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-5,get-5,set-8,has-4,get-4,set-7",
        {set: '7'},
        [23,1,2,3,4,5,,,5],
        undefined,
        0, 3, 9,9,9,9,9,9
);


check_splice_proxy(
        [24,1,2,3,,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-5,get-5,set-8,has-4,del-7",
        {del: '7'},
        [24,1,2,3,,5,,,5],
        undefined,
        0, 3, 9,9,9,9,9,9
);


check_splice_proxy(
        [25,1,2,3,4,5],
        "get-length," +
        "get-constructor," +
        "has-0,get-0,has-1,get-1,has-2,get-2," +
        "has-5,get-5,set-8,has-4,get-4,set-7,has-3,get-3,set-6," +
        "set-0,set-1,set-2",
        {set: '2'},
        [9,9,2,3,4,5,3,4,5],
        undefined,
        0, 3, 9,9,9,9,9,9
);
