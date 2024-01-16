













function f() {}
var B = class extends f {
    constructor() {
        String(Reflect.setPrototypeOf(B, null));
        super($)
    }
}
C = class extends B {
    g() {
        return function() {}
    }
}
D = class extends C {
    constructor() {
        super()
    }
    g() {}
}

try {
  new D
  assert (false);
} catch (e) {
  assert (e instanceof TypeError);
}
