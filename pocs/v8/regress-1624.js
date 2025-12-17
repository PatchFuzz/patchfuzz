var evil = eval;



var no_touch = 0;
eval('"use strict"; var no_touch = 1;');
print(0, no_touch);



var no_touch = 0;
evil('"use strict"; var no_touch = 2;');
print(0, no_touch);



var no_touch = 0;
eval('var no_touch = 3;');
print(3, no_touch);



var no_touch = 0;
evil('var no_touch = 4;');
print(4, no_touch);



var no_touch = 0;
(function() {
  var no_touch = 0;
  eval('"use strict"; var no_touch = 5;');
  print(0, no_touch);
})()
print(0, no_touch);



var no_touch = 0;
(function() {
  var no_touch = 0;
  evil('"use strict"; var no_touch = 6;');
  print(0, no_touch);
})()
print(0, no_touch);



var no_touch = 0;
(function() {
  var no_touch = 0;
  eval('var no_touch = 7;');
  print(7, no_touch);
})()
print(0, no_touch);



var no_touch = 0;
(function() {
  var no_touch = 0;
  evil('var no_touch = 8;');
  print(0, no_touch);
})()
print(8, no_touch);



var no_touch = 0;
(function() {
  "use strict";
  var no_touch = 0;
  eval('"use strict"; var no_touch = 9;');
  print(0, no_touch);
})()
print(0, no_touch);



var no_touch = 0;
(function() {
  "use strict";
  var no_touch = 0;
  evil('"use strict"; var no_touch = 10;');
  print(0, no_touch);
})()
print(0, no_touch);



var no_touch = 0;
(function() {
  "use strict";
  var no_touch = 0;
  eval('var no_touch = 11;');
  print(0, no_touch);
})()
print(0, no_touch);



var no_touch = 0;
(function() {
  "use strict";
  var no_touch = 0;
  evil('var no_touch = 12;');
  print(0, no_touch);
})()
print(12, no_touch);
