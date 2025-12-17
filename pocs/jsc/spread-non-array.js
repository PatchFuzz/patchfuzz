function print(b) {
    if (!b)
        throw new Error("Bad assertion.");
}
function foo(m) {
    return [...m];
}
noInline(foo);

let map = new Map;
map.set(20, 30);
map.set(40, 50);

let called = 0;
let customIterator = {
    [Symbol.iterator]: function() {
        called++;
        let count = 0;
        return {
            next() {
                called++;
                count++;
                if (count === 1)
                    return {done: false, value: [20, 30]};
                if (count === 2)
                    return {done: false, value: [40, 50]};
                return {done: true};
            }
        };
    }
};
for (let i = 0; i < testLoopCount; i++) {
    for (let o of [customIterator, map]) {
        let [[a, b], [c, d]] = foo(o);
        print(a === 20);
        print(b === 30);
        print(c === 40);
        print(d === 50);
    }
    print(called === 4);
    called = 0;
}

function bar(m) {
    return [...m, ...m];
}
noInline(bar);
for (let i = 0; i < testLoopCount; i++) {
    for (let o of [customIterator, map]) {
        let [[a, b], [c, d], [e, f], [g, h]] = bar(o);
        print(a === 20);
        print(b === 30);
        print(c === 40);
        print(d === 50);
        print(e === 20);
        print(f === 30);
        print(g === 40);
        print(h === 50);
    }
    print(called === 8);
    called = 0;
}
