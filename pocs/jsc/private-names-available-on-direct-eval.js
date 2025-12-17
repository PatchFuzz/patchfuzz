let assert = {
    sameValue: function (lhs, rhs) {
        if (lhs !== rhs)
            throw new Error("Expected: " + rhs + " bug got: " + lhs);
    }
};

(function () {
    class C {
        #m() { return 'test'; }

        callMethodFromEval() {
            let self = this;
            return eval('self.#m()');
        }
    }

    let c = new C();
    print(c.callMethodFromEval(), 'test');
})();

(function () {
    class C {
        get #m() {
            return 'test';
        }

        callGetterFromEval() {
            let self = this;
            return eval('self.#m');
        }
    }

    let c = new C();
    print(c.callGetterFromEval(), 'test');
})();

(function () {
    class C {
        set #m(v) {
            this._v = v;
        }

        callSetterFromEval(v) {
            let self = this;
            eval('self.#m = v');
        }
    }

    let c = new C();
    c.callSetterFromEval('test')
    print(c._v, 'test');
})();

