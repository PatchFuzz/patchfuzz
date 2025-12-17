;

let extraInitializerCalled = {};

function checkDecoratorContext(kind, isPrivate, isStatic, name) {
  return function (value, context) {
    if (kind == "field") {
      print(value, undefined);
    } else if (kind == "accessor") {
      print(typeof value, "object");
      print(typeof value.get, "function");
      print(typeof value.set, "function");
    }
    print(context.kind, kind);
    print(typeof context.access, "object");
    print(context.private, isPrivate);
    print(context.static, isStatic);
    print(context.name, name);
    print(typeof context.addInitializer, "function");
    context.addInitializer(() => {extraInitializerCalled[context.name] = true;});
    
  }
}

class C {
  @checkDecoratorContext("field", false, false, "x") x;
  @checkDecoratorContext("accessor", true, false, "y accessor storage") accessor y;
  @checkDecoratorContext("method", false, false, "f") f() {};
  @checkDecoratorContext("method", false, false, 1) 1() {};
  @checkDecoratorContext("method", false, false, 2) 2n() {};
}

let c = new C();
print(extraInitializerCalled["x"], true);
print(extraInitializerCalled["y accessor storage"], true);
print(extraInitializerCalled["f"], true);
print(extraInitializerCalled["1"], true);
print(extraInitializerCalled["2"], true);
