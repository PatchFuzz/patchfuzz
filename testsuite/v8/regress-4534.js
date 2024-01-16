





var dp = Object.defineProperty;
function getter() { return 111; }
function setter(x) { print(222); }
obj1 = {};
dp(obj1, "golf", { get: getter, configurable: true });
dp(obj1, "golf", { set: setter, configurable: true });
gc();
obj2 = {};
dp(obj2, "golf", { get: getter, configurable: true });
dp(obj2, "golf", { set: setter, configurable: true });
assertTrue(%HaveSameMap(obj1, obj2));
