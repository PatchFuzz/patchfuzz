let arr = [];
class Base {
  x = arr.push();
}

class Child extends Base {
  constructor() {
    arr = () => {
      try { arr(); } catch {   }
      super();  
    };
    arr();
  }
}

print(() => new Child(), TypeError, /arr.push is not a function/);
