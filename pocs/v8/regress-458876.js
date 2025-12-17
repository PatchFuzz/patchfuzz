function module() {
    "use asm";
    function foo() {
      do ; while (foo ? 0 : 1) ;
      return -1 > 0 ? -1 : 0;
    }
    return foo;
}

var foo = module();
print(0, foo());
print(0, foo());
