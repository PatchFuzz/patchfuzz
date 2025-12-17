wasmFailValidateText(`(module (func (param v128)))`,
                     /(v128 not enabled)|(bad type)/);

wasmFailValidateText(`(module (func (result v128)))`,
                     /(v128 not enabled)|(bad type)/);

wasmFailValidateText(`(module (func (local v128)))`,
                     /(v128 not enabled)|(bad type)|(SIMD support is not enabled)/);

wasmFailValidateText(`(module (global (import "m" "g") v128))`,
                     /expected global type/);

wasmFailValidateText(`(module (global (import "m" "g") (mut v128)))`,
                     /expected global type/);

wasmFailValidateText(`(module (global i32 (v128.const i32x4 0 0 0 0)))`,
                     /(v128 not enabled)|(unrecognized opcode)/);

