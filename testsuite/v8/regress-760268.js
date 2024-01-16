



var obj = this;
var handler = {
  has: function() { return false; }
}
var proxy = new Proxy(obj, handler);
Object.defineProperty(obj, "nonconf", {});
assertThrows("'nonconf' in proxy");
