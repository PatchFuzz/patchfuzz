function f(x) {
    let [a, b, c] = x;
    return a + b + c;
}

function intact(name) {
    let state = getFuseState();
    if (!(name in state)) {
        throw "No such fuse " + name;
    }
    return state[name].intact
}

let didIt = false;
([])[Symbol.iterator]().__proto__['return'] = () => { didIt = true; return { done: true, value: undefined } };
print(intact("ArrayIteratorPrototypeHasNoReturnProperty"), false);

print(f([1, 2, 3, 0]), 6);
print(didIt, true);

didIt = false;
g = newGlobal();
g.evaluate(f.toString());

g.long = [1, 2, 3, 0];
g.evaluate("print(f(long),6)")
g.evaluate(intact.toString());

g.evaluate(`print(intact("ArrayIteratorPrototypeHasNoReturnProperty"), true)`)
print(didIt, true);

didIt = false;
g = newGlobal();
g.evaluate(f.toString());

g.long = [1, 2, 3, 0];


g.evaluate(`
for (let i = 0; i < 100; i++) {
    print(f([1, 2, 3, 0]), 6);
}
`);

print(didIt, false);
g.evaluate("print(f(long), 6)");
print(didIt, true);

delete Array.prototype[Symbol.iterator]
let success = false;
try { f([1, 2, 3, 4]); success = true } catch (e) { }
print(success, false);

try { g.evaluate("print(f(long), 6)"); success = true } catch (e) { }
print(success, false);
