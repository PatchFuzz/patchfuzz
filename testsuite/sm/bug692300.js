



var x = newGlobal().Date;
var OBJ = new MyObject( new x(0) );
try { eval("OBJ.valueOf()"); } catch(exc1) {}
function MyObject( value ) {
  this.valueOf = x.prototype.valueOf;
}
