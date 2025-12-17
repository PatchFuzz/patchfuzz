var v11 = {};
Object.defineProperty(v11.__proto__, 0, {
  get: function() {
  },
  set: function() {
    try {
      WebAssembly.instantiate().then(
          () => print(),
          () => {  });
      v11[0] = 0;
    } catch (e) {
      print(e instanceof RangeError);
    }
  }
});
v66 = new Array();
cv = v66; cv[0] = 0.1; cv[2] = 0.2;
