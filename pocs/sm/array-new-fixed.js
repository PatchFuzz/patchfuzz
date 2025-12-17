wasmFailValidateText(`(module
  (type $a (array i32))
  (func
    array.new_fixed $a 10001
  )
)`, /too many/);
