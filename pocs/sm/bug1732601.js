function Mixin(Target) {
    var c = class extends Target {};
    Target.prototype.x = 1; 
    return c;
}
function MixinFoo(Target) {
    var c = class extends Target {
        get foo() { return 2; }
        set foo(value) {}
    };
    Target.prototype.x = 1; 
    return c;
}

class Base {}
class MyClass extends Mixin(Mixin(Mixin(Mixin(Mixin(Mixin(Mixin(Mixin(Mixin(Mixin(Mixin(MixinFoo(Base)))))))))))) {}

function test() {
    var instance = new MyClass();
    print(instance.x, 1);
    for (var i = 0; i < 500; i++) {
        print(instance.foo, 2);
    }
}
test();
