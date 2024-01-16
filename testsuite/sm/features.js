





















let { release_or_beta } = getBuildConfiguration();
let nightly = !release_or_beta;

let nightlyOnlyFeatures = [
  [
    'function-references',
    wasmFunctionReferencesEnabled(),
    `(module (func (param (ref extern))))`
  ],
  [
    'gc',
    wasmGcEnabled(),
    `(module (type $s (struct)) (func (param (ref null $s))))`
  ],
];

for (let [name, enabled, test] of nightlyOnlyFeatures) {
  if (enabled) {
    assertEq(nightly, true, `${name} must be enabled only on nightly`);
    wasmEvalText(test);
  } else {
    assertErrorMessage(() => wasmEvalText(test), WebAssembly.CompileError, /./);
  }
}






let releasedFeaturesMaybeDisabledAnyway = [
  
  ['simd', wasmSimdEnabled(), `(module (func (result v128) i32.const 0 i8x16.splat))`]
];

for (let [name, enabled, test] of releasedFeaturesMaybeDisabledAnyway) {
  if (release_or_beta) {
    if (enabled) {
      wasmEvalText(test);
    } else {
      assertErrorMessage(() => wasmEvalText(test), WebAssembly.CompileError, /./);
    }
  }
}

let releasedFeatures = [
  ['threads', wasmThreadsEnabled(), `(module (memory 1 1 shared))`],
  [
    'exceptions',
    wasmExceptionsEnabled(),
    `(module (type (func)) (tag (type 0)))`
  ],
  [
    'extended-const',
    wasmExtendedConstEnabled(),
    `(module
      (global i32
        i32.const 0
        i32.const 0
        i32.add
      )
    )`
  ],
];

for (let [name, enabled, test] of releasedFeatures) {
  if (release_or_beta) {
    assertEq(enabled, true, `${name} must be enabled on release and beta`);
    wasmEvalText(test);
  }
}
