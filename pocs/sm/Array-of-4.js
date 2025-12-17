var status = "pass";
Object.defineProperty(Array.prototype, "0", {set: v => status = "FAIL 1"});
print(Array.of(1)[0], 1);
print(status, "pass");

function Bag() {}
Bag.of = Array.of;
Object.defineProperty(Bag.prototype, "0", {set: v => status = "FAIL 2"});
print(Bag.of(1)[0], 1);
print(status, "pass");
