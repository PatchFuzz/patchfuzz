function testcase({}, a = b, ... x)  {
  "use strict";
  function f() { };
  with ( f(3) );
}
