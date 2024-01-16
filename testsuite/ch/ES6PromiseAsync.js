







function echo(str) {
    WScript.Echo(str);
}

function getAsyncFulfilledPromise(t, v, fail) {
    fail = fail || false;
    var p = new Promise(
        function(resolve,reject) {
            if (fail) {
                WScript.SetTimeout(function() { reject(v) }, 0);
            } else {
                WScript.SetTimeout(function() { resolve(v) }, 0);
            }
        }
    );
    
    p.then(
        function(result) {
            echo(t + v + ' success: ' + result);
        },
        function(err) {
            echo(t + v + ' failure: ' + err);
        }
    );
    
    return p;
}

function getAsyncResolvePromise(t, v) {
    return getAsyncFulfilledPromise(t, v, false);
}

function getAsyncRejectPromise(t, v) {
    return getAsyncFulfilledPromise(t, v, true);
}



function tamper(p, result, useresult) {
    return Object.assign(p, {
        then(onFulfilled, onRejected) {
            if (useresult) {
                onFulfilled(result);
            } else {
                onFulfilled();
            }
            return Promise.prototype.then.call(this, onFulfilled, onRejected);
        }
    });
}

var tests = [
    {
        name: "Promise basic behavior",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    echo('Test #' + index + ' - Executor function called synchronously');
                    resolve('basic:success');
                }
            );
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise basic error behavior",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    echo('Test #' + index + ' - Executor function called synchronously');
                    reject('basic:error');
                }
            );
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise with multiple then handlers",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('multithen:success');
                }
            );
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
                }
            );
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #3 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #3 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise with chained then handlers",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('chain:success1');
                }
            );
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                    
                    return new Promise(
                        function(resolve,reject) {
                            resolve('chain:success2');
                        }
                    );
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            ).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise with a throwing executor function",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    throw 'basic:throw';
                }
            );
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise with a potential thenable that throws when getting the 'then' property",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('thenable.get:unused');
                }
            );
           
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                    return { get then() { throw 'thenable.get:error!'; } };
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            ).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise with a potential thenable that throws when calling the 'then' function",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('thenable.call:unused');
                }
            );
           
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                    return { then: function() { throw 'thenable.call:error!'; } };
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            ).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise with a success handler that throws when called",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('success.throw:unused');
                }
            );
           
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                    throw 'success.throw:error';
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            ).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise with an error handler that throws when called",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error.throw:unused');
                }
            );
           
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    throw 'error.throw:error';
                }
            ).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise with an executor function that creates a self-resolution error",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    WScript.SetTimeout(
                        function() {
                            resolve(promise);
                        },
                        0
                    );
                }
            );
           
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise basic catch behavior",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error');
                }
            );
            
            promise.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise chained catch behavior",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error1');
                }
            );
            
            promise.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                    throw 'error2';
                }
            ).catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #2 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise then and catch interleaved",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('error1');
                }
            );
            
            promise.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                    return 'ok';
                }
            ).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                    throw 'error2';
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            ).catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #2 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise identity function is used when no success handler is provided",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    resolve('success');
                }
            );
            
            promise.then(
                undefined,
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            ).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #2 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise thrower function is used when no error handler is provided",
        body: function (index) {
            var promise = new Promise(
                function(resolve,reject) {
                    reject('failure');
                }
            );
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                undefined
            ).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #2 called with result = ' + result);
                },
                undefined
            ).catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.resolve creates a fulfilled resolved promise",
        body: function (index) {
            var promise = Promise.resolve('resolved promise result');
            
            promise.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                }
            );
        }
    },
    {
        name: "Promise.resolve called with a promise returns the same promise",
        body: function (index) {
            var promise = Promise.resolve(42);
            var wrappedPromise = Promise.resolve(promise);
            
            if (promise !== wrappedPromise) {
                echo('Test #' + index + ' - Promise.resolve returns a new promise object!');
            }
        }
    },
    {
        name: "Promise.reject creates a fulfilled rejected promise",
        body: function (index) {
            var promise = Promise.reject('rejected promise result');
            
            promise.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.reject called with a promise returns a promise for that promise",
        body: function (index) {
            var promise = Promise.reject(42);
            var wrappedPromise = Promise.reject(promise);
            
            if (promise === wrappedPromise) {
                echo('Test #' + index + ' - Promise.reject does not return a new promise object!');
            }
        }
    },
    {
        name: "Promise.race with an object containing a non-function iterator property",
        body: function (index) {
            var objectWithNonObjectIterator = {
                [Symbol.iterator]: 123
            };
            
            var p = Promise.race(objectWithNonObjectIterator);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.race with this argument missing the resolve function",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = undefined;
            
            var p = Promise.race([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.race with this argument resolve function returning a non-object",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = function() { return undefined; };
            
            var p = Promise.race([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.race with this argument resolve function returning an object with no then function",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = function() { return {}; };
            
            var p = Promise.race([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.race with an object containing an iterator that throws",
        body: function (index) {
            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () { 
                            throw new TypeError('failure inside iterator');
                        }
                    };
                }
            };
            
            var p = Promise.race(objectWithIterator);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.race still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        body: function (index) {
            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        i: 0,
                        next: function () { 
                            if (this.i > 2)
                            {
                                throw new TypeError('failure inside iterator');
                            }
                            
                            this.i++;
                            
                            return {
                                done: this.i == 5,
                                value: Promise.resolve('resolved promise completion #' + this.i)
                            };
                        }
                    };
                }
            };
            
            var p = Promise.race(objectWithIterator);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered resolved promise",
        body: function (index) {
            var promises = [
                new Promise(function() {}),
                Promise.resolve('first promise'),
                Promise.resolve('second promise'),
                Promise.reject('third promise')
            ];
            
            var p = Promise.race(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered resolved promise (promises complete async)",
        body: function (index) {
            var promises = [
                new Promise(function() {}),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p1'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p2'),
                getAsyncRejectPromise('Test #' + index + ' - ', 'p3')
            ];
            
            var p = Promise.race(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.race fulfills with the same value as the first encountered rejected promise (promises complete async)",
        body: function (index) {
            var promises = [
                new Promise(function() {}),
                getAsyncRejectPromise('Test #' + index + ' - ', 'p1'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p2'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p3')
            ];
            
            var p = Promise.race(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.race passes each element in it's argument to Promise.resolve",
        body: function (index) {
            var promises = [
                'first promise value',
                42,
                new TypeError('some error')
            ];
            
            var p = Promise.race(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.all with an object containing a non-function iterator property",
        body: function (index) {
            var objectWithNonObjectIterator = {
                [Symbol.iterator]: 123
            };
            
            var p = Promise.all(objectWithNonObjectIterator);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.all with this argument missing the resolve function",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = undefined;
            
            var p = Promise.all([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.all with this argument resolve function returning a non-object",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = function() { return undefined; };
            
            var p = Promise.all([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.all with this argument resolve function returning an object with no then function",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = function() { return {}; };
            
            var p = Promise.all([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.all with an object containing an iterator that throws",
        body: function (index) {
            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () { 
                            throw new TypeError('failure inside iterator');
                        }
                    };
                }
            };
            
            var p = Promise.all(objectWithIterator);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.all still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        body: function (index) {
            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        i: 0,
                        next: function () { 
                            if (this.i > 2)
                            {
                                throw new TypeError('failure inside iterator');
                            }
                            
                            this.i++;
                            
                            return {
                                done: this.i == 5,
                                value: Promise.resolve('resolved promise completion #' + this.i)
                            };
                        }
                    };
                }
            };
            
            var p = Promise.all(objectWithIterator);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills with the same value as the first encountered rejected promise",
        body: function (index) {
            var promises = [
                new Promise(function() {}),
                Promise.resolve('first promise'),
                Promise.resolve('second promise'),
                Promise.reject('third promise')
            ];
            
            var p = Promise.all(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills with the same value as the first encountered rejected promise (async promises)",
        body: function (index) {
            var promises = [
                new Promise(function() {}),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p1'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p2'),
                getAsyncRejectPromise('Test #' + index + ' - ', 'p3')
            ];
            
            var p = Promise.all(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.all fulfills when all promises in iterable fulfill",
        body: function (index) {
            var promises = [
                getAsyncResolvePromise('Test #' + index + ' - ', 'p1'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p2'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p3')
            ];
            
            var p = Promise.all(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.all passes each element in the arguments to Promise.resolve",
        body: function (index) {
            var promises = [
                'success value 1',
                42,
                new TypeError('an error')
            ];
            
            var p = Promise.all(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.all called with empty iterator, calls Promise.resolve synchronously and passes abrupt completion to reject handler",
        body: function (index) {
            function FakePromise(fn) {
              function resolve() { echo(`Test #${index} - resolve called`); throw new Error('oops'); }
              function reject(e) { echo(`Test #${index} - reject called: ${e.message}`) }
              fn(resolve, reject);
              this.then = function(onResolve, onReject) {};
            }

            FakePromise.resolve = function() {};
            Promise.all.call(FakePromise, []);
        }
    },
    {
        name: "Promise.resolve called with a thenable calls then on the thenable",
        body: function (index) {
            var thenable = {
                then: function(resolve, reject) {
                    echo('Test #' + index + ' - Promise.resolve calls thenable.then');
                    
                    Promise.resolve('nested Promise.resolve call').then(
                        function(result) {
                            echo('Test #' + index + ' - Promise.resolve call nested within thenable.then = ' + result);
                        }
                    );
                }
            };
            
            var promise = Promise.resolve(thenable);
        }
    },
    {
        name: "Calling promise resolve function with thenable should call thenable.then",
        body: function (index) {
            var p = new Promise(function(res) {
                res({ then: function(resolve, reject) {
                    echo('Test #' + index + ' - thenable.then resolve = ' + (typeof resolve) + ' reject = ' + (typeof reject));
                }});
            });
        }
    },
    {
        name: "Promise.all doesn't call then for rejected promises",
        body: function(index) {
              Promise.all([Promise.reject('expected1')]).then(
                    result => echo(`Test #${index} - Success handler #1 called with result = ${result}`)
                ).catch(
                    err => echo(`Test #${index} - Catch handler #1 called with err = ${err}`)
                );
              Promise.all([Promise.reject('expected2'), Promise.resolve('unexpected1')]).then(
                    result => echo(`Test #${index} - Success handler #2 called with result = ${result}`)
                ).catch(
                    err => echo(`Test #${index} - Catch handler #2 called with err = ${err}`)
                );
              Promise.all([Promise.resolve('unexpected2'), Promise.reject('expected3')]).then(
                    result => echo(`Test #${index} - Success handler #3 called with result = ${result}`)
                ).catch(
                    err => echo(`Test #${index} - Catch handler #3 called with err = ${err}`)
                );
        }
    },
    {
        name: "Promise.all with iterator that returns no items",
        body: function(index) {
            var promises = [];
            
            var p = Promise.all(promises);
            p.then(v => {
                echo(`Test #${index} - Success handler #1 called with result = '${v}' (length = ${v.length}) (isArray = ${Array.isArray(v)})`);
            }).catch(err => {
                echo(`Test #${index} - Catch handler called with err = ${err}`);
            });
        }
    },
    {
        name: "Simple tampering of Promise.all promise changes resolved result value",
        body: function(index) {
            var promises = [tamper(Promise.resolve('success'), 'tampered', true)];
            
            Promise.all(promises).then(result => { 
                echo(`Test #${index} - Success handler called with result = '${result}' (length = ${result.length}) (isArray = ${Array.isArray(result)})`);
            }).catch(err => {
                echo(`Test #${index} - Catch handler called with err = ${err}`);
            });
        }
    },
    {
        name: "Promise.all - can't prevent remaining elements counter from reaching zero",
        body: function (index) {
            var promises = [tamper(Promise.resolve('success'))];

            Promise.all(promises).then(result => { 
                echo(`Test #${index} - Success handler called with result = '${result}' (length = ${result.length}) (isArray = ${Array.isArray(result)})`);
            }).catch(err => {
                echo(`Test #${index} - Catch handler called with err = ${err}`);
            });
        }
    },
    {
        name: "Promise from Promise.all never resolved before arguments",
        body: function (index) {
            var promises = [
                Promise.resolve(0),
                tamper(Promise.resolve(1)),
                Promise.resolve(2).then(result => { 
                    echo(`Test #${index} - Success handler #1a called with result = '${result}' (isArray = ${Array.isArray(result)}) (fulfillCalled = ${fulfillCalled})`);
                    return 3;
                }).then(result => { 
                    echo(`Test #${index} - Success handler #1b called with result = '${result}' (isArray = ${Array.isArray(result)}) (fulfillCalled = ${fulfillCalled})`);
                    return 4;
                }).catch(err => {
                    echo(`Test #${index} - Catch handler #1 called with err = ${err}`);
                })
            ];

            let fulfillCalled = false;
            
            Promise.all(promises).then(result => {
                fulfillCalled = true;
                echo(`Test #${index} - Success handler #2 called with result = '${result}' (length = ${result.length}) (isArray = ${Array.isArray(result)}) (fulfillCalled = ${fulfillCalled})`);
            }).catch((err) => {
                echo(`Test #${index} - Catch handler #2 called with err = ${err}`);
            });
        }
    },
    {
        name: "Promise from Promise.all never resolved if rejected promise in arguments",
        body: function (index) {
            var promises = [
                Promise.resolve(0),
                tamper(Promise.resolve(1)),
                Promise.reject(2)
            ];

            Promise.all(promises).then(result => {
                echo(`Test #${index} - Success handler #1 called with result = '${result}' (length = ${result.length}) (isArray = ${Array.isArray(result)})`);
            }, err => {
                echo(`Test #${index} - Error handler #1 called with err = ${err}`);
            }).catch(err => {
                echo(`Test #${index} - Catch handler #1 called with err = ${err}`);
            });
        }
    },
    {
        name: "Promise executor resolves with the first call resolve function",
        body: function (index) {
            var p = new Promise(function(resolve,reject) {
                resolve('success');
                resolve('failure');
            });
            p.then(
                (res) => { echo(`Test #${index} - Success handler #1 called with res = '${res}'`); },
                (err) => { echo(`Test #${index} - Error handler #1 called with err = '${err}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects with the first call reject function",
        body: function (index) {
            var p = new Promise(function(resolve,reject) {
                reject('success');
                reject('failure');
            });
            p.then(
                (res) => { echo(`Test #${index} - Success handler #1 called with res = '${res}'`); },
                (err) => { echo(`Test #${index} - Error handler #1 called with err = '${err}'`); }
            );
        }
    },
    {
        name: "Promise executor resolves/rejects with the first call to either function",
        body: function (index) {
            var p = new Promise(function(resolve,reject) {
                resolve('success');
                reject('failure');
            });
            p.then(
                (res) => { echo(`Test #${index} - Success handler #1 called with res = '${res}'`); },
                (err) => { echo(`Test #${index} - Error handler #1 called with err = '${err}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects/resolves with the first call to either function",
        body: function (index) {
            var p = new Promise(function(resolve,reject) {
                reject('success');
                resolve('failure');
            });
            p.then(
                (res) => { echo(`Test #${index} - Success handler #1 called with res = '${res}'`); },
                (err) => { echo(`Test #${index} - Error handler #1 called with err = '${err}'`); }
            );
        }
    },
    {
        name: "Promise executor rejects/resolves/rejects with the first call to either function",
        body: function (index) {
            var p = new Promise(function(resolve,reject) {
                reject('success');
                resolve('failure');
                reject('failure');
            });
            p.then(
                (res) => { echo(`Test #${index} - Success handler #1 called with res = '${res}'`); },
                (err) => { echo(`Test #${index} - Error handler #1 called with err = '${err}'`); }
            );
        }
    },
    {
        name: "Promise executor resolves/rejects/resolves with the first call to either function",
        body: function (index) {
            var p = new Promise(function(resolve,reject) {
                resolve('success');
                reject('failure');
                resolve('failure');
            });
            p.then(
                (res) => { echo(`Test #${index} - Success handler #1 called with res = '${res}'`); },
                (err) => { echo(`Test #${index} - Error handler #1 called with err = '${err}'`); }
            );
        }
    },
    {
        name: "Promise.prototype.finally - called for resolved promise",
        body: function (index) {
            var p = Promise.resolve("failure");
            p.finally((arg) => { if(arg == "failure") { echo(`Test #${index} - Failed finally handler called with incorrect parameter = '${arg}'`); }
                                        else {echo(`Test #${index} - Success finally handler called for resolved promise without value`); } } );
        }
    },
    {
        name: "Promise.prototype.finally - called for rejected promise",
        body: function (index) {
            var p = Promise.reject("failure");
            p.finally((arg) => { if(arg == "failure") { echo(`Test #${index} - Failed finally handler called with incorrect parameter = '${arg}'`); }
                                        else { echo(`Test #${index} - Success finally handler called for rejected promise without value`); } } );
        }
    },
    {
        name: "Promise.prototype.finally passes through result for Reject",
        body: function (index) {
            var p = Promise.reject("Result");
            var final = p.finally((arg) => { return "failure" } );
            final.then((e) => { echo(`Test #${index} - Failed - wrong status passed through finally`); },
                        (e) => { if(e == "Result") { echo(`Test #${index} - Success - Rejected status and value passed through finally`); }
                                    else { echo(`Test #${index} - Failed - wrong value passed through finally`); }});
        }
    },
    {
        name: "Promise.prototype.finally passes through result for Resolve",
        body: function (index) {
            var p = Promise.resolve("Result");
            var final = p.finally((arg) => { return "failure" } );
            final.then((e) => { if(e == "Result") { echo(`Test #${index} - Success - Resolved status and value passed through finally`); }
                                    else { echo(`Test #${index} - Failed - wrong value passed through finally`); }},
                                    (e) => { echo(`Test #${index} - Failed - wrong status passed through finally`); });
        }
    },
    {
        name: "Promise.prototype.finally passes through result for Reject with not callable argument",
        body: function (index) {
            var p = Promise.reject("Result");
            var final = p.finally("not callable");
            final.then((e) => { echo(`Test #${index} - Failed - wrong status passed through finally`); },
                        (e) => { if(e == "Result") { echo(`Test #${index} - Success - Rejected status and value passed through finally with not callable argument`); }
                                    else { echo(`Test #${index} - Failed - wrong value passed through finally`); }});
        }
    },
    {
        name: "Promise.prototype.finally passes through result for Resolve with not callable argument",
        body: function (index) {
            var p = Promise.resolve("Result");
            var final = p.finally("not callable");
            final.then((e) => { if(e == "Result") { echo(`Test #${index} - Success - Resolved status and value passed through finally with not callable argument`); }
                                    else { echo(`Test #${index} - Failed - wrong value passed through finally`); }},
                                    (e) => { echo(`Test #${index} - Failed - wrong status passed through finally`); });
        }
    },
    {
        name: "Promise.prototype.finally throws own rejection after a resolved promise",
        body: function (index) {
            var p = Promise.resolve("Result");
            var final = p.finally(()=>{throw "own rejection";});
            final.then((e) => { (e) => echo(`Test #${index} - Failed - wrong status passed through finally`); },
                        (e) => { if(e == "own rejection") { echo(`Test #${index} - Success - own rejection passed through finally`); }
                            else {echo(`Test #${index} - Failed - wrong result ${e} passed through finally`); } } );
        }
    },
    {
        name: "Promise.prototype.finally throws own rejection after a rejected promise",
        body: function (index) {
            var p = Promise.reject("Result");
            var final = p.finally(()=>{throw "own rejection";});
            final.then((e) => { (e) => echo(`Test #${index} - Failed - wrong status passed through finally`); },
                        (e) => { if(e == "own rejection") { echo(`Test #${index} - Success - own rejection passed through finally`); }
                            else {echo(`Test #${index} - Failed - wrong result ${e} passed through finally`); } } );
        }
    },
    {
        name: "Ensure Multiple then handlers on a single promise are executed in correct order",
        body: function (index) {
            let val = -7
            let resolveFunc;
            const p = new Promise((resolve, reject) => {
                resolveFunc = resolve;
            });
            p.then(() => {
                val = val * 3;
            });
            p.then(() => {
                val = val + 21
            });
            p.then(() => {
                echo('Test #' + index + ' - val is ' + val + '(Expect 0)');
            });
            resolveFunc();
        }
    },
    {
        name: "Promise.allSettled settles when all promises in iterable settle",
        body: function (index) {
            var iterable = [getAsyncResolvePromise('Test #' + index + ' - ', 'p1'),
                            Promise.resolve('p2'),
                            Promise.reject('p3'),
                            getAsyncRejectPromise('Test #' + index + ' - ', 'p4'),];

            Promise.allSettled(iterable).then(
                v => echo(`Test #${index} - Success - ${JSON.stringify(v)}`),
                e => echo(`Test #${index} - Failed - ${JSON.stringify(e)}`));
        }
    },
    {
        name: "Promise.allSettled settles even if all promises reject",
        body: function (index) {
            var iterable = [getAsyncRejectPromise('Test #' + index + ' - ', 'p1'),
                            Promise.reject('p2'),
                            Promise.reject('p3')];

            Promise.allSettled(iterable).then(
                v => echo(`Test #${index} - Success - ${JSON.stringify(v)}`),
                e => echo(`Test #${index} - Failed - ${JSON.stringify(e)}`));
        }
    },
    {
        name: "Promise.allSettled settles immediately with an empty iterator",
        body: function (index) {
            var iterable = [];

            Promise.allSettled(iterable).then(
                v => echo(`Test #${index} - Success - ${JSON.stringify(v)}`),
                e => echo(`Test #${index} - Failed - ${JSON.stringify(e)}`));
        }
    },
    {
        name: "Promise.allSettled doesn't settle if some promises don't settle",
        body: function (index) {
            var iterable = [Promise.resolve('p1'), new Promise(()=>{})];

            Promise.allSettled(iterable).then(
                v => echo(`Test #${index} - Success - ${JSON.stringify(v)}`),
                e => echo(`Test #${index} - Failed - ${JSON.stringify(e)}`));
        }
    },
    {
        name: "Promise.allSettled rejects immediately with an iterator that throws",
        body: function (index) {
            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        i: 0,
                        next: function () { 
                            if (this.i > 2)
                            {
                                throw new TypeError('failure inside iterator');
                            }

                            this.i++;

                            return {
                                done: this.i == 5,
                                value: getAsyncResolvePromise('Test #' + index + ' - ', 'p' + this.i)
                            };
                        }
                    };
                }
            };

            Promise.allSettled(objectWithIterator).then(
                v => echo(`Test #${index} - Success - ${JSON.stringify(v)}`),
                e => echo(`Test #${index} - Failed - ${JSON.stringify(e)}`));
        }
    },
    {
        name: "Promise.allSettled resolve and reject functions cannot be called multiple times",
        body: function(index) {
            let oldThen = Promise.prototype.then;

            try {
                var resolveFunc;
                var rejectFunc;

                Promise.prototype.then = function(resolve, reject) {
                    console.log(`Test #${index} - Temp then handler called from Promise.allSettled`);

                    
                    resolveFunc = resolve;
                    rejectFunc = reject;
                    
                    Promise.prototype.then = oldThen;
                    
                    Promise.prototype.then.call(this, resolve, reject);
                }

                Promise.allSettled([getAsyncResolvePromise('Test #' + index + ' - ', 'p1')]).then(
                    v => {
                        console.log(`Test #${index} - Success: ${JSON.stringify(v)}`);
                        
                        
                        
                        resolveFunc('p2');
                        rejectFunc('e2');
                    },
                    e => console.log(`Test #${index} - Error: ${e}`)
                );
            } finally {
                
                Promise.prototype.then = oldThen;
            }
        }
    },
    {
        name: "Promise.allSettled passes all elements of iterable to Promise.resolve",
        body: function (index) {
            var iterable = ['p1', 'p2'];

            Promise.allSettled(iterable).then(
                v => echo(`Test #${index} - Success - ${JSON.stringify(v)}`),
                e => echo(`Test #${index} - Failed - ${JSON.stringify(e)}`));
        }
    },
    {
        name: "Promise.allSettled called with empty iterator, calls Promise.resolve synchronously and passes abrupt completion to reject handler",
        body: function (index) {
            function FakePromise(fn) {
              function resolve() { echo(`Test #${index} - resolve called`); throw new Error('oops'); }
              function reject(e) { echo(`Test #${index} - reject called: ${e.message}`) }
              fn(resolve, reject);
              this.then = function(onResolve, onReject) {};
            }

            FakePromise.resolve = function() {};
            Promise.allSettled.call(FakePromise, []);
        }
    },
    {
        name: "Promise.allSettled gets the constructor's resolve function only once",
        body: function(index) {
            function FakePromise(fn) {
                fn(function() {}, function() {});
                this.then = function(onResolve, onReject) {};
            }

            Object.defineProperty(FakePromise, 'resolve', {
                get: function() {
                    echo(`Test #${index} - get constructor resolve`);
                    return function(x) {
                        echo(`Test #${index} - constructor resolve called`);
                        return Promise.resolve(x);
                    };
                }
            });

            Promise.allSettled.call(FakePromise, [1, 2]);
        }
    },
    {
        name: "Promise.all gets the constructor's resolve function only once",
        body: function(index) {
            function FakePromise(fn) {
                fn(function() {}, function() {});
                this.then = function(onResolve, onReject) {};
            }

            Object.defineProperty(FakePromise, 'resolve', {
                get: function() {
                    echo(`Test #${index} - get constructor resolve`);
                    return function(x) {
                        echo(`Test #${index} - constructor resolve called`);
                        return Promise.resolve(x);
                    };
                }
            });

            Promise.all.call(FakePromise, [1, 2]);
        }
    },
    {
        name: "Promise.race gets the constructor's resolve function only once",
        body: function(index) {
            function FakePromise(fn) {
                fn(function() {}, function() {});
                this.then = function(onResolve, onReject) {};
            }

            Object.defineProperty(FakePromise, 'resolve', {
                get: function() {
                    echo(`Test #${index} - get constructor resolve`);
                    return function(x) {
                        echo(`Test #${index} - constructor resolve called`);
                        return Promise.resolve(x);
                    };
                }
            });

            Promise.race.call(FakePromise, [1, 2]);
        }
    },
    {
        name: "Promise.any gets the constructor's resolve function only once",
        body: function(index) {
            function FakePromise(fn) {
                fn(function() {}, function() {});
                this.then = function(onResolve, onReject) {};
            }
            FakePromise.reject = Promise.reject;

            Object.defineProperty(FakePromise, 'resolve', {
                get: function() {
                    echo(`Test #${index} - get constructor resolve`);
                    return function(x) {
                        echo(`Test #${index} - constructor resolve called`);
                        return Promise.resolve(x);
                    };
                }
            });

            Promise.any.call(FakePromise, [
                FakePromise.reject(1),
                FakePromise.reject(2)
            ]);
        }
    },
    {
        name: "Promise.any with an object containing a non-function iterator property",
        body: function (index) {
            var objectWithNonObjectIterator = {
                [Symbol.iterator]: 123
            };
            
            var p = Promise.any(objectWithNonObjectIterator);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Catch handler #1 called with err.message = ' + err.message);
                }
            );
        }
    },
    {
        name: "Promise.any with this argument missing the resolve function",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = undefined;
            
            var p = Promise.any([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Catch handler #1 called with err.message = ' + err.message);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.any with this argument resolve function returning a non-object",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = function() { return undefined; };
            
            var p = Promise.any([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Catch handler #1 called with err.message = ' + err.message);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.any with this argument resolve function returning an object with no then function",
        body: function (index) {
            var _resolve = Promise.resolve;
            Promise.resolve = function() { return {}; };
            
            var p = Promise.any([Promise.reject(42)]);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Catch handler #1 called with err.message = ' + err.message);
                }
            );
            
            Promise.resolve = _resolve;
        }
    },
    {
        name: "Promise.any with an object containing an iterator that throws",
        body: function (index) {
            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        next: function () { 
                            throw new TypeError('failure inside iterator');
                        }
                    };
                }
            };
            
            var p = Promise.any(objectWithIterator);
            p.catch(
                function(err) {
                    echo('Test #' + index + ' - Catch handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Catch handler #1 called with err.message = ' + err.message);
                }
            );
        }
    },
    {
        name: "Promise.any still returns a rejected promise if anything throws while iterating, even if resolved promises are encountered",
        body: function (index) {
            var objectWithIterator = {
                [Symbol.iterator]: function() {
                    return {
                        i: 0,
                        next: function () { 
                            if (this.i > 2)
                            {
                                throw new TypeError('failure inside iterator');
                            }
                            
                            this.i++;
                            
                            return {
                                done: this.i == 5,
                                value: Promise.resolve('resolved promise completion #' + this.i)
                            };
                        }
                    };
                }
            };
            
            var p = Promise.any(objectWithIterator);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Error handler #1 called with err.message = ' + err.message);
                }
            );
        }
    },
    {
        name: "Promise.any fulfills with the same value as the first encountered resolved promise",
        body: function (index) {
            var promises = [
                new Promise(function() {}),
                Promise.resolve('first promise'),
                Promise.resolve('second promise'),
                Promise.reject('third promise')
            ];
            
            var p = Promise.any(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Error handler #1 called with err.message = ' + err.message);
                }
            );
        }
    },
    {
        name: "Promise.any fulfills with the same value as the first encountered resolved promise (promises complete async)",
        body: function (index) {
            var promises = [
                new Promise(function() {}),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p1'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p2'),
                getAsyncRejectPromise('Test #' + index + ' - ', 'p3')
            ];
            
            var p = Promise.any(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Error handler #1 called with err.message = ' + err.message);
                }
            );
        }
    },
    {
        name: "Promise.any fulfills with the same value as the first encountered rejected promise (promises complete async)",
        body: function (index) {
            var promises = [
                new Promise(function() {}),
                getAsyncRejectPromise('Test #' + index + ' - ', 'p1'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p2'),
                getAsyncResolvePromise('Test #' + index + ' - ', 'p3')
            ];
            
            var p = Promise.any(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Error handler #1 called with err.message = ' + err.message);
                }
            );
        }
    },
    {
        name: "Promise.any should wait until one resolve",
        body: function (index) {
            const list = [
                Promise.reject(1),
                getAsyncRejectPromise('Test #' + index + ' - ', 2),
                getAsyncResolvePromise('Test #' + index + ' - ', 3),
                getAsyncRejectPromise('Test #' + index + ' - ', 4),
                Promise.reject(5),
            ]

            Promise.any(list).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err){
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Error handler #1 called with err.message = ' + JSON.stringify(err.message));
                    echo('Test #' + index + ' - Error handler #1 called with err.name = ' + err.name);
                    echo('Test #' + index + ' - Error handler #1 called with err.errors = ' + JSON.stringify(err.errors));
                }
            );
        }
    },
    {
        name: "Promise.any should wait until all reject",
        body: function (index) {
            const list = [
                Promise.reject(1),
                getAsyncRejectPromise('Test #' + index + ' - ', 2),
                getAsyncRejectPromise('Test #' + index + ' - ', 3),
                getAsyncRejectPromise('Test #' + index + ' - ', 4),
                Promise.reject(5),
            ]
            Promise.any(list).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err){
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Error handler #1 called with err.message = ' + JSON.stringify(err.message));
                    echo('Test #' + index + ' - Error handler #1 called with err.name = ' + err.name);
                    echo('Test #' + index + ' - Error handler #1 called with err.errors = ' + JSON.stringify(err.errors));
                }
            );
        }
    },
    {
        name: "Promise.any should not call return",
        body: function (index) {
            function it() {
                return {
                    [Symbol.iterator]() {
                        echo(`Test #${index} - get iterator called`);
                        return this;
                    },
                    i: 2,
                    next() {
                        if (this.i > 0) {
                            let i = this.i--;
                            echo(`Test #${index} - iterator next called: ${i}`);
                            return { value: i, done: false }
                        } else {
                            echo(`Test #${index} - iterator next throw`);
                            throw new Error("BANG");
                        }
                    },
                    return() {
                        echo(`Test #${index} - iterator return called`);
                    }
                }
            }

            Promise.any(it()).then(
                function (result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function (err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.any should call return once",
        body: function (index) {
            function it() {
                return {
                    [Symbol.iterator]() {
                        echo(`Test #${index} - get iterator called`);
                        return this;
                    },
                    i: 2,
                    next() {
                        if (this.i > 0) {
                            let i = this.i--;
                            echo(`Test #${index} - iterator next called: ${i}`);
                            return { value: i, done: false }
                        } else {
                            echo(`Test #${index} - iterator next throw`);
                            throw new Error("BANG");
                        }
                    },
                    return() {
                        echo(`Test #${index} - iterator return called`);
                    }
                }
            }

            Promise.resolve = function () { throw new Error(); }
            Promise.any(it()).then(
                function (result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function (err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.any should throw TypeError if resolve not a function",
        body: function (index) {
            class foo extends Promise {
                static get resolve() {
                    echo('Test #' + index + ' - resolve getter called');
                    return 5;
                }
            }
            Promise.any.call(foo, [2, 3]).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                }
            );
        }
    },
    {
        name: "Promise.any passes each element in it's argument to Promise.resolve",
        body: function (index) {
            var promises = [
                'first promise value',
                42,
                new TypeError('some error')
            ];
            
            var p = Promise.any(promises);
            p.then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err) {
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Error handler #1 called with err.message = ' + err.message);
                }
            );
        }
    },
    {
        name: "Promise.any should failure with empty list",
        body: function (index) {
            Promise.any([]).then(
                function(result) {
                    echo('Test #' + index + ' - Success handler #1 called with result = ' + result);
                },
                function(err){
                    echo('Test #' + index + ' - Error handler #1 called with err = ' + err);
                    echo('Test #' + index + ' - Error handler #1 called with err.errors = ' + JSON.stringify(err.errors));
                    echo('Test #' + index + ' - Error handler #1 called with err.message = ' + err.message);
                }
            )
        }
    },
    {
        name: "Promise.any should reject with aggregate error and errors",
        body: function (index) {
            function applyTest(list, idx) {
                Promise.any(list).then(
                    function(result) {
                        echo('Test #' + index + ' - Success handler #' + idx + ' called with result = ' + result);
                    },
                    function(err){
                        echo('Test #' + index + ' - Error handler #' + idx + ' called with err = ' + err);
                        echo('Test #' + index + ' - Error handler #' + idx + ' called with err.message = ' + JSON.stringify(err.message));
                        echo('Test #' + index + ' - Error handler #' + idx + ' called with err.name = ' + err.name);
                        echo('Test #' + index + ' - Error handler #' + idx + ' called with err.errors = ' + JSON.stringify(err.errors));
                    }
                );
            }

            applyTest([], 1)
            applyTest([Promise.reject(1)], 2)
            applyTest([Promise.reject(1), Promise.reject(2), Promise.reject(3)], 3)
        }
    }
];

var index = 1;

function runTest(test) {
    echo('Executing test #' + index + ' - ' + test.name);
    
    try {
        test.body(index);
    } catch(e) {
        echo('Caught exception: ' + e);
    }
    
    index++;
}

tests.forEach(runTest);
    
echo('\nCompletion Results:');
