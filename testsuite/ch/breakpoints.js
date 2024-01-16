




function f()
{
	var x = {a: 2, b: 3};
	eval("x.a++; x.b++;");

	eval("x.c = \"test\\\"string\"; x.b++;");

	var test = "this is \" a string"; 
	test = test + "another string";
}
f();
f();
WScript.Echo("pass");
