


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
            if (!e instanceof exception)
                throw new Error(`Expected to throw a ${exception.name} but it threw: ${e}`);
        }

        if (!threwException)
            throw new Error(`Expected to throw a ${exception.name} but did not throw`);
    }
};

class Base {
    constructor(i) {
        if (i & 1)
            this.differentStructure = `extra${i}`;
    }
}

function factoryClass() {
    class C extends Base {
        #field = 'test';
    
        setField(v) {
            this.#field = v;
        }
    
        getField() {
            return this.#field;
        }
    }
    noInline(C.prototype.setField);
    noInline(C.prototype.getField);
    noDFG(C.prototype.setField);
    noFTL(C.prototype.setField);

    return C;
}

let C = factoryClass();

for (let i = 0; i < 10000; i++) {
    let c = new C(i);
    assert.equals(c.getField(), 'test');
    c.setField('foo' + i);
    assert.equals(c.getField(), 'foo' + i);
}

let C2 = factoryClass(); 


for (let i = 0; i < 10000; i++) {
    let c = new C(i);
    assert.equals(c.getField(), 'test');
    c.setField('foo' + i);
    assert.equals(c.getField(), 'foo' + i);
}

let c2 = new C2();
assert.throws(TypeError, function () {
    c2.getField.call(new C()); 
});