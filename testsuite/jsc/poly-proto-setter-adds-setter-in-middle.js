


let correct = false

class A {
    set x(v) {
        if (v == 1) {
            Object.defineProperty(B.prototype, "x", {
                set: function() {
                    correct = true
                }
            });
        }
    }
}

class B extends A {
    set y(v) {}
    set y1(v) {}
    set y2(v) {}
}

class C extends B {

}

let a = new C();
for (let i = 0; i < 30; i++) {
  a.x = i;
}


