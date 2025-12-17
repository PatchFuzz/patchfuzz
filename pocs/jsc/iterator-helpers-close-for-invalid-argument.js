function shouldThrow(errorType, func) {
    let error;
    try {
        func();
    } catch (e) {
        error = e;
    }
    if (!(error instanceof errorType)) {
        print(error.message);
        throw new Error(`Expected ${errorType.name}! got ${error.name}`);
    }
}

function shouldBe(a, b) {
    if (a !== b)
        throw new Error(`Expected ${b} but got ${a}`);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };
    shouldThrow(TypeError, function() {
      closable.map();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(TypeError, function() {
      closable.map({});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };
    shouldThrow(TypeError, function() {
      closable.filter();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(TypeError, function() {
      closable.filter({});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };

    shouldThrow(RangeError, function() {
      closable.take();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(RangeError, function() {
      closable.take(NaN);
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(RangeError, function() {
      closable.take(-1);
    });
    shouldBe(closed, true);

    closed = false;
    function OurError() {}
    shouldThrow(OurError, function() {
      closable.take({ get valueOf() { throw new OurError(); }});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };

    shouldThrow(RangeError, function() {
      closable.drop();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(RangeError, function() {
      closable.drop(NaN);
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(RangeError, function() {
      closable.drop(-1);
    });
    shouldBe(closed, true);

    closed = false;
    function OurError() {}
    shouldThrow(OurError, function() {
      closable.drop({ get valueOf() { throw new OurError(); }});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };
    shouldThrow(TypeError, function() {
      closable.flatMap();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(TypeError, function() {
      closable.flatMap({});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };
    shouldThrow(TypeError, function() {
      closable.some();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(TypeError, function() {
      closable.some({});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };
    shouldThrow(TypeError, function() {
      closable.every();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(TypeError, function() {
      closable.every({});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };
    shouldThrow(TypeError, function() {
      closable.find();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(TypeError, function() {
      closable.find({});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };
    shouldThrow(TypeError, function() {
      closable.reduce();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(TypeError, function() {
      closable.reduce({});
    });
    shouldBe(closed, true);
}

{
    
    let closed = false;
    let closable = {
      __proto__: Iterator.prototype,
      get next() {
        throw new Error('next should not be read');
      },
      return() {
        closed = true;
        return {};
      },
    };
    shouldThrow(TypeError, function() {
      closable.forEach();
    });
    shouldBe(closed, true);

    closed = false;
    shouldThrow(TypeError, function() {
      closable.forEach({});
    });
    shouldBe(closed, true);
}

