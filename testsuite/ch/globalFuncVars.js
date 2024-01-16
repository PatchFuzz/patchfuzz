






function foo() {
    var mm = [22, 33];
    eval(' function f1() {}; \nvar a = 10; \nvar b= {};\n a;\n b;  \n var c1 = [1]; \nc;');
    eval(' try { \n abc.def = 10;\n } catch(ex1) { \n ex1;  } \nc;');
}

foo();

function bar() { }
bar;                             

try {
    abdd.dd = 20;
}
catch (ex2) {
    ex2;                        
}

var obj = { x: 10, y: [11, 22] };

with (obj) {
    var c = x;
    c;                          
}

c++;

WScript.Echo("Pass");
