function g() {}

function h() {
    for (var i = 0; i < 9; i++)
	x.f = i;
}

function j() {
    x.f();
}

var x = {f: 0.7, g: g};
x.g();  
h();
print(shapeOf(x));
x.f = function (){}; 
j();
print(shapeOf(x));
h(); 

var thrown = 'none';
try {
    j(); 
} catch (exc) {
    thrown = exc.name;
}
print(thrown, 'TypeError');