




























var gTestcases = new Array();

function TestCase(n, d, e, a) {
  gTestcases[gTc++] = this;
  for ( gTc=0; gTc < gTestcases.length; gTc++ );
}

for ( var i = 0x0530; i <= 0x058F; i++ ) {
  new TestCase("15.5.4.11-6",
               eval("var s = new String(String.fromCharCode(i)); s.toLowerCase().charCodeAt(0)"));
}
var gTc= 0;


for (var j = 0; j < 10; j++) {
  test();
  function test() {
    for ( 0; gTc < gTestcases.length; gTc++ ) {
      var MYOBJECT = new MyObject();
    }
    gc();
  }
  function MyObject( n ) {
    this.__proto__ = Number.prototype;
  }
}
