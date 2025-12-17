var qe = 'object';

function g() {
  for (var i = 0; i < 10000; i++) typeof i === qe;
}

g();
