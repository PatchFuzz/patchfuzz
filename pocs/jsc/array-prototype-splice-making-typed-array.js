function print(b) {
    if (!b)
        throw new Error("Bad assertion!")
}

function test(f, n = 4) {
    for (let i = 0; i < n; i++)
        f();
}

test(function() {
    
    let x = [1,2,3,4,5];
    x.constructor = Uint8Array;
    delete x[2];
    print(!(2 in x));
    let err = null;
    try {
        let removed = x.splice(1,3);
        print(removed instanceof Uint8Array);
        print(removed.length === 3);
        print(removed[0] === 2);
        print(removed[1] === 0);
        print(removed[2] === 4);
    } catch(e) {
        err = e;
    }
    print(err.toString() === "TypeError: Attempted to assign to readonly property.");

    print(x instanceof Array);
    print(x.length === 5);
    print(x[0] === 1);
    print(x[1] === 2);
    print(x[2] === undefined);
    print(x[3] === 4);
    print(x[4] === 5);
});

test(function() {
    let x = [1,2,3,4,5];
    x.constructor = Uint8Array;
    delete x[2];
    print(!(2 in x));
    Object.defineProperty(Uint8Array, Symbol.species, {value: null});
    print(Uint8Array[Symbol.species] === null);
    x = new Proxy(x, {
        get(target, property, receiver) {
            if (parseInt(property, 10))
                print(property !== "2");
            return Reflect.get(target, property, receiver);
        }
    });

    let removed = x.splice(1,3);
    print(removed instanceof Array); 
    print(removed.length === 3);
    print(removed[0] === 2);
    print(removed[1] === undefined);
    print(!(1 in removed));
    print(removed[2] === 4);

    print(x instanceof Array);
    print(x.length === 2);
    print(x[0] === 1);
    print(x[1] === 5);
});
