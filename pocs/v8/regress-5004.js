function print(b, s) {
  if (!b) {
    %AbortJS(" FAILED!")
  }
}

class P extends Promise {
  constructor() {
    super(...arguments)
    return new Proxy(this, {
      get: (_, key) => {
        return key == 'then' ?
            this.then.bind(this) :
            this.constructor.resolve(20)
      }
    })
  }
}

let p = P.resolve(10)
p.key.then(v => print(v === 20));
