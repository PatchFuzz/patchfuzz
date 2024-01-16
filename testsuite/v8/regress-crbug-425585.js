



























var correct_result = "This is the correct result.";

function foo(recursion_depth) {
   if (recursion_depth > 0) return foo(recursion_depth - 1);
   return new String(correct_result, 1, 2, 3, 4, 5, 6);
}


function test(i) {
   var actual = foo(i);
   if (correct_result != actual) {
     var msg = "Expected \"" + correct_result + "\", found " + actual;
     throw new MjsUnitAssertionError(msg);
   }
}

test(1);
test(1);
test(10);
test(100);
