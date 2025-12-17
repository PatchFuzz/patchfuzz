{
  class X {
    static ['name'] = "name";
    static ['length'] = 15;
  }

  print({
    "value": "name",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }, Object.getOwnPropertyDescriptor(X, "name"));

  print({
    "value": 15,
    "writable": true,
    "enumerable": true,
    "configurable": true
  }, Object.getOwnPropertyDescriptor(X, "length"));
}

{
  class X {
    ['field'] = Object.preventExtensions(this);
  }

  print(() => {
    new X();
  }, TypeError, /Cannot define property field, object is not extensible/);
}

{
  class X {
    [0] = Object.preventExtensions(this);
  }

  print(() => {
    new X();
  }, TypeError, /Cannot define property 0, object is not extensible/);
}

{
  class X {
    field = Object.defineProperty(
      this,
      "field2",
      { writable: false, configurable: true, value: 1 }
    );
    ['field2'] = 2;
  }

  let x = new X();
  print({
    "value": 2,
    "writable": true,
    "enumerable": true,
    "configurable": true
  }, Object.getOwnPropertyDescriptor(x, "field2"));
}

{
  class X {
    field = Object.defineProperty(
      this,
      0,
      { writable: false, configurable: true, value: 1 }
    );
    [0] = 2;
  }

  let x = new X();
  print({
    "value": 2,
    "writable": true,
    "enumerable": true,
    "configurable": true
  }, Object.getOwnPropertyDescriptor(x, 0));
}

{
  class X {
    field = Object.defineProperty(
      this,
      "field2",
      { writable: false, configurable: false, value: 1 }
    );
    ['field2'] = true;
  }

  print(() => {
    new X();
  }, TypeError, /Cannot redefine property: field2/);
}

{
  class X {
    field = Object.defineProperty(
      this,
      0,
      { writable: false, configurable: false, value: 1 }
    );
    [0] = true;
  }

  print(() => {
    new X();
  }, TypeError, /Cannot redefine property: 0/);
}

{
  class X {
    field = Object.defineProperty(
      this,
      "field2",
      { writable: true, configurable: false, value: 1 }
    );
    ['field2'] = true;
  }

  print(() => {
    new X();
  }, TypeError, /Cannot redefine property: field2/);
}

{
  class X {
    field = Object.defineProperty(
      this,
      0,
      { writable: true, configurable: false, value: 1 }
    );
    [0] = true;
  }

  print(() => {
    new X();
  }, TypeError, /Cannot redefine property: 0/);
}

{
  let setterCalled = false;
  class X {
    field = Object.defineProperty(
      this,
      "field2",
      {
        configurable: true,
        set(val) {
          setterCalled = true;
        }
      }
    );
    ['field2'] = 2;
  }

  let x = new X();
  print(setterCalled);
  print({
    "value": 2,
    "writable": true,
    "enumerable": true,
    "configurable": true
  }, Object.getOwnPropertyDescriptor(x, 'field2'));
}

{
  let setterCalled = false;
  class X {
    field = Object.defineProperty(
      this,
      0,
      {
        configurable: true,
        set(val) {
          setterCalled = true;
        }
      }
    );
    [0] = 2;
  }

  let x = new X();
  print(setterCalled);
  print({
    "value": 2,
    "writable": true,
    "enumerable": true,
    "configurable": true
  }, Object.getOwnPropertyDescriptor(x, 0));
}

{
  let setterCalled = false;
  class X {
    field = Object.defineProperty(
      this,
      "field2",
      {
        configurable: false,
        set(val) {
          setterCalled = true;
        }
      }
    );
    ['field2'] = 2;
  }

  print(() => {
    new X();
  }, TypeError, /Cannot redefine property: field2/);
}

{
  let setterCalled = false;
  class X {
    field = Object.defineProperty(
      this,
      0,
      {
        configurable: false,
        set(val) {
          setterCalled = true;
        }
      }
    );
    [0] = 2;
  }

  print(() => {
    new X();
  }, TypeError, /Cannot redefine property: 0/);
}

{
  class Base {
    constructor(arg) {
      return arg;
    }
  }

  class ClassWithNormalField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        "normalField",
        { writable: true, configurable: true, value: "initial" }
      );
      return 1;
    })();
    ['normalField'] = "written";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassWithNormalIndexField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        0,
        { writable: true, configurable: true, value: "initial" }
      );
      return 1;
    })();
    [0] = "written";
    constructor(arg) {
      super(arg);
    }
  }

  let setterCalled = false;
  class ClassWithSetterField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        "setterField",
        { configurable: true, set(val) { setterCalled = true; } }
      );
      return 1;
    })();
    ['setterField'] = "written";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassWithSetterIndexField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        0,
        { configurable: true, set(val) { setterCalled = true; } }
      );
      return 1;
    })();
    [0] = "written";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassWithReadOnlyField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        "readOnlyField",
        { writable: false, configurable: true, value: "initial" }
      );
      return 1;
    })();
    ['readOnlyField'] = "written";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassWithReadOnlyIndexField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        0,
        { writable: false, configurable: true, value: "initial" }
      );
      return 1;
    })();
    [0] = "written";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassWithNonConfigurableField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        "nonConfigurableField",
        { writable: false, configurable: false, value: "initial" }
      );
      return 1;
    })();
    ['nonConfigurableField'] = "configured";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassWithNonConfigurableIndexField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        0,
        { writable: false, configurable: false, value: "initial" }
      );
      return 1;
    })();
    [0] = "configured";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassNonExtensible extends Base {
    ['field'] = (() => {
      Object.preventExtensions(this);
      return 'defined';
    })();
    ['nonExtensible'] = 4;
    constructor(arg) {
      super(arg);
    }
  }
  class ClassNonExtensibleWithIndexField extends Base {
    [0] = (() => {
      Object.preventExtensions(this);
      return 'defined';
    })();
    ['nonExtensible'] = 4;
    constructor(arg) {
      super(arg);
    }
  }

  class ClassNonExtensibleWithPrivateField extends Base {
    #privateField = (() => {
      Object.preventExtensions(this);
      return "defined";
    })();
    
    
    static getPrivateField(obj) { return obj.#privateField; }
    constructor(arg) {
      super(arg);
    }
  }

  
  function testObject(getObject) {
    let obj = getObject();
    new ClassWithNormalField(obj);
    print(1, obj.field);
    print("written", obj.normalField);

    obj = getObject();
    new ClassWithNormalIndexField(obj);
    print(1, obj.field);
    print("written", obj[0]);

    obj = getObject();
    new ClassWithSetterField(obj);
    print(setterCalled);

    obj = getObject();
    new ClassWithSetterIndexField(obj);
    print(setterCalled);

    obj = getObject();
    new ClassWithReadOnlyField(obj);
    print("written", obj.readOnlyField);

    obj = getObject();
    new ClassWithReadOnlyIndexField(obj);
    print("written", obj[0]);

    obj = getObject();
    print(() => {
      new ClassWithNonConfigurableField(obj);
    }, TypeError, /Cannot redefine property: nonConfigurableField/);
    print("initial", obj.nonConfigurableField);

    obj = getObject();
    print(() => {
      new ClassWithNonConfigurableIndexField(obj);
    }, TypeError, /Cannot redefine property: 0/);
    print("initial", obj[0]);

    obj = getObject();
    if (Object.hasOwn(obj, 'field')) {
      print(() => {
        new ClassNonExtensible(obj);
      }, TypeError, /Cannot define property nonExtensible, object is not extensible/);
      print({
        "value": 'defined',
        "writable": true,
        "enumerable": true,
        "configurable": true
      }, Object.getOwnPropertyDescriptor(obj, 'field'));
    } else {
      print(() => {
        new ClassNonExtensible(obj);
      }, TypeError, /Cannot define property field, object is not extensible/);
      print(Object.hasOwn(obj, 'field'));
    }
    print(Object.hasOwn(obj, 'nonExtensible'));

    obj = getObject();
    if (Object.hasOwn(obj, 0)) {
      print(() => {
        new ClassNonExtensibleWithIndexField(obj);
      }, TypeError, /Cannot define property nonExtensible, object is not extensible/);
      print({
        "value": 'defined',
        "writable": true,
        "enumerable": true,
        "configurable": true
      }, Object.getOwnPropertyDescriptor(obj, 0));
    } else {
      print(() => {
        new ClassNonExtensibleWithIndexField(obj);
      }, TypeError, /Cannot define property 0, object is not extensible/);
      print(Object.hasOwn(obj, 0));
    }
    print(Object.hasOwn(obj, 'nonExtensible'));

    obj = getObject();
    new ClassNonExtensibleWithPrivateField(obj);
    print("defined", ClassNonExtensibleWithPrivateField.getPrivateField(obj));

    return obj;
  }

  let obj = testObject(() => Object.create(null));
  print(undefined, obj.field);

  let fieldValue = 100;
  let indexValue = 100;
  obj = testObject(() => { return { field: fieldValue }; });
  obj = testObject(() => { return { field: fieldValue, [0]: indexValue }; });

  
  {
    let trapCalls = [];
    function getProxy() {
      trapCalls = [];
      let target = {};
      let proxy = new Proxy(target, {
        get(oTarget, sKey) {
          return oTarget[sKey];
        },
        defineProperty(oTarget, sKey, oDesc) {
          trapCalls.push(sKey);
          Object.defineProperty(oTarget, sKey, oDesc);
          return oTarget;
        }
      });
      return proxy;
    }

    let proxy = getProxy();
    new ClassWithNormalField(proxy);
    print(1, proxy.field);
    print("written", proxy.normalField);
    print(["normalField", "field", "normalField"], trapCalls);

    proxy = getProxy();
    new ClassWithNormalIndexField(proxy);
    print(1, proxy.field);
    print("written", proxy[0]);
    print(["0", "field", "0"], trapCalls);

    proxy = getProxy();
    new ClassWithSetterField(proxy);
    print(setterCalled);
    print("written", proxy.setterField);
    print(["setterField", "field", "setterField"], trapCalls);

    proxy = getProxy();
    new ClassWithSetterIndexField(proxy);
    print(setterCalled);
    print("written", proxy[0]);
    print(["0", "field", "0"], trapCalls);

    proxy = getProxy();
    new ClassWithReadOnlyField(proxy);
    print("written", proxy.readOnlyField);
    print(["readOnlyField", "field", "readOnlyField"], trapCalls);

    proxy = getProxy();
    new ClassWithReadOnlyIndexField(proxy);
    print("written", proxy[0]);
    print(["0", "field", "0"], trapCalls);

    proxy = getProxy();
    print(() => {
      new ClassWithNonConfigurableField(proxy);
    }, TypeError, /Cannot redefine property: nonConfigurableField/);
    print("initial", proxy.nonConfigurableField);
    print(["nonConfigurableField", "field", "nonConfigurableField"], trapCalls);

    proxy = getProxy();
    print(() => {
      new ClassWithNonConfigurableIndexField(proxy);
    }, TypeError, /Cannot redefine property: 0/);
    print("initial", proxy[0]);
    print(["0", "field", "0"], trapCalls);

    proxy = getProxy();
    print(() => {
      new ClassNonExtensible(proxy);
    }, TypeError, /Cannot define property field, object is not extensible/);
    print(Object.hasOwn(proxy, 'field'));
    print(Object.hasOwn(proxy, 'nonExtensible'));
    print(["field"], trapCalls);

    proxy = getProxy();
    print(() => {
      new ClassNonExtensibleWithIndexField(proxy);
    }, TypeError, /Cannot define property 0, object is not extensible/);
    print(Object.hasOwn(proxy, 0));
    print(Object.hasOwn(proxy, 'nonExtensible'));
    print(["0"], trapCalls);

    proxy = getProxy();
    new ClassNonExtensibleWithPrivateField(proxy);
    print("defined", ClassNonExtensibleWithPrivateField.getPrivateField(proxy));
  }

  
  {
    new ClassWithNormalField(globalThis);
    print(1, field);
    print("written", normalField);

    new ClassWithNormalIndexField(globalThis);
    print(1, field);
    print("written", globalThis[0]);

    new ClassWithSetterField(globalThis);
    print(setterCalled);
    print("written", setterField);

    new ClassWithSetterField(globalThis);
    print(setterCalled);
    print("written", setterField);

    new ClassWithReadOnlyField(globalThis);
    print("written", readOnlyField);

    print(() => {
      new ClassWithNonConfigurableField(globalThis);
    }, TypeError, /Cannot redefine property: nonConfigurableField/);
    print("initial", nonConfigurableField);

    print(() => {
      new ClassNonExtensible(globalThis);
    }, TypeError, /Cannot define property nonExtensible, object is not extensible/);
    print("undefined", typeof nonExtensible);
  }
}
