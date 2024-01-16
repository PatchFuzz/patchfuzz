

var abort = $vm.abort;

function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error(`expected ${expected} but got ${actual}`);
}

function shouldThrow(func, errorType) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }

    if (!(error instanceof errorType))
        throw new Error(`Expected ${errorType.name}! got ${error.name}`);
}

async function shouldThrowAsync(func, errorType) {
    let error;
    try {
        await func();
    } catch (e) {
        error = e;
    }

    if (!(error instanceof errorType))
        throw new Error(`Expected ${errorType.name}! got ${error.name} with message ${error.message}`);
}

(async function () {
    const importPath = "./resources/shadow-realm-example-module.js";
    const { answer, getCallCount, putInGlobal, getFromGlobal, getAnObject } = await import(importPath);
    const outerAnswer = answer;
    const outerGetCallCount = getCallCount;
    const outerPutInGlobal = putInGlobal;
    const outerGetFromGlobal = getFromGlobal;
    const outerGetAnObject = getAnObject;

    {
        let realm = new ShadowRealm();

        
        shouldBe(outerGetCallCount(), 0);
        outerGetAnObject();
        shouldBe(outerGetCallCount(), 1);
        
        let innerGetCallCount = await realm.importValue(importPath, "getCallCount");
        let innerPutInGlobal = await realm.importValue(importPath, "putInGlobal");
        shouldBe(innerGetCallCount(), 0);
        innerPutInGlobal("something", "random");
        shouldBe(innerGetCallCount(), 1);
        
        innerGetCallCount = await realm.importValue(importPath, "getCallCount");
        shouldBe(innerGetCallCount(), 1);
        
        shouldBe(outerGetCallCount(), 1);

        
        
        let innerAnswer = await realm.importValue(importPath, "answer");
        shouldBe(innerAnswer, outerAnswer);

        
        await shouldThrowAsync(async () => { let x = await realm.importValue(importPath, "anObject"); }, TypeError);

        
        await shouldThrowAsync(async () => { let x = await realm.importValue(importPath, "nothing"); }, TypeError);

        
        await shouldThrowAsync(async () => { let x = await realm.importValue("random", "nothing"); }, TypeError);

        
        let innerGetFromGlobal = await realm.importValue(importPath, "getFromGlobal");
        innerPutInGlobal("salutation", "sarava");
        shouldBe(innerGetFromGlobal("salutation"), "sarava");

        
        outerPutInGlobal("salutation", "hello world!");
        shouldBe(outerGetFromGlobal("salutation"), "hello world!");
        shouldBe(innerGetFromGlobal("salutation"), "sarava");

        
        shouldThrow(() => { innerPutInGlobal("treasure", new Object()); }, TypeError);

        
        let getAnObjectFn = await realm.importValue(importPath, "getAnObject");
        shouldThrow(() => { getAnObjectFn(); }, TypeError);

        
        innerPutInGlobal("outer-realm-put", outerPutInGlobal);
        wrappedOuterPutInGlobal = innerGetFromGlobal("outer-realm-put");

        
        wrappedOuterPutInGlobal("treasure", "shiny tin scrap");
        shouldBe(outerGetFromGlobal("treasure"), "shiny tin scrap");

        
        shouldThrow(() => { wrappedOuterPutInGlobal("treasure", new Object()); }, TypeError);
        shouldThrow(() => { wrappedOuterPutInGlobal(new Object(), "shiny tin scrap"); }, TypeError);

        
        let notRealm = {};
        shouldThrow(
          () => { realm.importValue.call(notRealm, importPath, "answer"); },
          TypeError,
          (err) => { shouldBe($.globalObjectFor(err), globalThis); }
        );
    }

    
    {
        function doImport(realm, s)
        {
            return realm.importValue(importPath, s);
        }

        noInline(doImport);

        let realm = new ShadowRealm();
        for (var i = 0; i < 10000; ++i) {
            let result = await doImport(realm, "getCallCount");
            shouldBe(result(), 0);
        }
    }
}()).catch((error) => {
    print(String(error));
    abort();
});

{
    shouldBe(typeof ShadowRealm.prototype.importValue, "function");

    let importValueName = Object.getOwnPropertyDescriptor(ShadowRealm.prototype.importValue, "name");
    shouldBe(importValueName.value, "importValue");
    shouldBe(importValueName.enumerable, false);
    shouldBe(importValueName.writable, false);
    shouldBe(importValueName.configurable, true);

    let importValueLength = Object.getOwnPropertyDescriptor(ShadowRealm.prototype.importValue, "length");
    shouldBe(importValueLength.value, 2);
    shouldBe(importValueLength.enumerable, false);
    shouldBe(importValueLength.writable, false);
    shouldBe(importValueLength.configurable, true);
}
