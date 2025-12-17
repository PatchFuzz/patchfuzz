;


var unsealed = {};
var sealed = Object.seal({});
var handler = {};

print(Object.isExtensible(unsealed), true);
print(Object.isExtensible(sealed), false);

var targetSealed = new Proxy(sealed, handler);
var targetUnsealed = new Proxy(unsealed, handler);

var handlerCalled = false;

function testExtensible(target, expectedResult, shouldIgnoreHandler = false)
{
    for (let p of [new Proxy(target, handler), Proxy.revocable(target, handler).proxy]) {
        handlerCalled = false;
        if (typeof expectedResult === "boolean")
            print(Object.isExtensible(p), expectedResult, "Must return the correct value.");
        else
            print(() => Object.isExtensible(p), expectedResult);
        print(handlerCalled, !shouldIgnoreHandler, "Must call handler appropriately");
    }
}



testExtensible(sealed, false, true);
testExtensible(unsealed, true, true);





var targetsTarget = {};
function ensureCalled(target) { print(target, targetsTarget); handlerCalled = true; return true; }
var proxyTarget = new Proxy(targetsTarget, { isExtensible : ensureCalled });
testExtensible(proxyTarget, true);


function fakeSealed() { handlerCalled = true; return false; }
handler.isExtensible = fakeSealed;
testExtensible(targetSealed, false);
testExtensible(targetUnsealed, TypeError);


function fakeUnsealed() { handlerCalled = true; return true; }
handler.isExtensible = fakeUnsealed;
testExtensible(targetSealed, TypeError);
testExtensible(targetUnsealed, true);



function makeSealedTruth(target) { handlerCalled = true; Object.preventExtensions(target); return false; }
function makeSealedLie(target) { handlerCalled = true; Object.preventExtensions(target); return true; }
handler.isExtensible = makeSealedTruth;
testExtensible({}, false);
handler.isExtensible = makeSealedLie;
testExtensible({}, TypeError);


function falseyNonBool() { handlerCalled = true; return undefined; }
handler.isExtensible = falseyNonBool;
testExtensible(sealed, false);
testExtensible(unsealed, TypeError);

function truthyNonBool() { handlerCalled = true; return {}; }
handler.isExtensible = truthyNonBool;
testExtensible(sealed, TypeError);
testExtensible(unsealed, true);


function ExtensibleError() { }
ExtensibleError.prototype = new Error();
ExtensibleError.prototype.constructor = ExtensibleError;
function throwFromTrap() { throw new ExtensibleError(); }
handler.isExtensible = throwFromTrap;



for (let p of [new Proxy(sealed, handler), Proxy.revocable(sealed, handler).proxy]) {
    print(function () { Object.isExtensible(p); },
                           ExtensibleError, "Must throw if the trap does.");
    print(function () { Object.isFrozen(p); },
                           ExtensibleError, "Must throw if the trap does.");
    print(function () { Object.isSealed(p); },
                           ExtensibleError, "Must throw if the trap does.");
}


for (let p of [new Proxy(sealed, handler), Proxy.revocable(sealed, handler).proxy]) {
    handler.isExtensible = (() => Object.isExtensible(p));
    print(() => Object.isExtensible(p),
                           InternalError, "Should allow and detect infinite recurison.");
}
