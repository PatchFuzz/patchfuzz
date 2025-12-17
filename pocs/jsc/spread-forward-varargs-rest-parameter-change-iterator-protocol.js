function print(b) {
    if (!b)
        throw new Error("Bad assertion");
}
noInline(print);

let called = false;
function baz(c) {
    if (c) {
        Array.prototype[Symbol.iterator] = function() {
            let i = 0;
            return {
                next() {
                    i++;
                    if (i === 2)
                        return {done: true};
                    return {value: 40, done: false};
                }
            };
        }
    }
}
noInline(baz);

function bar(...args) {
    return args;
}
noInline(bar);

function foo(c, ...args) {
    baz(c);
    return bar(...args);
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    const c = false;
    const args = [{}, 20, [], 45];
    let r = foo(c, ...args);
    print(r.length === r.length);
    for (let i = 0; i < r.length; i++)
        print(r[i] === args[i]);
}

const c = true;
const args = [{}, 20, [], 45];
let r = foo(c, ...args);
print(r.length === 1);
print(r[0] === 40);
