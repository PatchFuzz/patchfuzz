print((function() { var x = 3; return (function() { return x } )() })(), 3);
print((function() { var g = function() { return x }; var x = 3; return g()})(), 3);
print((function() { var x; x = 3; return (function() { return x } )() })(), 3);
print((function() { x = 3; var x; return (function() { return x } )() })(), 3);
print((function() { var x; var g = function() { return x }; x = 3; return g() })(), 3);

print((function() { function f() { return 3 }; print(f(), 3); return (function() { return f(); })(); })(), 3);
print((function() { function f() { return 3 }; print(f(), 3); return eval('f()') })(), 3);
print((function() { function f() { return 3 }; (function() { return f(); })(); return f() })(), 3);

print((function() { var x = 3; return eval("x") })(), 3);
print((function() { var x; x = 3; return eval("x") })(), 3);
print((function() { x = 3; var x; return eval("x") })(), 3);

print((function() { var x; (function() {x = 2})(); return ++x })(), 3);
print((function() { var x; (function() {x = 2})(); x++; return x })(), 3);
print((function() { var x; (function() {x = 4})(); return --x })(), 3);
print((function() { var x; (function() {x = 4})(); x--; return x })(), 3);

print((function(x) { return (function() { return x } )() })(3), 3);
print((function(x) { var x = 3; return (function() { return x } )() })(4), 3);
print((function(x) { x = 3; return (function() { return x } )() })(4), 3);
print((function(x) { var g = function() { return x }; x = 3; return g()})(3), 3);

print((function(x) { return eval("x") })(3), 3);
print((function(x) { x = 3; return eval("x") })(4), 3);

print((function(a) { var [x,y] = a; (function() { x += y })(); return x })([1,2]), 3);
print((function(a) { var [x,y] = a; x += y; return (function() { return x; })() })([1,2]), 3);
print((function(a) { var [[l, x],[m, y]] = a; x += y; return (function() { return x; })() })([[0,1],[0,2]]), 3);
print((function(a) { var [x,y] = a; eval('x += y'); return x })([1,2]), 3);
print((function(a) { var [x,y] = a; x += y; return eval('x') })([1,2]), 3);
print((function(a) { var [x,y] = a; (function() { x += y })(); return x })([1,2]), 3);
print((function(a) { var [x,y] = a; x += y; return (function() { return x; })() })([1,2]), 3);
print((function(a,x,y) { [x,y] = a; (function() { eval('x += y') })(); return x })([1,2]), 3);
print((function(a,x,y) { [x,y] = a; x += y; return (function() { return eval('x'); })() })([1,2]), 3);

print((function() { var [x,y] = [1,2]; x += y; return (function() { return x; })() })(), 3);
print((function() { var [x,y] = [1,2]; (function() { return x += y; })(); return x })(), 3);
print((function() { { let [x,y] = [1,2]; x += y; return (function() { return x; })() } })(), 3);
print((function() { { let [x,y] = [1,2]; (function() { return x += y; })(); return x } })(), 3);

print((function([x,y]) { (function() { x += y })(); return x })([1,2]), 3);
print((function([x,y]) { x += y; return (function() { return x; })() })([1,2]), 3);
print((function([[l,x],[m,y]]) { (function() { x += y })(); return x })([[0,1],[0,2]]), 3);
print((function([[l,x],[m,y]]) { x += y; return (function() { return x; })() })([[0,1],[0,2]]), 3);
print((function([x,y]) { (function() { eval('x += y') })(); return x })([1,2]), 3);
print((function([x,y]) { x += y; return (function() { return eval('x'); })() })([1,2]), 3);
print((function() { try { throw [1,2] } catch([x,y]) { eval('x += y'); return x }})(), 3);
print((function() { try { throw [1,2] } catch([x,y]) { x += y; return eval('x') }})(), 3);
print((function() { try { throw [1,2] } catch([x,y]) { (function() { x += y })(); return x }})(), 3);
print((function() { try { throw [1,2] } catch([x,y]) { x += y; return (function() { return x; })() }})(), 3);
print((function() { try { throw [1,2] } catch([x,y]) { (function() { eval('x += y') })(); return x }})(), 3);
print((function() { try { throw [1,2] } catch([x,y]) { x += y; return (function() { return eval('x'); })() }})(), 3);

print((function(a) { let [x,y] = a; (function() { x += y })(); return x })([1,2]), 3);
print((function(a) { let [x,y] = a; x += y; return (function() { return x; })() })([1,2]), 3);
print((function(a) { { let [x,y] = a; (function() { x += y })(); return x } })([1,2]), 3);
print((function(a) { { let [x,y] = a; x += y; return (function() { return x; })() } })([1,2]), 3);
print((function(a) { { let [[l, x],[m, y]] = a; (function() { x += y })(); return x } })([[0,1],[0,2]]), 3);
print((function(a) { { let [[l, x],[m, y]] = a; x += y; return (function() { return x; })() } })([[0,1],[0,2]]), 3);

print((function() { let x = 3; return (function() { return x })() })(), 3);
print((function() { let g = function() { return x }; let x = 3; return g() })(), 3);

print((function() { { let x = 3; return (function() { return x })() } })(), 3);
print((function() { { let x = 3; (function() { print(x, 3) })(); return x } })(), 3);
print((function() { { let x = 2; x = 3; return (function() { return x })() } })(), 3);
print((function() { { let x = 1; { let x = 3; (function() { print(x,3) })() } return x } })(), 1);

print((function() { try { throw 3 } catch (e) { (function(){print(e,3)})(); return e } })(), 3);
print((function() { try { throw 3 } catch (e) { print(e, 3); return (function() { return e; })() } })(), 3);
print((function() { try { throw 3 } catch (e) { (function(){eval('print(e,3)')})(); return e } })(), 3);

print((function() { var x; function f() { return x } function f() { return 3 }; return f() })(), 3);
print((function() { var x = 3; function f() { return 3 } function f() { return x }; return f() })(), 3);

print((function() { function f(x,y) { (function() { print(f.length, 2) })(); }; return f.length })(), 2);
print((function f(x,y) { (function() { print(f.length, 2) })(); return f.length})(), 2);
function f1(x,y) { (function() { print(f1.length, 2) })(); print(f1.length, 2) }; f1();

String(function([]) { eval('') });
