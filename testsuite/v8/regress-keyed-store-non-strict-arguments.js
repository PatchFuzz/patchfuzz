



function args(arg) { return arguments; }
var a = args(false);

(function () {
  "use strict";
  a["const" + 0] = 0;
})();

(function () {
  "use strict";
  a[0] = 0;
})();
