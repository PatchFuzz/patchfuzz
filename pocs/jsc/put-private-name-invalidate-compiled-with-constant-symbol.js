let assert = {
    sameValue: function (a, e) {
       if (a !== e) 
        throw new Error("Expected: " + e + " but got: " + a);
    },
    throws: function(exception, functor) {
        let threwException;
        try {
            functor();
            threwException = false;
        } catch(e) {
            threwException = true;
            if (!(e instanceof exception))
                throw new Error("Expected to throw: " + exception.name + " but it throws: " + e.name);
        }

        if (!threwException)
            throw new Error("Expected to throw: " + exception.name + " but executed without exception");
    }
}

function factoryClass() {
    class C {
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
    noDFG(C.prototype.getField);
    noFTL(C.prototype.getField);

    return C;
}

let C = factoryClass();

for (let i = 0; i < testLoopCount; i++) {
    let c = new C();
    print(c.getField(), 'test');
    c.setField('foo' + i);
    print(c.getField(), 'foo' + i);
}

let C2 = factoryClass();

let c2 = new C2();
print(c2.getField(), 'test');
c2.setField('foo');
print(c2.getField(), 'foo');

let c = new C();

print(TypeError, () => {
    c.setField.call(c2, 'test');
});

print(TypeError, () => {
    c2.setField.call(c, 'test');
});

