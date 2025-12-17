;

let dec1Called = false;
let dec2Called = false;


function dec1(value, context) {
  dec1Called = true;
  
}

function dec2(value, context) {
  dec2Called = true;
  return (initialValue) => 2;
}

function dec3(value, context) {
  return (initialValue) => initialValue*2;
}

function checkDecoratorContext(kind, isPrivate, isStatic, name) {
  return (value, context) => {
    print(value, undefined);
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
  @dec1 x;
  @dec1 x2 = 1;
  @checkDecoratorContext("field", false, false, "x3") x3;
  @checkDecoratorContext("field", false, true, "x4") static x4;
  @checkDecoratorContext("field", true, false, "#x5") #x5;
  @dec2 x6;
  @dec3 x7 = 1;
  @dec2 @dec3 x8 = 1;
  @dec2 static x9;
  @dec2 #x10;
  getX10 = () => {
    return this.#x10;
  };
  @dec3 #x11 = 2;
  getX11 = () => {
    return this.#x11;
  };
  @dec1 42 = 1;
  @dec2 [43];
  @dec2 static #x12 = 1;
  getX12() {
    return C.#x12;
  }
}


let c = new C();
print(dec1Called, true);
print(c.x2, 1);
print(dec2Called, true);
print(c.x6, 2);
print(c.x7, 2);
print(c.x8, 2);
print(C.x9, 2);
print(c.getX10(), 2);
print(c.getX11(), 4);
print(c[42], 1);
print(c[43], 2);
print(c.getX12(), 2);

print(() => {
  class D {
    @(() => { return "hello!"; }) f(x) { return x; }
  }
}, TypeError), "Returning a value other than undefined or a callable throws.";

const decoratorOrder = [];
function makeOrderedDecorator(order) {
  return function (value, context) {
    decoratorOrder.push(order);
    return value;
  }
}

class D {
  @makeOrderedDecorator(1) @makeOrderedDecorator(2) @makeOrderedDecorator(3)
  x = 1;
}

let d = new D();
print(decoratorOrder.length, 3);
print(decoratorOrder[0], 3);
print(decoratorOrder[1], 2);
print(decoratorOrder[2], 1);
print(d.x, 1);
