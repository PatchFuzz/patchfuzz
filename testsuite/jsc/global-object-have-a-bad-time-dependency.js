function shouldBe(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}

const alien_global_object = createGlobalObject();

const a = {};
const b = alien_global_object.Object();

a.__proto__ = b;

function cons() {

}

cons.prototype = a;


Reflect.construct(Array, [1.1, 2.2, 3.3], cons);


cons.prototype = null;
cons.prototype = a;


b.__proto__ = new Proxy({}, {});


shouldBe(!!describe(Reflect.construct(Array, [1.1, 2.2, 3.3], cons)).match(/ArrayWithSlowPutArrayStorage/), true);
