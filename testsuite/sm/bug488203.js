




var d = {
  p: function () {
         for (var i = 0; i < 9; ++i);
         with (d) { q(); }
     }
};
d.q = function() { eval('this.p()'); }
d.p();
