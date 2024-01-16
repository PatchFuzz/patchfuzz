

load(libdir + "asserts.js");

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
    assertEq(value, undefined);
    assertEq(context.kind, kind);
    assertEq(typeof (context.access), "object");
    assertEq(context.private, isPrivate);
    assertEq(context.static, isStatic);
    assertEq(context.name, name);
    assertEq(typeof (context.addInitializer), "object");
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
}


let c = new C();
assertEq(dec1Called, true);
assertEq(c.x2, 1);
assertEq(dec2Called, true);
assertEq(c.x6, 2);
assertEq(c.x7, 2);
assertEq(c.x8, 4);
assertEq(c.x9, 2);
assertEq(c.getX10(), 2);
assertEq(c.getX11(), 4);
assertEq(c[42], 1);
assertEq(c[43], 2);

assertThrowsInstanceOf(() => {
  class D {
    @(() => { return "hello!"; }) f(x) { return x; }
  }
}, TypeError), "Returning a value other than undefined or a callable throws.";
