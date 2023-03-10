




var bin = print('(module (memory 1 1 shared))');



print(WebAssembly.validate(bin), false);



print(() => new WebAssembly.Module(bin),
		   WebAssembly.CompileError,
		   /shared memory is disabled/);



print(() => new WebAssembly.Memory({initial: 1, maximum: 1, shared: true}),
		   WebAssembly.LinkError,
		   /shared memory is disabled/);

