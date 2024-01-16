




function g()
{
	var x = 2;
	x++;
	throw "this is an exception";
	x++;
}

function f()
{
	var c = 5;
	var obj = { x: 2, y: 3, o2: {a: 44}};
	try {
		g();   
	} catch(ex) {
		WScript.Echo("caught: " + ex);
	}
	d = 7;
	c = 7; 
	c = 8; 
	c = 9; 
}
for(var i = 0; i < 5; ++i)
	f();
	
function g1() { }
function f1() {
	var x = 2;
	g1.apply(this, arguments);  
	x++;					   
}

f1(10);