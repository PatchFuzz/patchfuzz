function foo(arg){
  const x = 0;
  eval("var arg, x;");
}
print(foo, SyntaxError);
