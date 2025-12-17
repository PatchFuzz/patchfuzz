const l = 1000000000;
const a = [];
function foo() { var x = new Int32Array(l); }
try { foo(); } catch (e) { }
