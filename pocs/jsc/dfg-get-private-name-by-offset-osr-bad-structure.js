let assert = {
    equals: function (a, e) {
       if (a !== e) 
        throw new Error(`Expected: ${e} but got: ${a}`);
    },
    throws: function(exception, functor) {
        let threwException;
        try {
            functor();
            threwException = false;
        } catch(e) {
            threwException = true;
            if (!(e instanceof exception))
                throw new Error(`Expected to throw a ${exception.name} but it threw: ${e}`);
        }

        if (!threwException)
            throw new Error(`Expected to throw a ${exception.name} but did not throw`);
    }
};

class C {
    #field = 'test';

    constructor(i) {
        if (i > 5000)
            this.extraStuff = true; 
        if (i === 9999)
            this.moreStuff = true; 
    }

    setField(v) {
        this.#field = v;
    }

    getField() {
        return this.#field;
    }
}
noInline(C.prototype.constructor);
noDFG(C.prototype.constructor);
noFTL(C.prototype.constructor);
noInline(C.prototype.setField);
noInline(C.prototype.getField);
noDFG(C.prototype.setField);
noFTL(C.prototype.setField);

for (let i = 0; i < testLoopCount; ++i) {
    let c = new C(i);
    print(c.getField(), 'test');
    c.setField('foo' + i);
    print(c.getField(), 'foo' + i);
}


let c = new C(100);
print(TypeError, () => c.getField.call({}));
