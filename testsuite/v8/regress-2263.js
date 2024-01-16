


























assertThrows = function assertThrows(code, type_opt, cause_opt) {
  var threwException = true;
  try {
    if (typeof code === 'function') {
      code();
    } else {
      eval(code);
    }
    threwException = false;
  } catch (e) {
    if (typeof type_opt === 'function') {
      assertInstanceof(e, type_opt);
    } else if (type_opt !== void 0) {
      failWithMessage("invalid use of assertThrows, maybe you want assertThrowsEquals");
    }
    if (arguments.length >= 3) {
      assertEquals(e.type, cause_opt);
    }
    
    return;
  }
  failWithMessage("Did not throw exception");
};

var obj = { length: { valueOf: function(){ throw { type: "length" }}}};
var sep = { toString: function(){ throw { type: "toString" }}};
assertThrows("Array.prototype.join.call(obj, sep)", undefined, "length");
