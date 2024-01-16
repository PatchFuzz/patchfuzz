



var Constr = function( ... property)  {};
Constr.prototype = [];
var c = new Constr();
c.push(5);
gc();
function enterFunc() {}
evaluate('enterFunc (c.length);');
