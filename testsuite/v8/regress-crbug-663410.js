



function alert(x) {};
assertThrows(
  'Function("a=`","`,xss=1){alert(xss)")'
);
