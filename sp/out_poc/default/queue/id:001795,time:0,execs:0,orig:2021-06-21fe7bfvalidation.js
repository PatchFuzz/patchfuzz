


;

function wasmValid(mod) {
  print(WebAssembly.validate(mod), true);
}

function wasmInvalid(mod, pattern) {
  print(WebAssembly.validate(mod), false);
  print(
    () => new WebAssembly.Module(mod),
    WebAssembly.CompileError,
    pattern
  );
}

const emptyType = { args: [], ret: VoidCode };
const i32Type = { args: [I32Code], ret: VoidCode };
const toi32Type = { args: [], ret: I32Code };
const i32Toi32Type = { args: [I32Code], ret: I32Code };
const i32Toi64Type = { args: [I32Code], ret: I64Code };
const i32i32Toi32Type = { args: [I32Code, I32Code], ret: I32Code };

function testValidateDecode() {
  
  wasmInvalid(
    moduleWithSections([
      sigSection([emptyType]),
      declSection([0]),
      tagSection([{ type: 0 }]),
      bodySection([
        funcBody({
          locals: [],
          body: [
            TryCode,
            
            I32ConstCode,
            0x01,
            CatchCode,
            0x00,
            EndCode,
            DropCode,
            ReturnCode,
          ],
        }),
      ]),
    ]),
    /bad type/
  );

  
  wasmInvalid(
    moduleWithSections([
      sigSection([emptyType]),
      declSection([0]),
      tagSection([{ type: 0 }]),
      bodySection([
        funcBody(
          {
            locals: [],
            body: [
              TryCode,
              I32Code,
              I32ConstCode,
              0x01,
              CatchCode,
              
            ],
          },
          (withEndCode = false)
        ),
      ]),
    ]),
    /expected tag index/
  );

  
  wasmInvalid(
    moduleWithSections([
      sigSection([emptyType]),
      declSection([0]),
      tagSection([{ type: 0 }]),
      bodySection([
        funcBody(
          {
            locals: [],
            body: [
              RethrowCode,
              
            ],
          },
          (withEndCode = false)
        ),
      ]),
    ]),
    /unable to read rethrow depth/
  );

  
  wasmInvalid(
    moduleWithSections([
      sigSection([emptyType]),
      declSection([0]),
      tagSection([{ type: 0 }]),
      bodySection([
        funcBody(
          {
            locals: [],
            body: [
              TryCode,
              I32Code,
              I32ConstCode,
              0x01,
              DelegateCode,
              
            ],
          },
          (withEndCode = false)
        ),
      ]),
    ]),
    /unable to read delegate depth/
  );
}

function testValidateThrow() {
  valid = `(module
             (type (func (param i32)))
             (func $exn-zero
               i32.const 0
               throw $exn1)
             (tag $exn1 (type 0)))`;

  validSimd = `(module
                (tag $exn (param v128))
                (func (export "f") (param v128) (result v128)
                  (try (result v128)
                    (do (v128.const f64x2 1 2)
                        (throw $exn))
                    (catch $exn))))`;

  invalid0 = `(module
                (type (func (param i32)))
                (func $exn-zero
                  throw $exn1)
                (tag $exn1 (type 0)))`;
  error0 = /popping value from empty stack/;

  invalid1 = `(module
                (type (func (param i32)))
                (func $exn-zero
                  i64.const 0
                  throw $exn1)
                (tag $exn1 (type 0)))`;
  error1 = /expression has type i64 but expected i32/;

  invalid2 = `(module
                (type (func (param i32)))
                (func $exn-zero
                  i32.const 0
                  throw 1)
                (tag $exn1 (type 0)))`;
  error2 = /tag index out of range/;

  print(valid);
  if (wasmSimdEnabled()) {
    print(validSimd);
  }
  print(invalid0, error0);
  print(invalid1, error1);
  print(invalid2, error2);
}

function testValidateTryCatch() {
  function mod_with(fbody) {
    return moduleWithSections([
      sigSection([emptyType, i32Type, i32i32Toi32Type]),
      declSection([0]),
      tagSection([{ type: 0 }, { type: 1 }]),
      bodySection([
        funcBody({
          locals: [],
          body: fbody,
        }),
      ]),
    ]);
  }

  const body1 = [
    
    TryCode,
    I32Code,
    
    I32ConstCode,
    varU32(1),
    
    CatchCode,
    varU32(1),
  ];

  const valid1 = mod_with(body1.concat([EndCode, DropCode, ReturnCode]));
  const invalid1 = mod_with(
    body1.concat([I32ConstCode, varU32(2), EndCode, DropCode, ReturnCode])
  );

  const valid2 = mod_with([
    
    I32ConstCode,
    varU32(0),
    I32ConstCode,
    varU32(0),
    
    TryCode,
    varS32(2),
    DropCode,
    DropCode,
    I32ConstCode,
    varU32(1),
    
    CatchCode,
    varU32(0),
    I32ConstCode,
    varU32(2),
    EndCode,
    DropCode,
    ReturnCode,
  ]);

  wasmValid(valid1);
  wasmInvalid(invalid1, /unused values not explicitly dropped/);
  wasmValid(valid2);

  
  print(
    `(module (func try end))`
  );

  print(
    `(module (func (result i32) try (result i32) (i32.const 1) end))`
  );

  print(
    `(module
       (func (result i32)
         try (result i32) (i32.const 1) (br 0) end))`
  );

  print(
    `(module
       (func try (result i32) end))`,
    /popping value from empty stack/
  );
}

function testValidateCatch() {
  wasmInvalid(
    moduleWithSections([
      sigSection([emptyType]),
      declSection([0]),
      bodySection([
        funcBody({
          locals: [],
          body: [TryCode, VoidCode, CatchCode, varU32(0), EndCode],
        }),
      ]),
    ]),
    /tag index out of range/
  );
}

function testValidateCatchAll() {
  print(
    `(module
       (tag $exn)
       (func try catch $exn catch_all end))`
  );

  print(
    `(module
       (func (result i32)
         try (result i32)
           (i32.const 0)
         catch_all
           (i32.const 1)
         end))`
  );

  print(
    `(module
       (tag $exn)
       (func try catch_all catch 0 end))`,
    /catch cannot follow a catch_all/
  );

  print(
    `(module
       (tag $exn)
       (func try (result i32) (i32.const 1) catch_all end drop))`,
    /popping value from empty stack/
  );

  print(
    `(module
       (tag $exn (param i32))
       (func try catch $exn drop catch_all drop end))`,
    /popping value from empty stack/
  );

  
  
  print(
    `(module
       (tag $exn)
       (func try catch_all catch_all end))`,
    /catch_all can only be used within a try/
  );

  print(
    `(module
       (tag $exn)
       (func catch_all))`,
    /catch_all can only be used within a try/
  );
}

function testValidateExnPay {
  valid0 = moduleWithSections([
    sigSection([i32Type, i32Toi32Type]),
    declSection([1]),
    
    tagSection([{ type: 0 }]),
    bodySection([
      
      funcBody({
        locals: [],
        body: [
          
          TryCode,
          I32Code,
          LocalGetCode,
          varU32(0),
          ThrowCode,
          varU32(0),
          I32ConstCode,
          varU32(1),
          
          CatchCode,
          varU32(0),
          I32ConstCode,
          varU32(1),
          I32AddCode,
          EndCode,
        ],
      }),
    ]),
  ]);

  
  
  
  valid1 = moduleWithSections([
    sigSection([i32Type, toi32Type]),
    declSection([1]),
    
    tagSection([{ type: 0 }]),
    bodySection([
      
      funcBody({
        locals: [],
        body: [
          
          TryCode,
          I32Code,
          I32ConstCode,
          varU32(0),
          I32ConstCode,
          varU32(1),
          ThrowCode,
          varU32(0),
          DropCode,
          
          CatchCode,
          varU32(0),
          DropCode,
          I32ConstCode,
          varU32(2),
          EndCode,
        ],
      }),
    ]),
  ]);

  invalid0 = moduleWithSections([
    sigSection([i32Type, i32Toi64Type]),
    declSection([1]),
    
    tagSection([{ type: 0 }]),
    bodySection([
      
      funcBody({
        locals: [],
        body: [
          
          TryCode,
          I64Code,
          LocalGetCode,
          varU32(0),
          ThrowCode,
          varU32(0),
          I64ConstCode,
          varU32(0),
          
          CatchCode,
          varU32(0),
          EndCode,
        ],
      }),
    ]),
  ]);

  invalid1 = moduleWithSections([
    
    sigSection([emptyType]),
    declSection([0]),
    
    tagSection([{ type: 0 }]),
    bodySection([
      
      funcBody({
        locals: [],
        body: [
          
          TryCode,
          VoidCode,
          CatchCode,
          varU32(1),
          EndCode,
        ],
      }),
    ]),
  ]);

  wasmValid(valid0);
  wasmValid(valid1);
  wasmInvalid(invalid0, /has type i32 but expected i64/);
  wasmInvalid(invalid1, /tag index out of range/);
}

function testValidateRethrow() {
  print(
    `(module
       (tag $exn (param))
       (func
         try
           nop
         catch $exn
           rethrow 0
         end))`
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try
           nop
         catch_all
           rethrow 0
         end))`
  );

  print(
    `(module
       (func (result i32)
         try (result i32)
           (i32.const 1)
         catch_all
           rethrow 0
         end))`
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try
           nop
         catch $exn
           block
             try
             catch $exn
               rethrow 0
             end
           end
         end))`
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try
           nop
         catch $exn
           block
             try
             catch $exn
               rethrow 2
             end
           end
         end))`
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try
           nop
         catch $exn
           block
             try
             catch $exn
               rethrow 1
             end
           end
         end))`,
    /rethrow target was not a catch block/
  );

  print(
    `(module (func rethrow 0))`,
    /rethrow target was not a catch block/
  );

  print(
    `(module (func try rethrow 0 end))`,
    /rethrow target was not a catch block/
  );

  print(
    `(module (func try rethrow 0 catch_all end))`,
    /rethrow target was not a catch block/
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try
           nop
         catch $exn
           block
             try
             catch $exn
               rethrow 4
             end
           end
         end))`,
    /rethrow depth exceeds current nesting level/
  );
}

function testValidateDelegate() {
  print(
    `(module
       (tag $exn (param))
       (func
         try
           try
             throw $exn
           delegate 0
         catch $exn
         end))`
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try
           try
             throw $exn
           delegate 1
         catch $exn
         end))`
  );

  print(
    `(module
       (tag $exn (param))
       (func
         block
           try
             throw $exn
           delegate 0
         end))`
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try
         catch $exn
           try
             throw $exn
           delegate 0
         end))`
  );

  print(
    `(module
       (tag $exn (param))
       (func (result i32)
         try
           throw $exn
         delegate 0
         (i64.const 0)
         end))`,
    /type mismatch: expression has type i64 but expected i32/
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try (result i32)
           (i64.const 0)
         delegate 0))`,
    /type mismatch: expression has type i64 but expected i32/
  );

  print(
    `(module
       (tag $exn (param))
       (func
         try
           try
             throw $exn
           delegate 2
         catch $exn
         end))`,
    /delegate depth exceeds current nesting level/
  );

  print(
    `(module (func delegate 0))`,
    /delegate can only be used within a try/
  );
}

testValidateDecode();
testValidateThrow();
testValidateTryCatch();
testValidateCatch();
testValidateCatchAll();
testValidateExnPay;
testValidateRethrow();
testValidateDelegate();
