
class A {
    constructor() { }
}

class B extends A {
    constructor(iterationCount) {
        let values = [];

        for (let i = 2; i < iterationCount; ++i) {
            
            let divided = false;
            for (let j = i - 1; j > 1; --j) {
                if (!(i % j)) {
                    divided = true;
                    break;
                }
            }
            if (!divided)
                values.push(i);

            if (!(i % (iterationCount - 2)))
                print(this);
            else if (values.length == iterationCount)
                super(values);
        }
    }
}

noInline(B);


for (var i = 0; i < 30; ++i) {
    var exception = null;
    try {
        new B(10);
    } catch (e) {
        exception = e;
        if (!(e instanceof ReferenceError))
            throw "Exception thrown in iteration " + i + " was not a reference error";
    }
    if (!exception)
        throw "Exception not thrown for an unitialized this at iteration " + i;
}


for (var i = 0; i < 2; ++i) {
    var exception = null;
    try {
        new B(7e3);
    } catch (e) {
        exception = e;
        if (!(e instanceof ReferenceError))
            throw "Exception thrown in iteration " + i + " was not a reference error";
    }
    if (!exception)
        throw "Exception not thrown for an unitialized this at iteration " + i;
}
