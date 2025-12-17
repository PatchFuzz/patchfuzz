let caught = false;

function main() {
  class B {
    m() {
      try {
        return super.nodeType;  
      } catch (e) {
        caught = true;
      }
    }
  }
  const node = new d8.dom.Div(); 
  B.prototype.__proto__ = node; 
  const b = new B();

  b.x0 = 2;
  b.x1 = 10;
  b.x2 = 3;
  b.x3 = 4;
  for (let i = 0; i < 20000; i++) {
    caught = false;
    b.m();
    print(caught);
  }
}
main();
