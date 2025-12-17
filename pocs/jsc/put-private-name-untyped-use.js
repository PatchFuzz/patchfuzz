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
  #field;

  setField(v) {
      let o = this;
      
      
      if (v > 100)
          o = {};
      o.#field = v;
  }
}
noInline(C.constructor);
noInline(C.prototype.setField);

let c = new C();


for (let i = 0; i < testLoopCount; i++) {
    c.setField(15);
}

for (let i = 0; i < testLoopCount; i++) {
    print(TypeError, () => {
        c.setField.call(15, 'test');
    });

    print(TypeError, () => {
        c.setField.call('string', 'test');
    });

    print(TypeError, () => {
        c.setField.call(Symbol('symbol'), 'test');
    });
}

