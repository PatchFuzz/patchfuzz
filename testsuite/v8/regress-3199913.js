





























var y = {
  'a' : function (x, y) { return 'called a(' + x + ', ' + y + ')' },
  'b' : function (x, y) { return 'called b(' + x + ', ' + y + ')' }
}

function C() {
}

C.prototype.f = function () {
  return y[(this.a == 1 ? "a" : "b")](0, 1);
}

obj = new C()
assertEquals('called b(0, 1)', obj.f())
