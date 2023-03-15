






{
  let exports = print(
    `(module $m
       (memory $mem (data "bar"))
       (tag $exn (export "exn"))
       (tag $dummyExn (export "dummyExn"))
       (func $throwsExn (export "throwsExn")
         (throw $exn))
       (func $anotherThrowsExn
         (throw $exn))
       (func $throwsDummyExn (export "throwsDummyExn")
         (throw $dummyExn))
       (table (export "tab") funcref (elem $anotherThrowsExn $throwsDummyExn)))`
  ).exports;

  function testMemoryAfterCall(callInstruction) {
    print(
      print(
        `(module
           (import "m" "exn" (tag $exn))
           (tag $localExn (param i32))
           (type $t (func))
           (import "m" "tab" (table $importTable 2 funcref))
           (import "m" "throwsExn" (func $importFuncThrowsExn))
           (memory $mem (data "foo"))
           (func $localFuncThrowsExn
             (throw $exn))
           (table $localTable funcref
                  (elem $localFuncThrowsExn $importFuncThrowsExn))
           (func $anotherLocalFuncThrowsExn
             (throw $exn))
           (func $throwsLocalExn
             (throw $localExn
               (i32.const 9)))
           (func (export "testFunc") (result i32)
             (try (result i32)
               (do
                 ${callInstruction}
                 ;; All the rest should not be reachable.
                 (call $anotherLocalFuncThrowsExn)
                 (throw $exn)
                 (call $throwsLocalExn)
                 unreachable)
               (catch $localExn)
               (catch $exn
                 (i32.load8_u
                   (i32.const 0)))
               (catch $exn
                 ;; This should be ignored.
                 unreachable))))`,
        { m: exports }
      ).exports.testFunc(),
      'foo'.charCodeAt(0)
    );
  };

  
  let callInstructions =
      ["(call $anotherLocalFuncThrowsExn)",
       "(call $importFuncThrowsExn)",
       
       "(call_indirect $localTable (type $t) (i32.const 0))",
       
       "(call_indirect $localTable (type $t) (i32.const 1))",
       
       "(call_indirect $importTable (type $t) (i32.const 0))"];

  for (let callInstruction of callInstructions) {
    testMemoryAfterCall(callInstruction);
  }
}
