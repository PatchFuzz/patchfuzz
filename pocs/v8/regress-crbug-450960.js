"a".replace(/a/g, "");

var count = 0;
function test() {
   try {
     test();
   } catch(e) {
     if (count < 50) {
       count++;
       "b".replace(/(b)/g, new []);
     }
   }
}

try {
  test();
} catch (e) {
}
