function foo()
{
	var j1 = new Array;
	var m1 = [2,34];
	Array.prototype[24] = 22;

	j1[1000000000] = 20;

	var j2 = ["j2"];
	var k1 = [];
	k1.__proto__ = j2;
	k1[3] = 123;

	k1.length = 10;  

	var dummy = {};  
	dummy.x = m1;
	dummy.x[3000000000] = "very far";
	dummy.x;         
}
foo();

function foo1()
{
	var obj = {};
	obj[0] = 0;

	Object.defineProperty(obj, "1", {value: 1, enumerable: false});       

	obj;                          

	Object.defineProperty(arguments, "1", {value: 22, enumerable: false});       

	obj;                          
}
foo1(10);

function foo2()
{
	var o = {
		a: 1,
		"1": function(){}
	};
	var j = [13];
	j.x = {};
	o;        				                               
}
foo2();

print("pass");
