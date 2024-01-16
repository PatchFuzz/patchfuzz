













try { Array.prototype.unshift(1)  } catch($){}
try { Object.freeze(this.Array.prototype)()  } catch($){}
try { new String(1).split("")  } catch($){}
