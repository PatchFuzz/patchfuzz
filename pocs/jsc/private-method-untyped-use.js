let assert = {
    shouldThrow: function(exception, functor) {
        let threwException;
        try {
            functor();
            threwException = false;
        } catch(e) {
            threwException = true;
            if (!(e instanceof exception))
                throw new Error("Expected to throw: " + exception.name + " but it throws: " + e.name);
        }

        if (!threwException)
            throw new Error("Expected to throw: " + exception.name + " but executed without exception");
    }
}

class C {
  #method() {}

  access(v) {
      let o = this;
      
      if (v > 100)
          o = {};
      o.#method();
  }
}
noInline(C.prototype.access);

let c = new C();


for (let i = 0; i < testLoopCount; i++) {
    c.access(15);
}

for (let i = 0; i < testLoopCount; i++) {
    print(TypeError, () => {
        c.access.call({}, 0);
    });

    print(TypeError, () => {
        c.access.call(15, 0);
    });

    print(TypeError, () => {
        c.setField.call('string', 0);
    });

    print(TypeError, () => {
        c.setField.call(Symbol('symbol'), 0);
    });
}

