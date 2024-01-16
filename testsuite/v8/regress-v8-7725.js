



var proxy = new Proxy({}, {});

Object.assign(proxy, { b: "boom", a: "ah", o: "ouch" });
assertEquals(["b", "a", "o"], Object.getOwnPropertyNames(proxy));
assertEquals("boom", proxy.b);
assertEquals("ah", proxy.a);
assertEquals("ouch", proxy.o);
