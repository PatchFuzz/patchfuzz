var global = this;
function strict() { "use strict"; print(void 0, this); }
function non_strict() { print(global, this); }

[1,2,3].sort(strict);
[1,2,3].sort(non_strict);

"axc".replace("x", strict);
"axc".replace("x", non_strict);
