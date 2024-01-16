













class Animal {
    constructor() {
        eval();
    }
    explain() { }
}
class Dog extends Animal {
    constructor() {
        super()
    }
}
class Doge extends Dog {
    whoAmI() {}
}

var d = new Doge;
assert (typeof d === "object");
