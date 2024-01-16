


wasmValidateText(`(module
  (func
    ref.null extern
    br_on_null 0
    drop
  )
)`);


wasmValidateText(`(module
  (func (param externref)
    local.get 0
    br_on_null 0
    drop
  )
)`);


wasmValidateText(`(module
  (func (result i32)
    i32.const 0
    ref.null extern
    br_on_null 0
    drop
  )
)`);


wasmValidateText(`(module
  (func (result i32 i32 i32)
    i32.const 0
    i32.const 1
    i32.const 2
    ref.null extern
    br_on_null 0
    drop
  )
)`);


let {isNull} = wasmEvalText(`(module
  (func (export "isNull") (param externref) (result i32)
    i32.const 1
    local.get 0
    br_on_null 0
    drop
    drop
    i32.const 0
  )
)`).exports;

assertEq(isNull(null), 1, `null is null`);
for (let val of WasmNonNullExternrefValues) {
  assertEq(isNull(val), 0, `${typeof(val)} is not null`);
}
