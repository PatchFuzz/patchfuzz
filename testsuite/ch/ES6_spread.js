




var a = [1,2,"check"];

function bar(){
	return (arguments[0] == 1 &&
		   arguments[1] == 2 &&
		   arguments[2] == "check");
}

function foo(x,y,z){
	arguments; 
	
};

foo(...a);
WScript.Echo("pass")

