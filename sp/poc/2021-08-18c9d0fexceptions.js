

;


print(
  () => WebAssembly.Tag(),
  TypeError,
  /calling a builtin Tag constructor without new is forbidden/
);

print(
  () => new WebAssembly.Tag(),
  TypeError,
  /At least 1 argument required/
);

print(
  () => new WebAssembly.Tag(3),
  TypeError,
  /first argument must be a tag descriptor/
);

print(
  () => new WebAssembly.Tag({ parameters: ["foobar"] }),
  TypeError,
  /bad value type/
);

new WebAssembly.Tag({ parameters: [] });
new WebAssembly.Tag({ parameters: ["i32"] });
new WebAssembly.Tag({ parameters: ["i32", "externref"] });

print(`(module (import "m" "e" (tag)))`, {
  m: { e: new WebAssembly.Tag({ parameters: [] }) },
});

print(`(module (import "m" "e" (tag (param i32))))`, {
  m: { e: new WebAssembly.Tag({ parameters: ["i32"] }) },
});

print(`(module (import "m" "e" (tag (param i32 i64))))`, {
  m: { e: new WebAssembly.Tag({ parameters: ["i32", "i64"] }) },
});

print(
  () =>
    print(`(module (import "m" "e" (tag (param i32))))`, {
      m: { e: new WebAssembly.Tag({ parameters: [] }) },
    }),
  WebAssembly.LinkError,
  /imported tag 'm.e' signature mismatch/
);

print(
  () =>
    print(`(module (import "m" "e" (tag (param))))`, {
      m: { e: new WebAssembly.Tag({ parameters: ["i32"] }) },
    }),
  WebAssembly.LinkError,
  /imported tag 'm.e' signature mismatch/
);



















print(
  () => WebAssembly.Exception(),
  TypeError,
  /calling a builtin Exception constructor without new is forbidden/
);

print(
  () => new WebAssembly.Exception(),
  TypeError,
  /At least 2 arguments required/
);

print(
  () => new WebAssembly.Exception(3, []),
  TypeError,
  /first argument must be a WebAssembly.Tag/
);

const { tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9 } = print(
  `(module
     (tag (export "tag1") (param))
     (tag (export "tag2") (param i32))
     (tag (export "tag3") (param i32 f32))
     (tag (export "tag4") (param i32 externref i32))
     (tag (export "tag5") (param i32 externref i32 externref))
     (tag (export "tag6") (param funcref))
     (tag (export "tag7") (param i64))
     (tag (export "tag8") (param i32 f64))
     (tag (export "tag9") (param externref funcref)))`
).exports;

new WebAssembly.Exception(tag1, []);
new WebAssembly.Exception(tag2, [3]);
new WebAssembly.Exception(tag3, [3, 5.5]);
new WebAssembly.Exception(tag4, [3, "foo", 4]);
new WebAssembly.Exception(tag5, [3, "foo", 4, "bar"]);

print(
  () => new WebAssembly.Exception(tag2, []),
  TypeError,
  /expected 1 values but got 0/
);

print(
  () => new WebAssembly.Exception(tag2, [3n]),
  TypeError,
  /can't convert BigInt to number/
);

print(
  () => new WebAssembly.Exception(tag6, [undefined]),
  TypeError,
  /can only pass WebAssembly exported functions to funcref/
);

print(
  () => new WebAssembly.Exception(tag7, [undefined]),
  TypeError,
  /can't convert undefined to BigInt/
);

print(
  () => new WebAssembly.Exception(tag7, {}),
  TypeError,
  /\({}\) is not iterable/
);

print(
  () => new WebAssembly.Exception(tag7, 1),
  TypeError,
  /second argument must be an object/
);


{
  const exn1 = new WebAssembly.Exception(tag1, []);
  print(exn1.is(tag1), true);
  print(exn1.is(tag2), false);
  print(
    () => exn1.is(),
    TypeError,
    /At least 1 argument required/
  );
  print(
    () => exn1.is(5),
    TypeError,
    /first argument must be a WebAssembly.Tag/
  );

  const exn2 = new WebAssembly.Exception(tag2, [3]);
  print(exn2.getArg(tag2, 0), 3);

  print(new WebAssembly.Exception(tag2, [undefined]).getArg(tag2, 0), 0);

  const exn4 = new WebAssembly.Exception(tag4, [3, "foo", 4]);
  print(exn4.getArg(tag4, 0), 3);
  print(exn4.getArg(tag4, 1), "foo");
  print(exn4.getArg(tag4, 2), 4);

  const exn5 = new WebAssembly.Exception(tag5, [3, "foo", 4, "bar"]);
  print(exn5.getArg(tag5, 3), "bar");

  const { funcref } = print(
    `(module (func (export "funcref")))`
  ).exports;
  const exn9 = new WebAssembly.Exception(tag9, ["foo", funcref]);
  print(exn9.getArg(tag9, 0), "foo");
  print(exn9.getArg(tag9, 1), funcref);

  print(
    () => exn2.getArg(),
    TypeError,
    /At least 2 arguments required/
  );
  print(
    () => exn2.getArg(5, 0),
    TypeError,
    /first argument must be a WebAssembly.Tag/
  );
  print(
    () => exn2.getArg(tag2, "foo"),
    TypeError,
    /bad Exception getArg index/
  );
  print(
    () => exn2.getArg(tag2, 10),
    RangeError,
    /bad Exception getArg index/
  );
}


print(
  print(
    `(module
       (import "m" "exn" (tag $exn (param i32)))
       (import "m" "f" (func $f))
       (func (export "f") (result i32)
         try (result i32)
           call $f
           (i32.const 0)
         catch $exn
         end))`,
    {
      m: {
        exn: tag2,
        f: () => {
          throw new WebAssembly.Exception(tag2, [42]);
        },
      },
    }
  ).exports.f(),
  42
);

printArray(
  print(
    `(module
       (import "m" "exn" (tag $exn (param i32 f32)))
       (import "m" "f" (func $f))
       (func (export "f") (result i32 f32)
         try (result i32 f32)
           call $f
           (i32.const 0)
           (f32.const 0)
         catch $exn
         end))`,
    {
      m: {
        exn: tag3,
        f: () => {
          throw new WebAssembly.Exception(tag3, [42, 5.5]);
        },
      },
    }
  ).exports.f(),
  [42, 5.5]
);

printArray(
  print(
    `(module
       (import "m" "exn" (tag $exn (param i32 f64)))
       (import "m" "f" (func $f))
       (func (export "f") (result i32 f64)
         try (result i32 f64)
           call $f
           (i32.const 0)
           (f64.const 0)
         catch $exn
         end))`,
    {
      m: {
        exn: tag8,
        f: () => {
          throw new WebAssembly.Exception(tag8, [9999, 9999]);
        },
      },
    }
  ).exports.f(),
  [9999, 9999]
);

printArray(
  print(
    `(module
       (import "m" "exn" (tag $exn (param i32 externref i32)))
       (import "m" "f" (func $f))
       (func (export "f") (result i32 externref i32)
         try (result i32 externref i32)
           call $f
           (i32.const 0)
           (ref.null extern)
           (i32.const 0)
         catch $exn
         end))`,
    {
      m: {
        exn: tag4,
        f: () => {
          throw new WebAssembly.Exception(tag4, [42, "foo", 42]);
        },
      },
    }
  ).exports.f(),
  [42, "foo", 42]
);

printArray(
  print(
    `(module
       (import "m" "exn" (tag $exn (param i32 externref i32 externref)))
       (import "m" "f" (func $f))
       (func (export "f") (result i32 externref i32 externref)
         try (result i32 externref i32 externref)
           call $f
           (i32.const 0)
           (ref.null extern)
           (i32.const 0)
           (ref.null extern)
         catch $exn
         end))`,
    {
      m: {
        exn: tag5,
        f: () => {
          throw new WebAssembly.Exception(tag5, [42, "foo", 42, "bar"]);
        },
      },
    }
  ).exports.f(),
  [42, "foo", 42, "bar"]
);

{
  const { funcref } = print(
    `(module (func (export "funcref")))`
  ).exports;
  printArray(
    print(
      `(module
         (import "m" "exn" (tag $exn (param externref funcref)))
         (import "m" "f" (func $f))
         (func (export "f") (result externref funcref)
           try (result externref funcref)
             call $f
             (ref.null extern)
             (ref.null func)
           catch $exn
           end))`,
      {
        m: {
          exn: tag9,
          f: () => {
            throw new WebAssembly.Exception(tag9, ["foo", funcref]);
          },
        },
      }
    ).exports.f(),
    ["foo", funcref]
  );
}

print(
  print(
    `(module
       (import "m" "exn" (tag $exn))
       (import "m" "f" (func $f))
       (func (export "f") (result i32)
         try (result i32)
           call $f
           (i32.const 0)
         catch $exn
           (i32.const 0)
         catch_all
           (i32.const 1)
         end))`,
    {
      m: {
        exn: tag1,
        f: () => {
          throw new WebAssembly.Exception(tag2, [42]);
        },
      },
    }
  ).exports.f(),
  1
);

{
  const exn = new WebAssembly.Tag({ parameters: ["i32"] });
  print(
    print(
      `(module
         (import "m" "exn" (tag $exn (param i32)))
         (import "m" "f" (func $f))
         (func (export "f") (result i32)
           try (result i32)
             call $f
             (i32.const 0)
           catch $exn
           end))`,
      {
        m: {
          exn,
          f: () => {
            throw new WebAssembly.Exception(exn, [42]);
          },
        },
      }
    ).exports.f(),
    42
  );
}

{
  const exn1 = new WebAssembly.Tag({ parameters: ["i32"] });
  const exn2 = new WebAssembly.Tag({ parameters: ["i32"] });
  print(
    print(
      `(module
         (import "m" "exn" (tag $exn (param i32)))
         (import "m" "f" (func $f))
         (func (export "f") (result i32)
           try (result i32)
             call $f
             (i32.const 0)
           catch $exn
           catch_all
             (i32.const 1)
           end))`,
      {
        m: {
          exn: exn1,
          f: () => {
            throw new WebAssembly.Exception(exn2, [42]);
          },
        },
      }
    ).exports.f(),
    1
  );
}


print(
  (() => {
    try {
      print(
        `(module
           (import "m" "exn" (tag $exn (param i32 f64)))
           (func (export "f")
             (i32.const 9999)
             (f64.const 9999)
             throw $exn))`,
        { m: { exn: tag8 } }
      ).exports.f();
    } catch (exn) {
      return exn.getArg(tag8, 1);
    }
  })(),
  9999
);

printArray(
  (() => {
    try {
      print(
        `(module
           (import "m" "exn" (tag $exn (param i32 externref i32 externref)))
           (func (export "f") (param externref externref)
             (i32.const 1)
             (local.get 0)
             (i32.const 2)
             (local.get 1)
             throw $exn))`,
        { m: { exn: tag5 } }
      ).exports.f("foo", "bar");
    } catch (exn) {
      return [
        exn.getArg(tag5, 0),
        exn.getArg(tag5, 1),
        exn.getArg(tag5, 2),
        exn.getArg(tag5, 3),
      ];
    }
  })(),
  [1, "foo", 2, "bar"]
);
