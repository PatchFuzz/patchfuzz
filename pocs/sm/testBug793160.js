var obj = new Proxy(Object.create(null), {});
print(typeof obj, 'object');
print(obj != null, true);
