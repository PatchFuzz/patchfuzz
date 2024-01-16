







WScript.LoadScriptFile("..\\UnitTestFramework\\UnitTestFramework.js");

var tests = [
    {
        name: "Promise constructor has correct shape",
        body: function () {
            assert.isTrue(Promise !== undefined, "Promise named global exists");
            assert.areEqual('function', typeof Promise, "Type of Promise global is 'function'");
            assert.areEqual("[object Promise]", Object.prototype.toString.call(new Promise(() => {})),
                                                "toString of Promise is '[object Promise]'");

            var descriptor = Object.getOwnPropertyDescriptor(Promise, 'prototype');
            assert.isFalse(descriptor.writable, "Promise.length.writable === false");
            assert.isFalse(descriptor.enumerable, "Promise.length.enumerable === false");
            assert.isFalse(descriptor.configurable, "Promise.length.configurable === false");
            assert.areEqual('object', typeof descriptor.value, "typeof Promise.length === 'object'");

            var descriptor = Object.getOwnPropertyDescriptor(Promise, 'length');
            assert.isFalse(descriptor.writable, "Promise.length.writable === false");
            assert.isFalse(descriptor.enumerable, "Promise.length.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.length.configurable === true");
            assert.areEqual('number', typeof descriptor.value, "typeof Promise.length === 'number'");
            assert.areEqual(1, Promise.length, "Promise.length === 1");

            var descriptor = Object.getOwnPropertyDescriptor(Promise, 'all');
            assert.isTrue(descriptor.writable, "Promise.all.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.all.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.all.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.all === 'function'");
            assert.areEqual(1, Promise.all.length, "Promise.all.length === 1");

            var descriptor = Object.getOwnPropertyDescriptor(Promise, 'allSettled');
            assert.isTrue(descriptor.writable, "Promise.allSettled.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.allSettled.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.allSettled.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.allSettled === 'function'");
            assert.areEqual(1, Promise.allSettled.length, "Promise.allSettled.length === 1");

            var descriptor = Object.getOwnPropertyDescriptor(Promise, 'any');
            assert.isTrue(descriptor.writable, "Promise.any.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.any.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.any.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.any === 'function'");
            assert.areEqual(1, Promise.any.length, "Promise.any.length === 1");

            var descriptor = Object.getOwnPropertyDescriptor(Promise, 'race');
            assert.isTrue(descriptor.writable, "Promise.race.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.race.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.race.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.race === 'function'");
            assert.areEqual(1, Promise.race.length, "Promise.race.length === 1");

            var descriptor = Object.getOwnPropertyDescriptor(Promise, 'reject');
            assert.isTrue(descriptor.writable, "Promise.reject.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.reject.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.reject.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.reject === 'function'");
            assert.areEqual(1, Promise.reject.length, "Promise.reject.length === 1");

            var descriptor = Object.getOwnPropertyDescriptor(Promise, 'resolve');
            assert.isTrue(descriptor.writable, "Promise.resolve.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.resolve.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.resolve.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.resolve === 'function'");
            assert.areEqual(1, Promise.resolve.length, "Promise.resolve.length === 1");
        }
    },
    {
        name: "Promise prototype has correct shape",
        body: function () {
            var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, 'constructor');
            assert.isTrue(descriptor.writable, "Promise.prototype.constructor.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.prototype.constructor.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.prototype.constructor.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.prototype.constructor === 'function'");
            assert.areEqual(1, Promise.prototype.constructor.length, "Promise.prototype.constructor.length === 1");

            var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, 'catch');
            assert.isTrue(descriptor.writable, "Promise.prototype.catch.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.prototype.catch.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.prototype.catch.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.prototype.catch === 'function'");
            assert.areEqual(1, Promise.prototype.catch.length, "Promise.prototype.catch.length === 1");
            assert.areEqual("catch", Promise.prototype.catch.name, "Promise.prototype.catch.name === 'catch'");

            var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, 'then');
            assert.isTrue(descriptor.writable, "Promise.prototype.then.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.prototype.then.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.prototype.then.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.prototype.then === 'function'");
            assert.areEqual(2, Promise.prototype.then.length, "Promise.prototype.then.length === 2");
            assert.areEqual("then", Promise.prototype.then.name, "Promise.prototype.then.name === 'then'");

            var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, 'finally');
            assert.isTrue(descriptor.writable, "Promise.prototype.finally.writable === true");
            assert.isFalse(descriptor.enumerable, "Promise.prototype.finally.enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.prototype.finally.configurable === true");
            assert.areEqual('function', typeof descriptor.value, "typeof Promise.prototype.finally === 'function'");
            assert.areEqual(1, Promise.prototype.finally.length, "Promise.prototype.finally.length === 1");
            assert.areEqual("finally", Promise.prototype.finally.name, "Promise.prototype.finally.name === 'finally'");

            var descriptor = Object.getOwnPropertyDescriptor(Promise.prototype, Symbol.toStringTag);
            assert.isFalse(descriptor.writable, "Promise.prototype[@@toStringTag].writable === false");
            assert.isFalse(descriptor.enumerable, "Promise.prototype[@@toStringTag].enumerable === false");
            assert.isTrue(descriptor.configurable, "Promise.prototype[@@toStringTag].configurable === true");
            assert.areEqual('string', typeof descriptor.value, "typeof Promise.prototype[@@toStringTag] === 'string'");
            assert.areEqual('Promise', Promise.prototype[Symbol.toStringTag], "Promise.prototype[@@toStringTag] === 'Promise'");
        }
    },
    {
        name: "Promise constructor throwing behavior",
        body: function () {
            assert.throws(function() { Promise.call(); }, TypeError, "Promise throws when not called as a new expression with no this parameter", "Promise: cannot be called without the new keyword");
            assert.throws(function() { Promise.call(undefined); }, TypeError, "Promise throws when not called as a new expression if the this parameter is undefined", "Promise: cannot be called without the new keyword");
            assert.throws(function() { Promise.call(null); }, TypeError, "Promise throws when not called as a new expression if the this parameter is null", "Promise: cannot be called without the new keyword");
            assert.throws(function() { Promise.call({}); }, TypeError, "Promise throws when not called as a new expression if the this parameter is not a promise", "Promise: cannot be called without the new keyword");

            assert.throws(function() { new Promise(); }, TypeError, "new Promise throws when called with no parameter", "Promise: argument is not a Function object");
            assert.throws(function() { new Promise(undefined); }, TypeError, "new Promise throws when called with an undefined parameter", "Promise: argument is not a Function object");
            assert.throws(function() { new Promise(null); }, TypeError, "new Promise throws when called with a null parameter", "Promise: argument is not a Function object");
            assert.throws(function() { new Promise({}); }, TypeError, "new Promise throws when called with a non-function parameter", "Promise: argument is not a Function object");

            var promise = new Promise(function() { } );

            assert.throws(function() { Promise.call(promise); }, TypeError, "Promise throws when not called as a new expression if the executor argument is not passed", "Promise: cannot be called without the new keyword");
            assert.throws(function() { Promise.call(promise, undefined); }, TypeError, "Promise throws when not called as a new expression if the executor argument is undefined", "Promise: cannot be called without the new keyword");
            assert.throws(function() { Promise.call(promise, null); }, TypeError, "Promise throws when not called as a new expression if the executor argument is null", "Promise: cannot be called without the new keyword");
            assert.throws(function() { Promise.call(promise, {}); }, TypeError, "Promise throws when not called as a new expression if the executor argument is non-callable", "Promise: cannot be called without the new keyword");

            assert.throws(function() { Promise.call(promise, function() { }); }, TypeError, "Promise throws when not called as a new expression if the this parameter is an initialized promise object", "Promise: cannot be called without the new keyword");
        }
    },
    {
        name: "Promise.prototype.then throwing behavior",
        body: function () {
            assert.throws(function() { Promise.prototype.then.call(); }, TypeError, "Promise.prototype.then throws when called with no this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            assert.throws(function() { Promise.prototype.then.call(undefined); }, TypeError, "Promise.prototype.then throws when called with undefined this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            assert.throws(function() { Promise.prototype.then.call(null); }, TypeError, "Promise.prototype.then throws when called with null this parameter", "Promise.prototype.then: 'this' is not a Promise object");
            assert.throws(function() { Promise.prototype.then.call({}); }, TypeError, "Promise.prototype.then throws when called with non-promise this parameter", "Promise.prototype.then: 'this' is not a Promise object");
        }
    },
    {
        name: "Promise.prototype.catch throwing behavior",
        body: function () {
            assert.throws(function() { Promise.prototype.catch.call(); }, TypeError, "Promise.prototype.catch throws when called with no this parameter", "Promise.prototype.catch: 'this' is not an Object");
            assert.throws(function() { Promise.prototype.catch.call(undefined); }, TypeError, "Promise.prototype.catch throws when called with undefined this parameter", "Promise.prototype.catch: 'this' is not an Object");
            assert.throws(function() { Promise.prototype.catch.call(null); }, TypeError, "Promise.prototype.catch throws when called with null this parameter", "Promise.prototype.catch: 'this' is not an Object");

            assert.throws(function() { Promise.prototype.catch.call({}); }, TypeError, "Promise.prototype.catch throws when called with a this parameter which doesn't have a then property", "Promise.prototype.catch: argument is not a Function object");
            assert.throws(function() { Promise.prototype.catch.call({ then: undefined }); }, TypeError, "Promise.prototype.catch throws when called with a this parameter which has a then property with undefined value", "Promise.prototype.catch: argument is not a Function object");
            assert.throws(function() { Promise.prototype.catch.call({ then: null }); }, TypeError, "Promise.prototype.catch throws when called with a this parameter which has a then property with null value", "Promise.prototype.catch: argument is not a Function object");
            assert.throws(function() { Promise.prototype.catch.call({ then: {} }); }, TypeError, "Promise.prototype.catch throws when called with a this parameter which has a then property with non-function value", "Promise.prototype.catch: argument is not a Function object");

            assert.throws(function() { Promise.prototype.catch.call({ get then() { throw new TypeError('error!'); } }); }, TypeError, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
            assert.throws(function() { Promise.prototype.catch.call({ then: function() { throw new TypeError('error!'); } }); }, TypeError, "Promise.prototype.catch throws if the then property of the this argument throws", "error!");
        }
    },
    {
        name: "Promise.prototype.finally throwing behavior",
        body: function () {
            assert.throws(function() { Promise.prototype.finally.call(); }, TypeError, "Promise.prototype.finally throws when called with no this parameter", "Promise.prototype.finally: 'this' is not an Object");
            assert.throws(function() { Promise.prototype.finally.call(undefined); }, TypeError, "Promise.prototype.finally throws when called with undefined this parameter", "Promise.prototype.finally: 'this' is not an Object");
            assert.throws(function() { Promise.prototype.finally.call(null); }, TypeError, "Promise.prototype.finally throws when called with null this parameter", "Promise.prototype.finally: 'this' is not an Object");

            assert.throws(function() { Promise.prototype.finally.call({}); }, TypeError, "Promise.prototype.finally throws when called with a this parameter which doesn't have a then property", "Promise.prototype.finally: argument is not a Function object");
            assert.throws(function() { Promise.prototype.finally.call({ then: undefined }); }, TypeError, "Promise.prototype.finally throws when called with a this parameter which has a then property with undefined value", "Promise.prototype.finally: argument is not a Function object");
            assert.throws(function() { Promise.prototype.finally.call({ then: null }); }, TypeError, "Promise.prototype.finally throws when called with a this parameter which has a then property with null value", "Promise.prototype.finally: argument is not a Function object");
            assert.throws(function() { Promise.prototype.finally.call({ then: {} }); }, TypeError, "Promise.prototype.finally throws when called with a this parameter which has a then property with non-function value", "Promise.prototype.finally: argument is not a Function object");

            assert.throws(function() { Promise.prototype.finally.call({ get then() { throw new TypeError('error!'); } }); }, TypeError, "Promise.prototype.finally throws if the then property of the this argument throws", "error!");
            assert.throws(function() { Promise.prototype.finally.call({ then: function() { throw new TypeError('error!'); } }); }, TypeError, "Promise.prototype.finally throws if the then property of the this argument throws", "error!");
        }
    },
    {
        name: "Promise.resolve throwing behavior",
        body: function () {
            assert.throws(function() { Promise.resolve.call(); }, TypeError, "Promise.resolve throws when called with no this parameter", "Promise.resolve: 'this' is not an Object");
            assert.throws(function() { Promise.resolve.call(undefined); }, TypeError, "Promise.resolve throws when this parameter is undefined", "Promise.resolve: 'this' is not an Object");
            assert.throws(function() { Promise.resolve.call(null); }, TypeError, "Promise.resolve throws when this parameter is null", "Promise.resolve: 'this' is not an Object");
            assert.throws(function() { Promise.resolve.call({}); }, TypeError, "Promise.resolve throws when this parameter is non-callable", "Function expected");
            assert.throws(function() { Promise.resolve.call(Math.sin); }, TypeError, "Promise.resolve throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.reject throwing behavior",
        body: function () {
            assert.throws(function() { Promise.reject.call(); }, TypeError, "Promise.reject throws when called with no this parameter", "Promise.reject: 'this' is not an Object");
            assert.throws(function() { Promise.reject.call(undefined); }, TypeError, "Promise.reject throws when called when this parameter is undefined", "Promise.reject: 'this' is not an Object");
            assert.throws(function() { Promise.reject.call(null); }, TypeError, "Promise.reject throws when called when this parameter is null", "Promise.reject: 'this' is not an Object");
            assert.throws(function() { Promise.reject.call({}); }, TypeError, "Promise.reject throws when called when this parameter is non-callable", "Function expected");
            assert.throws(function() { Promise.reject.call(Math.sin); }, TypeError, "Promise.reject throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.race throwing behavior",
        body: function () {
            assert.throws(function() { Promise.race.call(); }, TypeError, "Promise.race throws when called with no this parameter", "Promise.race: 'this' is not an Object");
            assert.throws(function() { Promise.race.call(undefined); }, TypeError, "Promise.race throws when called when this parameter is undefined", "Promise.race: 'this' is not an Object");
            assert.throws(function() { Promise.race.call(null); }, TypeError, "Promise.race throws when called when this parameter is null", "Promise.race: 'this' is not an Object");
            assert.throws(function() { Promise.race.call({}); }, TypeError, "Promise.race throws when called when this parameter is non-callable", "Function expected");
            assert.throws(function() { Promise.race.call(Math.sin); }, TypeError, "Promise.race throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.all throwing behavior",
        body: function () {
            assert.throws(function() { Promise.all.call(); }, TypeError, "Promise.all throws when called with no this parameter", "Promise.all: 'this' is not an Object");
            assert.throws(function() { Promise.all.call(undefined); }, TypeError, "Promise.all throws when called when this parameter is undefined", "Promise.all: 'this' is not an Object");
            assert.throws(function() { Promise.all.call(null); }, TypeError, "Promise.all throws when called when this parameter is null", "Promise.all: 'this' is not an Object");
            assert.throws(function() { Promise.all.call({}); }, TypeError, "Promise.all throws when called when this parameter is non-callable", "Function expected");
            assert.throws(function() { Promise.all.call(Math.sin); }, TypeError, "Promise.all throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.allSettled throwing behavior",
        body: function () {
            assert.throws(function() { Promise.allSettled.call(); }, TypeError, "Promise.allSettled throws when called with no this parameter", "Promise.allSettled: 'this' is not an Object");
            assert.throws(function() { Promise.allSettled.call(undefined); }, TypeError, "Promise.allSettled throws when called when this parameter is undefined", "Promise.allSettled: 'this' is not an Object");
            assert.throws(function() { Promise.allSettled.call(null); }, TypeError, "Promise.allSettled throws when called when this parameter is null", "Promise.allSettled: 'this' is not an Object");
            assert.throws(function() { Promise.allSettled.call({}); }, TypeError, "Promise.allSettled throws when called when this parameter is non-callable", "Function expected");
            assert.throws(function() { Promise.allSettled.call(Math.sin); }, TypeError, "Promise.allSettled throws when this parameter is a non-constructor", "Function expected");
        }
    },
    {
        name: "Promise.any throwing behavior",
        body: function () {
            assert.throws(function() { Promise.any.call(); }, TypeError, "Promise.any throws when called with no this parameter", "Function expected");
            assert.throws(function() { Promise.any.call(undefined); }, TypeError, "Promise.any throws when called when this parameter is undefined", "Function expected");
            assert.throws(function() { Promise.any.call(null); }, TypeError, "Promise.any throws when called when this parameter is null", "Function expected");
            assert.throws(function() { Promise.any.call({}); }, TypeError, "Promise.any throws when called when this parameter is non-callable", "Function expected");
            assert.throws(function() { Promise.any.call(Math.sin); }, TypeError, "Promise.any throws when this parameter is a non-constructor", "Function expected");
            assert.throws(function() { Promise.any.call(5); }, TypeError, "Promise.any throws when this parameter is a integer", "Function expected");
            assert.throws(function() { Promise.any.call(5.0); }, TypeError, "Promise.any throws when this parameter is a float", "Function expected");
            assert.throws(function() { Promise.any.call("literal"); }, TypeError, "Promise.any throws when this parameter is a string literal", "Function expected");
        }
    },
    {
        name: "Promise.prototype.then to access constructor through [@@species]",
        body: function () {
            var p = new Promise(function(resolve, reject) { });
            p.constructor = undefined;
            assert.doesNotThrow(function() { p.then(function(result) {}, function(err) {}); }, "");
        }
    },
    {
        name: "Promise.resolve checks the 'constructor' property of the argument if it's a promise",
        body: function () {
            let x = new Promise(function(resolve, reject) { });

            assert.isTrue(x === Promise.resolve(x), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");

            let xConstructor = {foo: 'my constructor'};
            x.constructor = xConstructor;

            assert.isTrue(x === Promise.resolve.call(xConstructor, x), "Promise.resolve called with a promise object, x, returns that promise if 'this' === x.constructor");

            assert.isFalse(x === Promise.resolve(x), "Promise.resolve called with a promise object, x, returns a new promise if 'this' !== x.constructor");
        }
    },
    {
        name: "Promise resolve / reject functions handed to the executor function",
        body: function () {
            var resolveFunction = undefined;
            var rejectFunction = undefined;  
            new Promise(function(resolve, reject) {  
                resolveFunction = resolve;
                rejectFunction = reject;  
            });  
            assert.isFalse(resolveFunction === undefined, "new Promise should provide a resolve function");
            assert.isFalse(rejectFunction === undefined, "new Promise should provide a reject function");

            assert.areEqual(1, resolveFunction.length, "Resolve function should have length 1");
            assert.areEqual('function', typeof resolveFunction, "Resolve function is a function type");
            assert.isTrue(Object.isExtensible(resolveFunction), "Resolve function is an extensible object");
            assert.areEqual(Object.getPrototypeOf(resolveFunction), Function.prototype, "Resolve function has __proto__ set to Function.prototype");
            assert.throws(() => { new resolveFunction(); }, TypeError, "Resolve function is an anonymous built-in but not a constructor", "Function is not a constructor");
            assert.isFalse(Object.prototype.hasOwnProperty.call(resolveFunction, "prototype"), "Resolve function does not have 'prototype' own property");
            assert.isFalse(Object.prototype.hasOwnProperty.call(resolveFunction, "name"), "Resolve function does not have 'name' own property");
            
            assert.areEqual(1, rejectFunction.length, "Reject function should have length 1");
            assert.areEqual('function', typeof rejectFunction, "Reject function is a function type");
            assert.isTrue(Object.isExtensible(rejectFunction), "Reject function is an extensible object");
            assert.areEqual(Object.getPrototypeOf(rejectFunction), Function.prototype, "Reject function has __proto__ set to Function.prototype");
            assert.throws(() => { new rejectFunction(); }, TypeError, "Reject function is an anonymous built-in but not a constructor", "Function is not a constructor");
            assert.isFalse(Object.prototype.hasOwnProperty.call(rejectFunction, "prototype"), "Reject function does not have 'prototype' own property");
            assert.isFalse(Object.prototype.hasOwnProperty.call(rejectFunction, "name"), "Reject function does not have 'name' own property");
        }
    },
    {
        name: "Promise.all resolve / reject functions",
        body: function () {
            let isCalled = false;
            let p = new Promise(function(resolve, reject) { resolve(); });
            p.then = function(resolve, reject) {
                assert.areEqual(1, resolve.length, "Resolve function should have length 1");
                assert.areEqual('function', typeof resolve, "Resolve function is a function type");
                assert.areEqual(1, reject.length, "Reject function should have length 1");
                assert.areEqual('function', typeof reject, "Reject function is a function type");
                isCalled = true;
            };

            Promise.all([p]);

            assert.isTrue(isCalled, "The then function was actually called");
        }
    },
    {
        name: "Promise.all uses iterator next correctly",
        body: function () {
            let calledNext = 0;
            const bar = {
                [Symbol.iterator]() { return this; },
                next () {
                    this.next = function (){ throw new Error ("Next should have been cached so this should not be called") };
                    return {value : Promise.resolve(0), done : (++calledNext > 2)}
                }
            }

            Promise.all(bar);
            assert.areEqual(3, calledNext, "Promise.all should use the iterator protocol, and next should be cached");
        }
    },
    {
        name: "Promise.allSettled uses iterator next correctly",
        body: function () {
            let calledNext = 0;
            const bar = {
                [Symbol.iterator]() { return this; },
                next () {
                    this.next = function (){ throw new Error ("Next should have been cached so this should not be called") };
                    return {value : Promise.resolve(0), done : (++calledNext > 2)}
                }
            }

            Promise.allSettled(bar);
            assert.areEqual(3, calledNext, "Promise.allSettled should use the iterator protocol, and next should be cached");
        }
    },
    {
        name: "Promise.any uses iterator next correctly",
        body: function () {
            let calledNext = 0;
            const bar = {
                [Symbol.iterator]() { return this; },
                next () {
                    this.next = function (){ throw new Error ("Next should have been cached so this should not be called") };
                    return {value : Promise.resolve(0), done : (++calledNext > 2)}
                }
            }

            Promise.any(bar);
            assert.areEqual(3, calledNext, "Promise.any should use the iterator protocol, and next should be cached");
        }
    },
    {
        name: "Promise.race uses iterator next correctly",
        body: function () {
            let calledNext = 0;
            const bar = {
                [Symbol.iterator]() { return this; },
                next () {
                    this.next = function (){ throw new Error ("Next should have been cached so this should not be called") };
                    return {value : Promise.resolve(0), done : (++calledNext > 2)}
                }
            }

            Promise.race(bar);
            assert.areEqual(3, calledNext, "Promise.race should use the iterator protocol, and next should be cached");
        }
    },
    {
        name: "Executor function passed to Promise constructor via NewPromiseCapability",
        body: function () {
            let isCalled = false;
            let p = new Promise(function(resolve, reject) { resolve(); });
            let test_ctor = function(executor) {
                assert.isTrue(this instanceof test_ctor, "The 'this' argument is an instance of the ctor function");
                assert.areEqual(2, executor.length, "Executor function should have length 2");
                assert.areEqual('function', typeof executor, "Executor function is a function type");
                isCalled = true;
                executor(function(){}, function(){});
            }

            Promise.resolve.call(test_ctor, p);

            assert.isTrue(isCalled, "The constructor function was actually called");
        }
    },
    {
        name: "Promise.all calls thenable.then with correct resolve / reject handlers",
        body: function () {
            var resolveElementFunction = undefined;
            var rejectElementFunction = undefined;
            var thenable = {  
                then: function(fulfill, reject) {  
                    resolveElementFunction = fulfill;
                    rejectElementFunction = reject;
                }
            };
            function myResolveFunction() {
                throw 'should not call this function';
            }
            function myRejectFunction() {
                throw 'should not call this function';
            }
            function NotPromise(executor) {  
                executor(myResolveFunction, myRejectFunction);  
            }
            NotPromise.resolve = function(v) { return v; };  
            Promise.all.call(NotPromise, [thenable]);
            assert.isFalse(resolveElementFunction === undefined, "Promise.all should have called thenable.then with a resolve callback");
            assert.isFalse(rejectElementFunction === undefined, "Promise.all should have called thenable.then with a reject callback");
            
            assert.isFalse(myResolveFunction === resolveElementFunction, "Resolve function should not be the one we passed to the promise executor");
            assert.areEqual(myRejectFunction, rejectElementFunction, "Promise.all should call thenable.then with a PromiseAllResolve function and the reject handler we initialized the promise with");
            
            assert.areEqual(1, resolveElementFunction.length, "Resolve function should have length 1");
            assert.areEqual('function', typeof resolveElementFunction, "Resolve function is a function type");
            assert.isTrue(Object.isExtensible(resolveElementFunction), "Resolve function is an extensible object");
            assert.areEqual(Object.getPrototypeOf(resolveElementFunction), Function.prototype, "Resolve function has __proto__ set to Function.prototype");
            assert.throws(() => { new resolveElementFunction(); }, TypeError, "Resolve function is an anonymous built-in but not a constructor", "Function is not a constructor");
            assert.isFalse(Object.prototype.hasOwnProperty.call(resolveElementFunction, "prototype"), "Resolve function does not have 'prototype' own property");
            assert.isFalse(Object.prototype.hasOwnProperty.call(resolveElementFunction, "name"), "Resolve function does not have 'name' own property");
        }
    },
    {
        name: "Shape of executor function passed to Promise constructor",
        body: function () {
            var executorFunction = undefined;
            function NotPromise2(executor) {
                executorFunction = executor;
                executor(() => {}, () => {});
                
            }
            Promise.resolve.call(NotPromise2);
            assert.isFalse(executorFunction === undefined, "Promise.resolve should have tried to new NotPromise2");

            assert.areEqual(2, executorFunction.length, "Executor function should have length 1");
            assert.areEqual('function', typeof executorFunction, "Executor function is a function type");
            assert.isTrue(Object.isExtensible(executorFunction), "Executor function is an extensible object");
            assert.areEqual(Object.getPrototypeOf(executorFunction), Function.prototype, "Executor function has __proto__ set to Function.prototype");
            assert.throws(() => { new executorFunction(); }, TypeError, "Executor function is an anonymous built-in but not a constructor", "Function is not a constructor");
            assert.isFalse(Object.prototype.hasOwnProperty.call(executorFunction, "prototype"), "Executor function does not have 'prototype' own property");
            assert.isFalse(Object.prototype.hasOwnProperty.call(executorFunction, "name"), "Executor function does not have 'name' own property");
        }
    },
    {
        name: "Test calling capabilities executor function with different arguments",
        body: function () {
            assert.throws(() => {
                Promise.resolve.call(function(executor) {
                });
            }, TypeError, "We didn't set the resolve callback, Promise.resolve tried to call it which should throw", "'Promise' is not a function");
            assert.throws(() => {
                Promise.resolve.call(function(executor) {
                    assert.doesNotThrow(() => { executor(); }, "Calling executor with no arguments will set the promise capability resolve and reject callbacks to undefined");
                    assert.doesNotThrow(() => { executor(); }, "Calling executor with no arguments again works because the promise capability resolve and reject callbacks are still undefined");
                });
            }, TypeError, "We set the resolve callback to undefined, Promise.resolve tried to call it which should throw", "'Promise' is not a function");
            assert.throws(() => {
                Promise.resolve.call(function(executor) {
                    assert.doesNotThrow(() => { executor('string', 12345); }, "Calling executor with non-function arguments will set the promise capability resolve and reject callbacks");
                    assert.throws(() => { executor(); }, TypeError, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, TypeError, "We set the resolve and reject callbacks to non-functions, Promise.resolve tried to call resolve which should throw", "'Promise' is not a function");
            assert.throws(() => {
                Promise.resolve.call(function(executor) {
                    assert.doesNotThrow(() => { executor(undefined, () => {}); }, "Calling executor with only a reject callback function works but Promise.resolve will throw");
                    assert.throws(() => { executor(); }, TypeError, "Reject handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, TypeError, "We set the reject callback to a real function but didn't set the resolve callback which Promise.resolve tries to call", "'Promise' is not a function");
            assert.throws(() => {
                Promise.resolve.call(function(executor) {
                    assert.doesNotThrow(() => { executor(() => {}, undefined); }, "Calling executor with only a resolve callback function works but Promise.resolve will throw");
                    assert.throws(() => { executor(); }, TypeError, "Resolve handler of promise capability is already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
            }, TypeError, "We set the resolve callback to a real function but didn't set the reject callback which NewPromiseCapability checks to see if callable", "'Promise' is not a function");
            assert.doesNotThrow(() => {
                var isCalled = false;
                Promise.resolve.call(function(executor) {
                    assert.doesNotThrow(() => { executor(() => { isCalled = true; },() => { throw 'not called'; }); }, "Calling executor with callback functions works");
                    assert.throws(() => { executor(); }, TypeError, "Callbacks of promise capability are already set. Calling executor again throws", "Promise: an unexpected failure occurred while trying to obtain metadata information");
                });
                assert.isTrue(isCalled, "We actually called the resolve callback handler");
            }, "We set the resolve callback to a real function which is called by Promise.resolve");
        }
    },
    {
        name: "Promise.prototype.then constructs return value via this.constructor[@@species]",
        body: function () {
            var promise = new Promise(function(resolve) { resolve(42); });
            var FakePromise1 = function(exec) { exec(function(){}, function(){}); };
            promise.constructor = FakePromise1;
            var FakePromise2 = function(exec) { exec(function(){}, function(){}); };

            Object.defineProperty(FakePromise1, Symbol.species, { value: FakePromise2 });

            assert.isTrue(promise.then(function(){}) instanceof FakePromise2, "Promise.prototype.then uses this.constructor[Symbol.species] to construct the object it returns");
        }
    },
    {
        name: "Promise.prototype.finally uses modified then",
        body: function (index) {
            var calledThen = false;
            var p = new Promise(function() {});
            p.then = function() { calledThen = true; }
            p.finally("test");
            assert.isTrue(calledThen, "Promise.prototype.finally uses the modified then function");
        }
    },
    {
        name: "Promise.prototype.finally creates anonymous ThenFinally function",
        body: function (index) {
            class TestPromise extends Promise {
                then (a, b)
                {
                    this.first = a;
                    this.second = b;
                    this.argCount = arguments.length;
                }
            }
            var p = new TestPromise(function() {});
            p.finally(function() {});
            assert.areEqual(p.first.name, "", "Promise.prototype.finally creates anonymous resolve handler");
            assert.areEqual(p.first.length, 1, "Promise.prototype.finally creates resolve handler with length 1");
            assert.areEqual(p.second.name, "", "Promise.prototype.finally creates anonymous reject handler");
            assert.areEqual(p.second.length, 1, "Promise.prototype.finally creates reject handler with length 1");
            assert.areEqual(p.argCount, 2, "Promise.prototype.finally invokes then with exactly 2 arguments");
        }
    },
    {
        name: "Promise.prototype.finally with non-callable argument",
        body: function (index) {
            class TestPromise extends Promise {
                then (a, b)
                {
                    this.first = a;
                    this.second = b;
                    this.argCount = arguments.length;
                }
            }
            let p = new TestPromise(r => r());
            p.finally("not callable");
            assert.areEqual(p.first, "not callable", "Promise.prototype.finally passes through value when not callable");
            assert.areEqual(p.second, "not callable", "Promise.prototype.finally passes through value when not callable");
        }
    },
    {
        name: "Promise.prototype.finally called with non-promise this value throws",
        body: function (index) {
            let final = Promise.prototype.finally;
            assert.throws(()=>{final.call(new Number(5), "test")}, TypeError, "finally throws when called with non-promise object");
            assert.throws(()=>{final.call(new Array(5), "test")}, TypeError, "finally throws when called with non-promise object");
            assert.throws(()=>{final.call(new Object(5), "test")}, TypeError, "finally throws when called with non-promise object");
            assert.throws(()=>{final.call(5, "test")}, TypeError, "finally throws when called with non-promise object");
            assert.throws(()=>{final.call({a:5, b:6, c:7}, "test")}, TypeError, "finally throws when called with non-promise object");
            assert.throws(()=>{final.call([2,3,4], "test")}, TypeError, "finally throws when called with non-promise object");
            assert.throws(()=>{final.call("test", "test")}, TypeError, "finally throws when called with non-promise object");
            assert.throws(()=>{final.call(new String("test"), "test")}, TypeError, "finally throws when called with non-promise object");
        }
    },
    {
        name: "Anonymous thenFinally function doesn't throw",
        body: function (index) {
            let count = 0;
            class TestPromise extends Promise {
                then (a, b) {
                    ++count;
                    assert.doesNotThrow(()=>a(), "anonymous then finally function does not throw");
                    if(count == 1) assert.doesNotThrow(()=>b(), "anonymous catchFinally function does not throw");
                }
            }
            new TestPromise(function() {}).finally(()=>{});
        }
    },
    {
        name: "Subclass of Promise should return instances of the subclass from Promise methods",
        body: function () {
            class MyPromise extends Promise { }
            
            var myPromise = new MyPromise(function(resolve, reject) { resolve(42); });
            var thenPromise = myPromise.then(function() {});
            var catchPromise = myPromise.catch(function() {});
            var finallyPromise = myPromise.finally(function () {});
            
            assert.isTrue(thenPromise instanceof MyPromise, "Subclass of Promise is returned from Promise.prototype.then called with subclass of Promise object as this");
            assert.isTrue(catchPromise instanceof MyPromise, "Subclass of Promise is returned from Promise.prototype.catch called with subclass of Promise object as this");
            assert.isTrue(finallyPromise instanceof MyPromise, "Subclass of Promise is returned from Promise.prototype.finally called with subclass of Promise object as this");
            assert.isTrue(MyPromise.race([]) instanceof MyPromise, "Subclass of Promise inherits Promise.race which uses 'this' argument as constructor for return object");
            assert.isTrue(MyPromise.all([]) instanceof MyPromise, "Subclass of Promise inherits Promise.all which uses 'this' argument as constructor for return object");
            assert.isTrue(MyPromise.any([]) instanceof MyPromise, "Subclass of Promise inherits Promise.any which uses 'this' argument as constructor for return object");
            assert.isTrue(MyPromise.resolve(42) instanceof MyPromise, "Subclass of Promise inherits Promise.resolve which uses 'this' argument as constructor for return object");
            assert.isTrue(MyPromise.reject(42) instanceof MyPromise, "Subclass of Promise inherits Promise.reject which uses 'this' argument as constructor for return object");
        }
    },
];

testRunner.runTests(tests, { verbose: WScript.Arguments[0] != "summary" });
