;
;

class B {
  #x = 12;
  x = 'his';
  ef(str) {
    return evalInFrame(0, str);
  }
}

var b = new B();
print(b.ef(`this.x`), 'his');
print(b.ef(`this.#x`), 12);