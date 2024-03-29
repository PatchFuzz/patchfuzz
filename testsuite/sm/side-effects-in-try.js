






load(libdir + "eqArrayHelper.js");


function testSideEffectsOnLocals() {
  
  
  
  
  
  

  let localThrow = "(throw $exn)";

  
  
  let typesJS = ["i32", "i64", "f32", "f64"];
  let types = typesJS.join(" ");
  let exnTypeDef = `(type $exnType (func (param ${types})))`;
  let correctLocalValues =
      `;; Correct local values
             (i32.const 2)
             (i64.const 3)
             (f32.const 4)
             (f64.const 13.37)`;
  let correctLocalValuesJS = [2, 3n, 4, 13.37];

  let wrongValues =
      `;; Wrong values.
             (i32.const 5)
             (i64.const 6)
             (f32.const 0.1)
             (f64.const 0.6437)`;
  let wrongValuesJS = [5, 6n, 0.1, 0.6437];

  
  let throwValues =
      `;; Values to throw and catch.
             (i32.const 7)
             (i64.const 8)
             (f32.const 9)
             (f64.const 27.11)`;
  let thrownValuesJS = [7, 8n, 9, 27.11];

  let correctResultsJS = function(externref) {
    return [].concat(thrownValuesJS,
                     correctLocalValuesJS,
                     [externref, 1]);
  }

  
  
  
  let wrongV128 = "";
  let correctV128 = "";
  let checkV128Value = "";

  if (wasmSimdEnabled()) {
    wrongV128 = `(v128.const i32x4 11 22 33 44)`;
    correctV128 = `(v128.const i32x4 55 66 77 88)`;
    checkV128Value =
      `       ${correctV128}
              (i32x4.eq)
              (i32x4.all_true)`;
    v128Type = " v128";
  } else {
    wrongV128 = "(i32.const 0)";
    correctV128 = "(i32.const 1)";
    v128Type = " i32";
  }

  let localTypes = types + " externref";
  let resultTypes = types + " " + localTypes;

  
  let testFuncTypeInline =
      `(param $argCorrectRef externref)
       (param $argWrongRef externref)
       (result ${resultTypes} i32)
       (local $localI32 i32)
       (local $localI64 i64)
       (local $localF32 f32)
       (local $localF64 f64)
       (local $localExternref externref)
       (local $localV128 ${v128Type})`;

  let localsSet =
      `;; Set locals.
             (local.set $localV128)
             (local.set $localExternref)
             (local.set $localF64)
             (local.set $localF32)
             (local.set $localI64)
             (local.set $localI32)`;
  let localsGet =
      `;; Get locals.
             (local.get $localI32)
             (local.get $localI64)
             (local.get $localF32)
             (local.get $localF64)
             (local.get $localExternref)
             (local.get $localV128)`;

  

  let importsModule =
      `(module
         (type $exnType (func (param ${types})))
         (tag $exn (export "exn") (type $exnType))
         (func (export "throwif") (param $ifPredicate i32)
           (if (local.get $ifPredicate)
             (then
               ${throwValues}
               ${localThrow}))))`;

  let moduleHeader = `
       (module
         ${exnTypeDef}
         (import "m" "exn" (tag $exn (type $exnType)))
         (tag $emptyExn)
         (import "m" "throwif" (func $throwif (param $ifPredicate i32)))
         (func $wontThrow
           (throw $emptyExn))
         (func $localCallThrow
             ${throwValues}
             ${localThrow})
         (func (export "testFunc") ${testFuncTypeInline}
           (try (result ${resultTypes} ${v128Type})
             (do
               ;; Locals not set.
               (i32.const 0) ;; Predicate for $throwif.
               (call $throwif)  ;; So this doesn't throw.
               ;; Set correct locals before throw to be caught.
               ${correctLocalValues}
               (local.get $argCorrectRef)
               ${correctV128}
               ${localsSet}
               ;; Next up should be $exn being thrown locally or via a call.`;

  let moduleRest = ` ;; The above throw to $exn should be caught here --------.
               ;; Set wrong locals after throw to be caught.              ;;    |
               ${wrongValues}                                             ;;    |
               (local.get $argWrongRef) ;; The wrong externref param.     ;;    |
               ${wrongV128}                                               ;;    |
               ${localsSet}                                               ;;    |
               (call $wontThrow)                                          ;;    |
               ${wrongValues}                                             ;;    |
               ${localsGet});; End of try code.                           ;;    |
             (catch $emptyExn                                             ;;    |
               ${wrongValues}                                             ;;    |
               ${localsGet})                                              ;;    |
             (catch $exn ;; <---------------------------------------------------'
               ${localsGet})
             (catch_all
               ${wrongValues}
               ${localsGet}))
           ;; Check if the local has the correct v128 value.
           ${checkV128Value}))`;

  let localThrowValues = `
             ${throwValues}
             (throw $exn)`;
  let directLocalCall = `
             (call $localCallThrow)`;
  let directImportCall = `
             (i32.const 1)
             (call $throwif)`;

  
  

  let callInstructions = [localThrowValues, directLocalCall, directImportCall];

  for (let callThrow of callInstructions) {
    console.log("callThrow = " + callThrow); 
    moduleText = moduleHeader + callThrow + moduleRest;
    console.log("moduleText = " + moduleText); 
    assertEqArray(
      wasmEvalText(moduleText,
                   { m : wasmEvalText(importsModule).exports }
                  ).exports.testFunc("foo", "wrongFoo"),
      correctResultsJS("foo"));
  }
}



function testGlobals() {
  let test = function (type, initialValue, resultValue, wrongValue, coercion) {
    let exports = wasmEvalText(
      `(module
         (tag (export "exn"))
         (func (export "throws")
           (throw 0)))`
    ).exports;

    assertEq(
      wasmEvalText(
        `(module
           (import "m" "exn" (tag $exn))
           (tag $notThrownExn)
           (import "m" "throws" (func $throws))
           (global (mut ${type}) (${type}.const ${initialValue}))
           (func (export "testFunc") (result ${type})
             (try (result ${type})
               (do
                 (global.set 0 (${type}.const ${resultValue}))
                 (call $throws)
                 (global.set 0 (${type}.const ${wrongValue}))
                 (global.get 0))
               (catch $notThrownExn
                 (${type}.const ${wrongValue}))
               (catch $exn
                 (global.get 0)))))`,
        { m: exports }
      ).exports.testFunc(), coercion(resultValue));
  };

  test("i32", 2, 7, 27, x => x);
  test("i64", 2n, 7n, 27n, x => x);
  test("f32", 0.3, 0.1, 0.6, Math.fround);
  test("f64", 13.37, 0.6437244242412325666666, 4, x => x);
};



testSideEffectsOnLocals();
testGlobals();
