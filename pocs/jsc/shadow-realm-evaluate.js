function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`expected ${expected} but got ${actual}`);
}

function shouldThrow(func, errorType, assertionFn) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }

    if (!(error instanceof errorType))
        throw new Error(`Expected ${errorType.name} but got ${error.name}`);

    print(error);
}


{
    let realm = new ShadowRealm();
    let otherRealm = new ShadowRealm();

    shouldBe(realm.evaluate("1"), 1);
    var x = 2;
    realm.evaluate("var x = 1");
    shouldBe(realm.evaluate("x"), 1);
    shouldBe(x, 2);

    
    shouldBe(otherRealm.evaluate("globalThis.x"), undefined);
}


{
    let realm = new ShadowRealm();
    globalThis.hi = 6;

    shouldBe(realm.evaluate("globalThis.hi"), undefined);

    realm.evaluate("globalThis.hi = 'fala amigo'");

    shouldBe(realm.evaluate("globalThis.hi"), "fala amigo");
    shouldBe(globalThis.hi, 6);
}


{
    let realm = new ShadowRealm();
    shouldThrow(
      () => { realm.evaluate(".."); },
      SyntaxError,
      (err) => {
          shouldBe($.globalObjectFor(err), globalThis);
          shouldBe(String(err), `SyntaxError: Unexpected token '.'`);
      });
}


{
    let realm = new ShadowRealm();
    shouldThrow(
      () => { realm.evaluate("throw new Error('secret')"); },
      TypeError,
      (err) => {
          shouldBe($.globalObjectFor(err), globalThis);
          shouldBe(String(err), "TypeError: secret");
      });
}


{
    let realm = new ShadowRealm();
    let wrappedInvokeAndAdd = realm.evaluate("function invokeAndAdd(xFn, yFn) { return xFn() + yFn(); }; invokeAndAdd");
    shouldBe(wrappedInvokeAndAdd(() => { return 1 }, () => { return 2 }), 3);
    shouldBe($.globalObjectFor(wrappedInvokeAndAdd), globalThis);
    shouldBe(Object.getPrototypeOf(wrappedInvokeAndAdd), Function.prototype);

    
    let lengthDesc = Object.getOwnPropertyDescriptor(wrappedInvokeAndAdd, "length");
    shouldBe(lengthDesc.value, 2);
    shouldBe(lengthDesc.writable, false);
    shouldBe(lengthDesc.enumerable, false);
    shouldBe(lengthDesc.configurable, true);

    let nameDesc = Object.getOwnPropertyDescriptor(wrappedInvokeAndAdd, "name");
    shouldBe(nameDesc.value, "invokeAndAdd");
    shouldBe(nameDesc.writable, false);
    shouldBe(nameDesc.enumerable, false);
    shouldBe(nameDesc.configurable, true);

    
    let numberObj = { valueOf() { return -1 } };
    shouldThrow(
      () => { wrappedInvokeAndAdd(numberObj, 1); },
      TypeError,
      (err) => {
          shouldBe($.globalObjectFor(err), globalThis);
          shouldBe(String(err), "TypeError: value passing between realms must be callable or primitive");
      });
}

{
    let realm = new ShadowRealm();
    
    let notRealm = {};
    shouldThrow(
      () => { realm.evaluate.call(notRealm, '1'); },
      TypeError,
      (err) => { shouldBe($.globalObjectFor(err), globalThis); }
    );
}


{
    function doEval(realm, s)
    {
        return realm.evaluate(s);
    }

    noInline(doEval);

    let realm = new ShadowRealm();
    realm.evaluate("globalThis.secret = 1;");
    for (var i = 0; i < 10000; ++i)
        shouldBe(doEval(realm, '42'), 42);

    for (var i = 0; i < 1000; ++i) {
        let f = doEval(realm, '(x) => { return x() + globalThis.secret; }');
        shouldBe($.globalObjectFor(f), globalThis);
        shouldBe(f(() => { return 41; }), 42);
        shouldBe(Object.getPrototypeOf(f), Function.prototype);
    }
    
    let f = doEval(realm, '(x) => { return x() + globalThis.secret; }');
    for (var i = 0; i < 10000; ++i) {
        shouldBe($.globalObjectFor(f), globalThis);
        shouldBe(f(() => { return 41; }), 42);
        shouldBe(Object.getPrototypeOf(f), Function.prototype);
    }
    
    let loopInside = doEval(realm, '(x) => { let acc = 0; for (var i = 0; i < 10000; ++i) { acc += x(); }; return acc; }');
    globalThis.secret = -1;
    shouldBe(loopInside(() => { return globalThis.secret; }), -10000);
}


{
    shouldBe(typeof ShadowRealm.prototype.evaluate, "function");

    let evaluateName = Object.getOwnPropertyDescriptor(ShadowRealm.prototype.evaluate, "name");
    shouldBe(evaluateName.value, "evaluate");
    shouldBe(evaluateName.enumerable, false);
    shouldBe(evaluateName.writable, false);
    shouldBe(evaluateName.configurable, true);

    let evaluateLength = Object.getOwnPropertyDescriptor(ShadowRealm.prototype.evaluate, "length");
    shouldBe(evaluateLength.value, 1);
    shouldBe(evaluateLength.enumerable, false);
    shouldBe(evaluateLength.writable, false);
    shouldBe(evaluateLength.configurable, true);
}


{
    let realm = new ShadowRealm();
    foo = 42;

    realm.evaluate("foo = false");

    let realmFn = realm.evaluate(`(f) => {
      let ourFn = Object.getPrototypeOf(f).constructor;
      return (new ourFn("return this"))().foo
    }`);

    let retrievedFoo = realmFn(() => {});
    let aFunction = Object.getPrototypeOf(realmFn).constructor;
    let anotherFoo = (new aFunction("return this"))().foo;

    shouldBe(retrievedFoo, false);
    shouldBe(anotherFoo, 42);
}





{
    let realm = new ShadowRealm();
    let f = realm.evaluate("() => {throw new Error('ahh');}");
    shouldThrow(f, TypeError, (e) => {});
}


{
    let realm = new ShadowRealm();
    let f = realm.evaluate(`
      (f) => {
        try {
          f();
        } catch(e) {
          if (e instanceof TypeError)
            return 'ok';
          else
            return e.toString();
        }
        return 'fail: normal exit';
      }
    `);
    shouldBe(
        f(() => {throw new Error('ahhh');}),
        'ok'
    );
}
