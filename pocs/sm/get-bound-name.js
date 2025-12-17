function testInc() {
  function outer() {
    with (env) {
      
      
      return function() {
        
        return ++prop;
      }
    }
  }

  var count_get = 0;
  var count_has = 0;
  var count_set = 0;

  function proxify(obj) {
    return new Proxy(obj, {
      get(t, pk, r) {
        count_get++;
        return Reflect.get(t, pk, r);
      },
      has(t, pk) {
        count_has++;
        return Reflect.has(t, pk);
      },
      set(t, pk, v, r) {
        count_set++;
        return Reflect.set(t, pk, v, r);
      },
    });
  }

  var count_unscopables = 0;

  var env = {
    get [Symbol.unscopables]() {
      count_unscopables++;
    },
    prop: 0,
  };
  env = proxify(env);

  var inner = outer();
  for (let i = 0; i < 200; ++i) {
    print(inner(), i + 1);
  }

  print(count_unscopables, 200);
  print(count_has, 400);
  print(count_get, 400);
  print(count_set, 200);
}
testInc();

function testCompoundAssign() {
  function outer() {
    with (env) {
      
      
      return function() {
        
        return prop += 1;
      }
    }
  }

  var count_get = 0;
  var count_has = 0;
  var count_set = 0;

  function proxify(obj) {
    return new Proxy(obj, {
      get(t, pk, r) {
        count_get++;
        return Reflect.get(t, pk, r);
      },
      has(t, pk) {
        count_has++;
        return Reflect.has(t, pk);
      },
      set(t, pk, v, r) {
        count_set++;
        return Reflect.set(t, pk, v, r);
      },
    });
  }

  var count_unscopables = 0;

  var env = {
    get [Symbol.unscopables]() {
      count_unscopables++;
    },
    prop: 0,
  };
  env = proxify(env);

  var inner = outer();
  for (let i = 0; i < 200; ++i) {
    print(inner(), i + 1);
  }

  print(count_unscopables, 200);
  print(count_has, 400);
  print(count_get, 400);
  print(count_set, 200);
}
testCompoundAssign();
