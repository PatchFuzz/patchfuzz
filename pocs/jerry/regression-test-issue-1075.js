try { new (RegExp)().$()  } catch($){}
try { RegExp.prototype.compile()  } catch($){}
try { new (this.$)(1, RegExp.prototype.compile(RegExp.prototype))  } catch($){}
