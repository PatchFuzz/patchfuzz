function foo() {
	return '' / undefined;
}

foo();
print(foo(), NaN);
