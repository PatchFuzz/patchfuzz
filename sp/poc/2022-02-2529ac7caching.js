

;


testCached(`(module
	(tag $t (export "t"))
	(func (export "r")
		throw $t
	)
)`, {}, i => {
	print(() => i.exports.r(), WebAssembly.Exception, /.*/);
});


testCached(`(module
	(tag $t)
	(func (export "r") (result i32)
		try (result i32)
			throw $t
			i32.const 0
		catch $t
			i32.const 1
		end
	)
)`, {}, i => {
	print(i.exports.r(), 1, "caught");
});
