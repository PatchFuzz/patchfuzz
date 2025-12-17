class C {
    x = function(){};
    0 = function(){};
    ["y" + 0] = function(){};
}

let c = new C();
print(c["x"].name, "x");
print(c[0].name, "0");
print(c["y0"].name, "y0");

if (typeof reportCompare === "function")
  reportCompare(true, true);
