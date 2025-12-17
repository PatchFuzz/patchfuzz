let hit = false;

function f() {
  hit = true;
}

class C {
  #f = 1;
  static m(x) {
    x.#f = f();  
  }
}

try {
  C.m({});  
} catch { }

print(hit, true);
