














eval('g\\u0065t: break get')

try {
  
  eval('({ g\\u0065t a() {} })')
  assert(false);
} catch (e) {
  assert(e instanceof SyntaxError);
}


eval('({ g\\u0065t: 5 })')
