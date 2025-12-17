print("..\\UnitTestFramework\\UnitTestFramework.js");

var nextCount = 0;
var returnCount = 0;
var value1 = 1;
var done1 = false;
var iterable = {};
var shouldNextThrow = false;
var shouldReturnThrow = false;
iterable[Symbol.iterator] = function () {
    return {
        next: function() {
            nextCount++;
            if (shouldNextThrow) { throw new Error('Exception from next function'); }
            return {value : value1, done:done1};
        },
        return: function (value) {
            returnCount++;
            if (shouldReturnThrow) { throw new Error('Exception from return function'); }
            return {done:true};
        }
    };
};

var obj = {
  set prop(val) {
    throw new Error('From setter');
  }
};

var tests = [
    {
		name : "Destructuring - no .return function defined is a valid scenario",
		body : function () {
			var iterable = {};
			iterable[Symbol.iterator] = function () {
				return {
					next : function () {
						return {
							value : 10,
							done : false
						};
					}
				};
			};

			var [a] = iterable;
			print(a, 10, "Destructuring declaration calls next on iterator and should get 10");
            var b;
            [b] = iterable;
			print(b, 10, "Destructuring expression calls next on iterator and should get 10");
		}
	},
    {
		name : "Destructuring - validating that the iterable has .return field but not as a function",
		body : function () {
            var returnFnc = undefined;
            var iterable = {};
            iterable[Symbol.iterator] = function() {
              return {
                next: function() {
                    return {value:10, done:false};
                },
                return: returnFnc
              };
            };
            
            var a;
            print(function() {
                [a] = iterable;
            }, "iterator has return field which returns 'undefined' and that should not throw");
            
            print(function() {
                returnFnc = null;
                [a] = iterable;
            }, "iterator has return field which returns 'null' and that should not throw");
            
            print(function () { returnFnc = {}; [a] = iterable; }, TypeError, 
                    "return field is not a function and returns other than 'undefined'/'null' should throw Type Error");
		}
	},
    {
		name : "Destructuring - basic validation with .return function when the pattern is empty or has one element",
		body : function () {
            nextCount = 0;
            returnCount = 0;
            [] = iterable;
            print(nextCount, 0, "Empty LHS pattern should not call the next function");
            print(returnCount, 1, "Evaluation of empty LHS pattern will call return function");

            nextCount = 0;
            returnCount = 0;
            var [] = iterable;
            print(nextCount, 0, "Empty LHS declaration pattern should not call the next function");
            print(returnCount, 1, "Evaluation of empty LHS declaration pattern call return function");
            
            nextCount = 0;
            returnCount = 0;
            [,] = iterable;
            print(nextCount, 1, "Comma operator causes the next to be called");
            print(returnCount, 1, "Exhausting the LHS pattern (after comma) will call the call return function");

            var a;
            nextCount = 0;
            returnCount = 0;
            [a] = iterable;
            print(nextCount, 1, "Evaluating destructuring element will call next function");
            print(returnCount, 1, "Exhausting the LHS pattern (after comma) will call the call return function");
            
		}
	},
    {
		name : "Destructuring - validation with .return function with nesting pattern",
		body : function () {
            nextCount = 0;
            returnCount = 0;
            [[a]] = [iterable];
            print(nextCount, 1, "Nested array pattern will call next function when 'a' is evauluated");
            print(returnCount, 1, "When nested array pattern exhausts the return function will be called");
            
            nextCount = 0;
            returnCount = 0;
            value1 = iterable;
            [a, [a]] = iterable;
            
            print(nextCount, 3, "Recursive iterators on RHS - next function will be called 3 times in order to exhaust elements");
            print(returnCount, 2, "Recursive iterators on RHS - return function for two nested iterators will be called");
            value1 = 1; 

            nextCount = 0;
            returnCount = 0;
            value1 = iterable;
            var [a, [a]] = iterable;
            
            print(nextCount, 3, "Array declaration - Recursive iterators on RHS - next function will be called 3 times in order to exhaust elements");
            print(returnCount, 2, "Array declaration - Recursive iterators on RHS - return function for two nested iterators will be called");
            value1 = 1; 
		}
	},    
    {
		name : "Destructuring - change .done to true will not call .return function",
		body : function () {
            nextCount = 0;
            returnCount = 0;
            done1 = true;
            var [a] = iterable;
            
            print(nextCount, 1, "next function is called to evaluate the element on the LHS");
            print(returnCount, 0, "'done' is set true on next function call - which will ensure that return function is not called");
            done1 = false;
		}
	},    
    {
		name : "Destructuring - validating that exception will call the .return function",
		body : function () {
            nextCount = 0;
            returnCount = 0;
            print(function () { [obj.prop] = iterable; }, Error, "Pattern throws error while assigning .value", "From setter");
            print(returnCount, 1, "Abrupt completion due to exception will call the return function");

            nextCount = 0;
            returnCount = 0;
            value1 = iterable;
            print(function () { [k, [obj.prop]] = iterable; }, Error, "Nested pattern throws error while assigning .value", "From setter");
            print(returnCount, 2, "Nested recursive iterators - abrupt completion due to exception will call the return function");
            value1 = 1;

            nextCount = 0;
            returnCount = 0;
            value1 = iterable;
            print(function () { [[[[obj.prop]]]] = iterable; }, Error, "Nested pattern throws error while assigning .value", "From setter");
            print(nextCount, 4, "Nested recursing iterators - 4 times next function called due to 4 level depth of array pattern");
            print(returnCount, 4, "Nested recursing iterators - 4 times return function called due to abrupt comletion");
            value1 = 1;
            
            done1 = true;
            nextCount = 0;
            returnCount = 0;
            print(function () { [obj.prop] = iterable; }, Error, "Pattern throws error while assigning .value", "From setter");
            print(returnCount, 0, "Ensuring that return function is not called when 'done' is set to true during abrupt completion");
            done1 = false; 
		}
	},    
    {
		name : "Destructuring - chained iterators will have their .return function called correctly",
		body : function () {
            var nextCount1 = 0;
            var nextCount2 = 0;
            var returnCount1 = 0;
            var returnCount2 = 0;
            
            var iterable = {};
            iterable[Symbol.iterator] = function() {
              return {
                next: function() {
                    nextCount1++;
                  return { value: iterable2, done: false };
                },
                return: function() {
                    returnCount1++;
                    return {done:true};
                },
              };
            };

            var iterable2 = {};
            iterable2[Symbol.iterator] = function() {
              return {
                next: function() {
                    nextCount2++;
                  return { value: [0], done: false };
                },
                return: function() {
                    returnCount2++;
                    return {done:true};
                }
              };
            };

             nextCount1 = 0;
             nextCount2 = 0;
             returnCount1 = 0;
             returnCount2 = 0;
             print(function () {[[obj.prop]] = iterable; }, Error, "Pattern throws error while assigning .value", "From setter");
             print(nextCount1, 1, "next function for the first iterator is called");
             print(nextCount2, 1, "next function for the second iterator is called");
             print(returnCount1, 1, "return function for the second iterator is called" );
             print(returnCount2, 1, "return function for the first iterator is called");
		}
	},    
    {
		name : "Destructuring - .return function should not be called when .next function throws",
		body : function () {
            shouldNextThrow = true;
            returnCount = 0;
            print(function () { var [a] = iterable; }, Error, "Array declaration - Calling .next throws", "Exception from next function");
            print(returnCount, 0, "Ensuring that return function is not called in array declaration pattern");
             
            print(function () { [a] = iterable; }, Error, "Array expression - Calling .next throws", "Exception from next function");
            print(returnCount, 0, "Ensuring that return function is not called in array expression pattern");
             
            print(function () { var [...a] = iterable; }, Error, "Array declaration with rest - Calling .next throws", "Exception from next function");
            print(returnCount, 0, "Ensuring that return function is not called when evalauting rest in array declaration pattern");
             
            print(function () { [...a] = iterable; }, Error, "Array expression with rest - Calling .next throws", "Exception from next function");
            print(returnCount, 0, "Ensuring that return function is not called when evaluating rest in array expression pattern");
             
            shouldNextThrow = false;
		}
	},    
    {
		name : "Destructuring - .return function should not be called when fetching .value throws",
		body : function () {
            var iterable2 = {};
            iterable2[Symbol.iterator] = function() {
              return {
                next: function() {
                    return {get value () { throw new Error('Exception while getting value'); }, done:false};
                },
                return: function() {
                    print('return should not be called');
                    return {};
                },
              };
            };

            print(function () { [a] = iterable2; }, Error, "Fetch .value throws", "Exception while getting value");
		}
	},    
    {
		name : "Destructuring - .return function can also throw",
		body : function () {
            shouldReturnThrow = true;
            print(function () { [a] = iterable; }, Error, "Calling .return throws", "Exception from return function");
            shouldReturnThrow = false;
		}
	},    
    {
		name : "Destructuring - caller and .return function both throw and caller's exception wins",
		body : function () {
            shouldReturnThrow = true;
            returnCount = 0;
            print(function () { [obj.prop] = iterable; }, Error, "Setting value will throw", "From setter");
            print(returnCount, 1, "Ensuring that return function is called");
            shouldReturnThrow = false;
		}
	},    
    {
		name : "Destructuring - with generator",
		body : function () {
            var finallyCount = 0;
            function *gf() {
                try {
                    yield 1;
                    print('should not reach after yield');
                }
                finally {
                    finallyCount++;
                }
                print('should not reach after finally');;
            }
            
            [a] = gf();
            print(finallyCount, 1, "Exhausting pattern will call return function on generator, which will execute finally block");
            
            finallyCount = 0;
            print(function () { [obj.prop] = gf(); }, Error, "Assigning value to destructuring element can throw", "From setter");
            print(finallyCount, 1, "Exception causes to call return function on generator, which will execute finally block");
            
            function* gf2() {
                yield 1;
                print('should not reach after yield');
            }
            var returnCount = 0;
            gf2.prototype.return = function() {
                returnCount++;
                return {};
            };
            [a] = gf2();
            print(returnCount, 1, "Exhausting pattern will call return function on generator");
            
            gf2.prototype.return = function() {
                returnCount++;
                throw new Error('Exception from return function');
            };
            print(function () { [a] = gf2(); }, Error, "Return function throws", "Exception from return function");
            returnCount = 0;
            print(function () { [obj.prop] = gf2(); }, Error, "Exception at destructuring element wins", "From setter");
            print(returnCount, 1, "Exception causes to call return function on generator");
		}
	},    
    {
		name : "Destructuring - at function parameter",
		body : function () {
            nextCount = 0;
            returnCount = 0;
            (function([a, b]) {})(iterable);
            print(nextCount, 2, "next function will be called 2 times to evaluate 2 elements in the pattern");
            print(returnCount, 1, "return function will be called once the pattern exhausts");
            
            shouldReturnThrow = true;
            print(function () { (function([a, b]) {})(iterable) }, Error, "Calling return function while at param throws", "Exception from return function");
            shouldReturnThrow = false;
		}
	},
    {
		name : "Destructuring - assigning to rest parameter can throw but should not call .return function",
		body : function () {
            function* gf() {
                yield 1;
                yield 2;
            }
            gf.prototype.return = function() {
                print('return function should not be called');
            };
            
            print(function () { [...obj.prop] = gf(); }, Error, "Assigning to rest head can throw", "From setter");
		}
	},    
    {
		name : "Destructuring - .next throws during rest assignment but it should not call the .return function",
		body : function () {
            returnCount = 0;
            shouldNextThrow = true;
            print(function () { var [...a] = iterable; }, Error, "next function throws in the array declaration evaluation", "Exception from next function");
            print(function () { [...a] = iterable; }, Error, "next function throws in the array expression evaluation", "Exception from next function");
            shouldNextThrow = false;
            print(returnCount, 0, "return function should be called even when the next function throws");
		}
	},    
    {
		name : "Destructuring - has yield as initializer",
		body : function () {
            var returnCalled = 0;
            function *innerGen () { yield undefined; yield 21; }

            innerGen.prototype.return = function () {
                returnCalled++;
                return {};
            };
            
            var x;

            var iter = (function * () {
                ([x = yield] = innerGen());
            }());

            iter.next();
            var iterationResult = iter.next(10);
            print(x, 10, "calling next with value 10 will assign 'x' to 10");
            print(iterationResult.done, "iterator is completed as there is nothing more to yield");
            print(returnCalled, 1, "Destructuring elements exhaust and that should call return function");
		}
	},    
    {
		name : "Destructuring - yield in the pattern and inner return throws",
		body : function () {
            function *innerGen () { yield undefined; }

            innerGen.prototype.return = function () {
                throw new Error('Exception from return function');
            };
            
            var x;

            var iter = (function * () {
                ([x = yield] = innerGen());
                print('Unreachable code');
            }());

            iter.next();
            print(function () {
                iter.return();
            }, Error, "calling return on the outer generator will call return on inner generator", 'Exception from return function');
		}
	},
    {
		name : "Destructuring - yield in the pattern and both caller and inner return throws",
		body : function () {
            function *innerGen () { yield undefined;}

            var returnCalled = 0;
            innerGen.prototype.return = function () {
                returnCalled++;
                throw new Error('Exception from return function');
            };
            
            var x;

            var iter = (function * () {
                ([x = yield] = innerGen());
                print('Unreachable code');
            }());

            iter.next();
            print(function () {
                iter.throw(new Error('Exception from outer throw'));
            }, Error, "calling throw on the outer generator will call return on inner generator but outer exxception wins", 'Exception from outer throw');

            print(returnCalled, 1, "ensuring that return function is called");
		}
	},
    {
		name : "Destructuring - .return will be called even before .next function is called if yield as return",
		body : function () {
            function *innerGen () { print('innerGen body is not executed');}

            var returnCalled = 0;
            innerGen.prototype.return = function () {
                returnCalled++;
                return {};
            };
            
            var x;

            var iter = (function * () {
                ([{}[yield]] = innerGen());
                print('Unreachable code');
            }());

            iter.next();
            iter.return();
            print(returnCalled, 1, "ensuring that return function is called");
		}
	},
    {
		name : "Destructuring - with rest - .return will be called even before .next function is called if yield as return",
		body : function () {
            function *innerGen () { print('innerGen body is not executed');}

            var returnCalled = 0;
            innerGen.prototype.return = function () {
                returnCalled++;
                return {};
            };
            
            var x;

            var iter = (function * () {
                ([...{}[yield]] = innerGen());
                print('Unreachable code');
            }());

            iter.next();
            iter.return();
            print(returnCalled, 1, "ensuring that return function is called");
		}
	},
    {
		name : "For..of - validation of calling .return function on abrupt loop break",
		body : function () {
            returnCount = 0;
            for (i of iterable) {
                break;
            }
            print(returnCount, 1, "return function is called as the loop is abruptly completed due to 'break'");

            returnCount = 0;
            (function () {
                for (i of iterable) {
                    return;
                }
            })();
            print(returnCount, 1, "return function is called as the loop is abruptly completed due to 'return'");

            returnCount = 0;
            (function () {
                var loop = true;
                outer2 : while (loop) {
                    loop = false;
                    for (i of iterable) {
                        continue outer2;
                    }
                }
            })();
            print(returnCount, 1, "return function is called as the loop is abruptly completed due to 'continue'");

            returnCount = 0;
            (function () {
                var loop = true;
                outer3 : while (loop) {
                    loop = false;
                    for (i of iterable) {
                        break outer3;
                    }
                }
            })();
            print(returnCount, 1, "return function is called as the loop is abruptly completed due to 'break label'");

            nextCount = 0;
            returnCount = 0;
            print(function () {
                for (i of iterable) {
                    (function () {
                        throw new Error('break loop by causing an exception');
                    })();
                }
            }, Error);
            print(nextCount, 1, "next function is called once as the loop iterates only once");
            print(returnCount, 1, "return function is called as the loop is abruptly completed due to an exception");
            
		}
	},
    {
		name : "For..of - validation of .return function with nesting pattern",
		body : function () {
            
            nextCount = 0;
            returnCount = 0;
            
            value1 = iterable;
            (function() {
            for (var iter of iterable) {
                for (var iter2 of iter) {
                    return;
                }
            }
            })();
            
            print(nextCount, 2, "Nested iterators - next function is called 2 times, once for each loop");
            print(returnCount, 2, "Nested iterators - return function is called 2 times as two loops are abruptly completed due to 'return'");
            
            nextCount = 0;
            returnCount = 0;
            print(function() {
                for (var iter of iterable) {
                    for (var iter2 of iter) {
                        throw new Error('error');
                    }
                }
            }, Error);
            
            print(nextCount, 2, "Nested iterators - next function is called 2 times, once for each loop");
            print(returnCount, 2, "Nested iterators - return function is called 2 times as two loops are abruptly completed due to exception");
		}
	},    
    {
		name : "For..of - change .done to true will not call .return function",
		body : function () {
            returnCount = 0;
            done1 = true;
            for (var i of iterable) {
                print('This will not reach as the .done is marked to true');
            }
            
            print(returnCount, 0, "Loop is completed as .done is set to true, this ensures that return function should not be called");
            done1 = false;
		}
	},    
    {
		name : "For..of - validating that causing an exception on assigning value to for..of head  will call .return function",
		body : function () {
            returnCount = 0;
            print(function () {for (obj.prop of iterable) {
                print('Should not reach here as assigning to obj.prop throws');
            }}, Error, "Assigning to loop head can throw", "From setter");
            
            print(returnCount, 1, "Abrupt loop break due to exception in assigning value to head should call return function");
            
            returnCount = 0;
            value1 = iterable;
            print(function () {
                for (var iter1 of iterable) {
                    for (obj.prop of iter1) {
                        print('Should not reach here as assigning to obj.prop throws');
                    }
                }
            }, Error, "Assigning to loop head can throw", "From setter");
            
            print(returnCount, 2, "Exception caused in inner loop when assigning value to head should call the return function");
            value1 = 1;
		}
	},    
    {
		name : "For..of - .return function should not be called when .next function throws",
		body : function () {
            returnCount = 0;
            shouldNextThrow = true;
            print(function () { for (var i of iterable) { } }, Error, "Calling .next throws", "Exception from next function");
            shouldNextThrow = false;
            print(returnCount, 0, "Ensuring that exception in next function should not call the return function");
		}
	},    
    {
		name : "For..of - .return function should not be called when fetching .value throws",
		body : function () {
            var iterable2 = {};
            iterable2[Symbol.iterator] = function() {
              return {
                next: function() {
                    return {get value () { throw new Error('Exception while getting value'); }, done:false};
                },
                return: function() {
                    print('return should not be called');
                },
              };
            };

            print(function () { for (var i of iterable2) { } }, Error,
                ".value causes an exception but that should not call the return function",
                "Exception while getting value");
		}
	},    
    {
		name : "For..of - .return function can also throw",
		body : function () {
            shouldReturnThrow = true;
            print(function () { for (var i of iterable) { break; } }, Error, ".return function throws", "Exception from return function");
            shouldReturnThrow = false;
		}
	},    
    {
		name : "For..of - caller and .return function both throw and caller's exception wins",
		body : function () {
            shouldReturnThrow = true;
            returnCount = 0;
            print(function () { for (obj.prop of iterable) { break; } }, Error, "Setting value will throw", "From setter");
            print(returnCount, 1, "Ensuring that abrupt loop completion due to exception will call return function");
            shouldReturnThrow = false;
		}
	},    
    {
		name : "For..of - with generator",
		body : function () {
            var finallyCount = 0;
            function *gf() {
                try {
                    yield 1;
                    print('Should not reach here after yield');
                }
                finally {
                    finallyCount++;
                }
                print('Should not reach here after finally');;
            }
            
            for (var i of gf()) {
                break;
            }

            print(finallyCount, 1, "'break' causes the return function called which should execute the finally block");
            
            finallyCount = 0;
            print(function () { for (obj.prop of gf()) { } }, Error, "Setting value will throw", "From setter");
            print(finallyCount, 1, "Exception causes the return function called which should execute the finally block");
            
            function* gf2() {
                yield 1;
                print('Should not reach here after yield');
            }
            var returnCount = 0;
            gf2.prototype.return = function() {
                returnCount++;
                return {};
            };
            
            for (var i of gf2()) {
                break;
            }

            print(returnCount, 1, "Loop break due to 'break' should call the return function on the generator");
            
            gf2.prototype.return = function() {
                returnCount++;
                throw new Error('Exception from return function');
            };
            print(function () { for (i of gf2()) { break; } }, Error, "return function throws", "Exception from return function");
            returnCount = 0;
            print(function () { for (obj.prop of gf2()) { } }, Error, "Exception at destructuring element wins", "From setter");
            print(returnCount, 1, "Exception in loop should call the return function");
            
		}
	},    
    {
		name : "Iterator close with yield *",
		body : function () {
            var returnCalled = 0;
            let innerGen = function*() { yield 1; yield 2 };
            innerGen.prototype.return = function () {
                returnCalled++;
                return {};
            };
            
            function* gf() { yield* innerGen() }

            for (var i of gf()) {
                break;
            }

            print(returnCalled, 1, "Loop break due to 'break' should call the return function, yield * should propagate that to inner generator");
            
            returnCalled = 0;
            (function() {
                for (var i of gf()) {
                    return;
                }
            })();
            print(returnCalled, 1, "Loop break due to 'return' should call the return function, yield * should propagate that to inner generator");
            
            returnCalled = 0;
            print(function () { for (var i of gf()) { throw new Error(''); } }, Error);
            print(returnCalled, 1, "Loop break due to 'throw' should call the return function, yield * should propagate that to inner generator");

            returnCalled = 0;
            var [x2] = gf();
            print(returnCalled, 1, "Exhausting destructuring element will call the return function");
		}
	},    
    {
		name : "Array.from - Iterator closing when mapping function throws",
		body : function () {
            var mapFn = function() {
                throw new Error('');
            };
            
            returnCount = 0;
            print(function () { 
                Array.from(iterable, mapFn);
            }, Error);
    
            print(returnCount, 1, "Exception in mapping function in Array.from should call the return function");
		}
	},    
    {
		name : "Array.from - .return function should not be called when .next function throws",
		body : function () {
            shouldNextThrow = true;
            returnCount = 0;
            print(function () { 
                Array.from(iterable);
            }, Error);
            print(returnCount, 0, "next function causes exception which should not call the return function");
            shouldNextThrow = false;
		}
	},    
    {
		name : "Array.from - both mapping function and .return throw but the outer exception wins",
		body : function () {
            var mapFn = function() {
                throw new Error('Exception from map function');
            };
            
            returnCount = 0;
            shouldReturnThrow = true;
            print(function () { 
                Array.from(iterable, mapFn);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from map function');
    
            shouldReturnThrow = false;
            print(returnCount, 1, "return function is called when mapping function throws");
		}
	},    
    {
		name : "Map - calling .return function in the event of exception",
		body : function () {
            returnCount = 0;
            print(function () { 
                new Map(iterable);
            }, TypeError);
            print(returnCount, 1, "return function is called when iterator does not return object");
            
            Map.prototype.set = function() {
                throw new Error('');
            };
            
            value1 = [];
            returnCount = 0;
            print(function () { 
                new Map(iterable);
            }, Error);
    
            print(returnCount, 1, "return function is called when .set function throws");
            value1 = 1;
		}
	},    
    {
		name : "Map - .return function should not be called when .next function throws",
		body : function () {
            returnCount = 0;
            shouldNextThrow = true;
            print(function () { 
                new Map(iterable);
            }, Error);
    
            print(returnCount, 0, "next function causes exception which should not call the return function");
            shouldNextThrow = false;
		}
	},    
    {
		name : "Map - both .set function and .return throw but the outer exception wins",
		body : function () {
            Map.prototype.set = function() {
                throw new Error('Exception from set function');
            };
            
            value1 = [];
            returnCount = 0;
            shouldReturnThrow = true;
            print(function () { 
                new Map(iterable);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from set function');
    
            shouldReturnThrow = true;
            value1 = 1;
            print(returnCount, 1, "return function is called as the set function throws");
		}
	},    
    {
		name : "WeakMap - calling .return function in the event of exception",
		body : function () {
            returnCount = 0;
            print(function () { 
                new WeakMap(iterable);
            }, TypeError);
            print(returnCount, 1, "return function is called when iterator does not return object");
            
            WeakMap.prototype.set = function() {
                throw new Error('');
            };
            
            value1 = [];
            returnCount = 0;
            print(function () { 
                new WeakMap(iterable);
            }, Error);
    
            print(returnCount, 1, "return function is called as the set function throws");
            value1 = 1;
		}
	},    
    {
		name : "WeakMap - .return function should not be called when .next function throws",
		body : function () {
            returnCount = 0;
            shouldNextThrow = true;
            print(function () { 
                new WeakMap(iterable);
            }, Error);
    
            print(returnCount, 0, "next function causes exception which should not call the return function");
            shouldNextThrow = false;
		}
	},    
    {
		name : "WeakMap - both .set function and .return throw but the outer exception wins",
		body : function () {
            WeakMap.prototype.set = function() {
                throw new Error('Exception from set function');
            };
            
            value1 = [];
            returnCount = 0;
            shouldReturnThrow = true;
            print(function () { 
                new WeakMap(iterable);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from set function');
    
            shouldReturnThrow = true;
            value1 = 1;
            print(returnCount, 1, "return function is called as the set function throws");
		}
	},    
    {
		name : "Set - calling .return function when .add function throws",
		body : function () {
            Set.prototype.add = function() {
                throw new Error('');
            };
            
            returnCount = 0;
            print(function () { 
                new Set(iterable);
            }, Error);
    
            print(returnCount, 1, "return function is called as the add function throws");
		}
	},
    {
		name : "Set - .return function should not be called when .next function throws",
		body : function () {
            returnCount = 0;
            shouldNextThrow = true;
            print(function () { 
                new Set(iterable);
            }, Error);
    
            print(returnCount, 0, "next function causes exception which should not call the return function");
            shouldNextThrow = false;
		}
	},
    {
		name : "Set - both .add function and .return throw but the outer exception wins",
		body : function () {
            Set.prototype.add = function() {
                throw new Error('Exception from add function');
            };
            
            returnCount = 0;
            shouldReturnThrow = true;
            print(function () { 
                new Set(iterable);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from add function');
    
            shouldReturnThrow = false;
            print(returnCount, 1, "return function is called as the add function throws");
		}
	},
    {
		name : "WeakSet - calling .return function when .add function throws",
		body : function () {
            WeakSet.prototype.add = function() {
                throw new Error('');
            };
            
            returnCount = 0;
            print(function () { 
                new WeakSet(iterable);
            }, Error);
    
            print(returnCount, 1, "return function is called as the add function throws");
		}
	},
    {
		name : "WeakSet - .return function should not be called when .next function throws",
		body : function () {
            returnCount = 0;
            shouldNextThrow = true;
            print(function () { 
                new WeakSet(iterable);
            }, Error);
    
            print(returnCount, 0, "next function causes exception which should not call the return function");
            shouldNextThrow = false;
		}
	},
    {
		name : "WeakSet - both .add function and .return throw but the outer exception wins",
		body : function () {
            WeakSet.prototype.add = function() {
                throw new Error('Exception from add function');
            };
            
            returnCount = 0;
            shouldReturnThrow = true;
            print(function () { 
                new WeakSet(iterable);
            }, Error, 'Validate that the exception from return function is skipped', 'Exception from add function');
    
            shouldReturnThrow = false;
            print(returnCount, 1, "return function is called as the add function throws");
		}
	},
    {
		name : "Promise.all - call .return function when .resolve function throws",
		body : function () {
            Promise.resolve = function () {
                throw new Error('');
            }
            returnCount = 0;
            Promise.all(iterable);
            print(returnCount, 1, "return function is called as the resolve function throws");
		}
	},    
    {
		name : "Promise.all - .return function should not be called when .next function throws",
		body : function () {
            returnCount = 0;
            shouldNextThrow = true;
            Promise.all(iterable);
            shouldNextThrow = false;
            print(returnCount, 0, "next function causes exception which should not call the return function");
		}
	},    
    {
		name : "Promise.all - both .resolve and .return function thrown and outer exception wins",
		body : function () {
            Promise.resolve = function () {
                throw new Error('Exception from resolve function');
            }
            returnCount = 0;
            shouldReturnThrow = true;
            var p = Promise.all(iterable);
            shouldReturnThrow = false;
            print(returnCount, 1, "return function is called as the resolve function throws");
            p.catch( function (err) {
                print(err.message, 'Exception from resolve function');
            });
		}
	},    
    {
		name : "Promise.race - call .return function when .resolve function throws",
		body : function () {
            Promise.resolve = function () {
                throw new Error('');
            }
            returnCount = 0;
            Promise.race(iterable);
            print(returnCount, 1, "return function is called as the resolve function throws");
		}
	},    
    {
		name : "Promise.race - .return function should not be called when .next function throws",
		body : function () {
            returnCount = 0;
            shouldNextThrow = true;
            Promise.race(iterable);
            shouldNextThrow = false;
            print(returnCount, 0, "next function causes exception which should not call the return function");
		}
	},    
    {
		name : "Promise.race - both .resolve and .return function thrown and outer exception wins",
		body : function () {
            Promise.resolve = function () {
                throw new Error('Exception from resolve function');
            }
            returnCount = 0;
            shouldReturnThrow = true;
            var p = Promise.race(iterable);
            shouldReturnThrow = false;
            print(returnCount, 1, "return function is called as the resolve function throws");
            p.catch( function (err) {
                print(err.message, 'Exception from resolve function');
            });
		}
	},    
    {
		name : "BugFix : yielding in the call expression under generator function",
		body : function () {
            var val = 0;
            function bar(a, b, c) { val = b; }
            function *foo(d) {
                for (var k of [2, 3]) {
                    bar(1, d ? yield : d, k);
                }
            }
            var iter = foo(true);
            iter.next();
            iter.next();
            iter.next(10);
            print(val, 10, "yielding in the call expression under for..of is working correctly");
		}
	},    
    {
		name : "BugFix : yielding in the call expression under try catch",
		body : function () {
            var val = 0;
            var counter = 0;
            function bar(a, b, c) { val = b; }
            function *foo(d) {
                try {
                     try {
                         bar(1, d ? yield : d, 11);
                     } finally {
                         counter++;
                     }
                } finally {
                    counter++;
                }
            }
            var iter = foo(true);
            iter.next();
            iter.next(10);
            print(val, 10, "yielding in the call expression under try/catch is working correctly");
            print(counter, 2, "both finally called after yielding");
		}
	},    
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
	verbose : WScript.Arguments[0] != "summary"
});
