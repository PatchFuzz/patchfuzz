




function f() {
    function g() {
        const x = 1; 
        x = 2;
    } 
    g();
} 
f();