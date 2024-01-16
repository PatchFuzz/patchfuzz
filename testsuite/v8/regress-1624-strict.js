





























"use strict";
var evil = eval;



var no_touch = 0;
eval('"use strict"; var no_touch = 1;');
assertSame(0, no_touch);



var no_touch = 0;
evil('"use strict"; var no_touch = 2;');
assertSame(0, no_touch);



var no_touch = 0;
eval('var no_touch = 3;');
assertSame(0, no_touch);



var no_touch = 0;
evil('var no_touch = 4;');
assertSame(4, no_touch);



var no_touch = 0;
(function() {
  var no_touch = 0;
  eval('"use strict"; var no_touch = 5;');
  assertSame(0, no_touch);
})()
assertSame(0, no_touch);



var no_touch = 0;
(function() {
  var no_touch = 0;
  evil('"use strict"; var no_touch = 6;');
  assertSame(0, no_touch);
})()
assertSame(0, no_touch);



var no_touch = 0;
(function() {
  var no_touch = 0;
  eval('var no_touch = 7;');
  assertSame(0, no_touch);
})()
assertSame(0, no_touch);



var no_touch = 0;
(function() {
  var no_touch = 0;
  evil('var no_touch = 8;');
  assertSame(0, no_touch);
})()
assertSame(8, no_touch);



var no_touch = 0;
(function() {
  "use strict";
  var no_touch = 0;
  eval('"use strict"; var no_touch = 9;');
  assertSame(0, no_touch);
})()
assertSame(0, no_touch);



var no_touch = 0;
(function() {
  "use strict";
  var no_touch = 0;
  evil('"use strict"; var no_touch = 10;');
  assertSame(0, no_touch);
})()
assertSame(0, no_touch);



var no_touch = 0;
(function() {
  "use strict";
  var no_touch = 0;
  eval('var no_touch = 11;');
  assertSame(0, no_touch);
})()
assertSame(0, no_touch);



var no_touch = 0;
(function() {
  "use strict";
  var no_touch = 0;
  evil('var no_touch = 12;');
  assertSame(0, no_touch);
})()
assertSame(12, no_touch);
