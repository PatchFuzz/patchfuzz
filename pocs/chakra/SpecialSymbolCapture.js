print("..\\UnitTestFramework\\UnitTestFramework.js");

var lambdaForGlobalThis = () => this;

var tests = [
    {
        name: "Simple function defined at global scope with a this binding and global has no this reference",
        body: function () {
            print(`
                function bar() {
                    this.o = 'bar';
                }
                var _this = { o: 'global' };
                bar.call(_this);
                print('bar', _this.o, "Function bar mutated _this, which was loaded as the 'this' binding inside bar");
            `);
        }
    },
    {
        name: "Simple binding of 'this' in global function",
        body: function () {
            print(`
                print(undefined, this.o, "Initial value of 'this.o' is undefined");
                this.o = 'global';
                print('global', this.o, "Writing property to 'this' binding in global function");
            `);
        }
    },
    {
        name: "Lambda capturing global 'this' binding. Note: This isn't really a capture.",
        body: function () {
            print(`
                var lambdaCapturesGlobalThis = str => this.o = str
                this.o = 'global';
                lambdaCapturesGlobalThis('called at global');
                print('called at global', this.o, "Lambda modifying global this binding called from global function");
                
                this.o = 'global';
                function foo() {
                    lambdaCapturesGlobalThis('called from nested function');
                }
                foo();
                print('called from nested function', this.o, "Lambda modifying global this binding called from nested function");
                
                this.o = 'global';
                var globalLambda = () => lambdaCapturesGlobalThis('called from global lambda')
                globalLambda();
                print('called from global lambda', this.o, "Lambda modifying global this binding called from global lambda");
                
                this.o = 'global';
                eval("lambdaCapturesGlobalThis('called from global eval');");
                print('called from global eval', this.o, "Lambda modifying global this binding called from global eval");
            `);
        }
    },
    {
        name: "Function with eval and lambda both modifying 'this'",
        body: function () {
            print(`
                function bar() {
                    eval('this.o = "eval bar"');
                    (() => this.o = 'lambda bar')()
                }
                var _this = { o: 'global' };
                bar.call(_this);
                print('lambda bar', _this.o, "Lambda was the last thing to modify 'this' binding inside bar");
            `);
        }
    },
    {
        name: "Capture of nested 'this' object",
        body: function () {
            function foo() {
                var count = 0;
                this.o = 'foo';
                
                eval("count++; print('foo', this.o, 'Eval capture of nested-function this binding')");
                eval(`count++; eval("print('foo', this.o, 'Nested eval capture of nested-function this binding')")`);
                (() => {count++; print('foo', this.o, 'Lambda capture of nested function this binding')})();
                (() => () => {count++; print('foo', this.o, 'Nested lambda capture of nested function this binding')})()();
                (() => eval(`count++; print('foo', this.o, 'Lambda with eval capture of nested function this binding')`))();
                (() => eval(`count++; eval("print('foo', this.o, 'Lambda with nested eval capture of nested function this binding')")`))();
                eval(`(() => {count++; print('foo', this.o, 'Eval with lambda capture of nested-function this binding')})()`);
                eval("eval(`(() => {count++; print('foo', this.o, 'Nested eval with lambda capture of nested-function this binding')})()`)");
                eval("(() => eval(`(() => {count++; print('foo', this.o, 'Nested eval and nested lambda capture of nested-function this binding')})()`))()");
                eval("count++; print('foo', this.o, 'Eval with nested lambda in which the eval also references this binding'); (() => print('foo', this.o, 'Eval with lambda capture of nested-function this binding'))();");
                print(10, count, 'Called correct number of test functions');
                
                return true;
            }
            print(foo.call({o:'test'}), "Test function completes");
        }
    },
    {
        name: "Eval modifying 'this' inside a nested function which doesn't itself reference 'this' binding",
        body: function () {
            print(`
                function foo() {
                    this.o = 'foo';
                    function bar() {
                        eval('this.o = "eval bar"');
                    }
                    bar();
                }
                this.o = 'global';
                foo();
                print('eval bar', this.o, "Eval was the last thing to modify 'this' binding inside bar");
            `);
        }
    },
    {
        name: "Various usage patterns for 'this'",
        body: function () {
            print(`
                eval('this.o = "global eval"');
                print('global eval', this.o, "Global eval modifying this");

                (() => this.o = 'global lambda')();
                print('global lambda', this.o, "Global lambda modifying this");
                
                function bar () {
                    this.o = 'bar';
                    return this;
                }
                var _this = bar();
                print('bar', this.o, "Nested function modifies it's own this binding");
                print(_this, this, "bar returns local this which is the same object as global this");
                
                function baz() {
                    this.o = 'baz';
                    return this;
                }
                _this = baz.call({});
                print('bar', this.o, "Function baz doesn't modify global this object");
                print(_this === this, "baz returns local this which is not the same object as global this");
                
                function bot(_this) {
                    _this.o = 'bot';
                    return _this;
                }
                _this = bot(this);
                print('bot', this.o, "Nested function modifies global this object via a different binding");
                print(_this, this, "bot returns local this which is the same object as global this");

                function foo() {
                    print('global', this.o, "The global this binding is passed as the this argument to foo");

                    this.o = 'foo';
                    print('foo', this.o, "Simple property assignment");
                    
                    function bar() {
                        this.o = 'bar';
                        return this;
                    }
                    _this = bar.call(this);
                    print('bar', this.o, "Nested function modifies outside this via it's own this binding");
                    print(_this, this, "bar returns local this which is the same object as foo's this");
                    
                    function baz() {
                        this.o = 'baz';
                        return this;
                    }
                    _this = baz.call({});
                    print('bar', this.o, "Nested function modifies it's own this binding");
                    print(_this === this, "baz returns local this which is not the same object as foo's this");

                    function bot(_this) {
                        _this.o = 'bot';
                        return _this;
                    }
                    _this = bot(this);
                    print('bot', this.o, "Nested function modifies outside this via a different binding");
                    print(_this, this, "bot returns local this which is the same object as foo's this");
                    
                    return this;
                }
                this.o = 'global';
                _this = foo.call(this);
                print(_this, this, "foo returns local this which is the same object as global this");
            `);
        }
    },
    {
        name: "Strict mode outside 'this' object is not captured by nested functions",
        body: function () {
            print(`
                "use strict";
                this.o = 'global';
                function bar() {
                    print(undefined, this, "Global this object is not loaded by default in nested functions in strict mode");
                }
                bar();
                function baz() {
                    this.o = 'baz';
                    return this;
                }
                var _this = baz.call({});
                print(_this === this, "baz returns this which is not bound to global this");
                print('baz', _this.o, "baz returned this which was passed to it via call()");
                
                function foo() {
                    print(this !== undefined, "foo must be called with an object or something");
                    
                    function bar() {
                        print(undefined, this, "Outside this object is not loaded by default in nested functions in strict mode");
                    }
                    bar();
                }
                foo.call({});
            `);
        }
    },
    {
        name: "Special names are invalid assignment targets",
        body: function () {
            print(() => eval(`
                function f() {
                    if (0) new.target = 1;
                }
            `), SyntaxError, "", "Invalid left-hand side in assignment.");
            print(() => eval(`
                function f() {
                    if (0) this = 1;
                }
            `), SyntaxError, "", "Invalid left-hand side in assignment.");
            print(() => eval(`
                function f() {
                    if (0) super = 1;
                }
            `), SyntaxError, "", "Invalid use of the 'super' keyword");
        }
    },
    {
        name: "Global-scope `new.target` keyword is early syntax error",
        body: function () {
            var syntaxError;
            print(() => print(`syntaxError = SyntaxError; new.target;`), syntaxError, "'new.target' is invalid syntax at global scope", "Invalid use of the 'new.target' keyword");
            print(() => print(`syntaxError = SyntaxError; () => new.target`), syntaxError, "'new.target' is invalid in arrow at global scope", "Invalid use of the 'new.target' keyword");
            print(() => print(`syntaxError = SyntaxError; () => () => new.target`), syntaxError, "'new.target' is invalid in nested arrow at global scope", "Invalid use of the 'new.target' keyword");
            print(() => print(`syntaxError = SyntaxError; eval('new.target');`), syntaxError, "'new.target' is invalid in eval at global scope", "Invalid use of the 'new.target' keyword");
            print(() => print(`syntaxError = SyntaxError; eval("eval('new.target');")`), syntaxError, "'new.target' is invalid in nested eval at global scope", "Invalid use of the 'new.target' keyword");
            print(() => print(`syntaxError = SyntaxError; eval('() => new.target')`), syntaxError, "'new.target' is invalid in arrow nested in eval at global scope", "Invalid use of the 'new.target' keyword");
            print(() => print(`syntaxError = SyntaxError; (() => eval('new.target'))()`), syntaxError, "'new.target' is invalid in eval nested in arrow at global scope", "Invalid use of the 'new.target' keyword");
        }
    },
    {
        name: "Simple captures of new.target within ordinary functions",
        body: function () {
            function foo() {
                return new.target;
            }
            print(foo, new foo(), "Simple function returning new.target binding");
            print(undefined, foo(), "Simple function binds new.target to undefined without new keyword");
            
            function foo2() {
                var a = () => new.target;
                return a();
            }
            print(foo2, new foo2(), "Function returning new.target captured by nested arrow");
            print(undefined, foo2(), "Function with arrow capturing new.target binds new.target to undefined without new keyword");
            
            function foo3() {
                return eval('new.target');
            }
            print(foo3, new foo3(), "Function returning new.target captured by nested eval");
            print(undefined, foo3(), "Function with eval capturing new.target binds new.target to undefined without new keyword");
            
            function foo4() {
                var a = () => () => new.target;
                return a()();
            }
            print(foo4, new foo4(), "Function returning new.target captured by nested arrows");
            print(undefined, foo4(), "Function with nested arrows capturing new.target binds new.target to undefined without new keyword");
            
            function foo5() {
                return eval("eval('new.target');");
            }
            print(foo5, new foo5(), "Function returning new.target captured by nested evals");
            print(undefined, foo5(), "Function with nested evals capturing new.target binds new.target to undefined without new keyword");
            
            function foo6() {
                var a = () => eval('new.target');
                return a();
            }
            print(foo6, new foo6(), "Function returning new.target captured by arrow captured by eval");
            print(undefined, foo6(), "Function with nested evals capturing new.target binds new.target to undefined without new keyword");
        }
    },
    {
        name: "Base class empty constructor symbol binding",
        body: function() {
            class BaseDefault { }
            print(BaseDefault, new BaseDefault().constructor, "Base class with default constructor");
            
            eval(`
                class BaseEvalDefault { }
                print(BaseEvalDefault, new BaseEvalDefault().constructor, "Base class defined in eval with default constructor");
            `);
            
            class BaseEmpty {
                constructor() { }
            }
            print(BaseEmpty, new BaseEmpty().constructor, "Base class with empty constructor");
            
            eval(`
                class BaseEvalEmpty {
                    constructor() { }
                }
                print(BaseEvalEmpty, new BaseEvalEmpty().constructor, "Base class defined in eval with empty constructor");
            `);
        }
    },
    {
        name: "Base class 'this' binding",
        body: function() {
            class BaseReturnThis {
                constructor() {
                    return this;
                }
            }
            print(BaseReturnThis, new BaseReturnThis().constructor, "Base class with constructor that returns this");
            
            class BaseReturnThisEval {
                constructor() {
                    return eval('this');
                }
            }
            print(BaseReturnThisEval, new BaseReturnThisEval().constructor, "Base class with constructor that returns this captured by eval");
            
            class BaseReturnThisArrow {
                constructor() {
                    return (() => this)();
                }
            }
            print(BaseReturnThisArrow, new BaseReturnThisArrow().constructor, "Base class with constructor that returns this captured by arrow");
            
            eval(`
                class BaseEvalReturnThis {
                    constructor() {
                        return this;
                    }
                }
                print(BaseEvalReturnThis, new BaseEvalReturnThis().constructor, "Base class defined in eval with constructor that returns this");
            `);
            
            eval(`
                class BaseEvalReturnThisEval {
                    constructor() {
                        return eval('this');
                    }
                }
                print(BaseEvalReturnThisEval, new BaseEvalReturnThisEval().constructor, "Base class defined in eval with constructor that returns this captured via eval");
            `);
            
            eval(`
                class BaseEvalReturnThisLambda {
                    constructor() {
                        return (() => this)();
                    }
                }
                print(BaseEvalReturnThisLambda, new BaseEvalReturnThisLambda().constructor, "Base class defined in eval with constructor that returns this captured via arrow");
            `);
            
            eval(`
                class BaseEvalReturnThisEvalLambda {
                    constructor() {
                        return eval('(() => this)()');
                    }
                }
                print(BaseEvalReturnThisEvalLambda, new BaseEvalReturnThisEvalLambda().constructor, "Base class defined in eval with constructor that returns this captured via arrow inside eval");
            `);
            
            eval(`
                class BaseEvalReturnThisLambdaEval {
                    constructor() {
                        return (() => eval('this'))();
                    }
                }
                print(BaseEvalReturnThisLambdaEval, new BaseEvalReturnThisLambdaEval().constructor, "Base class defined in eval with constructor that returns this captured via eval inside arrow");
            `);
            
            var called = false;
            class BaseVerifyThis {
                constructor() {
                    print(BaseVerifyThis, this.constructor, "Base class this binding is an instance of the class");
                    called = true;
                }
            }
            print(BaseVerifyThis, new BaseVerifyThis().constructor, "Base class constructor uses this object");
            print(called, "Constructor was actually called");
            
            called = false;
            class BaseVerifyThisEval {
                constructor() {
                    eval(`
                        print(BaseVerifyThisEval, this.constructor, "Base class this binding is an instance of the class");
                        called = true;
                    `);
                }
            }
            print(BaseVerifyThisEval, new BaseVerifyThisEval().constructor, "Base class constructor uses this object inside eval");
            print(called, "Constructor was actually called");
            
            called = false;
            class BaseVerifyThisArrow {
                constructor() {
                    print(BaseVerifyThisArrow, (() => this)().constructor, "Base class this binding is an instance of the class");
                    called = true;
                }
            }
            print(BaseVerifyThisArrow, new BaseVerifyThisArrow().constructor, "Base class constructor uses this object inside arrow");
            print(called, "Constructor was actually called");
            
            called = false;
            class BaseVerifyThisEvalArrow {
                constructor() {
                    print(BaseVerifyThisEvalArrow, eval('(() => this)()').constructor, "Base class this binding is an instance of the class");
                    called = true;
                }
            }
            print(BaseVerifyThisEvalArrow, new BaseVerifyThisEvalArrow().constructor, "Base class constructor uses this object inside arrow inside eval");
            print(called, "Constructor was actually called");
            
            called = false;
            class BaseVerifyThisArrowEval {
                constructor() {
                    print(BaseVerifyThisArrowEval, (() => eval('this'))().constructor, "Base class this binding is an instance of the class");
                    called = true;
                }
            }
            print(BaseVerifyThisArrowEval, new BaseVerifyThisArrowEval().constructor, "Base class constructor uses this object inside eval inside arrow");
            print(called, "Constructor was actually called");
        }
    },
    {
        name: "Base class new.target binding",
        body: function() {
            var called = false;
            class BaseVerifyNewTarget {
                constructor() {
                    print(BaseVerifyNewTarget, new.target, "Base class called as new expression gets new.target");
                    called = true;
                }
            }
            print(BaseVerifyNewTarget, new BaseVerifyNewTarget().constructor, "Base class constructor uses new.target");
            print(called, "Constructor was actually called");
            
            called = false;
            class BaseVerifyNewTargetEval {
                constructor() {
                    eval(`
                        print(BaseVerifyNewTargetEval, new.target, "Base class called as new expression gets new.target");
                        called = true;
                    `);
                }
            }
            print(BaseVerifyNewTargetEval, new BaseVerifyNewTargetEval().constructor, "Base class constructor uses new.target inside eval");
            print(called, "Constructor was actually called");
            
            called = false;
            class BaseVerifyNewTargetLambda {
                constructor() {
                    (() => {
                        print(BaseVerifyNewTargetLambda, new.target, "Base class called as new expression gets new.target");
                        called = true;
                    })();
                }
            }
            print(BaseVerifyNewTargetLambda, new BaseVerifyNewTargetLambda().constructor, "Base class constructor uses new.target inside lambda");
            print(called, "Constructor was actually called");
            
            called = false;
            class BaseVerifyNewTargetEvalLambda {
                constructor() {
                    eval(`
                        (() => {
                            print(BaseVerifyNewTargetEvalLambda, new.target, "Base class called as new expression gets new.target");
                            called = true;
                        })();
                    `);
                }
            }
            print(BaseVerifyNewTargetEvalLambda, new BaseVerifyNewTargetEvalLambda().constructor, "Base class constructor uses new.target inside lambda inside eval");
            print(called, "Constructor was actually called");
            
            called = false;
            class BaseVerifyNewTargetLambdaEval {
                constructor() {
                    (() => {
                        eval(`
                            print(BaseVerifyNewTargetLambdaEval, new.target, "Base class called as new expression gets new.target");
                            called = true;
                        `);
                    })();
                }
            }
            print(BaseVerifyNewTargetLambdaEval, new BaseVerifyNewTargetLambdaEval().constructor, "Base class constructor uses new.target inside eval inside lambda");
            print(called, "Constructor was actually called");
            
            called = false;
            eval(`
                class BaseEvalVerifyNewTarget {
                    constructor() {
                        print(BaseEvalVerifyNewTarget, new.target, "Base class called as new expression gets new.target");
                        called = true;
                    }
                }
                print(BaseEvalVerifyNewTarget, new BaseEvalVerifyNewTarget().constructor, "Base class defined in eval constructor uses new.target");
                print(called, "Constructor was actually called");
            `);
        }
    },
    {
        name: "Base class super call is syntax error",
        body: function() {
            var syntaxError;
            print(() => print(`syntaxError = SyntaxError; class Base { constructor() { super(); } }`), syntaxError, "'super' call is invalid syntax in a base class", "Invalid use of the 'super' keyword");
            print(() => print(`syntaxError = SyntaxError; class Base { constructor() { eval("super();"); } }; new Base();`), syntaxError, "'super' call is invalid syntax in a base class", "Invalid use of the 'super' keyword");
            print(() => print(`syntaxError = SyntaxError; class Base { constructor() { () => super(); } }`), syntaxError, "'super' call is invalid syntax in a base class", "Invalid use of the 'super' keyword");
        }
    },
    {
        name: "Class derived from null special symbol binding",
        body: function() {
            class DerivedDefault extends null { }
            print(() => new DerivedDefault(), TypeError, "Class derived from null can't be instantiated", "Function is not a constructor");
            
            class DerivedSuper extends null {
                constructor() {
                    super();
                }
            }
            print(() => new DerivedSuper(), TypeError, "Class derived from null can't make a super call", "Function is not a constructor");
        }
    },
    {
        name: "Derived class 'this' binding",
        body: function() {
            class Base { }
            
            class DerivedReturnThis extends Base {
                constructor() {
                    super();
                    return this;
                }
            }
            print(DerivedReturnThis, new DerivedReturnThis().constructor, "Derived class with constructor that returns this");
            
            class DerivedReturnThisEval extends Base {
                constructor() {
                    super();
                    return eval('this');
                }
            }
            print(DerivedReturnThisEval, new DerivedReturnThisEval().constructor, "Derived class with constructor that returns this captured by eval");

            class DerivedReturnThisArrow extends Base {
                constructor() {
                    super();
                    return (() => this)();
                }
            }
            print(DerivedReturnThisArrow, new DerivedReturnThisArrow().constructor, "Derived class with constructor that returns this captured by arrow");

            class DerivedReturnThisEvalArrow extends Base {
                constructor() {
                    super();
                    return eval('(() => this)()');
                }
            }
            print(DerivedReturnThisEvalArrow, new DerivedReturnThisEvalArrow().constructor, "Derived class with constructor that returns this captured by arrow inside eval");

            class DerivedReturnThisArrowEval extends Base {
                constructor() {
                    super();
                    return (() => eval('this'))();
                }
            }
            print(DerivedReturnThisArrowEval, new DerivedReturnThisArrowEval().constructor, "Derived class with constructor that returns this captured by eval inside arrow");
            
            eval(`
                class DerivedEvalReturnThis extends Base {
                    constructor() {
                        super();
                        return this;
                    }
                }
                print(DerivedEvalReturnThis, new DerivedEvalReturnThis().constructor, "Derived class defined in eval with constructor that returns this");
            `);
            
            eval(`
                class DerivedEvalReturnThisEval extends Base {
                    constructor() {
                        super();
                        return eval('this');
                    }
                }
                print(DerivedEvalReturnThisEval, new DerivedEvalReturnThisEval().constructor, "Derived class defined in eval with constructor that returns this captured by eval");
            `);
            
            eval(`
                class DerivedEvalReturnThisLambda extends Base {
                    constructor() {
                        super();
                        return (() => this)();
                    }
                }
                print(DerivedEvalReturnThisLambda, new DerivedEvalReturnThisLambda().constructor, "Derived class defined in eval with constructor that returns this captured by arrow");
            `);
        }
    },
    {
        name: "Derived class verifying 'this' binding",
        body: function() {
            class Base { }
            
            var called = false;
            class DerivedVerifyThis extends Base {
                constructor() {
                    super();
                    print(DerivedVerifyThis, this.constructor, "Derived class with constructor that verifies this");
                    called = true;
                }
            }
            print(DerivedVerifyThis, new DerivedVerifyThis().constructor, "Derived class with constructor that verifies this");
            print(called, "Constructor was called");
            
            called = false;
            class DerivedVerifyThisLambda extends Base {
                constructor() {
                    super();
                    (() => {
                        print(DerivedVerifyThisLambda, this.constructor, "Derived class with constructor that verifies this captured in lambda");
                        called = true;
                    })();
                }
            }
            print(DerivedVerifyThisLambda, new DerivedVerifyThisLambda().constructor, "Derived class with constructor that verifies this captured by arrow");
            print(called, "Constructor was called");
            
            eval(`
                called = false;
                class DerivedEvalVerifyThis extends Base {
                    constructor() {
                        super();
                        print(DerivedEvalVerifyThis, this.constructor, "Derived class defined in eval with constructor that verifies this");
                        called = true;
                    }
                }
                print(DerivedEvalVerifyThis, new DerivedEvalVerifyThis().constructor, "Derived class defined in eval with constructor that verifies this");
                print(called, "Constructor was called");
            `);
        }
    },
    {
        name: "Assignment to special symbols is invalid",
        body: function() {
            function test(code, message) {
                print(() => print(code), SyntaxError, message, "Invalid left-hand side in assignment.");
            }
            
            function testglobal(symname) {
                test(`${symname} = 'something'`, `Assignment to global '${symname}'`);
                test(`(() => ${symname} = 'something')()`, `Assignment to global '${symname}' captured by lambda`);
                test(`eval("${symname} = 'something'")`, `Assignment to global '${symname}' in eval`);
                test(`(() => eval("${symname} = 'something'"))()`, `Assignment to global '${symname}' captured by lambda in eval`);
                test(`eval("(() => ${symname} = 'something')()")`, `Assignment to global '${symname}' captured by eval in lambda`);
            }
            function testlocal(symname) {
                test(`function foo() { ${symname} = 'something'; }; foo();`, `Assignment to function '${symname}'`);
                test(`function foo() { eval("${symname} = 'something'"); }; foo();`, `Assignment to function '${symname}' in nested eval`);
                test(`function foo() { (() => ${symname} = 'something')(); }; foo();`, `Assignment to function '${symname}' in nested lambda`);
            }
            
            testglobal('this');
            testlocal('this');
            
            testlocal('new.target');
        }
    },
    {
        name: "Eval 'this' binding",
        body: function() {
            function SloppyModeCapture() {
                print('object', typeof this, "'this' object given to functions in sloppy mode");
                this.o = 'SloppyModeCapture';
                eval(`print('SloppyModeCapture', this.o, "Direct eval captures 'this' in sloppy mode")`);
                eval(`'use strict'; print('SloppyModeCapture', this.o, "Direct strict mode eval captures 'this' in sloppy mode")`);
                var not_eval = eval;
                not_eval(`print('SloppyModeCapture', this.o, "Indirect eval captures 'this' in sloppy mode")`);
                not_eval(`'use strict'; print('SloppyModeCapture', this.o, "Indirect strict mode eval captures 'this' in sloppy mode")`);
            }
            SloppyModeCapture();
            
            function StrictModeSanity() {
                'use strict';
                print(undefined, this, "Strict mode function doesn't get a 'this' object");
            }
            StrictModeSanity();
            
            lambdaForGlobalThis().o = 'global';
            
            function StrictModeCapture() {
                'use strict';
                print('object', typeof this, "'this' object should be passed-in");
                eval(`print('StrictModeCapture', this.o, "Direct eval captures 'this' in strict mode")`);
                eval(`'use strict'; print('StrictModeCapture', this.o, "Direct strict mode eval captures 'this' in strict mode")`);
                var not_eval = eval;
                not_eval(`print('global', this.o, "Indirect eval captures global 'this' in strict mode")`);
                not_eval(`'use strict'; print('global', this.o, "Indirect strict mode eval captures global 'this' in strict mode")`);
            }
            StrictModeCapture.call({o:'StrictModeCapture'});
        }
    },
    {
        name: "Super reference patterns",
        body: function() {
            var key_bar = 'bar';
            var key_foo = 'foo';
            function verifyThis() {
                print(obj, this, "'this' passed via super method call should be the object");
                return 'bar';
            }
            var obj = {
                callSuperMethodViaDot() { return super.bar(); },
                callSuperMethodViaDotArrow() { return (() => super.bar())(); },
                callSuperMethodViaDotEval() { return eval('super.bar();'); },
                
                getSuperPropertyViaDot() { return super.foo; },
                getSuperPropertyViaDotArrow() { return (() => super.foo)(); },
                getSuperPropertyViaDotEval() { return eval('super.foo;'); },
                
                callSuperMethodViaIndex() { return super[key_bar](); },
                callSuperMethodViaIndexArrow() { return (() => super[key_bar]())(); },
                callSuperMethodViaIndexEval() { return eval('super[key_bar]();'); },
                
                getSuperPropertyViaIndex() { return super[key_foo]; },
                getSuperPropertyViaIndexArrow() { return (() => super[key_foo])(); },
                getSuperPropertyViaIndexEval() { return eval('super[key_foo];'); },
                
                assignSuperPropertyViaDot() { super.foo = 'something'; return super.foo; },
                assignSuperPropertyViaDotArrow() { (() => super.foo = 'something')(); return super.foo; },
                assignSuperPropertyViaDotEval() { eval("super.foo = 'something';"); return super.foo; },
                
                assignSuperPropertyViaIndex() { super[key_foo] = 'something'; return super.foo; },
                assignSuperPropertyViaIndexArrow() { (() => super[key_foo] = 'something')(); return super.foo; },
                assignSuperPropertyViaIndexEval() { eval("super[key_foo] = 'something';"); return super.foo; },
                
                deleteSuperPropertyViaDot() { delete super.foo; },
                deleteSuperPropertyViaDotArrow() { (() => delete super.foo)(); },
                deleteSuperPropertyViaDotEval() { eval('delete super.foo;'); },
            }
            var proto = {
                bar: verifyThis,
                foo: 'foo',
            }
            Object.setPrototypeOf(obj, proto);

            print('bar', obj.callSuperMethodViaDot(), "Call method via 'super.method()'");
            print('bar', obj.callSuperMethodViaDotArrow(), "Call method via 'super.method()' in arrow");
            print('bar', obj.callSuperMethodViaDotEval(), "Call method via 'super.method()' in eval");

            print('foo', obj.getSuperPropertyViaDot(), "Get property via 'super.property'");
            print('foo', obj.getSuperPropertyViaDotArrow(), "Get property via 'super.property' in arrow");
            print('foo', obj.getSuperPropertyViaDotEval(), "Get property via 'super.property' in eval");
            
            print('bar', obj.callSuperMethodViaIndex(), "Call method via 'super[method]()'");
            print('bar', obj.callSuperMethodViaIndexArrow(), "Call method via 'super[method]()' in arrow");
            print('bar', obj.callSuperMethodViaIndexEval(), "Call method via 'super[method]()' in eval");
            
            print('foo', obj.getSuperPropertyViaIndex(), "Get property via 'super[property]'");
            print('foo', obj.getSuperPropertyViaIndexArrow(), "Get property via 'super[property]' in arrow");
            print('foo', obj.getSuperPropertyViaIndexEval(), "Get property via 'super[property]' in eval");

            print('foo', obj.assignSuperPropertyViaDot(), "Assign property via 'super.property'");
            print('foo', obj.assignSuperPropertyViaDotArrow(), "Assign property via 'super.property' in arrow");
            print('foo', obj.assignSuperPropertyViaDotEval(), "Assign property via 'super.property' in eval");
            
            print('something', obj.assignSuperPropertyViaIndex(), "Assign property via 'super[property]'");
            print('something', obj.assignSuperPropertyViaIndexArrow(), "Assign property via 'super[property]' in arrow");
            print('something', obj.assignSuperPropertyViaIndexEval(), "Assign property via 'super[property]' in eval");
            
            print(() => obj.deleteSuperPropertyViaDot(), ReferenceError, "Delete property via 'super.property'", "Unable to delete property with a super reference");
            print(() => obj.deleteSuperPropertyViaDotArrow(), ReferenceError, "Delete property via 'super.property' in arrow", "Unable to delete property with a super reference");
            print(() => obj.deleteSuperPropertyViaDotEval(), ReferenceError, "Delete property via 'super.property' in eval", "Unable to delete property with a super reference");
        }
    },
    {
        name: "Split-scope with eval in parameter scope",
        body: function() {
            function f1({a:a}, c = eval("a")) { 
                return c;
            }
            print('ok', f1({a:'ok'}), "Eval references previous non-simple formal");
            
            function f2({a:a}, c = eval('this')) {
                return c;
            }
            var _this = {};
            print(_this, f2.call(_this, {}), "Eval references 'this' binding");
            
            function f3({a:a}, c = eval('new.target')) {
                return c;
            }
            print(f3, new f3({}), "Eval references 'new.target' binding");
            
            class base {
                prop() {
                    print(c1, this.constructor, "Be sure the 'this' binding flows down the super reference calls")
                    return 'prop';
                }
                
                returnThis() {
                    print(c2, this.constructor, "Be sure the 'this' binding flows down the super reference calls")
                    return this;
                }
            }
            
            var prop_name = 'prop';
            class c1 extends base {
                constructor({a:a}, c = eval('super()')) {
                    print(c1, new.target, "'new.target' binding is correct in class constructor with split-scope");
                    print(this, c, "Result of super() should be the same as 'this'");
                    print('prop', super.prop(), "Super reference should bind correctly");
                }
                
                doSuperRefViaDot({a:a}, c = eval('super.prop()')) {
                    return c;
                }
                
                doSuperRefViaIndex({a:a}, c = eval('super[prop_name]()')) {
                    return c;
                }
            }
            var inst = new c1({});
            print(c1, inst.constructor, "Eval references 'super' in a constructor call");
            print('prop', inst.doSuperRefViaDot({}), "Eval references 'super' as a super property reference via dot");
            print('prop', inst.doSuperRefViaIndex({}), "Eval references 'super' as a super property reference via index");
            
            class c2 extends base {
                constructor({a:a}, c = eval('super(); super.returnThis();')) {
                    print(c2, new.target, "'new.target' binding is correct in class constructor with split-scope");
                    print(this, c, "Result of super.returnThis() should be the same as 'this'");
                }
            }
            var inst = new c2({});
            print(c2, inst.constructor, "Eval references 'super' in a constructor call");
        }
    },
    {
        name: "Formal argument named 'arguments'",
        body: function() {
            function foo(arguments) {
                print('arguments', arguments, "Arguments named formal accessed directly");
                print('arguments', (() => arguments)(), "Arguments named formal accessed through a lambda capture");
                print('arguments', eval('arguments'), "Arguments named formal accessed through an eval");
            }
            foo('arguments');
        }
    },
    {
        name: "Global 'this' binding captured by strict-mode arrow",
        body: function() {
            print(`"use strict";
                print(this, (() => this)(), "Lambda should load the global 'this' value itself via LdThis (not StrictLdThis)");
            `);
            
            print(`
                print(this, (() => { "use strict"; return this; })(), "Lambda which has a 'use strict' clause inside");
            `);
            
            print(`"use strict";
                print('object', typeof (() => this)(), "Verify lambda can load global 'this' value even if the global body itself does not have a 'this' binding");
            `);
        }
    },
    {
        name: "PidRefStack might be out-of-order when we try to add special symbol var decl",
        body: function() {
            
            print(`(a = function() { this }, b = (this)) => {}`);
            print(() => print(`[ a = function () { this; } ((this)) = 1 ] = []`), ReferenceError, "Not a valid destructuring assignment but should not fire assert", "Invalid left-hand side in assignment");
        }
    },
    {
        name: "Non-split scope with default arguments referencing special names",
        body: function() {
            var _this = {}
            function foo(a = this) {
                eval('');
                print(_this, a, "Correct default value was assigned");
                print(_this, this, "Regular 'this' binding is correct");
            }
            foo.call(_this)
            
            function bar(a = this) {
                eval('');
                print(_this, a, "Correct default value was assigned");
                print(_this, this, "Regular 'this' binding is correct");
                function b() { return 'b'; }
                print('b', b(), "Nested functions are bound to the correct slot");
            }
            bar.call(_this)

            function baz(a = this, c = function() { return 'c'; }) {
                eval('');
                print(_this, a, "Correct default value was assigned");
                print(_this, this, "Regular 'this' binding is correct");
                function b() { return 'b'; }
                print('b', b(), "Nested functions are bound to the correct slot");
                print('c', c(), "Function expression in param scope default argument is bound to the correct slot");
            }
            baz.call(_this)

            function baz2(a = this, c = function() { function nested() { return 'c' }; return nested; }) {
                eval('');
                print(_this, a, "Correct default value was assigned");
                print(_this, this, "Regular 'this' binding is correct");
                function b() { return 'b'; }
                print('b', b(), "Nested functions are bound to the correct slot");
                print('c', c()(), "Function decl nested in function expression assigned to default argument");
            }
            baz2.call(_this)

            function baz3(c = function() { return 'c'; }, a = this) {
                eval('');
                print(_this, a, "Correct default value was assigned");
                print(_this, this, "Regular 'this' binding is correct");
                function b() { return 'b'; }
                print('b', b(), "Nested functions are bound to the correct slot");
                print('c', c(), "Function expression in param scope default argument is bound to the correct slot");
            }
            baz3.call(_this)

            function bat(a = this, c = () => 'c') {
                eval('');
                print(_this, a, "Correct default value was assigned");
                print(_this, this, "Regular 'this' binding is correct");
                function b() { return 'b'; }
                print('b', b(), "Nested functions are bound to the correct slot");
                print('c', c(), "Lambda expression in param scope default argument is bound to the correct slot");
            }
            bat.call(_this)

            function bat2(a = this, c = () => () => 'c') {
                eval('');
                print(_this, a, "Correct default value was assigned");
                print(_this, this, "Regular 'this' binding is correct");
                function b() { return 'b'; }
                print('b', b(), "Nested functions are bound to the correct slot");
                print('c', c()(), "Lambda function decl nested in lambda expression assigned to default argument");
            }
            bat2.call(_this)

            function bat3(c = () => () => 'c', a = this) {
                eval('');
                print(_this, a, "Correct default value was assigned");
                print(_this, this, "Regular 'this' binding is correct");
                function b() { return 'b'; }
                print('b', b(), "Nested functions are bound to the correct slot");
                print('c', c()(), "Lambda function decl nested in lambda expression assigned to default argument");
            }
            bat3.call(_this)
        }
    },
    {
        name: "Loading 'this' binding as a call target",
        body: function() {
            print(() => print(`with({}) { this() }`), TypeError, "Loading global 'this' binding as a call target should always throw - 'this' is an object", "Function expected");
            print(() => this(), TypeError, "Capturing function 'this' binding and emitting as a call target should throw if 'this' is not a function", "Function expected");
        }
    },
    {
        name: "Class expression as call target without 'this' binding",
        body: function() {
            print(() => print(`(class classExpr {}())`), TypeError, "Class expression called at global scope", "Class constructor cannot be called without the new keyword");
            print(() => print(`(() => (class classExpr {}()))()`), TypeError, "Class expression called in global lambda", "Class constructor cannot be called without the new keyword");
        }
    },
    {
        name: "Indirect eval should not create a 'this' binding",
        body: function() {
            print(`
                this.eval("(() => print('global', this.o, 'Lambda in indirect eval called off of this capturing this'))()");
                this['eval']("(() => print('global', this.o, 'Lambda in indirect eval called from a property index capturing this'))()");
                var _eval = 'eval';
                this[_eval]("(() => print('global', this.o, 'Lambda in indirect eval called from a property index capturing this'))()");
                _eval = eval;
                _eval("(() => print('global', this.o, 'Lambda in indirect eval capturing this'))()");
            `);
        }
    }
]

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
