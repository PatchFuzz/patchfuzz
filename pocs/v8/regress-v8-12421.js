{
  class X {
    static name = "name";
    static length = 15;
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
    field = Object.preventExtensions(this);
  }

  print(() => {
    new X();
  }, TypeError, /Cannot define property field, object is not extensible/);
}

{
  class X {
    field = Object.defineProperty(
      this,
      "field2",
      { writable: false, configurable: true, value: 1}
    );
    field2 = 2;
  }

  let x = new X();
  print(2, x.field2);
}

{
  class X {
    field = Object.defineProperty(
      this,
      "field2",
      { writable: false, configurable: false, value: 1}
    );
    field2 = true;
  }

  print(() => {
    new X();
  }, TypeError, /Cannot redefine property: field2/);
}

{
  class X {
    field = Object.defineProperty(
      this,
      "field2",
      { writable: true, configurable: false, value: 1}
    );
    field2 = true;
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
      "field2",
      {
        configurable: true,
        set(val) {
          setterCalled = true;
        }
      }
    );
    field2 = 2;
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
      "field2",
      {
        configurable: false,
        set(val) {
          setterCalled = true;
        }
      }
    );
    field2 = 2;
  }

  print(() => {
    new X();
  }, TypeError, /Cannot redefine property: field2/);
  print(setterCalled);
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
        { writable: true, configurable: true, value: "initial"}
      );
      return 1;
    })();
    normalField = "written";
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
    setterField = "written";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassWithReadOnlyField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        "readOnlyField",
        { writable: false, configurable: true, value: "initial"}
      );
      return 1;
    })();
    readOnlyField = "written";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassWithNonConfigurableField extends Base {
    field = (() => {
      Object.defineProperty(
        this,
        "nonConfigurableField",
        { writable: false, configurable: false, value: "initial"}
      );
      return 1;
    })();
    nonConfigurableField = "configured";
    constructor(arg) {
      super(arg);
    }
  }

  class ClassNonExtensible extends Base {
    field = (() => {
      Object.preventExtensions(this);
      return 'defined';
    })();
    nonExtensible = 4;
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
    new ClassWithSetterField(obj);
    print(1, obj.field);
    print(setterCalled);

    obj = getObject();
    new ClassWithReadOnlyField(obj);
    print(1, obj.field);
    print("written", obj.readOnlyField);

    obj = getObject();
    print(() => {
      new ClassWithNonConfigurableField(obj);
    }, TypeError, /Cannot redefine property: nonConfigurableField/);
    print("initial", obj.nonConfigurableField);
    print(1, obj.field);

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

    return obj;
  }
  testObject(() => Object.create(null));
  testObject( () => { return {field: 1000 } });

  
  {
    let trapCalls = [];
    function getProxy() {
      trapCalls = [];
      let target = {};
      return new Proxy(target, {
        get(oTarget, sKey) {
          return oTarget[sKey];
        },
        defineProperty(oTarget, sKey, oDesc) {
          trapCalls.push(sKey);
          Object.defineProperty(oTarget, sKey, oDesc);
          return oTarget;
        }
      });
    }

    let proxy = getProxy();
    new ClassWithNormalField(proxy);
    print(1, proxy.field);
    print("written", proxy.normalField);
    print(["normalField", "field", "normalField"], trapCalls);

    proxy = getProxy();
    new ClassWithSetterField(proxy);
    print(setterCalled);
    print("written", proxy.setterField);
    print(["setterField", "field", "setterField"], trapCalls);

    proxy = getProxy();
    new ClassWithReadOnlyField(proxy);
    print("written", proxy.readOnlyField);
    print(["readOnlyField", "field", "readOnlyField"], trapCalls);

    proxy = getProxy();
    print(() => {
      new ClassWithNonConfigurableField(proxy);
    }, TypeError, /Cannot redefine property: nonConfigurableField/);
    print("initial", proxy.nonConfigurableField);
    print(["nonConfigurableField", "field", "nonConfigurableField"], trapCalls);

    proxy = getProxy();
    print(() => {
      new ClassNonExtensible(proxy);
    }, TypeError, /Cannot define property field, object is not extensible/);
    print(Object.hasOwn(proxy, 'field'));
    print(Object.hasOwn(proxy, 'nonExtensible'));
    print(["field"], trapCalls);
  }

  
  {
    new ClassWithNormalField(globalThis);
    print(1, field);
    print("written", normalField);

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
