this.name = "outer";

var sb = evalcx('');
sb.name = "inner";
sb.parent = this;

var res = 0;

function f() {
    assertEq(this.name, "outer");
    res++;
}




evalcx('this.ff = function() {};' +
      '(function() { ' +
           'eval("");' +
           'for(var i=0; i<10; i++) {' +
               'ff();' +
               'if (i == 5) ff = parent.f;' +
           '}' +
      '})()', sb);
assertEq(res, 4);
