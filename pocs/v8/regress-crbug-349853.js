var a = ["string"];
function funky(array) { return array[0] = 1; }
funky(a);

function crash() {
  var q = [0];
  
  for (var i = 0; i < 100000; i++) {
    funky(q);
  }
  q[0] = 0;
  funky(q)
}

crash();
