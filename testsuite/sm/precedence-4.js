

var f = (msg='hi', w=window => w.alert(a, b));  
assertEq(msg, 'hi');
assertEq(typeof w, 'function');
assertEq(f, w);
