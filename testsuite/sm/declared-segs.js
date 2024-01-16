
wasmFullPass(`
	(module
		(func $f1)
		(elem declare $f1)
		(elem declare funcref (ref.null func))
		(func $run)
		(export "run" (func $run))
	)
`);


wasmFullPass(`
	(module
		(elem declare externref (ref.null extern))
		(func $run)
		(export "run" (func $run))
	)
`);


{
	let inst = wasmEvalText(`
		(module
			(func $f1)
			(table 1 1 funcref)
			(elem $e1 declare $f1)
			(func (export "testfn") (table.init $e1 (i32.const 0) (i32.const 0) (i32.const 1)))
		)
	`);
	assertErrorMessage(() => inst.exports.testfn(), WebAssembly.RuntimeError, /index out of bounds/);
}


wasmEvalText(`
	(module
		(func $f1)
		(table 1 1 funcref)
		(elem $e1 declare $f1)
		(func $start (elem.drop $e1) (elem.drop $e1))
		(start $start)
	)
`)


wasmAssert(`
	(module
		(func $f1)
		(table 1 1 funcref)
		(elem declare $f1)
		(func $at (param i32) (result i32)
			local.get 0
			table.get 0
			ref.is_null
		)
		(export "at" (func $at))
	)
`, [{type: 'i32', func: '$at', args: ['i32.const 0'], expected: '1'}]);
