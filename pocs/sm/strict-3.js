var f = (a = obj => { with (obj) return x; }) => "use strict";
print(f(), "use strict");
