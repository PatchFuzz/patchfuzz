



var o = { x: 0 };
delete o.x;
function store(o, p, v) { o[p] = v; }
store(o, "x", 1);
store(o, "x", 1);
store(o, "0", 1);
