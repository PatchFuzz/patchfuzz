



function f() {
 
 var arr = [5.65];
 
 arr.splice(0);
 
 arr.splice(-4, 9, 10, 20);
 
 assertFalse(2 in arr);
}

f();
