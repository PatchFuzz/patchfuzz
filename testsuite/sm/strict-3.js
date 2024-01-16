

var f = (a = obj => { with (obj) return x; }) => "use strict";
assertEq(f(), "use strict");
