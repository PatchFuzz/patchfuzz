let tag = new WebAssembly.Tag({parameters: []});

function construct(options) {
	return new WebAssembly.Exception(tag, [], options);
}
function noStack(options) {
	print(construct(options).stack, undefined, 'no stack');
}
function hasStack(options) {
	print(typeof construct(options).stack === 'string', true, 'has stack');
}


noStack(undefined);
noStack(null);
noStack({});
noStack({traceStack: false});
noStack({traceStack: 0});
hasStack({traceStack: true});
hasStack({traceStack: 1});


print(() => construct('not an object'), TypeError, /cannot be converted/);


let exception = construct({traceStack: true});
exception.stack = 0;
print(typeof exception.stack === 'string', true, 'is read-only');
