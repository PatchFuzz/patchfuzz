const memory = new WebAssembly.Memory({ initial: 1, maximum: 4 });

const heap = memory.buffer;

function builder(stdlib, foreign, heap) {
  "use asm";

  const mem = new stdlib.Float64Array(heap);

  function add(x, y) {
    x = +x;
    y = +y;

    return +mem[0] + +mem[1];
  }

  return {add: add};
}


builder(globalThis, undefined, new ArrayBuffer(2 ** 16));
print(%IsAsmWasmCode(builder));

const asm_js_module = builder(globalThis, undefined, heap);


memory.grow(0);
