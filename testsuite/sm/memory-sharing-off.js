




var bin = wasmTextToBinary('(module (memory 1 1 shared))');



assertEq(WebAssembly.validate(bin), false);



assertErrorMessage(() => new WebAssembly.Module(bin),
		   WebAssembly.CompileError,
		   /shared memory is disabled/);



assertErrorMessage(() => new WebAssembly.Memory({initial: 1, maximum: 1, shared: true}),
		   WebAssembly.LinkError,
		   /shared memory is disabled/);

