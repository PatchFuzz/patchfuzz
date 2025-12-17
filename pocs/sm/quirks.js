class C {
    x;;;;
    y
    ;
}

class D {
    x = 5;
    y = (this.x += 1) + 2;
}

let val = new D();
print(6, val.x);
print(8, val.y);

if (typeof reportCompare === "function")
  reportCompare(true, true);
