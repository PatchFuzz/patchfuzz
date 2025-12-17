let obj = {};
Object.defineProperty(obj, "c", { get: () => 3 });
obj.d = 4;
print('{"d":4}', JSON.stringify(obj));
