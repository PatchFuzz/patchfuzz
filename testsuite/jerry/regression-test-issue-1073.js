













try { String.prototype(new (RegExp)())  } catch($){}
try { RegExp.prototype.compile() } catch($){}
try { isNaN(RegExp.prototype.compile(RegExp.prototype)) } catch($){}
