function foo()
{
	print("In function foo");
	debugger;

	var a1 = new Array(10);
	a1[0] = {a:"10"};
	eval('var inEval = 10;\n inEval++;\n');
	debugger;
}

function bar()
{
	print("In function bar");
	debugger;
	var a2 = {b:10};
	debugger;
	
	return a2.b;
}
foo();
bar();

print(foo);
