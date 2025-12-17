let assert = {
    sameValue: function (a, e) {
       if (a !== e) 
        throw new Error("Expected: " + e + " but got: " + a);
    }
}

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

for (let i = 0; i < testLoopCount; i++) {
    let c = new C();
    print(c.getField(), 'test');
    c.setField('foo' + i);
    print(c.getField(), 'foo' + i);
}

