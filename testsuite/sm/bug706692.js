


function f(obj,b,c) {
	return obj(); 
}

function g(f,obj) {
	return f(obj); 
}

function h(f, g, obj) {
	return g(f, obj); 
}

f(); 
g(); 
var obj = new Object();

h(f,g,obj);

