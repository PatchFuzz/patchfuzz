


function q() { ++i; }
var i = 0;
Object.freeze(this);
q();
q();
