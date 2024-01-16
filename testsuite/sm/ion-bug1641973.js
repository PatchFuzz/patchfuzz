





new WebAssembly.Module(wasmTextToBinary(`
(module
  (func (result v128)
    (unreachable)
    (i8x16.shuffle 0 0 23 0 4 4 4 4 4 16 1 0 4 4 4 4)))
`))

