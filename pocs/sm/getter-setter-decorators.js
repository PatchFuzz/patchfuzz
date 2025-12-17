;

let dec1Called = false;


function dec(value, context) {
  dec1Called = true;
  
}

function decorate_getter(value, context) {
  return function() {
    return 2 * value.call(this);
  }
}

function decorate_setter(value, context) {
  return function(x) {
    return value.call(this, 2*x);
  }
}

function checkDecoratorContext(kind, isPrivate, isStatic, name) {
  return (value, context) => {
    print(typeof value.call, "function");
    print(context.kind, kind);
    print(typeof context.access, "object");
    print(context.private, isPrivate);
    print(context.static, isStatic);
    print(context.name, name);
    if (isStatic) {
      print(typeof context.addInitializer, "undefined");
    } else {
      print(typeof context.addInitializer, "function");
    }
  }
}

class C {
  setter5Value;

  @dec get getter1() { return "unmodified"; }
  @checkDecoratorContext("getter", false, false, "getter2") get getter2() { }
  @checkDecoratorContext("getter", false, true, "getter3") static get getter3() { }
  @checkDecoratorContext("getter", true, false, "#getter4") get #getter4() { }
  @decorate_getter get getter5() { return 1; }

  @dec set setter1(value) { }
  @checkDecoratorContext("setter", false, false, "setter2") set setter2(value) { }
  @checkDecoratorContext("setter", false, true, "setter3") static set setter3(value) { }
  @checkDecoratorContext("setter", true, false, "#setter4") set #setter4(value) { }
  @decorate_setter set setter5(value) { this.setter5Value = value; }
}

let c = new C();
print(dec1Called, true);
print(c.getter1, "unmodified");
print(c.getter5, 2);
c.setter5 = 1;
print(c.setter5Value, 2);

print(() => {
  class D {
    @(() => { return "hello!"; }) get f() { return "unmodified"; }
  }
}, TypeError), "Returning a value other than undefined or a callable throws.";
