




function foo(x, y, z) {
  return x - y / z; 
}

var a = [...[123], ...[45.01, 6789], 23.58];



foo(...a);
foo(...[123], ...[45.01, 6789], 23.58);
foo(123, 45.01, 6789, 23.58);

WScript.Echo('PASS');