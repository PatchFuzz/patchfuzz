function f(x) {
  if (x >= 0) {
    
    return (((x >>> 1) + 1) * 4194304  + 1) & 1;
  }
  return 2;
}
 
print(f(-1 >>> 1), 1);
print(f(-1 >>> 0), 0);
print(f(-1 >>> 0), 0);
