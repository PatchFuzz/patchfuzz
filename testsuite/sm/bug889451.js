
 
function f(x) {
  if (x >= 0) {
    
    return (((x >>> 1) + 1) * 4194304  + 1) & 1;
  }
  return 2;
}
 
assertEq(f(-1 >>> 1), 1);
assertEq(f(-1 >>> 0), 0);
assertEq(f(-1 >>> 0), 0);
