;

class B {
  #priv() {
    return 12;
  }

  #privF = () => { return 12; }

  callPriv() {
    return this.#priv();
  }

  callPrivF() {
    return this.#privF();
  }

  #val = 'constructed';
  set #x(x) {
    this.#val = x + ' haha';
  }
  get #x() {
    return this.#val;
  }

  ef(str) {
    return evalInFrame(0, str);
  }

  layerEf(str) {
    
    
    function tester(o) {
      let a = 10;
      function interior(o) {
        let b = a;
        return evalInFrame(0, str.replace("this", "o"));
      };
      return interior(o);
    }
    return tester(this);
  }

  moreLayerEf(str) {
    
    
    function tester(o) {
      let a = 0;
      function interior(o) {
        let b = a;
        return (() => {
          let k = o;
          let replace = str.replace("this", "k");
          print(replace);
          return evalInFrame(b, replace);
        })();
      };
      return interior(o);
    }
    return tester(this);
  }

  callFunc(f) {
    return f();
  }

  static #smethod() {
    return 14;
  }

  static #unusedmethod() {
    return 19;
  }

  static get #unusedgetter() {
    return 10;
  }

  static setter = undefined;
  static set #unusedsetter(x) { this.setter = x }


  static f() {
    return this.#smethod();
  }

  static seval(str) {
    return eval(str);
  }

  static sef(str) {
    return evalInFrame(0, str);
  }


  static sLayerEf(str) {
    
    
    function tester(o) {
      let a = 10;
      function interior(o) {
        if (a == 10) {
          let b = 10 - a;
          return evalInFrame(b, str.replace("this", "o"));
        }
      };
      return interior(o);
    }
    return tester(this);
  }


}

var b = new B();

print(b.ef("this.callPriv()"), 12);
print(b.ef("this.callPrivF()"), 12);


print(b.ef("this.#val"), 'constructed')


print(b.ef(`this.callFunc(() => { return this.#privF() })`), 12);
print(b.ef(`this.#privF()`), 12);



print(b.ef(`this.#x = 'Bye'; this.#x`), 'Bye haha');
print(b.ef(`var x = () => { this.#x = 'Hi'; return this.#x}; x()`), 'Hi haha');



print(b.ef(`this.#priv()`), 12);
print(b.ef(`let hello;
let f = () => {
  hello = this.#priv();
  print(hello, 12);
};
f();
hello`), 12);
print(b.layerEf(`this.#priv()`), 12);
print(b.moreLayerEf(`this.#priv()`), 12);

if ('dis' in this) {
  
  print(b.ef(`dis(); this.#priv()`), 12);
}

print(b.ef(`var x = () => { return this.#priv(); }; x()`), 12);
print(b.ef(`function x(o) { function y(o) { return o.#priv(); }; return y(o); } x(this)`), 12);

print(B.f(), 14);
print(B.sef(`this.#smethod()`), 14);
print(B.sLayerEf(`this.#smethod()`), 14);
print(B.sef("this.#unusedmethod()"), 19);
print(B.sef("this.#unusedgetter"), 10);


B.sef("this.#unusedsetter = 13");
print(B.setter, 13);


class C {
  #priv() {
    return 12;
  }

  efInFunction(str) {
    return (() => {
      let self = this;
      return evalInFrame(0, str);
    })();
  }
}
c = new C;
print(c.efInFunction(`self.#priv()`), 12);


print(b.ef(`
let result;
let f = () => {
  result = this.#priv();
  print(result, 12);
};
for (let i = 0; i < 1000; i++) {
  f();
}
result
`), 12);

print(b.ef("function f(o) { return o.callPriv() }; for (let i = 0; i < 1000; i++) { f(this); } f(this)"), 12);
print(b.ef("function f(o) { return o.callPrivF() }; for (let i = 0; i < 1000; i++) { f(this); } f(this)"), 12);
print(b.ef(`function x(o) { function y(o) { return o.#priv(); }; return y(o); } x(this)`), 12);

print(B.sef(`function f(o) { return o.#smethod() }; for (let i = 0; i < 1000; i ++) { f(this); }; f(this)`), 14);

print(b.ef(`
var x = () => {
  return (() => {
    return (() => {
      let a;
      return (() => {
        let b = a;
        return this.#priv();
      })();
    })();
  })();
};
x()
`), 12);
