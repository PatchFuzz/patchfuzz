
















load(libdir + "eqArrayHelper.js");




function generateLocalThrows(types, baseThrow) {
  
  
  
  
  
  
  
  
  
  
  
  

  
  let catchlessTryThrow =
      `(try (param ${types})
         (do ${baseThrow}))`;

  let catchAndThrow =
      `(try (param ${types})
         (do ${baseThrow})
         (catch $exn
           ${baseThrow})
         (catch_all))`;

  let blockThrow =
      `(block (param ${types})
         ${baseThrow})`;

  
  
  let conditionalThrow =
      `(if (param ${types})
         (local.get $ifPredicate)
         (then ${baseThrow})
         (else ${baseThrow}))`;

  
  let baseDelegate =
      `(try (param ${types})
         (do ${baseThrow})
         (delegate 0))`;

  
  let nestedDelegate1InBlock =
      `(block $label1 (param ${types})
         (try (param ${types})
           (do ${baseThrow})
           (delegate $label1)))`;

  let basicThrows = [catchlessTryThrow, blockThrow, conditionalThrow,
                     baseDelegate, nestedDelegate1InBlock];

  

  let baseRethrow =
      `(rethrow 0)`;

  let nestedRethrow =
      `(try (param ${types})
         (do
           ${baseThrow})
         (catch $exn
           (rethrow 1))
         (catch_all
           (rethrow 0)))`;

  let catchAllRethrowOriginal =
      `(try (param ${types})
         (do
           ${baseThrow})
         (catch_all
           (rethrow 1)))`;

  let secondaryThrows =
      [].concat(basicThrows,
                [baseRethrow, nestedRethrow, catchAllRethrowOriginal]);

  

  function basicNesting (basicThrow, secondaryThrow) {
    return `(try (param ${types})
              (do ${basicThrow})
              (catch $exn
                ${secondaryThrow})
              (catch_all))`;
  };

  let result = [];

  for (let basicThrow of basicThrows) {
    result.push(basicThrow);
    for (let secondaryThrow of secondaryThrows) {
      result.push(basicNesting(basicThrow, secondaryThrow));
    }
  }

  return result;
};

{
  
  let typesJS = ["i32", "i64", "f32", "f64", "externref"];
  let types = typesJS.join(" ");

  
  
  let exntype = "";
  let wrongV128 = "";
  let throwV128 = "";
  let checkV128Value = "";

  if (wasmSimdEnabled()) {
    exntype = types + " v128";
    wrongV128 = `(v128.const i32x4 11 22 33 44)`;
    throwV128 = `(v128.const i32x4 55 66 77 88)`;
    checkV128Value = `;; Check the V128 value
             ${throwV128}
             (i32x4.eq)
             (i32x4.all_true)`;
  } else {
    exntype = types + " i32";
    wrongV128 = "(i32.const 0)";
    throwV128 = "(i32.const 1)";
    checkV128Value = "";
  }

  let exnTypeDef = `(type $exnType (func (param ${exntype})))`;

  let throwValues =
      `;; Values to throw.
               (i32.const 2)
               (i64.const 3)
               (f32.const 4)
               (f64.const 13.37)
               (local.get $correctRef)
               ${throwV128}`;

  
  
  let correctResultsJS = [2, 3n, 4, 13.37, "foo", 1];

  let wrongValues =
      `;; Wrong values
                    (i32.const 5)
                    (i64.const 6)
                    (f32.const 0.1)
                    (f64.const 0.6437)
                    (local.get $wrongRef)
                    ${wrongV128}`;

  

  function testDirectCallsThrowing(localThrow) {
    

    let throwifTypeInline =
        
        
        `(param $ifPredicate i32) (param $correctRef externref) (result i32)`;

    let moduleHeaderThrowif =
        `(module
           ${exnTypeDef}
           (tag $exn (export "exn") (type $exnType))
           (func $throwif (export "throwif") ${throwifTypeInline}
             (if
               (local.get $ifPredicate)
               (then
                 ${throwValues}
                 ${localThrow}))
             (i32.const 1))`;

    let testModuleRest =
        `(tag $notThrownExn)
         (func $doNothing)
         (func (export "testFunc") (param $correctRef externref)
                                   (param $wrongRef externref)
                                   (result ${types} i32)
                                   (local $ifPredicate i32)
           (local.get $ifPredicate)
           (try (param i32) (result ${exntype})
             (do
               (local.get $wrongRef)
               (call $throwif) ;; Returns 1.
               (call $doNothing) ;; Does nothing.
               (local.get $correctRef)
               (call $throwif) ;; Throws $exn.
               (drop)
               ${wrongValues} ;; Won't reach this point.
               ${localThrow}
               unreachable)
             (catch $notThrownExn
               ${wrongValues})
             (catch $exn))
           ${checkV128Value}))`;

    function testDirectLocalCallsThrowing() {
      let mod = moduleHeaderThrowif + testModuleRest;
      

      assertEqArray(wasmEvalText(mod).exports.testFunc("foo", "bar"),
                    correctResultsJS);
    };

    function testDirectImportedCallsThrowing() {
      let exports = wasmEvalText(moduleHeaderThrowif + `)`).exports;
      
      

      let mod =
          `(module
             ${exnTypeDef}
             (import "m" "exn" (tag $exn (type $exnType)))
             (import "m" "throwif" (func $throwif ${throwifTypeInline}))` +
          testModuleRest;
      

      assertEqArray(
        wasmEvalText(mod, { m : exports}).exports.testFunc("foo", "bar"),
        correctResultsJS);
    };

    testDirectLocalCallsThrowing();
    testDirectImportedCallsThrowing();
  };

  function testIndirectCallsThrowing(localThrow) {
    

    let indirectFunctypeInline = `(param ${exntype})
                                  (result ${exntype})`;
    let getIndirectArgs = `(local.get 0) ;; i32
             (local.get 1) ;; i64
             (local.get 2) ;; f32
             (local.get 3) ;; f64
             (local.get 4) ;; ref
             ;; v128
             (local.get 5)`;

    let testFunctypeInline = `(param $correctRef externref)
                                     (param $wrongRef externref)
                                     ;; The last i32 result is the v128 check.
                                     (result ${types} i32)`;

    let moduleHeader =
        `(module
           ${exnTypeDef}
           (type $indirectFunctype (func ${indirectFunctypeInline}))
           (tag $exn (export "exn") (type $exnType))
           (tag $emptyExn (export "emptyExn"))
           (func $throwExn (export "throwExn") ${indirectFunctypeInline}
                                               (local $ifPredicate i32)
             ${getIndirectArgs}
             ${localThrow}
             unreachable)
           (func $throwEmptyExn (export "throwEmptyExn")
                                ${indirectFunctypeInline}
             (throw $emptyExn)
             unreachable)
           (func $returnArgs (export "returnArgs") ${indirectFunctypeInline}
             ${getIndirectArgs})
           (table (export "tab") funcref (elem $throwExn       ;; 0
                                               $throwEmptyExn  ;; 1
                                               $returnArgs))   ;; 2
           `;

    
    
    let testFuncHeader = `(func (export "testFunc") ${testFunctypeInline}
                                     (local $ifPredicate i32)
             `;

    
    function moduleIndirectLocalLocal(functionBody) {
      return moduleHeader + testFuncHeader + functionBody + `))`;
    };

    let exports = wasmEvalText(moduleHeader + ")").exports;
    
    

    let moduleHeaderImporting =
        `(module
           ${exnTypeDef}
           (type $indirectFunctype (func ${indirectFunctypeInline}))
           (import "m" "exn" (tag $exn (type $exnType)))
           (import "m" "emptyExn" (tag $emptyExn))
           (import "m" "throwExn" (func $throwExn (type $indirectFunctype)))
           (import "m" "throwEmptyExn"
                   (func $throwEmptyExn (type $indirectFunctype)))
           (import "m" "returnArgs"
                   (func $returnArgs (type $indirectFunctype)))`;

    
    function moduleIndirectLocalImport(functionBody) {
      return moduleHeaderImporting +
        `(table funcref (elem $throwExn $throwEmptyExn $returnArgs))` +
        testFuncHeader + functionBody + `))`;
    };

    
    function moduleIndirectImportImport(functionBody) {
      return moduleHeaderImporting +
        `(import "m" "tab" (table 3 funcref))` +
        testFuncHeader + functionBody + `))`;
    };

    function getModuleTextsForFunctionBody(functionBody) {
      return [moduleIndirectLocalLocal(functionBody),
              moduleIndirectLocalImport(functionBody),
              moduleIndirectImportImport(functionBody)];
    };

    

    
    
    
    
    let indirectThrow = `${throwValues}
               (call_indirect (type $indirectFunctype) (i32.const 2)) ;; returnArgs
               (call_indirect (type $indirectFunctype) (i32.const 0)) ;; throwExn
               drop drop ;; Drop v128 and externref to do trivial and irrelevant ops.
               (f64.const 5)
               (f64.add)
               (local.get $wrongRef)
               ${wrongV128}
               ;; throwEmptyExn
               (call_indirect (type $indirectFunctype) (i32.const 1))
               unreachable`;

    
    let simpleTryIndirect = `(try (result ${exntype})
              (do ${indirectThrow})
              (catch $emptyExn
                 ${wrongValues})
              (catch $exn)
              (catch_all
                 ${wrongValues}))
              ${checkV128Value}`;

    
    
    let nestedTryIndirect =
        `(try (result ${types} i32)
           (do
             ${wrongValues}
             ;; throwEmptyExn
             (call_indirect (type $indirectFunctype) (i32.const 1))
             drop ;; Drop the last v128 value.
             (i32.const 0))
           (catch_all
             ${simpleTryIndirect}))`;

    let functionBodies = [simpleTryIndirect, nestedTryIndirect];

    
    for (let functionBody of functionBodies) {
      console.log("functionBody = : " + functionBody); 

      for (let mod of getModuleTextsForFunctionBody(functionBody)) {
        

        let testFunction = wasmEvalText(mod, { m : exports}).exports.testFunc;
        assertEqArray(testFunction("foo", "bar"),
                      correctResultsJS);
      }
    }
  };

  

  let localThrows =
      ["(throw $exn)"].concat(generateLocalThrows(exntype, "(throw $exn)"));

  for (let localThrow of localThrows) {
    
    

    testDirectCallsThrowing(localThrow);
    testIndirectCallsThrowing(localThrow);
  }
}
