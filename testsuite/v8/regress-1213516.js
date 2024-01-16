


























function run() {
 var a = 0;
 L: try {
   throw "x";
 } catch(x) {
   break L;
 } finally {
   a = 1;
 }
 assertEquals(1, a);
}

run();
