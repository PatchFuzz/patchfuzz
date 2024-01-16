



function module() {
    "use asm";
    function foo() {
      do ; while (foo ? 0 : 1) ;
      return -1 > 0 ? -1 : 0;
    }
    return foo;
}

var foo = module();
assertEquals(0, foo());
assertEquals(0, foo());
