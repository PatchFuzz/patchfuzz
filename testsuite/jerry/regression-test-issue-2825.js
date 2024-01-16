













var $;
var called = false;

function f() {}
var B = class extends f {
    constructor() {
        eval();
        super($)
        this.g()
    }
}
C = class extends B {
    g() {
        (() => {
          called = true;
        })()
    }
}
D = class extends C {
    constructor() {
        super()
    }
    g() {
        eval('super["g"]')()
    }
}
new D
assert (called);
