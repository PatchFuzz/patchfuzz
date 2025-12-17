function shallowEqual(o1, o2) {
    var k1 = Object.keys(o1);
    var k2 = Object.keys(o2);
    if (k1.length != k2.length) {
        return false;
    }
    for (var k = 0; k < k1.length; k++) {
        if (!Object.hasOwnProperty.call(o2, k1[k]) || !Object.is(o1[k1[k]], o2[k1[k]])) {
            return false;
        }
    }
    return true;
}

let sideEffectCounter = 0;
const payload = {x: 5, a: 1, b: 2, c: 3, d: 4};
const handler = {
    ownKeys(target) {
        
        sideEffectCounter++;
        
        return Reflect.ownKeys(target);
    },
};
const proxy = new Proxy(payload, handler);

let objs = [
    {x:0, a: 1, b: 2},
    {x:1, b: 1, c: 2},
    {x:2, c: 1, d: 2},
    {x:3, a: 1, b: 2, c: 3},
    {x:4, b: 1, c: 2, d: 3},
    {x:5, a: 1, b: 2, c: 3, d: 4}
];


with({}) {}
let iterMax = 1000;
for (let i = 0; i < iterMax; i++) {
    for (let o1 of objs) {
        for (let o2 of objs) {
            print(shallowEqual(o1, o2), Object.is(o1, o2));
        }
    }
}

print(sideEffectCounter, 0);



shallowEqual(objs[0], proxy);


print(sideEffectCounter, 1);
