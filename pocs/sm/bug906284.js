"use strict"
function f() {
    h = {}
}
var c = 0;
for (var i=0; i<3; i++) {
    try {
	new f();
	print(0, 1);
    } catch(e) {
	c++;
	print(e.message.includes("undeclared variable"), true);
    }
}
print(c, 3);
