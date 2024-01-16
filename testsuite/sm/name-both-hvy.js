actual = '';
expected = '';



function q() {
}

function f() {
  var j = 12;

  function g() {
    eval(""); 
    for (var i = 0; i < 3; ++i) {
      j;
    }
  }

  j = 13;
  q(g);  
  g();
  j = 14;
}

f();


assertEq(actual, expected)
