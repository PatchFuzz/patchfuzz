

foo = "";

doit(`
  
  
  function u() { broken(
  
  
  
  
  
  
`);

gczeal(4);

doit("");

unescape(foo);

function doit(x) {
  try {
    evaluate(x);
  } catch (e) {
    if (e instanceof SyntaxError)
      doit(x);
  }
  try {
    x = x.replace(/!/g, "");
  } catch (e) {}
  foo += x + " ";
}
