var call_f = new Function('f(' + ('0,').repeat(7023) + ')');
function f() {[1, 2, 3].sort(call_f);}
print(call_f, RangeError);
