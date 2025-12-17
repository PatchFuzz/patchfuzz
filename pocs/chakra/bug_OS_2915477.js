var i = 0;
var o = {
    next() {
        return {
            done: i == 1,
            value: [ i++, i ]
        };
    },

    [Symbol.iterator]() {
        return this;
    }
}


o.next = new Proxy(o.next, { });

var m = new Map(o);
if (m.get(0) === 1) {
    print("passed");
} else {
    print("failed");
}
