



print(() => print(`(module
	(global i32 global.get 0)
)`), WebAssembly.CompileError, /global/);

print(() => print(`(module
	(global i32 global.get 1)
	(global i32 i32.const 0)
)`), WebAssembly.CompileError, /global/);



{
	let {func, b, c, e} = print(`(module
		(func $func (export "func"))

		(global $a i32 i32.const 1)
		(global $b (export "b") i32 global.get $a)
		(global $c (export "c") i32 global.get $b)

		(global $d funcref ref.func $func)
		(global $e (export "e") funcref global.get $d)
	)`).exports;
	print(b.value, 1);
	print(c.value, 1);
	print(e.value, func);
}
