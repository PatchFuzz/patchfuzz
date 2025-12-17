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
  #field = 'test';

  getField(v) {
      this.#field;
  }
}
noInline(C.constructor);
noInline(C.prototype.getField);


let c = new C();

print(TypeError, () => {
    c.getField.call(15);
});
print(TypeError, () => {
    c.getField.call('test');
});
print(TypeError, () => {
    c.getField.call(Symbol);
});
print(TypeError, () => {
    c.getField.call(null);
});
print(TypeError, () => {
    c.getField.call(undefined);
});
print(TypeError, () => {
    c.getField.call(10n);
});

