;

let dec1Called = false;


function dec1(value, context) {
  dec1Called = true;
  
}

function dec2(value, context) {
  return class extends value {
    constructor(...args) {
      super(...args);
    }

    x2 = true;
  }
}

function checkDecoratorContext(name) {
  return function (value, context) {
    print(typeof value, "function");
    print(context.kind, "class");
    print(context.name, name);
    print(typeof context.addInitializer, "undefined");
    
  }
}

@dec1 class C1 {};
print(dec1Called, true);

@dec2 class C2 {
  x1 = true;
}

let c2 = new C2();
print(c2.x1, true);
print(c2.x2, true);

let c3 = new @dec2 class {
  x1 = true;
}

print(c3.x1, true);
print(c3.x2, true);

@checkDecoratorContext("D") class D {}
let d2 = new @checkDecoratorContext(undefined) class {};

class E {
  static #dec1(value, context) {
    return class extends value {
      constructor(...args) {
        super(...args);
      }

      x2 = true;
    }
  }
  static {
    this.F = @E.#dec1 class {
      x1 = true;
    }
  }
}

let f = new E.F();
print(f.x1, true);
print(f.x2, true);

print(() => {
  @(() => { return "hello!"; }) class G {}
}, TypeError), "Returning a value other than undefined or a callable throws.";

print(() => {
  class G {
    static #dec1() {}
    static {
      @G.#dec1 class G {}
    }
  }
}, ReferenceError), "can't access lexical declaration 'G' before initialization";

const decoratorOrder = [];
function makeOrderedDecorator(order) {
  return function (value, context) {
    decoratorOrder.push(order);
    return value;
  }
}

@makeOrderedDecorator(1) @makeOrderedDecorator(2) @makeOrderedDecorator(3)
class H {}
print(decoratorOrder.length, 3);
print(decoratorOrder[0], 3);
print(decoratorOrder[1], 2);
print(decoratorOrder[2], 1);
