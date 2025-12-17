function Klass() {
  this.prop = 1;
}


const KlassPrototype = Klass.prototype;


Klass.prototype = null;

const prototypes = [
  null,
  KlassPrototype,
];

const N = 500;
let c = 0;

for (let i = 0; i <= N; ++i) {
  
  let proto = prototypes[(i === N)|0];
  Klass.prototype = proto;

  
  let o = new Klass();

  
  
  c += o.prop;

  
  
  print(Object.getPrototypeOf(o), proto === null ? Object.prototype : KlassPrototype);
}

print(c, N + 1);
