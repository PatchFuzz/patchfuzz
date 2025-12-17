var createCustomGetterObject = print;

function print(b) {
    if (!b)
        throw new Error("baddd");
}
noInline(print);

let customGetter = createCustomGetterObject();
let otherObj = {
    customGetter: 20
};
function randomFunction() {}
noInline(randomFunction);

function foo(o, c) {
    let baz  = o.customGetter;
    if (c) {
        o = 42;
    }
    let jaz = o.foo;
    let kaz = jaz + "hey";
    let raz = kaz + "hey";
    let result = o.customGetter;
    randomFunction(!c, baz, jaz, kaz, raz);
    return result;
}
noInline(foo);

for (let i = 0; i < testLoopCount; i++) {
    switch (i % 2) {
    case 0:
        print(foo(customGetter) === 100);
        break;
    case 1:
        print(foo(otherObj) === 20);
        break;
    }
}
print(foo({hello: 20, world:50, customGetter: 40}) === 40); 
