var proxy = new Proxy({}, {});

Object.assign(proxy, { b: "boom", a: "ah", o: "ouch" });
print(["b", "a", "o"], Object.getOwnPropertyNames(proxy));
print("boom", proxy.b);
print("ah", proxy.a);
print("ouch", proxy.o);
