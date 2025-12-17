let assert = {
    sameValue: (a, e) => {
        if (a !== e) 
            throw new Error("Expected: " + e + " but got: " + a);
    },

    throws: (expectedException, functor, m) => {
        try {
            functor();
        } catch(e) {
            if (!(e instanceof expectedException))
                throw new Error(m);
        }
    }
};

(() => {
    class C {
        #field = 'test';
    
        static access(o) {
            return o?.#field;
        }
    }

    let c = new C;
    for (let i = 0; i < testLoopCount; i++) {
        print(C.access(c), 'test');
        print(C.access(undefined), undefined);
        print(C.access(null), undefined);
    }

    print(TypeError, () => {
        C.access({});
    }, "Object without private field should throw");
})();


(() => {
    class C {
        #field = 'test';
    
        static chainedAccess(o) {
            return o.private?.#field;
        }
    }

    let c = new C;
    let o = {private: c};
    for (let i = 0; i < testLoopCount; i++) {
        print(C.chainedAccess(o), 'test');
        print(C.chainedAccess({}), undefined);
        print(C.chainedAccess({private: null}), undefined);
    }

    print(TypeError, () => {
        o.private = {};
        C.chainedAccess(o);
    }, "Object without private field should throw");
})();

(() => {
    class C {
        #field;

        setField(v) {
            this.#field = v;
        }
    
        static access(o) {
            return o.#field?.property;
        }
    }

    let c = new C;
    for (let i = 0; i < testLoopCount; i++) {
        c.setField({property: 'test'});
        print(C.access(c), 'test');

        c.setField(undefined);
        print(C.access(c), undefined);

        c.setField(null);
        print(C.access(c), undefined);
    }

    print(TypeError, () => {
        C.access({});
    }, "Object without private field should throw");
})();

