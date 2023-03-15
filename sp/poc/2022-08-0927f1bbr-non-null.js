


print(`(module
  (func
    block (result (ref extern))
      ref.null extern
      br_on_non_null 0
      return
    end
    drop
  )
)`);


print(`(module
  (func (param externref) (result (ref extern))
    local.get 0
    br_on_non_null 0
    unreachable
  )
)`);


print(`(module
  (func (param (ref null extern) (ref extern)) (result i32 i32 i32 (ref extern))
    i32.const 0
    i32.const 1
    i32.const 2
    local.get 0
    br_on_non_null 0
    local.get 1
  )
)`);


print(`(module
  (func
    block
      ref.null extern
      br_on_non_null 0
    end
  )
)`, /type mismatch: target block type expected to be \[_, ref\]/);


print(`(module
  (type $t (func))
  (func (result funcref)
    ref.null $t
    return
    br_on_non_null 0
  )
)`);

print(`(module
  (func
    return
    br_on_non_null 0
  )
)`, /type mismatch: target block type expected to be \[_, ref\]/);


let {ifNull} = print(`(module
  (func (export "ifNull") (param externref externref) (result externref)
    local.get 0
    br_on_non_null 0
    local.get 1
  )
)`).exports;

const DefaultTestVal = "default!test";
print(ifNull(null, DefaultTestVal), DefaultTestVal);
for (let val of WasmNonNullExternrefValues) {
  print(ifNull(val, DefaultTestVal), val);
}
