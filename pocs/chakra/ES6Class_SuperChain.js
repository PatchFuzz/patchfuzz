print("..\\UnitTestFramework\\UnitTestFramework.js");

class SimpleParent {
    constructor() {
        this.foo = 'SimpleParent';
    }
}

let calls_to_ConstructorCountingParent = 0;
class ConstructorCountingParent {
    constructor() {
        calls_to_ConstructorCountingParent++;
    }
}

class UninitializedThisReturningArgumentConstructor extends SimpleParent {
    constructor(arg) {
        return arg;
    }
};

class InitializedThisReturningArgumentConstructor extends SimpleParent {
    constructor(arg) {
        super();
        return arg;
    }
};

var tests = [
    {
        name: "Simple derived class constructor using this",
        body: function () {
            class DerivedClassUsingThis extends SimpleParent {
                constructor() {
                    super();
                    this.bar = "DerivedClassUsingThis";
                }
            };

            let result = new DerivedClassUsingThis();

            print("DerivedClassUsingThis", result.bar, "This is initialized with the return value from super()");
            print("SimpleParent", result.foo, "Parent class returned the object from super to derived constructor");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof DerivedClassUsingThis, "Result object is instanceof derived class");
        }
    },
    {
        name: "Simple derived class constructor using this without calling super causing use before declaration error",
        body: function () {
            class DerivedClassUsingThisIllegally extends SimpleParent {
                constructor() {
                    this.bar = "DerivedClassUsingThisIllegally";
                }
            };

            print(function() { new DerivedClassUsingThisIllegally(); }, ReferenceError, "It's a ReferenceError to access 'this' without calling super", "Use before declaration");
        }
    },
    {
        name: "Simple derived class constructor using this before calling super causing use before declaration error",
        body: function () {
            class DerivedClassUsingThisIllegally extends SimpleParent {
                constructor() {
                    this.bar = "DerivedClassUsingThisIllegally";
                    super();
                }
            };

            print(function() { new DerivedClassUsingThisIllegally(); }, ReferenceError, "It's a ReferenceError to access 'this' without calling super", "Use before declaration");
        }
    },
    {
        name: "Simple derived class constructor using this via a lambda",
        body: function () {
            class DerivedClassUsingThisViaLambda extends SimpleParent {
                constructor() {
                    var arrow = () => { this.bar = 'DerivedClassUsingThisViaLambda'; };
                    super();
                    arrow();
                }
            };

            let result = new DerivedClassUsingThisViaLambda();

            print("DerivedClassUsingThisViaLambda", result.bar, "Arrow is defined using this (before super call) and called after super call in derived constructor");
            print("SimpleParent", result.foo, "Parent class returned the object from super to derived constructor");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof DerivedClassUsingThisViaLambda, "Result object is instanceof derived class");
        }
    },
    {
        name: "Simple derived class constructor using this without calling super via a lambda causing use before declaration error",
        body: function () {
            class DerivedClassUsingThisIllegallyViaLambda extends SimpleParent {
                constructor() {
                    var arrow = () => { this.bar = 'DerivedClassUsingThisIllegallyViaLambda'; };
                    arrow();
                }
            };

            print(function() { new DerivedClassUsingThisIllegallyViaLambda(); }, ReferenceError, "It's a ReferenceError to access 'this' without calling super", "Use before declaration");
        }
    },
    {
        name: "Simple derived class constructor using this before calling super via a lambda causing use before declaration error",
        body: function () {
            class DerivedClassUsingThisIllegallyViaLambda extends SimpleParent {
                constructor() {
                    var arrow = () => { this.bar = 'DerivedClassUsingThisIllegallyViaLambda'; };
                    arrow();
                    super();
                }
            };

            print(function() { new DerivedClassUsingThisIllegallyViaLambda(); }, ReferenceError, "It's a ReferenceError to access 'this' without calling super", "Use before declaration");
        }
    },
    {
        name: "Simple derived class constructor using this and super via a lambda",
        body: function () {
            class DerivedClassUsingThisAndSuperViaLambda extends SimpleParent {
                constructor() {
                    var this_arrow = () => { this.bar = 'DerivedClassUsingThisAndSuperViaLambda'; };
                    var super_arrow = () => { super(); }
                    super_arrow();
                    this_arrow();
                }
            };

            let result = new DerivedClassUsingThisAndSuperViaLambda();

            print("DerivedClassUsingThisAndSuperViaLambda", result.bar, "Arrow is defined using this (before super call) and called after super call in derived constructor");
            print("SimpleParent", result.foo, "Parent class returned the object from super to derived constructor");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof DerivedClassUsingThisAndSuperViaLambda, "Result object is instanceof derived class");
        }
    },
    {
        name: "Simple derived class constructor using this and super via a lambda (lambda with super call defined first)",
        body: function () {
            class DerivedClassUsingThisAndSuperViaLambda extends SimpleParent {
                constructor() {
                    var super_arrow = () => { super(); }
                    var this_arrow = () => { this.bar = 'DerivedClassUsingThisAndSuperViaLambda'; };
                    super_arrow();
                    this_arrow();
                }
            };

            let result = new DerivedClassUsingThisAndSuperViaLambda();

            print("DerivedClassUsingThisAndSuperViaLambda", result.bar, "Arrow is defined using this (before super call) and called after super call in derived constructor");
            print("SimpleParent", result.foo, "Parent class returned the object from super to derived constructor");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof DerivedClassUsingThisAndSuperViaLambda, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class constructor throws ReferenceError accessing this with no super call",
        body: function () {
            class IllegalThisAccessConstructor extends SimpleParent {
                constructor() {
                    this.bar = 'something';
                }
            };

            print(function() { new IllegalThisAccessConstructor(); }, ReferenceError, "It's a ReferenceError to access 'this' without calling super", "Use before declaration");
        }
    },
    {
        name: "Derived class constructor throws ReferenceError accessing this before super call",
        body: function () {
            class IllegalThisBeforeSuperConstructor extends SimpleParent {
                constructor() {
                    this.bar = 'something';
                    super();
                }
            };

            print(function() { new IllegalThisBeforeSuperConstructor(); }, ReferenceError, "It's a ReferenceError to access 'this' before calling super", "Use before declaration");
        }
    },
    {
        name: "Derived class throws ReferenceError with empty constructor (implicit access of this)",
        body: function () {
            class EmptyConstructor extends SimpleParent {
                constructor() {
                    
                }
            };

            print(function() { new EmptyConstructor(); }, ReferenceError, "It's a ReferenceError to implicit return 'this' from class constructor without calling super", "Use before declaration");
        }
    },
    {
        name: "Derived class with default constructor returns initialized this argument",
        body: function () {
            class DefaultConstructor extends SimpleParent {
                
                
            };

            let obj = new DefaultConstructor();

            print('SimpleParent', obj.foo, "Object from base constructor should have been returned.");
            print(obj instanceof SimpleParent, "Result object is instanceof base class");
            print(obj instanceof DefaultConstructor, "Result object is instanceof derived class");

            class DefaultConstructorReturningArgumentViaBaseClass extends UninitializedThisReturningArgumentConstructor {
                
                
            };

            obj = new DefaultConstructorReturningArgumentViaBaseClass({ bar: 'DefaultConstructorReturningArgumentViaBaseClass' });

            print('DefaultConstructorReturningArgumentViaBaseClass', obj.bar, "Object from base constructor should have been returned.");
            print(obj instanceof UninitializedThisReturningArgumentConstructor, "Result object is not instanceof base class");
            print(obj instanceof DefaultConstructorReturningArgumentViaBaseClass, "Result object is not instanceof derived class");
        }
    },
    {
        name: "Derived class throws TypeError when returning non-object if this is initialized",
        body: function () {
            print(function() { new InitializedThisReturningArgumentConstructor(null); }, TypeError, "Returning null from derived constructor should throw TypeError", "Derived class constructor can return only object or undefined");
            print(function() { new InitializedThisReturningArgumentConstructor('string'); }, TypeError, "Returning 'string' from derived constructor should throw TypeError", "Derived class constructor can return only object or undefined");
            print(function() { new InitializedThisReturningArgumentConstructor(5); }, TypeError, "Returning 5 from derived constructor should throw TypeError", "Derived class constructor can return only object or undefined");
        }
    },
    {
        name: "Derived class throws TypeError when returning non-object if this is uninitialized",
        body: function () {
            print(function() { new UninitializedThisReturningArgumentConstructor(null); }, TypeError, "Returning null from derived constructor should throw TypeError", "Derived class constructor can return only object or undefined");
            print(function() { new UninitializedThisReturningArgumentConstructor('string'); }, TypeError, "Returning 'string' from derived constructor should throw TypeError", "Derived class constructor can return only object or undefined");
            print(function() { new UninitializedThisReturningArgumentConstructor(5); }, TypeError, "Returning 5 from derived constructor should throw TypeError", "Derived class constructor can return only object or undefined");
        }
    },
    {
        name: "TypeError is thrown when trying to derive from a function which is not a constructor",
        body: function () {
            print(function () { class A extends JSON { }; }, TypeError, "JSON object does not have an internal Construct slot", "Function is not a constructor");
            print(function () { class A extends Math { }; }, TypeError, "Math object does not have an internal Construct slot", "Function is not a constructor");

            function* gf(a) { yield 1 + a + this.a; }
            print(function () { class A extends gf { } }, TypeError, "Class deriving from a generator function throws TypeError", "Function is not a constructor");

            var lambda = (a) => a;
            print(function () { class A extends lambda { } }, TypeError, "Class deriving from a lambda throws TypeError", "Function is not a constructor");
        }
    },
    {
        name: "Derived class returning undefined, returns 'this' instead",
        body: function () {
            class ImplicitReturnUndefinedNotInitializedThis extends SimpleParent {
                constructor() {
                    return;
                }
            }

            print(function() { new ImplicitReturnUndefinedNotInitializedThis(); }, ReferenceError, "Derived class constructor implicitly returning undefined with no super call throws ReferenceError", "Use before declaration");

            class ExplicitReturnUndefinedNotInitializedThis extends SimpleParent {
                constructor() {
                    return undefined;
                }
            }

            print(function() { new ExplicitReturnUndefinedNotInitializedThis(); }, ReferenceError, "Derived class constructor explicitly returning undefined with no super call throws ReferenceError", "Use before declaration");

            class ImplicitReturnUndefinedInitializedThis extends SimpleParent {
                constructor() {
                    super();
                    this.bar = 'ImplicitReturnUndefinedInitializedThis';
                    return;
                }
            }

            let result = new ImplicitReturnUndefinedInitializedThis();

            print('SimpleParent', result.foo, "Object from base constructor should have been returned.");
            print('ImplicitReturnUndefinedInitializedThis', result.bar, "'this' modified in derived constructor.");
            print(result instanceof ImplicitReturnUndefinedInitializedThis, "Result object is instanceof derived class");
            print(result instanceof SimpleParent, "Result object is not instanceof base class");

            class ExplicitReturnUndefinedInitializedThis extends SimpleParent {
                constructor() {
                    super();
                    this.bar = 'ExplicitReturnUndefinedInitializedThis';
                    return undefined;
                }
            }

            result = new ExplicitReturnUndefinedInitializedThis();

            print('SimpleParent', result.foo, "Object from base constructor should have been returned.");
            print('ExplicitReturnUndefinedInitializedThis', result.bar, "'this' modified in derived constructor.");
            print(result instanceof ExplicitReturnUndefinedInitializedThis, "Result object is instanceof derived class");
            print(result instanceof SimpleParent, "Result object is not instanceof base class");
        }
    },
    {
        name: "Derived class returns any object and avoids super call / this initialization",
        body: function () {
            let obj = new UninitializedThisReturningArgumentConstructor({ foo: 'value' });

            print('value', obj.foo, "We returned an object from the class constructor which didn't initialize 'this' so we should get that object back");
        }
    },
    {
        name: "Derived class throws ReferenceError with multiple calls to super ('this' is already initialized)",
        body: function () {
            
            calls_to_ConstructorCountingParent = 0;

            class IllegalSuperCallConstructor extends ConstructorCountingParent {
                constructor() {
                    super();
                    super();
                }
            };

            print(function() { new IllegalSuperCallConstructor(); }, ReferenceError, "It's a ReferenceError to call super multiple times in a derived class constructor", "Multiple calls to 'super' in a class constructor are not allowed");
            print(2, calls_to_ConstructorCountingParent, "We do call the super function body twice but we throw ReferenceError when trying to assign the 'this' value after the second super call");
        }
    },
    {
        name: "Derived class throws ReferenceError with multiple calls to super ('this' is already initialized) with one call in a lambda",
        body: function () {
            
            calls_to_ConstructorCountingParent = 0;

            class IllegalSuperCallConstructor extends ConstructorCountingParent {
                constructor() {
                    let arrow = () => { super(); };
                    super();
                    arrow();
                }
            };

            print(function() { new IllegalSuperCallConstructor(); }, ReferenceError, "It's a ReferenceError to call super multiple times in a derived class constructor", "Multiple calls to 'super' in a class constructor are not allowed");
            print(2, calls_to_ConstructorCountingParent, "We do call the super function body twice but we throw ReferenceError when trying to assign the 'this' value after the second super call");
        }
    },
    {
        name: "Derived class throws ReferenceError with multiple calls to super ('this' is already initialized) with multiple calls in lambdas",
        body: function () {
            
            calls_to_ConstructorCountingParent = 0;

            class IllegalSuperCallConstructor extends ConstructorCountingParent {
                constructor() {
                    let arrow = () => { super(); };
                    let arrow2 = () => { super(); };
                    arrow();
                    arrow2();
                }
            };

            print(function() { new IllegalSuperCallConstructor(); }, ReferenceError, "It's a ReferenceError to call super multiple times in a derived class constructor", "Multiple calls to 'super' in a class constructor are not allowed");
            print(2, calls_to_ConstructorCountingParent, "We do call the super function body twice but we throw ReferenceError when trying to assign the 'this' value after the second super call");
        }
    },
    {
        name: "Derived class throws ReferenceError with multiple calls to super ('this' is already initialized) with multiple calls in the same lambda",
        body: function () {
            
            calls_to_ConstructorCountingParent = 0;

            class IllegalSuperCallConstructor extends ConstructorCountingParent {
                constructor() {
                    let arrow = () => { super(); super(); };
                    arrow();
                }
            };

            print(function() { new IllegalSuperCallConstructor(); }, ReferenceError, "It's a ReferenceError to call super multiple times in a derived class constructor", "Multiple calls to 'super' in a class constructor are not allowed");
            print(2, calls_to_ConstructorCountingParent, "We do call the super function body twice but we throw ReferenceError when trying to assign the 'this' value after the second super call");
        }
    },
    {
        name: "Derived class constructor captures this and super in a lambda but doesn't call the lambda",
        body: function () {
            class DerivedClassCapturingThisAndSuper extends SimpleParent {
                constructor() {
                    let arrow = () => { this.bar = 'lambda'; super(); };
                    super();
                    this.bar = "DerivedClassCapturingThisAndSuper";
                }
            };

            let result = new DerivedClassCapturingThisAndSuper();

            print("DerivedClassCapturingThisAndSuper", result.bar, "This is initialized with the return value from super()");
            print("SimpleParent", result.foo, "Parent class returned the object from super to derived constructor");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof DerivedClassCapturingThisAndSuper, "Result object is instanceof derived class");
        }
    },
    {
        name: "Creating an instance of base class doesn't block new.target calculation for super chain",
        body: function () {
            let parent = new SimpleParent();
            class SimpleDerivedClass extends SimpleParent {
                constructor() {
                    super();
                    this.bar = "SimpleDerivedClass";
                }
            };

            let result = new SimpleDerivedClass();

            print(Object.hasOwnProperty(parent, 'bar'), "Parent object doesn't have derived class values");
            print("SimpleParent", parent.foo, "Parent class initialized the object");
            print(parent instanceof SimpleParent, "Parent object is instanceof base class");
            print(parent instanceof SimpleDerivedClass, "Parent object isn't instanceof derived class");

            print("SimpleDerivedClass", result.bar, "This is initialized with the return value from super()");
            print("SimpleParent", result.foo, "Parent class returned the object from super to derived constructor");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SimpleDerivedClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Chain of multiple derived classes",
        body: function () {
            class MiddleDerivedClass extends SimpleParent {
                constructor() {
                    super();
                    this.bar = "MiddleDerivedClass";
                }
            };

            class BottomDerivedClass extends MiddleDerivedClass {
                constructor() {
                    super();
                    this.baz = "BottomDerivedClass";
                }
            };

            let result = new BottomDerivedClass();

            print("BottomDerivedClass", result.baz, "This is initialized with the return value from super()");
            print("MiddleDerivedClass", result.bar, "This is initialized with the return value from super()");
            print("SimpleParent", result.foo, "Parent class returned the object from super to derived constructor");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof MiddleDerivedClass, "Result object is instanceof derived class");
            print(result instanceof BottomDerivedClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class constructor leaks lambda which performs super",
        body: function() {
            class A {
                constructor() {
                    this.a = 'A';
                }
            }

            class B extends A {
                constructor() {
                    super();
                    this.b = 'B';
                }
            }

            class C extends B {
                constructor() {
                    var s = () => { super(); this.c = 'C'; return this; };
                    return s;
                }
            }

            var maker = new C();
            var result = maker();

            print("C", result.c, "This is initialized with the return value from super()");
            print("B", result.b, "This is initialized with the return value from super()");
            print("A", result.a, "Parent class returned the object from super to derived constructor");
            print(result instanceof A, "Result object is instanceof base class");
            print(result instanceof B, "Result object is instanceof derived class");
            print(result instanceof C, "Result object is instanceof derived class");

            print(function() { var result2 = maker(); }, ReferenceError, "Calling the escaped lambda again will throw since 'this' of the parent is already initialized", "Multiple calls to 'super' in a class constructor are not allowed");

            
            maker = new C();
            result = maker();

            print("C", result.c, "This is initialized with the return value from super()");
            print("B", result.b, "This is initialized with the return value from super()");
            print("A", result.a, "Parent class returned the object from super to derived constructor");
            print(result instanceof A, "Result object is instanceof base class");
            print(result instanceof B, "Result object is instanceof derived class");
            print(result instanceof C, "Result object is instanceof derived class");

            print(function() { var result2 = maker(); }, ReferenceError, "Calling the escaped lambda again will throw since 'this' of the parent is already initialized", "Multiple calls to 'super' in a class constructor are not allowed");
        }
    },
    {
        name: "Derived class constructor leaks lambda which performs super (lambda comes from middle derived class)",
        body: function() {
            class A {
                constructor() {
                    this.a = 'A';
                }
            }

            class B extends A {
                constructor() {
                    var s = () => { super(); this.b = 'B'; return this; };
                    return s;
                }
            }

            class C extends B {
                constructor() {
                    super();
                }
            }

            var maker = new C();
            var result = maker();

            print("B", result.b, "This is initialized with the return value from super()");
            print("A", result.a, "Parent class returned the object from super to derived constructor");
            print(result instanceof A, "Result object is instanceof base class");
            print(result instanceof B, "Result object is instanceof derived class");
            print(result instanceof C, "Result object is instanceof derived class");

            print(function() { var result2 = maker(); }, ReferenceError, "Calling the escaped lambda again will throw since 'this' of the parent is already initialized", "Multiple calls to 'super' in a class constructor are not allowed");

            
            maker = new C();
            result = maker();

            print("B", result.b, "This is initialized with the return value from super()");
            print("A", result.a, "Parent class returned the object from super to derived constructor");
            print(result instanceof A, "Result object is instanceof base class");
            print(result instanceof B, "Result object is instanceof derived class");
            print(result instanceof C, "Result object is instanceof derived class");

            print(function() { var result2 = maker(); }, ReferenceError, "Calling the escaped lambda again will throw since 'this' of the parent is already initialized", "Multiple calls to 'super' in a class constructor are not allowed");
        }
    },
    {
        name: "Derived class constructor leaks lambda which references 'this' in TDZ",
        body: function() {
            class A {
                constructor() {
                    this.a = 'A';
                }
            }

            class B extends A {
                constructor() {
                    super();
                    this.b = 'B';
                }
            }

            class C extends B {
                constructor() {
                    var s = () => { this.c = 'C'; super(); return this; };
                    return s;
                }
            }

            var maker = new C();

            print(function() { var result = maker(); }, ReferenceError, "Calling the escaped lambda throws since 'this' is accessed before super call", "Use before declaration");
        }
    },
    {
        name: "Derived class constructor leaks lambda which references 'this' in TDZ (lambda comes from middle derived class)",
        body: function() {
            class A {
                constructor() {
                    this.a = 'A';
                }
            }

            class B extends A {
                constructor() {
                    var s = () => { this.b = 'B'; super(); return this; };
                    return s;
                }
            }

            class C extends B {
                constructor() {
                    super();
                }
            }

            var maker = new C();

            print(function() { var result = maker(); }, ReferenceError, "Calling the escaped lambda throws since 'this' is accessed before super call", "Use before declaration");
        }
    },
    {
        name: "Derived class with null extends expression cannot be new'd",
        body: function () {
            class NullExtendsExpression extends null {
            };

            print(function() { new NullExtendsExpression(); }, TypeError, "Class that extends null throws when we attempt to call super as [[construct]]");
        }
    },
    {
        name: "Derived class with null extends expression can be new'd if constructor returns object",
        body: function () {
            class NullExtendsExpressionWithConstructor extends null {
                constructor(arg) {
                    return arg;
                }
            };

            var result = new NullExtendsExpressionWithConstructor({foo:'value'});

            print('value', result.foo, "Class derived from null expression can return an object safely");
            print(result instanceof NullExtendsExpressionWithConstructor, "Result object is not instanceof class");
        }
    },
    {
        name: "Derived constructor with a super call that isn't executed",
        body: function () {
            let returnFalse = () => { return false; };
            class DerivedClassAccessThisImplicitReturn extends SimpleParent {
                constructor() {
                    if (returnFalse()) {
                        super();
                    }
                    this.bar = '';
                }
            };

            print(function() { new DerivedClassAccessThisImplicitReturn(); }, ReferenceError, "When super isn't called, this is undecl", "Use before declaration");

            class DerivedClassImplicitReturn extends SimpleParent {
                constructor() {
                    if (returnFalse()) {
                        super();
                    }
                }
            };

            print(function() { new DerivedClassImplicitReturn(); }, ReferenceError, "When super isn't called, this is undecl", "Use before declaration");

            class DerivedClassAccessThisExplicitReturn extends SimpleParent {
                constructor() {
                    if (returnFalse()) {
                        super();
                    }
                    this.bar = '';
                    return this;
                }
            };

            print(function() { new DerivedClassAccessThisExplicitReturn(); }, ReferenceError, "When super isn't called, this is undecl", "Use before declaration");

            class DerivedClassExplicitReturn extends SimpleParent {
                constructor() {
                    if (returnFalse()) {
                        super();
                    }
                    return this;
                }
            };

            print(function() { new DerivedClassExplicitReturn(); }, ReferenceError, "When super isn't called, this is undecl", "Use before declaration");

            class DerivedClassAccessThisViaLambdaImplicitReturn extends SimpleParent {
                constructor() {
                    let arrow = () => { this.foo = ''; }
                    if (returnFalse()) {
                        super();
                    }
                    arrow();
                }
            };

            print(function() { new DerivedClassAccessThisViaLambdaImplicitReturn(); }, ReferenceError, "When super isn't called, this is undecl", "Use before declaration");

            class DerivedClassAccessThisViaLambdaExplicitReturn extends SimpleParent {
                constructor() {
                    let arrow = () => { this.foo = ''; }
                    if (returnFalse()) {
                        super();
                    }
                    arrow();
                    return this;
                }
            };

            print(function() { new DerivedClassAccessThisViaLambdaExplicitReturn(); }, ReferenceError, "When super isn't called, this is undecl", "Use before declaration");

            class DerivedClassWithThisScopeCaptureNoAccessImplicitReturn extends SimpleParent {
                constructor() {
                    let arrow = () => { this.foo = ''; }
                    if (returnFalse()) {
                        super();
                    }
                }
            };

            print(function() { new DerivedClassWithThisScopeCaptureNoAccessImplicitReturn(); }, ReferenceError, "When super isn't called, this is undecl", "Use before declaration");

            class DerivedClassWithThisScopeCaptureNoAccessExplicitReturn extends SimpleParent {
                constructor() {
                    let arrow = () => { this.foo = ''; }
                    if (returnFalse()) {
                        super();
                    }
                    return this;
                }
            };

            print(function() { new DerivedClassWithThisScopeCaptureNoAccessExplicitReturn(); }, ReferenceError, "When super isn't called, this is undecl", "Use before declaration");
        }
    },
    {
        name: "Derived class with super call inside an eval",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    eval('super();');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with super call inside an eval which accesses this",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    eval('super(); this.bar = "SuperCallInEvalClass";');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Class derived from SimpleParent can return an object safely");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with super call inside an eval which accesses new.target",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    eval('print(new.target, SuperCallInEvalClass, "new.target === SuperCallInEvalClass"); super();');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with super call inside an eval which accesses new.target and this",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    eval('print(new.target, SuperCallInEvalClass); super(); this.bar = "SuperCallInEvalClass";');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with super call inside an eval access to this inside eval and constructor",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    eval('super(); this.bar = "SuperCallInEvalClass";');
                    this.baz = "SuperCallInEvalClass_ctor";
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print('SuperCallInEvalClass_ctor', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_ctor'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class 'this' access inside an eval",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    super();
                    eval('this.bar = "SuperCallInEvalClass";');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class 'this' access inside and outside an eval",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    super();
                    eval('this.bar = "SuperCallInEvalClass";');
                    this.baz = "SuperCallInEvalClass_ctor";
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print('SuperCallInEvalClass_ctor', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_ctor'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class super call inside an eval with an unused arrow super call",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    let arrow = () => { super(); }
                    eval('super(); this.bar = "SuperCallInEvalClass";');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class super call inside an arrow with this access in an eval",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    let arrow = () => { super(); }
                    arrow();
                    eval('this.bar = "SuperCallInEvalClass";');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class super call inside an arrow accessing new.target with this access in an eval",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    let arrow = () => {
                        print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target");
                        super();
                    }
                    arrow();
                    eval('this.bar = "SuperCallInEvalClass";');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with arrow and eval accessing new.target, this - super in the arrow",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    let arrow = () => {
                        print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target");
                        super();
                        this.baz = "SuperCallInEvalClass_arrow";
                    }
                    arrow();
                    eval('print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target"); this.bar = "SuperCallInEvalClass";');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print('SuperCallInEvalClass_arrow', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_arrow'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with arrow and eval accessing new.target, this - super in the eval",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    let arrow = () => {
                        print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target");
                        this.baz = "SuperCallInEvalClass_arrow";
                    }
                    eval('print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target"); super(); this.bar = "SuperCallInEvalClass";');
                    arrow();
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print('SuperCallInEvalClass_arrow', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_arrow'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with arrow and multiple evals accessing new.target, this - super in the eval",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    eval('print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target");');
                    let arrow = () => {
                        print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target");
                        this.baz = "SuperCallInEvalClass_arrow";
                    }
                    eval('super();');
                    arrow();
                    eval('this.bar = "SuperCallInEvalClass";');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass'");
            print('SuperCallInEvalClass_arrow', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_arrow'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class testing all arrow/eval scenarios together",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor(callSuperInCtor, callSuperInLambda, callSuperInEval) {
                    print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target");
                    eval('print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target");');

                    let arrow_pre = () => {
                        print(SuperCallInEvalClass, new.target, "SuperCallInEvalClass === new.target");
                    }
                    let arrow_post = () => {
                        this.baz = "SuperCallInEvalClass_arrow";
                    }
                    let arrow_super = () => {
                        super();
                    }

                    arrow_pre();
                    if (callSuperInCtor) {
                        super();
                    }
                    if (callSuperInLambda) {
                        arrow_super();
                    }
                    if (callSuperInEval) {
                        eval('super();');
                    }

                    arrow_post();
                    eval('this.bar = "SuperCallInEvalClass_eval";');
                    this.bot = 'SuperCallInEvalClass_ctor';
                }
            };

            function verifyObj(result) {
                print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
                print('SuperCallInEvalClass_eval', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass_eval'");
                print('SuperCallInEvalClass_arrow', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_arrow'");
                print('SuperCallInEvalClass_ctor', result.bot, "Result object has derived field bot set to 'SuperCallInEvalClass_ctor'");
                print(result instanceof SimpleParent, "Result object is instanceof base class");
                print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
            }

            verifyObj(new SuperCallInEvalClass(true,false,false));
            verifyObj(new SuperCallInEvalClass(false,true,false));
            verifyObj(new SuperCallInEvalClass(false,false,true));

            print(function() { new SuperCallInEvalClass(false,false,false); }, ReferenceError, "Not calling super at all will cause a ReferenceError", "Use before declaration");
            print(function() { new SuperCallInEvalClass(true,true,false); }, ReferenceError, "Calling super in the ctor and a lambda throws a ReferenceError", "Multiple calls to 'super' in a class constructor are not allowed");
            print(function() { new SuperCallInEvalClass(true,false,true); }, ReferenceError, "Calling super in the ctor and eval throws a ReferenceError", "Multiple calls to 'super' in a class constructor are not allowed");
            print(function() { new SuperCallInEvalClass(false,true,true); }, ReferenceError, "Calling super in a lambda and eval throws a ReferenceError", "Multiple calls to 'super' in a class constructor are not allowed");
        }
    },
    {
        name: "Chained derived constructors performing super calls",
        body: function () {
            class DerivedClassUsingSuperInEval extends SimpleParent {
                constructor() {
                    eval('super();');
                }
            };
            class DerivedClassUsingSuperInArrow extends DerivedClassUsingSuperInEval {
                constructor() {
                    let arrow = () => { super(); }
                    arrow();
                }
            };
            class DerivedClassUsingDefaultConstructor extends DerivedClassUsingSuperInArrow {

            }
            class BottomLevelDerivedClass extends DerivedClassUsingDefaultConstructor {
                constructor() {
                    super();
                }
            };

            var result = new BottomLevelDerivedClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof DerivedClassUsingSuperInEval, "Result object is instanceof derived class");
            print(result instanceof DerivedClassUsingSuperInArrow, "Result object is instanceof derived class");
            print(result instanceof DerivedClassUsingDefaultConstructor, "Result object is instanceof derived class");
            print(result instanceof BottomLevelDerivedClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with nested evals performing super",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    var inner = "SuperCallInEvalClass_inner_eval";
                    var outer = "SuperCallInEvalClass_outer_eval";
                    eval('eval("super(); this.bar = inner;"); this.baz = outer;');
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass_inner_eval', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass_inner_eval'");
            print('SuperCallInEvalClass_outer_eval', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_outer_eval'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with eval in arrow performing super",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    var inner = "SuperCallInEvalClass_inner_eval";
                    var outer = "SuperCallInEvalClass_outer_eval";
                    var arrow = () => {
                        eval("super(); this.bar = inner;");
                        this.baz = outer;
                    };
                    arrow();
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass_inner_eval', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass_inner_eval'");
            print('SuperCallInEvalClass_outer_eval', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_outer_eval'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with nested eval in arrow performing super",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    var inner = "SuperCallInEvalClass_inner_eval";
                    var outer = "SuperCallInEvalClass_outer_eval";
                    var arrow = () => {
                        eval(`eval("super(); this.bar = inner;");`);
                        this.baz = outer;
                    };
                    arrow();
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass_inner_eval', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass_inner_eval'");
            print('SuperCallInEvalClass_outer_eval', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_outer_eval'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with nested eval nested in arrow performing super",
        body: function () {
            class SuperCallInEvalClass extends SimpleParent {
                constructor() {
                    var inner = "SuperCallInEvalClass_inner_eval";
                    var outer = "SuperCallInEvalClass_outer_eval";
                    var arrow = () => {
                        eval(`eval("super(); this.bar = inner;");`);
                        this.baz = outer;
                    };
                    var exec_arrow = () => {
                        arrow();
                    };
                    exec_arrow();
                }
            };

            var result = new SuperCallInEvalClass();

            print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
            print('SuperCallInEvalClass_inner_eval', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass_inner_eval'");
            print('SuperCallInEvalClass_outer_eval', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_outer_eval'");
            print(result instanceof SimpleParent, "Result object is instanceof base class");
            print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
        }
    },
    {
        name: "Derived class with nested constructor calls and arrow performing super inside eval",
        body: function () {
            class B { }
            class A extends B
            {
                constructor()
                {
                    eval("(()=>{ super(); this.value = 1; class X extends Object { constructor() { eval(\"super(); this.value = 2; \"); } } var x = new X(); this.x = x;})()");
                }
            }
            var a=new A();

            print(a instanceof A, "object a should be instanceof derived class");
            print(a instanceof B, "object should be instanceof base class");
            print(1, a.value, "assignment to 'this' inside constructor eval nested arrow function");
            print(2, a.x.value, "assignment to 'this' inside nested constructor and eval");
        }
    },
    {
         name: "Derived class with arrow in eval performing super",
         body: function () {
             class SuperCallInEvalClass extends SimpleParent {
                 constructor() {
                     var inner = "SuperCallInEvalClass_inner_eval";
                     var outer = "SuperCallInEvalClass_outer_eval";
                     eval('(()=>{super(); this.bar = inner;})(); this.baz = outer;');
                 }
             };

             var result = new SuperCallInEvalClass();

             print('SimpleParent', result.foo, "Class derived from SimpleParent has foo field set to 'SimpleParent'");
             print('SuperCallInEvalClass_inner_eval', result.bar, "Result object has derived field bar set to 'SuperCallInEvalClass_inner_eval'");
             print('SuperCallInEvalClass_outer_eval', result.baz, "Result object has derived field baz set to 'SuperCallInEvalClass_outer_eval'");
             print(result instanceof SimpleParent, "Result object is instanceof base class");
             print(result instanceof SuperCallInEvalClass, "Result object is instanceof derived class");
         }
    },
    {
        name: "Eval class hierarchy with super call",
        body: function () {
            let result = eval(`
                class EvalSimpleParent {
                    constructor() {
                        this.foo = "EvalSimpleParent";
                    }
                };
                class EvalDerivedClass extends EvalSimpleParent {
                    constructor() {
                        super();
                        this.bar = "EvalDerivedClass";
                    }
                };
                var o = new EvalDerivedClass();

                print(o instanceof EvalSimpleParent, "Result object is instanceof base class");
                print(o instanceof EvalDerivedClass, "Result object is instanceof derived class");

                o;
            `);

            print('EvalSimpleParent', result.foo, "Class derived from EvalSimpleParent has foo field set to 'EvalSimpleParent'");
            print('EvalDerivedClass', result.bar, "Result object has derived field bar set to 'EvalDerivedClass'");
        }
    },
    {
        name: "Eval class hierarchy with super call inside arrow function",
        body: function () {
            let result = eval(`
                class EvalSimpleParent {
                    constructor() {
                        this.foo = "EvalSimpleParent";
                    }
                };
                class EvalDerivedClass extends EvalSimpleParent {
                    constructor() {
                        var inner = "EvalDerivedClass_inner";
                        var outer = "EvalDerivedClass_outer";
                        var arrow = () => {
                            super();
                            this.baz = inner;
                        };
                        arrow();
                        this.bar = outer;
                    }
                };
                var o = new EvalDerivedClass();

                print(o instanceof EvalSimpleParent, "Result object is instanceof base class");
                print(o instanceof EvalDerivedClass, "Result object is instanceof derived class");

                o;
            `);

            print('EvalSimpleParent', result.foo, "Class derived from EvalSimpleParent has foo field set to 'EvalSimpleParent'");
            print('EvalDerivedClass_outer', result.bar, "Result object has derived field bar set to 'EvalDerivedClass_outer'");
            print('EvalDerivedClass_inner', result.baz, "Result object has derived field baz set to 'EvalDerivedClass_inner'");
        }
    },
    {
        name: "Eval class hierarchy with super call inside nested eval",
        body: function () {
            let result = eval(`
                class EvalSimpleParent {
                    constructor() {
                        this.foo = "EvalSimpleParent";
                    }
                };
                class EvalDerivedClass extends EvalSimpleParent {
                    constructor() {
                        var inner = "EvalDerivedClass_inner";
                        var outer = "EvalDerivedClass_outer";
                        eval('super(); this.bar = inner;');
                        this.baz = outer;
                    }
                };
                var o = new EvalDerivedClass();

                print(o instanceof EvalSimpleParent, "Result object is instanceof base class");
                print(o instanceof EvalDerivedClass, "Result object is instanceof derived class");

                o;
            `);

            print('EvalSimpleParent', result.foo, "Class derived from EvalSimpleParent has foo field set to 'EvalSimpleParent'");
            print('EvalDerivedClass_inner', result.bar, "Result object has derived field bar set to 'EvalDerivedClass_inner'");
            print('EvalDerivedClass_outer', result.baz, "Result object has derived field baz set to 'EvalDerivedClass_outer'");
        }
    },
    {
        name: "Eval class hierarchy with super call inside eval inside arrow function",
        body: function () {
            let result = eval(`
                class EvalSimpleParent {
                    constructor() {
                        this.foo = "EvalSimpleParent";
                    }
                };
                class EvalDerivedClass extends EvalSimpleParent {
                    constructor() {
                        var moreinner = "EvalDerivedClass_moreinner";
                        var inner = "EvalDerivedClass_inner";
                        var outer = "EvalDerivedClass_outer";
                        var arrow = () => {
                            eval('super(); this.bat = moreinner;');
                            this.baz = inner;
                        };
                        arrow();
                        this.bar = outer;
                    }
                };
                var o = new EvalDerivedClass();

                print(o instanceof EvalSimpleParent, "Result object is instanceof base class");
                print(o instanceof EvalDerivedClass, "Result object is instanceof derived class");

                o;
            `);

            print('EvalSimpleParent', result.foo, "Class derived from EvalSimpleParent has foo field set to 'EvalSimpleParent'");
            print('EvalDerivedClass_outer', result.bar, "Result object has derived field bar set to 'EvalDerivedClass_outer'");
            print('EvalDerivedClass_inner', result.baz, "Result object has derived field baz set to 'EvalDerivedClass_inner'");
            print('EvalDerivedClass_moreinner', result.bat, "Result object has derived field bat set to 'EvalDerivedClass_moreinner'");
        }
    },
    {
        name: "ES5-style class as a base class - explicit return of this from base",
        body: function () {
            function Base() {
                print(new.target, Derived, "new.target === Derived");
                this.foo = "Base";
                return this;
            }
            Base.prototype = {
                constructor: Base
            }
            class Derived extends Base {
                constructor() {
                    super();
                    this.bar = "Derived";
                }
            }
            let result = new Derived();

            print(result instanceof Base, "Result object is instanceof base class");
            print(result instanceof Derived, "Result object is instanceof derived class");
            print('Base', result.foo, "Class derived from Base has foo field set to 'Base'");
            print('Derived', result.bar, "Result object has derived field bar set to 'Derived'");
        }
    },
    {
        name: "ES5-style class as a base class with the super call inside an eval - explicit return of this from base",
        body: function () {
            function Base() {
                print(new.target, Derived, "new.target === Derived");
                this.foo = "Base";
                return this;
            }
            Base.prototype = {
                constructor: Base
            }
            class Derived extends Base {
                constructor() {
                    eval('super();');
                    this.bar = "Derived";
                }
            }
            let result = new Derived();

            print(result instanceof Base, "Result object is instanceof base class");
            print(result instanceof Derived, "Result object is instanceof derived class");
            print('Base', result.foo, "Class derived from Base has foo field set to 'Base'");
            print('Derived', result.bar, "Result object has derived field bar set to 'Derived'");
        }
    },
    {
        name: "ES5-style class as a base class with the super call inside an arrow - explicit return of this from base",
        body: function () {
            function Base() {
                print(new.target, Derived, "new.target === Derived");
                this.foo = "Base";
                return this;
            }
            Base.prototype = {
                constructor: Base
            }
            class Derived extends Base {
                constructor() {
                    let arrow = () => { super(); };
                    arrow();
                    this.bar = "Derived";
                }
            }
            let result = new Derived();

            print(result instanceof Base, "Result object is instanceof base class");
            print(result instanceof Derived, "Result object is instanceof derived class");
            print('Base', result.foo, "Class derived from Base has foo field set to 'Base'");
            print('Derived', result.bar, "Result object has derived field bar set to 'Derived'");
        }
    },
    {
        name: "ES5-style class as a base class - implicit return of this from base",
        body: function () {
            function Base() {
                print(new.target, Derived, "new.target === Derived");
                this.foo = "Base";
            }
            Base.prototype = {
                constructor: Base
            }
            class Derived extends Base {
                constructor() {
                    super();
                    this.bar = "Derived";
                }
            }
            let result = new Derived();

            print(result instanceof Base, "Result object is instanceof base class");
            print(result instanceof Derived, "Result object is instanceof derived class");
            print('Base', result.foo, "Class derived from Base has foo field set to 'Base'");
            print('Derived', result.bar, "Result object has derived field bar set to 'Derived'");
        }
    },
    {
        name: "ES5-style class as a base class with the super call inside an eval - implicit return of this from base",
        body: function () {
            function Base() {
                print(new.target, Derived, "new.target === Derived");
                this.foo = "Base";
            }
            Base.prototype = {
                constructor: Base
            }
            class Derived extends Base {
                constructor() {
                    eval('super();');
                    this.bar = "Derived";
                }
            }
            let result = new Derived();

            print(result instanceof Base, "Result object is instanceof base class");
            print(result instanceof Derived, "Result object is instanceof derived class");
            print('Base', result.foo, "Class derived from Base has foo field set to 'Base'");
            print('Derived', result.bar, "Result object has derived field bar set to 'Derived'");
        }
    },
    {
        name: "ES5-style class as a base class with the super call inside an arrow - implicit return of this from base",
        body: function () {
            function Base() {
                print(new.target, Derived, "new.target === Derived");
                this.foo = "Base";
            }
            Base.prototype = {
                constructor: Base
            }
            class Derived extends Base {
                constructor() {
                    let arrow = () => { super(); };
                    arrow();
                    this.bar = "Derived";
                }
            }
            let result = new Derived();

            print(result instanceof Base, "Result object is instanceof base class");
            print(result instanceof Derived, "Result object is instanceof derived class");
            print('Base', result.foo, "Class derived from Base has foo field set to 'Base'");
            print('Derived', result.bar, "Result object has derived field bar set to 'Derived'");
        }
    },
    {
        name: "Function as a base class can't assign this to non-object via super call",
        body: function () {
            function BaseReturnsArgument(arg) {
                print(new.target, DerivedFromBase, "new.target === DerivedFromBase");
                this.foo = 'BaseReturnsArgument';
                return arg;
            }
            BaseReturnsArgument.prototype = {
                constructor: BaseReturnsArgument
            }
            class DerivedFromBase extends BaseReturnsArgument {
                constructor(arg) {
                    super(arg);
                    print(this === arg, "If base function returns non-object, 'this' is returned instead");
                    this.bar = 'DerivedFromBase';
                }
            }

            function testDerivedClass(arg) {
                let result = new DerivedFromBase(arg);

                print(result instanceof BaseReturnsArgument, "Result object is instanceof base class");
                print(result instanceof DerivedFromBase, "Result object is instanceof derived class");
                print('BaseReturnsArgument', result.foo, "Class derived from Base has foo field set to 'Base'");
                print('DerivedFromBase', result.bar, "Result object has derived field bar set to 'Derived'");
            }

            testDerivedClass();
            testDerivedClass(undefined);
            testDerivedClass(null);
            testDerivedClass('string');
            testDerivedClass(5);
            testDerivedClass(Symbol());
        }
    },
    {
        name: "Function as a base class can return an object to override this",
        body: function () {
            function Base() {
                print(new.target, Derived, "new.target === Derived");
                this.foo = 'bad';
                return { foo: 'Base' };
            }
            Base.prototype = {
                constructor: Base
            }
            class Derived extends Base {
                constructor() {
                    super();
                    this.bar = 'Derived';
                }
            }

            let result = new Derived();

            print(result instanceof Base, "Result object is instanceof base class");
            print(result instanceof Derived, "Result object is instanceof derived class");
            print('Base', result.foo, "Class derived from Base has foo field set to 'Base'");
            print('Derived', result.bar, "Result object has derived field bar set to 'Derived'");
        }
    },
    {
        name: "Super call with expressions in arguments",
        body: function () {
            function Base() {
                print(new.target, Derived, "new.target === Derived");
                print(3, arguments[0], 'arguments[0] === 3')
                print('str', arguments[1], 'arguments[1] === "str"')
                print(1, arguments[2], 'arguments[2] === 1')
                print(2, arguments[3], 'arguments[3] === 2')
                print(3, arguments[4], 'arguments[4] === 3')
                print(5, arguments.length, 'arguments.length === 5');
                this.foo = 'Base';
            }
            Base.prototype = {
                constructor: Base
            }
            function foo() { return 'str'; }
            class Derived extends Base {
                constructor() {
                    super(1+2,foo(),...[1,2,3]);
                    this.bar = 'Derived';
                }
            }

            let result = new Derived();

            print(result instanceof Base, "Result object is instanceof base class");
            print(result instanceof Derived, "Result object is instanceof derived class");
            print('Base', result.foo, "Class derived from Base has foo field set to 'Base'");
            print('Derived', result.bar, "Result object has derived field bar set to 'Derived'");
        }
    },
];

for (var i = 0; i < tests.length; i ++) {tests[i].body()}
