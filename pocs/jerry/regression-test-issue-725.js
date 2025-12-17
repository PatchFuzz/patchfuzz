try {
	eval("switch(foo){} {}");
	assert(false);
} catch (e) {
	assert(e instanceof ReferenceError);
}

