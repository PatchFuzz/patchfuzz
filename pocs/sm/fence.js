wasmFullPass(
`(module
	(func atomic.fence)
	(export "run" (func 0))
)`);


wasmFullPass(
`(module
	(memory 1)
	(func atomic.fence)
	(export "run" (func 0))
)`);


wasmFullPass(
`(module
	(memory 1 1 shared)
	(func atomic.fence)
	(export "run" (func 0))
)`);
