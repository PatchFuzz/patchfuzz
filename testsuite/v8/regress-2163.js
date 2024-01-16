





























var dp = Object.defineProperty;

function getter() { return 111; }
function setter(x) { print(222); }
function anotherGetter() { return 333; }
function anotherSetter(x) { print(444); }
var obj1, obj2;


obj1 = {};
dp(obj1, "alpha", { get: getter, set: setter });
obj2 = {}
dp(obj2, "alpha", { get: getter });
obj1 = {};
assertEquals(111, obj2.alpha);
gc();
assertEquals(111, obj2.alpha);


obj1 = {};
dp(obj1, "alpha", { get: getter, set: setter });
obj2 = {}
dp(obj2, "alpha", { get: getter });
obj1 = {};
gc();
obj3 = {}
dp(obj3, "alpha", { get: getter });



obj1 = {};
dp(obj1, "alpha", { get: getter, set: setter });
obj1.beta = 10;
obj2 = {}
dp(obj2, "alpha", { get: getter, set: setter });
obj1 = {};
assertEquals(111, obj2.alpha);
gc();
obj2.alpha = 100
assertEquals(111, obj2.alpha);
