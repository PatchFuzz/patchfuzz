let instance = print(`
  (func $twoRefs (result externref externref)
    (ref.null extern)
    (ref.null extern))
  (func $fourRefs (export "run") (result externref externref externref externref externref externref)
    call $twoRefs
    call $twoRefs
    call $twoRefs)
`);

print(instance.exports.run(), [null, null, null, null, null, null])
