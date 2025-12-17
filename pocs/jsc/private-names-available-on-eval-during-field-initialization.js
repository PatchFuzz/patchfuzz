let assert = {
    sameValue: function (lhs, rhs) {
        if (lhs !== rhs)
            throw new Error("Expected: " + rhs + " bug got: " + lhs);
    }
};

(function () {
    class C {
        #m() { return 'test'; }

        field = eval('this.#m()');
    }

    let c = new C();
    print(c.field, 'test');
})();

(function () {
    class C {
        get #m() { return 'test'; }

        field = eval('this.#m');
    }

    let c = new C();
    print(c.field, 'test');
})();

