;

let globalDecCalled = false;
function globalDec(value, context) {
  globalDecCalled = true;
  print(this, globalThis);
}


let c;
let classDecCalled = false;
class C {
  classDec(value, context) {
    classDecCalled = true;
    
    print(c, this);
    return function(initialValue) {
      
      print(this instanceof D, true);
      return initialValue;
    }
  }
}

c = new C();

class D {
  @globalDec x1;
  @c.classDec x2;
}

let d = new D();
print(globalDecCalled, true);
print(classDecCalled, true);
