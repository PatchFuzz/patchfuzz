let badCaseRan = false;

function main(i) {
  class B {
    m() {
      return super.nodeType;  
    }
  }
  let node = new d8.dom.Div();  
  node['a' + i] = 1;  
  if (i < 0x100 - 1) {
    B.prototype.__proto__ = {};
  } else {
    B.prototype.__proto__ = node;  
  }
  let b = new B();

  b.x0 = 1;
  b.x1 = 2;
  b.x2 = 3;
  b.x3 = 4;
  node.nodeType;  
  let caught = false;
  try {
    b.m();
  } catch {
    caught = true;
  }
  if (i < 0x100 - 1) {
    print(caught);
  } else {
    print(caught);
    badCaseRan = true;
  }
}

for (let i = 0; i < 0x100; i++) {
  main(i);
}
print(badCaseRan);
