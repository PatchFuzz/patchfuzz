function foo() {
	for (var a = 0; a < 1; ++a) {
		for (var b = 0; b < 11; ++b) {
			(true());
		}
	};

};

try {
    foo();
} catch(e) {
    print(e.message === 'Function expected' ? 'pass' : 'fail');
}
