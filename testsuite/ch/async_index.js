

"use strict";

let testNum = (function() {
  let count = 1;
  return function() {
    return `#${count++} `;
  };
})();

function uniqueTest(func, desc) {
  test(func, testNum() + desc);
}




function assertThrows(func, err) {
  let caught = false;
  try {
    func();
  } catch (e) {
    assert_true(
      e instanceof err,
      `expected ${err.name}, observed ${e.constructor.name}`
    );
    caught = true;
  }
  assert_true(caught, testNum() + "assertThrows must catch any error.");
}



const EXPECT_INVALID = false;




var registry = {};





let chain = Promise.resolve();


function reinitializeRegistry() {
  if (typeof WebAssembly === "undefined") return;

  chain = chain.then(_ => {
    let spectest = {
      print: console.log.bind(console),
      print_i32: console.log.bind(console),
      print_i32_f32: console.log.bind(console),
      print_f64_f64: console.log.bind(console),
      print_f32: console.log.bind(console),
      print_f64: console.log.bind(console),
      global_i32: 666,
      global_f32: 666,
      global_f64: 666,
      table: new WebAssembly.Table({
        initial: 10,
        maximum: 20,
        element: "anyfunc"
      }),
      memory: new WebAssembly.Memory({ initial: 1, maximum: 2 })
    };
    let handler = {
      get(target, prop) {
        return prop in target ? target[prop] : {};
      }
    };
    registry = new Proxy({ spectest }, handler);
  });

  
  
  
  promise_test(_ => chain, testNum() + "Reinitialize the default imports");
}

reinitializeRegistry();



function binary(bytes) {
  let buffer = new ArrayBuffer(bytes.length);
  let view = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; ++i) {
    view[i] = bytes.charCodeAt(i);
  }
  return buffer;
}


function module(bytes, valid = true) {
  const test = valid
    ? "Test that WebAssembly compilation succeeds"
    : "Test that WebAssembly compilation fails";
  const loc = new Error().stack.toString().replace("Error", "");
  let buffer = binary(bytes);
  let validated = WebAssembly.validate(buffer);

  uniqueTest(_ => {
    assert_equals(valid, validated);
  }, test);

  chain = chain.then(_ => WebAssembly.compile(buffer)).then(
    module => {
      uniqueTest(_ => {
        assert_true(valid, loc);
      }, test);
      return module;
    },
    error => {
      uniqueTest(_ => {
        assert_true(
          !valid,
          `WebAssembly.compile failed unexpectedly with ${error} at {loc}`
        );
      }, test);
    }
  );
  return chain;
}

function assert_invalid(bytes) {
  module(bytes, EXPECT_INVALID);
}

const assert_malformed = assert_invalid;

function instance(bytes, imports, valid = true) {
  const test = valid
    ? "Test that WebAssembly instantiation succeeds"
    : "Test that WebAssembly instantiation fails";
  const loc = new Error().stack.toString().replace("Error", "");
  chain = Promise.all([imports, chain])
    .then(values => {
      let imports = values[0] ? values[0] : registry;
      return WebAssembly.instantiate(binary(bytes), imports);
    })
    .then(
      pair => {
        uniqueTest(_ => {
          assert_true(valid, loc);
        }, test);
        return pair.instance;
      },
      error => {
        uniqueTest(_ => {
          assert_true(
            !valid,
            `unexpected instantiation error, observed ${error} ${loc}`
          );
        }, test);
        return error;
      }
    );
  return chain;
}

function exports(name, instance) {
  return instance.then(inst => {
    return { [name]: inst.exports };
  });
}

function call(instance, name, args) {
  return Promise.all([instance, chain]).then(values => {
    return values[0].exports[name](...args);
  });
}

function run(action) {
  const test = "Run a WebAssembly test without special assertions";
  const loc = new Error().stack.toString().replace("Error", "");
  chain = Promise.all([chain, action()])
    .then(
      _ => {
        uniqueTest(_ => {}, test);
      },
      error => {
        uniqueTest(_ => {
          assert_true(
            false,
            `unexpected runtime error, observed ${error} ${loc}`
          );
        }, "run");
      }
    )
    
    .catch(_ => {});
}

function assert_trap(action) {
  const test = "Test that a WebAssembly code traps";
  const loc = new Error().stack.toString().replace("Error", "");
  chain = Promise.all([chain, action()])
    .then(
      result => {
        uniqueTest(_ => {
          assert_true(false, loc);
        }, test);
      },
      error => {
        uniqueTest(_ => {
          assert_true(
            error instanceof WebAssembly.RuntimeError,
            `expected runtime error, observed ${error} ${loc}`
          );
        }, test);
      }
    )
    
    .catch(_ => {});
}

function assert_return(action, expected) {
  const test = "Test that a WebAssembly code returns a specific result";
  const loc = new Error().stack.toString().replace("Error", "");
  chain = Promise.all([action(), chain])
    .then(
      values => {
        uniqueTest(_ => {
          assert_equals(values[0], expected, loc);
        }, test);
      },
      error => {
        uniqueTest(_ => {
          assert_true(
            false,
            `unexpected runtime error, observed ${error} ${loc}`
          );
        }, test);
      }
    )
    
    .catch(_ => {});
}

let StackOverflow;
try {
  (function f() {
    1 + f();
  })();
} catch (e) {
  StackOverflow = e.constructor;
}

function assert_exhaustion(action) {
  const test = "Test that a WebAssembly code exhauts the stack space";
  const loc = new Error().stack.toString().replace("Error", "");
  chain = Promise.all([action(), chain])
    .then(
      _ => {
        uniqueTest(_ => {
          assert_true(false, loc);
        }, test);
      },
      error => {
        uniqueTest(_ => {
          assert_true(
            error instanceof StackOverflow,
            `expected runtime error, observed ${error} ${loc}`
          );
        }, test);
      }
    )
    
    .catch(_ => {});
}

function assert_unlinkable(bytes) {
  const test = "Test that a WebAssembly module is unlinkable";
  const loc = new Error().stack.toString().replace("Error", "");
  instance(bytes, registry, EXPECT_INVALID)
    .then(
      result => {
        uniqueTest(_ => {
          assert_true(
            result instanceof WebAssembly.LinkError,
            `expected link error, observed ${result} ${loc}`
          );
        }, test);
      },
      _ => {
        uniqueTest(_ => {
          assert_true(false, loc);
        }, test);
      }
    )
    
    .catch(_ => {});
}

function assert_uninstantiable(bytes) {
  const test = "Test that a WebAssembly module is uninstantiable";
  const loc = new Error().stack.toString().replace("Error", "");
  instance(bytes, registry, EXPECT_INVALID)
    .then(
      result => {
        uniqueTest(_ => {
          assert_true(
            result instanceof WebAssembly.RuntimeError,
            `expected link error, observed ${result} ${loc}`
          );
        }, test);
      },
      _ => {
        uniqueTest(_ => {
          assert_true(false, loc);
        }, test);
      }
    )
    
    .catch(_ => {});
}

function register(name, instance) {
  const test =
    "Test that the exports of a WebAssembly module can be registered";
  const loc = new Error().stack.toString().replace("Error", "");
  let stack = new Error();
  chain = Promise.all([instance, chain])
    .then(
      values => {
        registry[name] = values[0].exports;
      },
      _ => {
        uniqueTest(_ => {
          assert_true(false, loc);
        }, test);
      }
    )
    
    .catch(_ => {});
}

function get(instance, name) {
  const test = "Test that an export of a WebAssembly instance can be acquired";
  const loc = new Error().stack.toString().replace("Error", "");
  chain = Promise.all([instance, chain]).then(
    values => {
      return values[0].exports[name];
    },
    _ => {
      uniqueTest(_ => {
        assert_true(false, loc);
      }, test);
    }
  );
  return chain;
}

