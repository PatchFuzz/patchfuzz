function print(b) {
    if (!b) {
        throw "bad assert!"
    }
}

function shouldThrow(func, errorMessage) {
    var errorThrown = false;
    var error = null;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error('not thrown');
    if (String(error) !== errorMessage)
        throw new Error(`
            bad error:      ${String(error)}
            expected error: ${errorMessage}
        `);
}


{
    var y = 'Outer y';

    class A {
        static field = 'Inner y';
        static {
            var y = this.field;
        }
    }

    print(y === 'Outer y');
}


{
    class C {
        static {
            print(this.x === undefined);
        }
        static x = 10;
        static {
            print(this.x === 10);
            print(this.y === undefined);
        }
        static y = 20;
        static {
            print(this.y === 20);
        }
    }
}


{
    class A {
        static field = 'A static field';
        static {
            print(this.field === 'A static field');
        }
    }
}


{
    class A {
        static fieldA = 'A.fieldA';
    }
    class B extends A {
        static {
            print(super.fieldA === 'A.fieldA');
        }
    }
}

shouldThrow(() => {
    eval(`
        class x {
            static {
                function nested() {
                    if (0?.[{ [Symbol.toPrimitive]: x => super[new.target()] }] ** 0);
                }
            }
        }
    `);
}, `SyntaxError: super is not valid in this context.`);


{
    let getDPrivateField;

    class D {
        #privateField;
        constructor(v) {
            this.#privateField = v;
        }
        static {
            getDPrivateField = (d) => d.#privateField;
        }
    }

    print(getDPrivateField(new D('private')) === 'private');
}


{
    let A, B;

    let friendA;

    A = class A {
        #x;
        constructor(x) {
            this.#x = x;
        }
        static {
            friendA = {
                getX(obj) { return obj.#x },
                setX(obj, value) { obj.#x = value }
            };
        }
        getX() {
            return this.#x;
        }
    };

    B = class B {
        constructor(a) {
            const x = friendA.getX(a);
            friendA.setX(a, x + 32);
        }
    };

    let a = new A(10);
    new B(a);

    print(a.getX() === 42);
}


{
    class C {
        static {
            while (false)
                break;           
        }
    }
}

{
    class C {
        static {
            while (false) {
                break;           
            }
        }
    }
}

shouldThrow(() => {
    eval(`
        while (false) {
            class C {
                static {
                    break;       
                }
            }
        }
    `);
}, `SyntaxError: 'break' cannot cross static block boundary.`);

shouldThrow(() => {
    eval(`
        class C {
            static {
                break;           
            }
        }
    `);
}, `SyntaxError: 'break' cannot cross static block boundary.`);

shouldThrow(() => {
    eval(`
        while (false) {
            class C {
                static {
                    {
                        break;   
                    }
                }
            }
        }
    `);
}, `SyntaxError: 'break' cannot cross static block boundary.`);

shouldThrow(() => {
    eval(`
        class C {
            static {
                {
                    break;        
                }
            }
        }
    `);
}, `SyntaxError: 'break' cannot cross static block boundary.`);


{
    class C {
        static {
            while (false)
                continue;           
        }
    }
}

{
    class C {
        static {
            while (false) {
                continue;           
            }
        }
    }
}

shouldThrow(() => {
    eval(`
        while (false) {
            class C {
                static {
                    continue;       
                }
            }
        }
    `);
}, `SyntaxError: 'continue' cannot cross static block boundary.`);

shouldThrow(() => {
    eval(`
        class C {
            static {
                continue;           
            }
        }
    `);
}, `SyntaxError: 'continue' cannot cross static block boundary.`);

shouldThrow(() => {
    eval(`
        while (false) {
            class C {
                static {
                    {
                        continue;   
                    }
                }
            }
        }
    `);
}, `SyntaxError: 'continue' cannot cross static block boundary.`);

shouldThrow(() => {
    eval(`
        class C {
            static {
                {
                    continue;       
                }
            }
        }
    `);
}, `SyntaxError: 'continue' cannot cross static block boundary.`);


{
    class C {
        static {
            function inner() {
                [arguments]();
            }
        }
    }
}

{
    class C {
        static {
            class B {
                inner() {
                    [arguments]();
                }
            }
        }
    }
}

{
    class C {
        static {
            function inner() {
                arguments[0];
            }
        }
    }
}

{
    class C {
        static {
            class B {
                inner() {
                    arguments[0];
                }
            }
        }
    }
}

{
    class C {
        static {
            (a, b) => {
                this.arguments[0];
            };
        }
    }
}

shouldThrow(() => {
    eval(`
        class C {
            static {
                arguments;
            }
        }
    `);
}, `SyntaxError: Cannot use 'arguments' as an identifier in static block.`);



{
    class A {
        static {
            function* gen() {
                yield 42;
            }
        }
    }
}

{
    class A {
        static {
            class B {
                *gen() {
                    yield 42;
                }
            }
        }

    }
}

shouldThrow(() => {
    eval(`
        class C {
            static {
                function inner() {
                    yield 0;
                }
            }
        }
    `);
}, `SyntaxError: Unexpected keyword 'yield'. Cannot use yield expression out of generator.`);

shouldThrow(() => {
    eval(`
        class C {
            static {
                yield 0;
            }
        }
    `);
}, `SyntaxError: Unexpected keyword 'yield'. Cannot use 'yield' within static block.`);


{
    class C {
        static {
            function inner() {
                try { } catch (await) { }
            }
        }
    }
}

{
    class C {
        static {
            class B {
                inner() {
                    try { } catch (await) { }
                }
            }
        }
    }
}

{
    class C {
        static {
            async function inner() {
                await 0;
            }
        }
    }
}

{
    class C {
        static {
            class B {
                async inner() {
                    await 0;
                }
            }
        }
    }
}

{
    class C {
        static {
            function inner() {
                let await = 10;
            }
        }
    }
}

{
    class C {
        static {
            class B {
                inner() {
                    let await = 10;
                }
            }
        }
    }
}

{
    async function outer() {
        class C {
            static {
                async function inner() {
                    await 0;
                }
            }
        }
    }
}

{
    async function outer() {
        class C {
            static {
                class B {
                    async inner() {
                        await 0;
                    }
                }
            }
        }
    }
}

{
    async function outer() {
        class C {
            static {
                function inner() {
                    let await = 10;
                }
            }
        }
    }
}

{
    async function outer() {
        class C {
            static {
                class B {
                    inner() {
                        let await = 10;
                    }
                }
            }
        }
    }
}

{
    class C {
        static {
            function inner() {
                [await]();
            }
        }
    }
}

{
    class C {
        static {
            class B {
                inner() {
                    [await]();
                }
            }
        }
    }
}



{
    class x {
        static #f = false;
        static {
            if (new.target) {
                this.#f = false;
            } else {
                this.#f = true;
            }
        }
        static {
            print(this.#f === true);
        }
    }
}

{
    class x {
        static #f = false;
        static {
            (() => {
                if (new.target) {
                    this.#f = false;
                } else {
                    this.#f = true;
                }
            })();
        }
        static {
            print(this.#f === true);
        }
    }
}

{
    class x {
        static #f = false;
        static {
            function nested() {
                (() => {
                    if (new.target) {
                        x.#f = false;
                    } else {
                        x.#f = true;
                    }
                })();
            }
    
            nested();
        }
        static {
            print(this.#f === true);
        }
    }
}

{
    class x {
        static y = new.target;
        static {
            print(new.target === undefined);
        }
    }

    print(x.y === undefined);
}

shouldThrow(() => {
    eval(`
        class x {
            static {
                if (0?.[{ [Symbol.toPrimitive]: x => super[new.target()] }] ** 0);
            }
        }
    `);
}, `TypeError: new.target is not a function. (In 'new.target()', 'new.target' is undefined)`);

shouldThrow(() => {
    eval(`
        class x {
            static {
                {
                    if (0?.[{ [Symbol.toPrimitive]: x => super[new.target()] }] ** 0);
                }
            }
        }
    `);
}, `TypeError: new.target is not a function. (In 'new.target()', 'new.target' is undefined)`);

shouldThrow(() => {
    eval(`
        class x {
            static {
                function nested() {
                    class y {
                        static {
                            if (0?.[{ [Symbol.toPrimitive]: x => super[new.target()] }] ** 0);
                        }
                    }
                }

                nested();
            }
        }
    `);
}, `TypeError: new.target is not a function. (In 'new.target()', 'new.target' is undefined)`);


{
    function doSomethingWith(x) {
        return {
            y: x + 1,
            z: x + 2
        };
    }

    class C {
        static x = 10;
        static y;
        static z;
        static {
            try {
                const obj = doSomethingWith(this.x);
                C.y = obj.y;
                C["z"] = obj.z;
            } catch {
            }
        }
    }

    print(C.y === 11);
    print(C.z === 12);
}

{
    class C {
        static y;
        static z;
        static {
            try {
                throw "err";
            } catch {
                C.y = 13;
                C['z'] = 14;
            }
        }
    }

    print(C.y === 13);
    print(C.z === 14);
}

{
    var value = null;
    class C {
        static {
            function inner() {
                value = new.target;
            }
            inner();
        }
    }
    print(value === undefined);
}

{
    class C {
        static {
            value = new.target;
        }
    }
    print(value === undefined);
}

{
    class C {
        static {
            function inner() {
                {
                    return 10;
                }
            }
        }
    }
}

{
    class C {
        static {
            function inner() {
                Promise.resolve().then(makeMasquerader(), makeMasquerader());
            }
            {
                Promise.resolve().then(makeMasquerader(), makeMasquerader());
            }
        }
    }
}

{
    class C {
        static {
            {
                function foo(arg) {
                    let o;
                    if (arg) {
                        o = {};
                    } else {
                        o = function() { }
                    }
                    return typeof o;
                }
                noInline(foo);
                
                for (let i = 0; i < testLoopCount; i++) {
                    let bool = !!(i % 2);
                    let result = foo(bool);
                    if (bool)
                        print(result === "object");
                    else
                        print(result === "function");
                }
            }
        }
    }
}

{
    function foo() {
        print(foo.caller === null);
    }
    class C {
        static {
            foo();
        }
    }
}

{
    class x { 
        static { 
            var x; 
        } 
    }
}
