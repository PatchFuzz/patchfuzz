













































var helpers = function helpers() {
    
    var undefinedAsString = "undefined";
    var isWScriptAvailable = this.WScript;
    if (isWScriptAvailable && !this.WScript.LoadModuleFile) {
        WScript.LoadModuleFile = function (fileName) {
            WScript.LoadScriptFile(fileName, "module");
        }
    }

    return {
        isInBrowser: function isInBrowser() {
            return typeof (document) !== undefinedAsString;
        },

        
        get isCompatVersion9() {
            return (typeof (ArrayBuffer) == undefinedAsString);
        },
        get isVersion10OrLater() {
            return !this.isCompatVersion9;
        },

        
        getDummyObject: function getDummyObject(propName) {
            var dummy = this.isInBrowser() ? document : {};
            

            if (propName != undefined) {
                dummy[propName] = 0;
            }
            return dummy;
        },

        writeln: function writeln() {
            var line = "", i;
            for (i = 0; i < arguments.length; i += 1) {
                line = line.concat(arguments[i])
            }
            if (!this.isInBrowser() || isWScriptAvailable) {
                WScript.Echo(line);
            } else {
                document.writeln(line);
                document.writeln("<br/>");
            }
        },

        printObject: function printObject(o) {
            var name;
            for (name in o) {
                this.writeln(name, o.hasOwnProperty(name) ? "" : " (inherited)", ": ", o[name]);
            }
        },

        withPropertyDeleted: function withPropertyDeleted(object, propertyName, callback) {
            var descriptor = Object.getOwnPropertyDescriptor(object, propertyName);
            try {
                delete object[propertyName];
                callback();
            } finally {
                Object.defineProperty(object, propertyName, descriptor);
            }
        },

        getTypeOf: function getTypeOf(object)
        {
            return Object.prototype.toString.call(object);
        },
        
        getFileAndLineInfo: function getFileAndLineInfo() 
        {   
            return new Error().stack.toString().replace(/[\w\W]*at body\s*/, "").replace(/\n[\w\W]*/, "")
        }
    }
}(); 

var testRunner = function testRunner() {
    var executedTestCount = 0;
    var passedTestCount = 0;
    var objectType = "object";
    var _verbose = true; 
    var _asyncMode = false;  
    var _hasAsyncTestPromise = false;

    var asyncTest = {
        "promise" : [],
        "resolve" : []
    };

    var testRunner = {
        isAsyncTest: function isAsyncTest() {
            return _asyncMode;
        },

        getAsyncTestIndex: function getAsyncTestIndex() {
            return asyncTest.testIndex;
        },

        asyncTestErr: function asyncTestErr(testIndex, str) {
            asyncTest.error[testIndex] += str + "\n";
        },

        asyncTestHasNoErr: function asyncTestHasNoErr(testIndex) {
            return asyncTest.error[testIndex] == "";
        },

        asyncTestCompleted: function asyncTestCompleted(testIndex) {
            for (var i in asyncTest.resolve[testIndex]) {
                if (asyncTest.resolve[testIndex][i] != 0) {
                    return false;
                }
            }
            return true;
        },

        runTests: function runTests(testsToRun, options) {
            
            
            
            
            

            asyncTest.count = new Array(testsToRun.length).fill(0);
            asyncTest.error = new Array(testsToRun.length).fill("");

            if (options && options.hasOwnProperty("verbose")) {
                _verbose = options.verbose;
            }

            const onlyFlag = WScript.Arguments != undefined && WScript.Arguments.filter((arg) => arg.substring(0, 6) === "-only:")
            let only = undefined;
            if (onlyFlag.length === 1) {
                only = onlyFlag[0].substring(6).split(",");
            }

            for (var i in testsToRun) {
                var isRunnable = typeof testsToRun[i] === objectType;
                if (isRunnable && (only === undefined || only.includes(i) || only.includes(testsToRun[i].name))) {
                    this.runTest(i, testsToRun[i].name, testsToRun[i].body);
                }
            }

            if (!_hasAsyncTestPromise) {
                if (_verbose || executedTestCount != passedTestCount) {
                    helpers.writeln(`Summary of tests: total executed: ${executedTestCount}; passed: ${passedTestCount}; failed: ${executedTestCount - passedTestCount}`);
                } else {
                    helpers.writeln("pass");
                }
            } else {
                var promiseResolved = false;
                var asyncTestSummary = function asyncTestSummary(executedTestCount) {
                    var passedTestCount = 0;
                    for (var i in testsToRun) {
                        var completed = testRunner.asyncTestCompleted(i);
                        var passed = completed && testRunner.asyncTestHasNoErr(i);
                        if (!passed) {
                            helpers.writeln(`*** Async result of test #${Number(i)+1} (${i}): ${testsToRun[i].name}`);
                            helpers.writeln(asyncTest.error[i]);
                            if (!completed) {
                                helpers.writeln("NOT COMPLETED");
                            }
                            helpers.writeln(passed ? "PASSED" : "FAILED");
                        } else {
                            passedTestCount++;
                        }
                    }

                    if (_verbose || executedTestCount != passedTestCount) {
                        helpers.writeln(`Summary of tests: total executed: ${executedTestCount}; passed: ${passedTestCount}; failed: ${executedTestCount - passedTestCount}`);
                    } else {
                        helpers.writeln("pass");
                    }

                };

                Promise.all(asyncTest.promise.map(Promise.all, Promise)).then( function() {
                    asyncTestSummary(executedTestCount);
                    promiseResolved = true;
                    WScript.ClearTimeout(scheduledPromiseCheck);
                });

                var promiseCheck = function promiseCheck(time, keepWaiting) {
                    if (keepWaiting && !promiseResolved) {
                        WScript.SetTimeout(()=>promiseCheck(time, true), time);
                    } else if (!promiseResolved) {
                        asyncTestSummary(executedTestCount);
                    }
                };
                var scheduledPromiseCheck = WScript.SetTimeout(promiseCheck, 5000);
            }
        },

        run: function run(tests, options) {
            this.runTests(tests, options);
        },

        runTest: function runTest(testIndex, testName, testBody) {
            
            
            
            function logTestNameIf(b) {
                if (b) {
                    helpers.writeln(`*** Running test #${executedTestCount + 1} (${testIndex}): ${testName}`);
                }
            }

            logTestNameIf(_verbose);

            asyncTest.testIndex = testIndex;
            asyncTest.promise[testIndex] = [];
            asyncTest.resolve[testIndex] = [];

            var isSuccess = true;
            try {
                testBody();
            } catch (ex) {
                var message = ex.stack || ex.message || ex;
                logTestNameIf(!_verbose);
                var fileAndLineInfo = helpers.getFileAndLineInfo();
                helpers.writeln("Test threw exception: ", message);
                isSuccess = false;
            }
            if (isSuccess) {
                if (_verbose) {
                    helpers.writeln("PASSED");
                }
                ++passedTestCount;
            } else {
                helpers.writeln("FAILED");
                testRunner.asyncTestErr(testIndex, "RUN FAILED");
            }
            ++executedTestCount;
        },

        asyncTestBegin: function asyncTestBegin(testIndex, testCount) {
            _asyncMode = true;
            asyncTest.testIndex = testIndex;
        },

        asyncTestEnd: function asyncTestEnd(testIndex, testCount) {
            _asyncMode = false;
            asyncTest.resolve[testIndex][testCount]();
            asyncTest.resolve[testIndex][testCount] = 0;
        },

        prepareAsyncCode: function prepareAsyncCode(source, shouldFail, explicitAsyncTestExit) {
            var testIndex = asyncTest.testIndex;
            if (typeof shouldFail == "undefined" || shouldFail == false) {
                _hasAsyncTestPromise = true;
                var testCount = asyncTest.count[testIndex]++;
                var promise = new Promise((resolve, reject) => {
                    asyncTest.resolve[testIndex].push(resolve);
                });
                asyncTest.promise[testIndex].push(promise);
                return explicitAsyncTestExit ?
                    `
                    var _asyncEnter = ()=>{ testRunner.asyncTestBegin(${testIndex}, ${testCount}); };
                    var _asyncExit = ()=>{ testRunner.asyncTestEnd(${testIndex}, ${testCount}); };
                    _asyncEnter();
                    ${source};
                    `  :
                    `
                    testRunner.asyncTestBegin(${testIndex}, ${testCount});
                    ${source};
                    testRunner.asyncTestEnd(${testIndex}, ${testCount});
                    `;
            } else {
                return source;
            }
        },

        LoadModule : function LoadModule(source, context, shouldFail, explicitAsyncTestExit) {
            return WScript.LoadModule(testRunner.prepareAsyncCode(source, shouldFail, explicitAsyncTestExit), context);
        },

        LoadScript : function LoadScript(source, context, shouldFail, explicitAsyncTestExit) {
            return WScript.LoadScript(testRunner.prepareAsyncCode(source, shouldFail, explicitAsyncTestExit));
        }
    };
    return testRunner;
}(); 

var assert = function assert() {
    
    var isObject = function isObject(x) {
        return x instanceof Object && typeof x !== "function";
    };

    var isNaN = function isNaN(x) {
        return x !== x;
    };

    var throwMessage = function throwMessage(ex) {
        if (!testRunner.isAsyncTest()) {
            throw ex;
        } else {
            var message = ex.stack || ex.message || ex;
            testRunner.asyncTestErr(testRunner.getAsyncTestIndex(), "Test threw exception: " + message);
        }
    }

    
    var compare = function compare(expected, actual) {
        if (expected === actual) {
            return true;
        } else if (isObject(expected)) {
            if (!isObject(actual)) return "actual is not an object";
            var expectedFieldCount = 0, actualFieldCount = 0;
            for (var i in expected) {
                var compareResult = compare(expected[i], actual[i]);
                if (compareResult !== true) return compareResult;
                ++expectedFieldCount;
            }
            for (var i in actual) {
                ++actualFieldCount;
            }
            if (expectedFieldCount !== actualFieldCount) {
                return "actual has different number of fields than expected";
            }
            return true;
        } else {
            if (isObject(actual)) return "actual is an object";
            if (isNaN(expected) && isNaN(actual)) return true;
            return "  expected: " + expected + "\n    actual: " + actual;
        }
    };

    var epsilon = (function () {
        var next, result;
        for (next = 1; 1 + next !== 1; next = next / 2) {
            result = next;
        }
        return result;
    }());

    var compareAlmostEqualRelative = function compareAlmostEqualRelative(expected, actual) {
        if (typeof expected !== "number" || typeof actual !== "number") {
            return compare(expected, actual);
        } else {
            var diff = Math.abs(expected - actual);
            var absExpected = Math.abs(expected);
            var absActual = Math.abs(actual);
            var largest = (absExpected > absActual) ? absExpected : absActual;

            var maxRelDiff = epsilon * 5;

            if (diff <= largest * maxRelDiff) {
                return true;
            } else {
                return "expected almost: " + expected + " actual: " + actual + " difference: " + diff;
            }
        }
    }

    var validate = function validate(result, assertType, message) {
        if (result !== true) {
            var fileAndLineInfo = helpers.getFileAndLineInfo();
            var exMessage = addMessage("assert." + assertType + " failed at " + fileAndLineInfo + ":\n" + result + "\n   ");
            exMessage = addMessage(exMessage, message);
            throwMessage(exMessage);
        }
    }

    var addMessage = function addMessage(baseMessage, message) {
        if (message !== undefined) {
            baseMessage += "Message: " + message;
        }
        return baseMessage;
    }

    return {
        strictEqual: function strictEqual(expected, actual, message) {
            validate(expected === actual, "strictEqual", message);
        },

        areEqual: function areEqual(expected, actual, message) {
            
            
            
            
            
            
            
            
            
            
            validate(compare(expected, actual), "areEqual", message);
        },

        areNotEqual: function areNotEqual(expected, actual, message) {
            validate(compare(expected, actual) !== true, "areNotEqual", message);
        },

        areAlmostEqual: function areAlmostEqual(expected, actual, message) {
            
            
            
            
            validate(compareAlmostEqualRelative(expected, actual), "areAlmostEqual", message);
        },

        isTrue: function isTrue(actual, message) {
            validate(compare(true, actual), "isTrue", message);
        },

        isFalse: function isFalse(actual, message) {
            validate(compare(false, actual), "isFalse", message);
        },

        isUndefined: function isUndefined(actual, message) {
            validate(compare(undefined, actual), "isUndefined", message);
        },

        isNotUndefined: function isUndefined(actual, message) {
            validate(compare(undefined, actual) !== true, "isNotUndefined", message);
        },

        throws: function throws(testFunction, expectedException, message, expectedErrorMessage) {
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            var noException = {};         
            var exception = noException;  
            try {
                testFunction();
            } catch (ex) {
                exception = ex;
            }

            if (expectedException === undefined && exception !== noException) {
                return;  
            }

            var validationPart = exception;
            if (exception !== noException && exception instanceof Object) {
                validationPart = exception.constructor;
            }
            var validationErrorMessage = exception instanceof Error ? exception.message : undefined;
            if (validationPart !== expectedException || (expectedErrorMessage && validationErrorMessage !== expectedErrorMessage)) {
                var expectedString = expectedException !== undefined ?
                  expectedException.toString().replace(/\n/g, "").replace(/.*function (.*)\(.*/g, "$1") :
                  "<any exception>";
                if (expectedErrorMessage) {
                    expectedString += ": " + expectedErrorMessage;
                }
                var actual = exception !== noException ? exception : "<no exception>";
                var fileAndLineInfo = helpers.getFileAndLineInfo();
                throwMessage(addMessage("assert.throws failed at " + fileAndLineInfo + ":\n  expected: " + expectedString + "\n    actual: " + actual + "\n   ", message));
            }
        },

        doesNotThrow: function doesNotThrow(testFunction, message) {
            var noException = {};
            var exception = noException;
            try {
                testFunction();
            } catch (ex) {
                exception = ex;
            }

            if (exception === noException) {
                return;
            }

            var fileAndLineInfo = helpers.getFileAndLineInfo();
            throwMessage(addMessage("assert.doesNotThrow failed at " + fileAndLineInfo + ":\n  expected: <no exception>,\n    actual: " + exception + "\n   ", message));
        },

        fail: function fail(message) {
            
            var fileAndLineInfo = helpers.getFileAndLineInfo();
            throwMessage(addMessage("assert.fail failed at " + fileAndLineInfo + "\n   ", message));
        },

        matches: function matches(expected, actual, message) {
            if (!(expected instanceof RegExp)) {
                throwMessage(addMessage("assert.matches failed: did not provide a valid regex", message));
            }

            if (!expected.test(actual)) {
                throwMessage(addMessage("assert.matches failed", message));
            }
        }
    }
}(); 
