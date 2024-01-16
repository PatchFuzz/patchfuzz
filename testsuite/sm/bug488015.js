


var a = [];
function addEventListener(e, f, g)
{
  a.push(f);
}
function setTimeout(f, t)
{
  a.push(f);
}
var b;
this.document = {};
function e(w) {
  addEventListener("mousedown", d, true);
  function d() {
    var d;
    w.setTimeout(function() {
        b(d);
      }, 0);
  }
  function b(d){
    w.document;  
  }
}
e(this);
a[0]();
a[1]();
